<template>
  <div class="main">
    <p class="huanying">欢迎注册</p>
    <p></p>
    <form>
      <input type="text" placeholder="请输入用户名">
      <input type="text"  placeholder="请输入真实姓名" >
      <input type="text" placeholder="请输入密码">
      <input type="text" placeholder="请输入手机号码">
      <input type="raious">
      <input type="text">
    </form>
  </div>
</template>

<script>
import Store from "storejs";
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  mounted() {
    this.userInfo = Store.get("userInfo");
    console.log(this.userInfo);
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
.main {
  width: 100%;
  background: rgba(54, 209, 220, 1);
  height: r(800);
 form{
     text-align: center;
     input{
         border: none;
         background: none;
     }
 }
  .huanying {
    color: #fff;
    font-size: r(18);
    text-align: center;
  }
}
</style>


