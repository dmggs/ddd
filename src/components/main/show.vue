<template>
  <div id="show">
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img class="imgs" v-lazy="item">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="title">
      <p>{{infoList.Name}}</p>
      <div class="new" v-show="infoList.Ename=='-'">新</div>
    </div>
    <div class="xiangqing">
      <p>
        <span>甜度</span>

        <img
          class="img"
          :src="`https://res.bestcake.com/m-images/ww/jz/tiandu_${infoList.CakeType[0].Sweet||1}.png`"
          v-if="infoList.Brand=='卡思客'"
        >
        <img
          class="img"
          :src="`https://res.bestcake.com/m-images/ww/jz/tiandu_${infoList.Sweet||1}.png`"
          v-if="!(infoList.Brand=='卡思客')"
        >
      </p>
      <p>
        <span>口味</span>
        <span>{{infoList.CategoryName}}</span>
      </p>
      <p>
        <span>原材料</span>
        <span>{{infoList.Resourse||infoList.Resource}}</span>
      </p>
      <p>
        <span>适合人群</span>
        <span>所有人群</span>
      </p>
      <p>
        <span>保鲜条件</span>
        <span>{{infoList.KeepFresh||'最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月30日建议3天内食用。'}}</span>
      </p>
    </div>
    <div class="pingjia">
      <img src="https://res.bestcake.com/m-images/ww/detail/evaluate-a.png">
      <span>商品评价</span>
    </div>
    <!-- <-商品评价>-- -->

    <!--1.女神系列-->
    <div class="guige" v-show="infoList.Brand=='女神系列'">
      <div class="guige-select">{{infoList.Size}}</div>
      <div class="guige-list" v-show="!(infoList.Brand=='乳品系列')">
        <p>
          <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112">
          <span>14.5cm*14cm</span>
        </p>
        <p>
          <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png">
          <span>适合4-5人分享</span>
        </p>
        <p>
          <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
          <span>含五人份餐具</span>
        </p>
        <p>
          <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
          <span>至少需提前一天预约</span>
        </p>
      </div>
    </div>
    <!--卡思客系列-->
    <div class="guige2" v-show="infoList.Brand=='卡思客'">
      <div class="div1">
        <span
          class="activetab"
          v-for="(item,index) in infoList.CakeType"
          :key="index"
          @click="setTab(index)"
          :class="activeindex==index?'active2':''"
        >{{item.Size}}</span>
      </div>
      <div class="div2">
        <div class="guige-list" v-show="activeindex==0">
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112">
            <span>13.5*13.5cm</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png">
            <span>适合4-5人分享</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
            <span>含五人份餐具</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
            <span>至少需提前一天预约</span>
          </p>
        </div>
        <div class="guige-list" v-show="activeindex==1">
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112">
            <span>17cm*17cm</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png">
            <span>适合8-10人分享</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
            <span>含十人份餐具</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
            <span>至少需提前一天预约</span>
          </p>
        </div>
        <div class="guige-list" v-show="activeindex==2">
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112">
            <span>21cm*21cm</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png">
            <span>适合12-15人分享</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
            <span>含十五人份餐具</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
            <span>至少需提前一天预约</span>
          </p>
        </div>
        <div class="guige-list" v-show="activeindex==3">
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112">
            <span>27*40.5cm</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png">
            <span>适合35-40人分享</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
            <span>含四十人份餐具</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
            <span>至少需提前一天预约</span>
          </p>
        </div>
      </div>
    </div>
    <!--3."极致蛋糕"-->
    <div class="guige2" v-show="infoList.Brand=='极致蛋糕'">
      <div class="div1">
        <span
          class="activetab"
          v-for="(item,index) in infoList.CakeType"
          :key="index"
          @click="setTab(index)"
          :class="activeindex==index?'active2':''"
        >{{item.KW}}</span>
      </div>
      <div class="div2">
        <div class="guige-list" v-show="activeindex==0">
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112">
            <span>13.5*13.5cm</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png">
            <span>适合4-5人分享</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
            <span>含五人份餐具</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
            <span>至少需提前一天预约</span>
          </p>
        </div>
        <div class="guige-list" v-show="activeindex==1">
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112">
            <span>17cm*17cm</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png">
            <span>适合8-10人分享</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
            <span>含十人份餐具</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
            <span>至少需提前一天预约</span>
          </p>
        </div>
        <div class="guige-list" v-show="activeindex==2">
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112">
            <span>21cm*21cm</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png">
            <span>适合12-15人分享</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
            <span>含十五人份餐具</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
            <span>至少需提前一天预约</span>
          </p>
        </div>
        <div class="guige-list" v-show="activeindex==3">
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112">
            <span>27*40.5cm</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png">
            <span>适合35-40人分享</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
            <span>含四十人份餐具</span>
          </p>
          <p>
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
            <span>至少需提前一天预约</span>
          </p>
        </div>
      </div>
    </div>
    <!--4.乳品系列-->
    <div class="guige2" v-show="infoList.Brand=='乳品系列'">
      <div class="div1">
        <span
          class="activetab"
          v-for="(item,index) in iee"
          :key="index"
          @click="setTab(index)"
          :class="activeindex==index?'active2':''"
        >{{item.Size}}</span>
      </div>
    </div>

    <div class="goumai">
      <div class="gm1">购买数量</div>
      <div class="gm2">
        <span @click="del">-</span>
        <span class="shuliang">{{num}}</span>
        <span @click="add">+</span>
      </div>
    </div>
    <gonggao></gonggao>
    <!-- 购买 -->
    <div class="jiage">
      <div class="price-a">
        <!-- 卡思客购买 -->
        <div
          class="CurrentPrice"
          v-for="(item,index) in infoList.CakeType"
          :key="index"
          v-show="activeindex==index&&infoList.Brand=='卡思客'"
        >{{item.CurrentPrice*num}}.00</div>
        <div
          class="CurrentPrice"
          v-for="(item,index) in iee"
          v-show="activeindex==index&&infoList.Brand=='极致蛋糕'"
        >{{item.CurrentPrice*num}}</div>
        <div>
          <!-- 女神系列 -->
          <div class="CurrentPrice" v-show="infoList.Brand=='女神系列'">{{infoList.CurrentPrice*num}}.00</div>
          <!-- 乳品系列购买 -->
          <div
            class="CurrentPrice"
            v-for="(item,index) in iee"
            :key="index"
            v-show="activeindex==index&&infoList.Brand=='乳品系列'"
          >{{item.CurrentPrice*num}}.00</div>

          <span>已优惠:</span>
          <span>0.00</span>
        </div>
      </div>
      <div class="price-b">
        <span class="price-b-s1" @click="gwc">加入购物车</span>
      </div>
      <div class="price-c">
        <span class="price-c-s2">立即购买</span>
      </div>
    </div>

    <div class="more" @click="gengduo">更多商品</div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  name: "HelloWorld",
  data() {
    return {
      bannerList: [],
      infoList: {},
      activeindex: 0,
      active: "tab-container1",
      num: 1,
      iee: []
    };
  },
  mounted() {
    this.pageInit();
    // console.log(this.$route.query);
  },
  methods: {
    gwc() {
      // MessageBox({
      //   title: "成功加入购物车",
      //   message: "是否立即查看?",
      //   showCancelButton: true
      // }).then(action => {
      //   this.$router.push({
      //     path: "/cart"
      //   });
      // });
      MessageBox.confirm("", {
        message: "是否立即查看？",
        title: "成功加入购物车",
        confirmButtonText: "确定",
        cancelButtonText: "再逛逛"
      })
        .then(action => {
          if (action == "confirm") {
            //确认的回调
            this.$router.push({
              path: "/cart"
            });
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
          }
        });

      //1女神系列  2卡思客   3.乳品系列
      console.log(this.iee);
      console.log(this.activeindex);

      var data = {
        Brand: this.infoList.Brand,
        id: this.iee[this.activeindex].ID || this.iee[this.activeindex].Id,
        name: this.iee[this.activeindex].Name,
        num: this.num,
        ename: "",
        price: this.iee[this.activeindex].CurrentPrice,
        size: this.iee[this.activeindex].Size,
        url: this.bannerList[0],
         bool:false
      };
      this.$store.commit("add", data);
    },
    gengduo() {
      this.$router.push({
        path: "/list"
      });
    },
    add() {
      this.num++;
    },
    del() {
      this.num--;
      if (this.num <= 1) {
        this.num = 1;
      }
    },
    setTab(index) {
      this.activeindex = index;
    },

    pageInit() {
      //初始化执行
      if (this.$route.query.c == "ns" || this.$route.query.c == "女神系列") {
        //广告详情页接口
        this.GetNSCakeByName(res => {
          res.forEach(el => {
            if (el.City == "上海") {
              this.infoList = el;
              this.iee.push(el);
            }
          });
          console.log(this.infoList);
        });
        this.setBannerList("ns-detail");
      } else if (this.$route.query.c == "乳品系列") {
        //乳品详情页接口
        this.GetRuPCakeByName(res => {
          console.log(res);
          res.forEach(el => {
            if (el.City == "上海") {
              this.iee.push(el);
              this.infoList = el;
            }
          });
          console.log(this.iee);
          console.log(this.infoList);
        });
        this.setBannerList("rp-detail");
      } else if (this.$route.query.c == "极致蛋糕") {
        this.setBannerList("jz-detail");
        this.GetjzCakeInfo(res => {
          this.infoList = res[0];
          console.log(res);
          this.iee = res;
          console.log(this.infoList);
        });
      } else {
        this.setBannerList("jd-detail");
        //其他详情页接口
        this.GetCakeByName(res => {
          this.infoList = res.infos;
          this.iee = res.infos.CakeType;
          console.log(this.infoList);
        });
      }
    },
    GetNSCakeByName(callback) {
      //广告详情页接口
      var data = {
        Name: this.$route.query.key
      };
      this.$apis.GetNSCakeByName(data).then(res => {
        callback(res.data.Tag);
      });
    },
    //其他详情页接口
    GetCakeByName(callback) {
      var data = {
        ProName: this.$route.query.key
      };
      this.$apis.GetCakeByName(data).then(res => {
        callback(res.data.Tag);
        // this.infoList=res.data.Tag.infos
      });
    },
    //乳品详情页接口
    GetRuPCakeByName(callback) {
      var data = {
        Name: this.$route.query.key
      };
      this.$apis.GetRuPCakeByName(data).then(res => {
        callback(res.data.Tag);
        // this.infoList=res.data.Tag.infos
      });
    },
    GetjzCakeInfo(callback) {
      var data = {
        ProName: this.$route.query.key
      };
      this.$apis.GetjzCakeInfo(data).then(res => {
        callback(res.data.Tag);
        // this.infoList=res.data.Tag.infos
      });
    },
    setBannerList(path) {
      for (var i = 0; i < 4; i++) {
        var str = `https://res.bestcake.com/m-images/${path}/${
          this.$route.query.key
        }/${this.$route.query.key}-${i + 1}.jpg?v=20170525?v=1`;
        this.bannerList.push(str);
      }
      // console.log(this.bannerList);
    }
  }
};
</script>

 <style scoped lang="scss">
#show {
  .swipe {
    width: 100%;
    height: r(380);
    img {
      width: 100%;
      height: 100%;
    }
    margin-top: r(50);
  }
  .title {
    margin-top: r(40);
    border-bottom: r(12) solid #f7f7f7;
    text-align: center;
    p {
      text-align: center;
      font-size: r(15);
      font-weight: bolder;
      color: #333;
    }
    .new {
      width: r(25);
      height: r(25);
      background: #f2495e;
      text-align: center;
      color: #fff;
      line-height: r(25);
      display: inline-block;
      margin-top: r(10);
    }
  }
  .xiangqing {
    border-bottom: r(12) solid #f7f7f7;
    padding: r(20) 0;
    p {
      display: flex;
      .img {
        width: r(71) !important;
        height: r(13);
        margin-top: r(9);
      }
      & :nth-child(1) {
        color: #9a9a9a;
        margin-left: r(12);
        width: r(51);
        margin-top: r(9);
      }
      & :nth-child(2) {
        width: r(230);
        margin-left: r(12);
        margin-top: r(9);
      }
    }
  }
  .pingjia {
    display: flex;
    border-bottom: r(12) solid #f7f7f7;
    padding: r(12) 0;
    width: 100%;
    height: r(20);
    img {
      width: r(17);
      height: r(14);
      padding-left: r(10);
    }
    span {
      padding-left: r(20);
    }
  }
  .guige {
    border-bottom: r(12) solid #f7f7f7;
    padding: r(12) 0;
    .guige-select {
      margin-top: r(30);
      margin-left: r(10);
      width: r(51);
      height: r(25);
      background: #02d3d6;
      color: #fff;
      border-radius: r(3);
      text-align: center;
      line-height: r(25);
    }
    .guige-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: r(30);

      p {
        width: r(160) !important;
        margin-top: r(8);
        span {
          padding-left: r(2);
          text-align: center;
          line-height: r(30);
          display: inline-block;
        }
      }
      img {
        width: r(19);
        height: r(19);
        margin-left: r(10);
        display: inline-block;
        line-height: r(25);
      }
    }
  }
  .guige2 {
    border-bottom: r(12) solid #f7f7f7;
    padding: r(12) 0;
    .div1 {
      display: flex;
      .active2 {
        background: #02d3d6;
        color: #fff;
      }
      .activetab {
        margin-top: r(30);
        margin-left: r(15);
        width: r(51);
        height: r(25);

        border: r(1) solid #cccccc;
        border-radius: r(3);
        text-align: center;
        line-height: r(25);
      }
    }
    .div2 {
      .guige-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: r(30);

        p {
          width: r(160);
          margin-top: r(8);
          span {
            padding-left: r(2);
            text-align: center;
            line-height: r(30);
            display: inline-block;
          }
        }
        img {
          width: r(19);
          height: r(19);
          margin-left: r(10);
          display: inline-block;
          line-height: r(25);
        }
      }
    }
  }
  .goumai {
    border-bottom: r(12) solid #f7f7f7;

    display: flex;
    justify-content: space-between;

    .gm1 {
      margin-left: r(20);
      height: r(25);
      line-height: r(25);
    }
    .gm2 {
      margin-right: r(20);
      height: r(30);
      line-height: r(30);
      span {
        padding: r(5) r(5);
      }
    }
  }
  .jiage {
    width: 100%;
    height: r(46);
    position: fixed;
    bottom: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    .price-a {
      margin-left: r(15);
      .CurrentPrice {
        margin-top: r(8);
        color: #f2495e;
        font-weight: bolder;
      }
    }
    .price-b {
      .price-b-s1 {
        line-height: r(46);
        text-align: center;
        font-size: r(15);
        font-weight: bolder;
      }
    }
    .price-c {
      background: #02d3d6;
      width: r(98);
      text-align: center;

      span {
        text-align: center;
        line-height: r(46);
        font-size: r(15);
        font-weight: bolder;
        color: white;
      }
    }
  }
  .more {
    width: r(70);
    height: r(28);
    border: r(1) solid #000;
    border-right: none;
    position: fixed;
    top: r(10);
    right: 0;
    line-height: r(28);
    text-align: center;
    font-weight: bolder;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .jg-gonggao {
    margin-top: r(20);
    margin-bottom: r(60);
  }
}
</style>


