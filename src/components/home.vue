<template>
  <div>
   
    
        <router-view></router-view>

      
                                                    

         <!-- <footers v-show="!($route.path=='/show'||($route.path=='/my'&&this.userInfo==undefined))"></footers> -->
         <footers v-show="!($route.path=='/show'||$route.path=='/register')"></footers>
  </div>
</template>

<script>
import Store from "storejs";
import footers from '@/components/layout/footer'
export default {
  data () {
    return {
      userInfo:[]
    }
  },
  mounted(){
   this.userInfo=Store.get("userInfo")
   console.log(this.userInfo);
      this.$store.commit("vuexInit");
  },
  components:{
    footers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    body{
      display: flex;
      .footer{
        height: r(42)

      }
      & :nth-child(1){
        flex: 1

      }

    }

</style>

