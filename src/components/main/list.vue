<template>
  <div class="list-tabs">
    <ul>
      <li v-for="(item,index) in list" :key="index" @click="selectactive(index)" :class="listindex===index?'actives':''">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
     
    </ul>

     <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
     list:[
       {path:'/list/zy',name:'自营'},
         {path:'/list/bs',name:'贝式严选'}
     ],
     listindex:0
    }
  },
  methods: {
    selectactive(index){
      this.listindex=index

    }
  },
  mounted() {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
.list-tabs {
  width: 100%;
  height: r(41);
  ul {
    width: 100%;
    height: r(41);
    display: flex;

    li {
      width: 50%;
      text-align: center;
      line-height: r(41);
      font-size: r(14);
      a {
        display: inline-block;
        width: 100%;
        color: #000000;
      }
    }
  }
}
</style>


