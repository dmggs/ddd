<template>
  <div>
    <div class="my">
        <ul>
                    <li><span>头像</span> <img :src="userInfo.imgs"></li>
                    <li><span>昵称</span><span>{{userInfo.name}}</span></li>
                    <li><span>真实姓名</span>{{userInfo.name}}</span></li>
                    <li><span>性别</span><span>{{userInfo.sex}}</span></li>
                    <li><span>手机号</span><span>{{userInfo.tel}}</span></li>
                    <li>修改密码  </li>
        </ul>
        <p class="p" @click="tuichu">退出登陆</p>
    </div>
  </div>
</template>

<script>
import Store from "storejs";
import { MessageBox } from "mint-ui";
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
  methods: {
    tuichu(){
       MessageBox.confirm("", {
        message: "是否退出？",
       
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(action => {
          if (action == "confirm") {
            //确认的回调
            
          Store.remove('userInfo')
          
           
            this.$router.push({
              path:'/index'
            })
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
          }
        });

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
 
.my {
     
  .touxiang {
    text-align: center;
    margin-top: r(23);
    img {
      width: r(69);
      height: r(67);
    }
  }
  ul{
    
    
      li{
          height: r(56);
          line-height: r(56);
          padding: 0 r(15) 0 r(15);
          border-bottom: r(1) solid #cccccc;
          img{
              width: r(39);
              height: r(39);
              display: inline-block;
              margin-top: r(8);
          }
          display: flex;
            justify-content: space-between;
          span{
              text-align: center;
          }
      }
  }
  .p{
      margin-top:r(20);
      text-align: center;
      height: r(35);
      color: red;
      line-height: r(35);
   
  }
}
</style>


