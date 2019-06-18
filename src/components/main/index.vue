<template>
  <div id="app">
    <div class="main">
      <div>
        <mt-swipe :auto="4000" id="banner">
          <mt-swipe-item v-for="(item,index) in datas" :key="index">
            <img v-lazy="'https://res.bestcake.com'+item.ImgUrl" alt="item.Title">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="banner-icon">
        <div class="icons" v-for="(item,index) in bnanerIcon" :key="index">
          <a href>
            <div>
              <img :src="item.ImgUrl">
            </div>
          </a>
          <div class="icon-img">
            <div>{{item.ActName}}</div>
          </div>
        </div>
      </div>
      <div class="guangao">
        <div v-for="(item,index) in icoImgList" :key="index">
          <img v-lazy="item.ImgUrl" @click="toShow(item.key,'ns')">
        </div>
      </div>
      <div class="special">
        <img src="https://res.bestcake.com/m-images-2/mofa.png" class="img">
        <div class="div">任选一款，走进你的心</div>
      </div>
      <div class="mofa-tab">
        <div class="tab-active">
          <span
            v-for="(item,index) in tabClass"
            :key="index"
            @click="setTab(index)"
            :class="index===tabActive? 'activess':''"
          >{{item}}</span>
        </div>

        <ul>
          <li v-for="(item,index) in activeList" :key="index">
            <img :src="item.ImgUrl" @click="toShow(item.Name,item.Brand)">
            <p>{{item.Name}}</p>
            <span style="color:#ff3300">￥</span>
            <span style="color:#ff3300">{{item.CurrentPrice}}</span>
            <span style="color:#BCBCBC">/{{item.Size}}</span>
          </li>
        </ul>
      </div>
      <div class="special-title">
        <img src="https://res.bestcake.com/m-images-2/pinzhi.png" class="img">
        <div class="div">没尝过这些美味的人生，是不完美的</div>
        <div class="pinzhi">
          <div class="pinzhi-list" v-for="(item,index) in pinzhidata" :key="index">
            <div class="pinzhi-img">
              <img v-lazy="item.ImgUrl" @click="toShow(item.Name,item.Brand)">
            </div>
            <div class="pinzhi-detail">
              <div class="pinzhi-name">{{item.Name}}</div>
              <div class="pinzhi-info">{{item.MoreUrl|textLengthSet(12)}}</div>
              <div class="pinzhi-tip">
                <img
                  src="https://res.bestcake.com/m-images-2/icon_zy.png"
                  v-show="!(item.Brand=='乳品系列')"
                >
                <img
                  src="https://res.bestcake.com/m-images-2/icon_yx.png"
                  v-show="item.Brand=='乳品系列'"
                >
              </div>
              <div class="pinzhi-price">
                <span style="color:#ff3300">￥</span>
                <span style="color:#ff3300">{{item.CurrentPrice}}.00</span>
                <span style="color:#BCBCBC">/{{item.Size}}</span>
              </div>
            </div>
            <div class="pinzhi-cart">
              <img
                src="https://res.bestcake.com/m-images-2/pinzhi-cart.png"
                @click="gwc($event,item)"
              >
            </div>
          </div>
        </div>

        <gonggao></gonggao>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [],
      bnanerIcon: [],
      pinzhidata: [],
      magicdata: [],
      icoImgList: [
        {
          name: "宠爱少女",
          key: "宠爱少女",
          ImgUrl: "https://res.bestcake.com/m-images-2/guanggao1.png?v=0419"
        },
        {
          name: "小猪蛋糕-贝利",
          key: "贝丽",
          ImgUrl: "https://res.bestcake.com/m-images-2/guangao22.png?v=0419"
        },
        {
          name: "星光游乐园",
          key: "星光游乐园",
          ImgUrl: "https://res.bestcake.com/m-images-2/guanggao3.png"
        }
      ],
      tabClass: ["送恋人", "送挚友", "送长者", "送亲子"],
      activeList: [],
      tabActive: 0
    };
  },
  methods: {
    gwc(e, item) {
      fly(e, item.ImgUrl);
      var  data={
        id:item.Pid,
        name:item.Name,
        num:1,
        ename:'',
        price:item.CurrentPrice,
        size:item.Size,
        url:item.ImgUrl,
         Brand:item.Brand,
         bool:false
        
      }
      this.$store.commit("add", data);
    },
    toShow(key, c) {
      this.$router.push({
        path: "/show",
        query: { key, c }
      });
    },
    setTab(index) {
      var activeList = [];
      this.magicdata.forEach(item => {
        // console.log(item.ActiveName)
        if (this.tabClass[index] == item.ActiveName) {
          activeList.push(item);
        }
      });
      this.activeList = activeList.slice(0, 3);
      this.tabActive = index;
      // console.log(this.tabActive);
    },
    GetBannerList(callback) {
      var data = {
        v: "1559785164172",
        c: "Index",
        m: "GetBannerList",
        Type: "2",
        City: "上海"
      };
      this.$apis.GetBannerList(data).then(res => {
        callback(res.data.Tag.List);
      });
    },
    GetIndexCakeList(callback) {
      var GetIndexCakeList = {
        v: "1560085285695",
        c: "Index",
        m: "GetIndexCakeList"
      };
      this.$apis.GetIndexCakeList(GetIndexCakeList).then(res => {
        callback(res.data.Tag);
      });
    }
  },
  mounted() {
    this.GetBannerList(res => {
      this.datas = res;
    });
    this.GetIndexCakeList(res => {
      this.bnanerIcon = res.iconList;
      res.list.forEach(ele => {
        if (ele.TabType == 5) {
          this.pinzhidata.push(ele);
        } else {
          this.magicdata.push(ele);
        }
      });
      //  console.log(this.pinzhidata);
      this.setTab(0);
    });
  }
};
function fly(e, img) {
  
  var flyer = $(
    '<img class="flyer-img" style="width:50px;height:50px" src="' + img + '">'
  );

  var top = $(window).scrollTop();
  var dh = event.pageY;
  var newh = dh - top;
  //  购物车节点位置,决定图片飘的位置
  var oBtn = $(".cart").offset();
  var newdh = oBtn.top - top;

  flyer.fly({
    start: {
      left: event.pageX, //抛物体起点横坐标
      top: newh //抛物体起点纵坐标
    },
    end: {
      left: oBtn.left+180, //抛物体终点横坐标
      top: newdh //抛物体终点纵坐标
    },
    onEnd: function() {
      this.destory(); //销毁抛物体
    }
  });
}
</script>
 <style scoped lang="scss">
.jg-gonggao {
  margin-top: r(20);
  margin-bottom: r(60);
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: r(9);
  .main {
    flex: 1;
    .guangao {
      display: flex;
      border-bottom: r(8) solid #fafafa;
      margin-top: r(13);
      width: 100%;
      height: r(163);
      & :first-child {
        margin-left: r(7);
        img {
          width: r(144);
          height: r(128);
        }
      }
      & :nth-child(2) {
        img {
          width: r(144);
          height: r(62);
        }
      }
      & :nth-child(3) {
        position: relative;
        top: r(67);
        left: r(-150);

        img {
          width: r(144);
          height: r(62);
        }
      }
    }
    .mofa-tab {
      .tab-active {
        display: flex;
        justify-content: space-around;
        span {
          display: block;
          width: r(51);
          height: r(20);
          border: r(1) solid #ccc;
          text-align: center;
          line-height: r(20);
        }
      }
      ul {
        display: flex;
        justify-content: space-around;

        li {
          img {
            width: r(90);
            height: r(76);
          }
        }
      }
    }
    .special {
      margin-top: r(10);

      .img {
        width: 100%;
        height: r(15);
      }
      .div {
        margin-top: r(5);
        color: #999;
        text-align: center;
        font-size: r(10);
      }
    }
    .special-title {
      margin-top: r(20);
      .img {
        width: 100%;
        height: r(15);
      }
      .div {
        margin-top: r(5);
        color: #999;
        text-align: center;
        font-size: r(10);
      }
    }
    .pinzhi {
      .pinzhi-list {
        display: flex;
        justify-content: space-around;

        .pinzhi-img {
          img {
            width: r(93);
            height: r(93);
          }
        }
        .pinzhi-detail {
          width: r(160);
          height: r(88);
          margin-top: r(10);
          .pinzhi-name {
            color: #000;
            font-size: r(13);
            line-height: r(20);
          }
        }
        .pinzhi-info {
          font-size: r(10);
          color: #999;
          line-height: r(20);
        }
        .pinzhi-tip {
          img {
            width: r(26);
            height: r(15);
            margin-top: r(5);
          }
        }
        .pinzhi-cart {
          img {
            width: r(30);
            height: r(30);
            margin-top: r(65);
          }
        }
      }
    }

    overflow: auto;
  }
  .footer {
    width: 100%;
    height: r(42);
    background: pink;
    position: fixed;
    bottom: 0;
  }
}
#banner {
  width: 100%;
  height: r(162);
  img {
    width: 100%;
    height: 100%;
  }
}
.banner-icon {
  width: 100%;
  height: r(177);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;

  .icons {
    margin-top: r(16);
    width: r(75);
    height: r(63);
    a {
      text-align: center;
    }
    img {
      width: r(56);
      height: r(56);
    }
    .icon-img {
      text-align: center;
    }
  }
}
</style>





