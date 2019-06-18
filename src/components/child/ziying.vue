<template>
  <div class="zy-list">
    <ul>
      <li v-for="(item,index) in list" :key="index" @click="selectactive(index)" :class="timeIndex === index ? 'active' : '' ">
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
  name: "HelloWorld",
  data() {
    return {
      timeIndex:0,
      list:[
        {path:'/list/zy/jd',name:'经典'},
        {path:'/list/zy/ns',name:'女神'},
        {path:'/list/zy/bsl',name:'伴手礼'}
        ]
    }
    
  },
  methods: {
      selectactive(index) {
  this.timeIndex = index;
},
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
.zy-list {
  width: 100%;
  
  ul {
    width: 100%;
    height: r(18);
  margin-top: r(23);
    display: flex;
    text-align: center;
    justify-content:space-around;
    li{
      a{
        color: #000
      }
    }
  }
}
</style>


