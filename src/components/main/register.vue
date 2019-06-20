<template>
  <div class="main">
    <p class="huanying">欢迎注册</p>
    <p></p>
    <form>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="text" placeholder="请输入密码" v-model="password">
      <input type="text" placeholder="请输入手机号码" v-model="usertel">

      <p>
        <button class="btn" @click="register"></button>
      </p>
    </form>
   <button v-fileUpload="setInputFile">选择头像</button>
    <img :src="url" alt="" style="width:35px;height:35px">

  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import Store from "storejs";
export default {
  data() {
    return {
      url:"",
      username: "",
      password: "",
      usertel: "",
      setInputFile: {
        fn: "fileUpload",
        multiple: false //设置是否多张上传
      }
    };
  },
  mounted() {
    this.userInfo = Store.get("userInfo");
    console.log(this.userInfo);
  },
  methods: {
     fileUpload(url){
      //  console.log(url);
     this.url=url
    },
    register() {
      var data = {
        username: this.username,
        password: this.password,
        usertel: this.usertel,
        imgs:this.url
      };
      this.$apis.register(data).then(res => {
        if (res.data.code == 1) {
          // Store.set('userInfo',res.data.data)
          MessageBox("注册成功!");
          this.$router.push({
            path: "/my"
          });
        }else{
           MessageBox("用户名已存在!请重新输入");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
.main {
  width: 100%;
  background: rgba(54, 209, 220, 1);
  height: r(800);
  form {
    text-align: center;
    input {
      border-radius: r(8) r(8);
      margin-top: r(15);
      border: none;
      background: #e8f0fe;
      outline: none; // 去除选中状态边框
      caret-color: #000000; /*光标颜色*/
      color: #000000; /*输入文字、光标颜色*/
      -webkit-text-fill-color: #000000; /*输入文字、placeholder颜色*/
      height: r(35);
      line-height: r(35);
      width: r(250);
    }
    .btn {
      outline: none; // 去除选中状态边框;
      border: none;
      position: absolute;
      width: r(40);
      height: r(40);
      line-height: r(40);
      text-align: center;
      right: r(40);
      top: r(220);
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
  .huanying {
    color: #fff;
    font-size: r(18);
    text-align: center;
    padding-top: r(20);
  }
}
</style>


