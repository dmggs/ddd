<template>
  <div>
    <div class="my" v-if="loginNum==0">
      <div class="back"></div>
      <div class="mima">密码登陆</div>
      <form class="form">
        <input type="text" v-model="usename" class="usename" placeholder="账号:">
        <input type="password" v-model="password" class="password" placeholder="密码:">
        <p>
          <button class="btn" @click="denglu"></button>
        </p>
      
      </form>
        <div class="register" @click="register">没有账号?立即注册 </div>
    </div>
    <div v-if="loginNum==1" class="userinfo">
      <div class="up">
        <div class="touxiang">
          <img :src="userInfo.imgs" @click="toInfo">
          <p>{{userInfo.name}}</p>
        </div>
        <ul class="ul">
          <li>
            <span>会员等级</span>
            <span>V0</span>
          </li>
          <li>
            <span>吉致币</span>
            <span>0</span>
          </li>
          <li>
            <span>优惠券</span>
            <span>0</span>
          </li>
          <li>
            <span>兑换劵</span>
            <span>0</span>
          </li>
        </ul>
      </div>
      <div class="mid">
          <ul>
            <li>
              <img src="https://res.bestcake.com\m-images\order\mw-person-dd.png" alt=""><span>我的订单</span>
            </li>
            <li>
            <img src="https://res.bestcake.com\m-images\order\mw_firm_ad.jpg" alt=""> <span>收货地址</span>
            </li>
          </ul>
      </div>
      <div class="buttom">
              <p>客服热线：400-627-5757</p>
              <p>服务协议与证照信息</p>
      </div>
    </div>
  </div>
</template>

<script>
import Store from "storejs";
export default {
  data() {
    return {
      loginNum: 0,
      msg: "",
      usename: "",
      password: "",
      userInfo: {}
    };
  },
  mounted() {
    this.pageInit();
   
  

  },
  methods: {
    pageInit() {
      if (!Store.get("userInfo")) {
      
        this.loginNum = 0;
      } else {
         
        this.userInfo = Store.get("userInfo");
        this.loginNum = 1;
      }
    },
    denglu() {
      var data = {
        username: this.usename,
        password: this.password
      };

      this.$apis.mokeLogin(data).then(res => {
        console.log(res.data);

        if (res.data.code == 1) {
          this.userInfo = res.data.data;
          console.log(this.userInfo.name);
           Store.set("userInfo", res.data.data);
        } else if (res.data.code == 2) {
          alert(res.data.msg);
        } else {
          alert(res.data.msg);
        }
      });
      //  window.location.reload();
    },
    toInfo(){
      this.$router.push({
        path:'/useinfo'
      })
    },
    register(){
      this.$router.push({
        path:'/register'
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">

.userinfo {
  width: 100%;
  height: r(600);
  background: #f7f7f7;
  .up {
    background: #fff;
    .touxiang {
      text-align: center;
      padding-top: r(23);

      p {
        margin-top: r(5);
      }
      img {
        width: r(69);
        height: r(67);
      }
    }
    .ul {
      margin-top: r(10);
      padding-bottom: r(15);
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        span {
          text-align: center;
          font-size: r(12);
        }
        & :nth-child(1) {
          color: #ccc;
        }
      }
    }
  }
  .mid{
    margin-top: r(15);
    ul{
      li{
         padding-left: r(10);
        height: r(50);
        background: #fff;
        margin-top: r(2);
       
        img{
          width:r(12);
          height: r(16);
        
        }
        span{
             font-size: r(15);
              line-height: r(50);
                 padding-left: r(10);
        }
      }
    }
  }
  .buttom{
    padding-top: r(150);
    p{
      color: #999;
      text-align: center;
      margin-top: r(10)
    }
  }
}
.my {
  width: 100%;
  height: r(570);
  background: rgba(54, 209, 220, 1);

  .back {
    position: absolute;
    top: r(15);
    left: r(15);
    display: inline-block;
    width: r(10);
    height: r(10);

    margin: r(-6) 0 r(5);
    border-left: r(2) solid;
    border-bottom: r(2) solid;
    transform: rotate(45deg);
    color: #fff;
  }
  .mima {
    padding-left: r(20);
    padding-top: r(50);
    font-size: r(20);
    color: #fff;
  }
  .register{
    margin-top: r(20);
      padding-left: r(30);
      color: #fff;
  }
  .form {
    text-align: center;
    .usename,
    .password {
      //  border: r(1) solid  rgba(54,209,220,1);
      border: none;
      outline: none; // 去除选中状态边框
      height: r(35);

      width: r(265);
      background: rgba(54, 209, 220, 1);
      border-bottom: r(1) solid #fff;
      color: #fff; /*输入文字、光标颜色*/
      -webkit-text-fill-color: #fff; /*输入文字、placeholder颜色*/
      caret-color: #fff; /*光标颜色*/
      margin-top: r(15);
      margin-left: r(20);
    }
    .btn {
      outline: none; // 去除选中状态边框;
      border: none;
      position: absolute;
      width: r(40);
      height: r(40);
      line-height: r(40);
      text-align: center;
      right: r(20);
      top: r(200);
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      &:after {
        display: inline-block;
        content: "";
        border-top: r(2) solid #22aeb3;
        border-right: r(2) solid #22aeb3;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        width: 3.77vw;
        height: 3.77vw;
        left: 3.44835vw;
        position: absolute;
        top: 4.24835vw;
      }
    }
  }
}
</style>


