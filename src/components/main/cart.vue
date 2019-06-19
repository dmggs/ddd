<template>
  <div id="cart">
    <ul class="cart">
      <li v-for="(item,index) in $store.state.shopCart.list" :key="index" class="carts">
        <div class="top">
          <div class="left">
            <!-- <img src="https://res.bestcake.com/m-images/order/mw_firm_duihao_2.jpg"> -->
            <input type="checkbox" v-model="item.bool" @click="danxuan(index)">
          </div>
          <div class="right">
            <div class="right1">
              <img :src="item.url" @click="toShow(item.name,item.Brand)">
            </div>
            <div class="right2">
              <div class="item-name">{{item.name|textLengthSet(10)}}</div>
              <div class="right3">
                <div class="item-size">{{item.size}}</div>
                <div class="item-num">
                  <span @click="del(index)">-</span>
                  <span>{{item.num}}</span>
                  <span @click="add(index)">+</span>
                </div>
              </div>
              <div class="right4">
                <span>{{item.num*item.price}}.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="heng" v-show="!(index%2==0)"></div>
        <div class="botton">
          <p>
            <span>优惠方式</span>不参与活动
          </p>
        </div>
      </li>
    </ul>
    <div class="kong" v-show="$store.state.shopCart.list.length==0">购物车是空的哦!</div>
    <div class="rexiao">
      <h2>Hot Recommend</h2>
      <div class="gang"></div>
      <h6>热销新品推荐</h6>
      <div class="goods">
        <ul>
          <li v-for="(item,index) in goods" :key="index">
            <img :src="item.img" @click="toShow(item.Name,item.Brand)">
            <p>伴手礼系列-{{item.Name|textLengthSet(5)}}</p>
            <p>
              <span>{{item.price}}</span>/
              <span>{{item.size}}</span>
              <span>
                <img
                  style="width:17px;height:17px;margin-left:70px"
                  src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg"
                  @click=" gwc(item)"
                >
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="dibu">
      <div class="one">
        <input type="checkbox" v-model="bool" @click="quanxuan">
        <span>全选</span>
        <span @click="clear">清空</span>
      </div>
      <div class="two">
        合计:
        <span style="color:red;font-weight:bolder;">{{cunt}}</span>
        <div style="font-weight: bolder">已优惠:0.00</div>
      </div>
      <div class="three" @click="jiesuan">结算</div>
    </div>
  </div>
</template>

<script>
import Store from "storejs";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      heji: [],
      bool: false,
      jisuanindex: 0,
      goods: [
        {
          Name: "吉致生巧",
          img: "https://res.bestcake.com/m-images/cart/mw_firm_sq.jpg",
          price: "168",
          size: "1盒",
          Brand: "极致蛋糕",
          ID: 987
        },
        {
          Name: "吉致牛轧糖(巴旦木味)",
          img: "https://res.bestcake.com/m-images/cart/mw_firm_nzt_v1.jpg",
          price: "68",
          size: "16粒装",
          Brand: "极致蛋糕",
          ID: 925
        },
        {
          Name: "吉致泡芙",
          img: "https://res.bestcake.com/m-images/cart/mw_firm_pf_v1.jpg",
          price: "88",
          size: "0.8磅",
          Brand: "极致蛋糕",
          ID: 654
        }
      ],
      list: [],
      jiesuanlist: []
    };
  },
  methods: {
    jiesuan() {
      if (!Store.get("userInfo")) {
          this.$router.push({
            path:'/my'
          })
      } else {
        alert(2);
      }
    },
    jisuan(index) {
      this.jisuanindex = index;
    },
    toShow(key, c) {
      this.$router.push({
        path: "/show",
        query: { key, c }
      });
    },
    gwc(item) {
      MessageBox({ title: "加入购物车成功" });
      var data = {
        id: item.ID,
        name: item.Name,
        num: 1,
        ename: "",
        price: item.price,
        size: item.size,
        url: item.img,
        Brand: item.Brand,
         bool:false
      };
      this.$store.commit("add", data);
    },
    add(index) {
      var data = this.$store.state.shopCart.list[index];
      this.$store.commit("jia", data);
    },
    del(index) {
      var data = this.$store.state.shopCart.list[index];
      this.$store.commit("jian", data);
      // }
    },
    clear() {
      if (this.$store.state.shopCart.list.length > 0) {
        MessageBox.confirm("", {
          message: "是否清空购物车?",

          confirmButtonText: "确定",
          cancelButtonText: "取消"
        })
          .then(action => {
            if (action == "confirm") {
              //确认的回调
              this.$store.commit("clear");
            }
          })
          .catch(err => {
            if (err == "cancel") {
              //取消的回调
            }
          });
      }
    },
   
    danxuan(index) {
      var rel = [];
      if (this.$store.state.shopCart.list[index].bool) {
        this.$store.state.shopCart.list[index].bool = false;
      } else if (!this.$store.state.shopCart.list[index].bool) {
        this.$store.state.shopCart.list[index].bool = true;
      }
      this.$store.state.shopCart.list.forEach(res => {
        if (res.bool) {
          rel.push(res);
        }
      });
       this.heji=rel
         if(this.heji.length==this.$store.state.shopCart.list.length){
              this.bool=true
        }else {
          this.bool=false
        }
        
    },
    quanxuan() {
      this.$store.state.shopCart.list.forEach(res => {
        if (res.bool) {
          res.bool = false;
        } else if (res.bool == false) {
          res.bool = true;
        }
      });
        var rel = [];
      this.$store.state.shopCart.list.forEach(res => {
        if (res.bool) {
          rel.push(res);
        }
        this.heji=rel
      
      });
    },
   
  },
  mounted() {
    
  },
  computed: {
    cunt() {
      var p = 0;
      this.heji.forEach(element => {
        p += element.num * element.price;
      });
      return p;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
#cart {
  .cart {
    .carts {
      border-bottom: r(12) solid #f7f7f7;
      .heng {
        background: #ccc;
        width: r(270);
        height: r(1);
        margin-left: r(50);
      }
      .botton {
        padding: r(10) 0;
        padding-left: r(50);
        span {
          color: #f2495e;
          font-weight: bolder;
        }
      }
      .top {
        display: flex;
        .left {
          input {
            text-align: center;
            margin-top: r(50);
            margin-left: r(12);
          }
        }
        .right {
          display: flex;
          width: r(206);
          height: r(104);
          .right1 {
            img {
              width: r(97);
              height: r(92);
              margin-top: r(10);
              margin-left: r(12);
            }
          }
          .right2 {
            margin-left: r(10);
            .item-name {
              font-size: r(13);
              width: r(156);
              line-height: r(26);
              margin-top: r(10);
            }
            .right3 {
              display: flex;
              justify-content: space-between;
              .item-size {
                color: #ccc;
              }
              .item-num {
                font-size: r(15);
                span {
                  padding: r(2) r(5);
                }
              }
            }
            .right4 {
              font-size: r(13);
              font-weight: bolder;
              line-height: r(45);
            }
          }
        }
      }
    }
  }
  .kong {
    width: 100%;
    height: r(50);
    font-size: r(15);
    line-height: r(50);
    text-align: center;
  }
  .rexiao {
    background: #f7f7f7;
    padding: r(165) 0;
    h2,
    h6 {
      text-align: center;
      color: #333;
    }
    .gang {
      width: r(155);
      height: r(2);
      background: #000;
      margin-left: r(83);
      margin-top: r(2);
    }
    .goods {
      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          margin-left: r(12);
          img {
            width: r(140);
            height: r(140);
          }
        }
      }
    }
  }
  .dibu {
    position: fixed;
    bottom: r(40);
    display: flex;
    background: #fff;
    height: r(48);
    justify-content: space-between;
    width: 100%;
    .one {
      .img {
        width: r(17);
        height: r(17);

        margin-left: r(5);
      }
      span {
        line-height: r(48);
        padding: 0 r(5);
        font-size: r(13);
      }
    }
    .two {
      line-height: r(22);
    }
    .three {
      line-height: r(48);
      width: r(98);
      height: r(48);
      background: #02d4d7;
      color: #fff;
      font-weight: bolder;
      text-align: center;
      font-size: r(16);
    }
  }
}
</style>


