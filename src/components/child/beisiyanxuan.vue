<template>
  <div>
    <ul>
      <li>
        <router-link to="/list/bs/rp" class="active">乳品</router-link>
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
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.active{
    border-bottom: r(4) solid #1fb1b9;
}
ul {
  li {
    text-align: center;
   
    a{
      color: #000000;
      font-size: r(9);
    
     
    }

  }
}
</style>


