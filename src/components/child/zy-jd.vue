<template>
  <div class="list-product">
    <div v-for="(item,index) in msg" :key="index">
      <div href class="list-product-a">
        <div>
          <img
            :src="'https://res.bestcake.com/m-images/ww/jd/'+item.Name+'.png?v=11'"
            alt="item.Title"
             @click="toShow(item.Name,item.Brand)"
          >
        </div>
      </div>
      <div class="list-product-b">
        <span>{{item.Name}}</span>
      </div>
      <div class="list-product-c">
        <span style="color:#BCBCBC">{{item.Means|textLengthSet(9)}}</span>
      </div>
      <div class="list-product-d">
        <span style="color:#ff3300">￥</span>
        <span style="color:#ff3300">{{item.CurrentPrice}}.00</span>
        <span style="color:#BCBCBC">/{{item.Size}}</span>
        <img src="https://res.bestcake.com\m-images-2\list-cart.png?v=1" @click="gwc(item)">
      </div>
      
    </div>
    <gonggao></gonggao>
    

  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: []
    };
  },
  mounted() {
    var GetJdListNewdata = {
      v: "1560133253755",
      c: "NsCakeCenter",
      m: "GetJdListNew"
    };
    this.$apis.GetJdListNew(GetJdListNewdata).then(res => {
      console.log(res.data);
      var newlist = [];
      res.data.Tag.cakelist.forEach(el => {
        if (el.Brand == "卡思客") {
          newlist.push(el);
        }
        this.msg = newlist;
       
      });
      //  console.log(this.msg);
    });
  },
  methods: {
     gwc(item) {
      console.log(item);
      MessageBox('提示', '加入购物车成功!');

      var data = {
        id: item.ID,
        name: item.Name,
        num: 1,
        ename: "",
        price: item.CurrentPrice,
        size: item.Size,
        url:`https://res.bestcake.com/m-images/ww/jd/${item.Name}.png?v=14`,
         Brand:item.Brand,
          bool:false
           
      
      };
    
      this.$store.commit("add", data);
    },
     toShow(key, c) {
      this.$router.push({
        path: "/show",
        query: { key, c }
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
.list-product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  div {
    .list-product-a {
    
      img {
        width: r(140);
        height: r(140);
      }
      p {
        text-align: center;
      }
    }
    .list-product-d{
      img{
            width:r(17);height:r(17)
      }

    }
   
  }
   .jg-gonggao{
      margin-top: r(20);
      margin-bottom:r(60)
    }
}
</style>


