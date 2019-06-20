<template>
  <div class="hello">
    <button class="address">+选择/添加收货地址</button>
    <ul class="ul">
      <li>
        <span>配送日期</span>
        <span>请选择></span>
      </li>
      <li>
        <span>配送时间</span>
        <span>请选择></span>
      </li>
      <li>
        <span>配送服务</span>
        <span>请选择></span>
      </li>
    </ul>
    <ul class="ul2">
      <li v-for="(item,index) in heji" :key="index">
        <div class="left">
          <img :src="item.url">
        </div>
        <div class="mid">
          <p>{{item.name|textLengthSet(10)}}</p>
          <p>{{item.size}}</p>
          <p>{{item.price}}</p>
        </div>
        <div class="right">x{{item.num}}</div>
      </li>
    </ul>
    <ul class="ul">
      <li>
        <span>添加蜡烛</span>
        <span>请选择></span>
      </li>
      <li>
        <span>添加餐具</span>
        <span>请选择></span>
      </li>
      <li>
        <span>备注</span>
        <span>请选择></span>
      </li>
       <li>
        <span>代金卡</span>
        <span>请选择></span>
      </li>
      
       <li>
        <span>优惠券</span>
        <span>请选择></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["heji"],

  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    console.log(this.goods);
    console.log(this.heji);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
.hello {
    padding-bottom: r(80);
  .address {
    width: r(200);
    height: r(36);
    text-align: center;
    border: none;
    border: r(1) solid #02d4d7;
    background: #fff;
    color: #02d4d7;
    border-radius: r(20) r(20);
    line-height: r(36);
    font-size: r(15);
    margin-left: r(58);
    margin-top: r(50);
    outline: none;
  }
  .ul {
    margin-top: r(30);
    li {
      display: flex;
      justify-content: space-between;
      height: r(55);
      line-height: r(55);
      font-size: r(13);
      border-bottom: r(1) solid #ccc;
      & :nth-child(1) {
        margin-left: r(20);
      }
      & :nth-child(2) {
        margin-right: r(20);
      }
    }
  }
  .ul2 {
        margin-top: r(30);
    li {
      display: flex;
      font-size: r(13);
     border-bottom: r(1) solid #ccc;

      .left {
        margin-left: r(15);
        img {
          width: r(75);
          height: r(75);
        }
      }
      .mid{
           margin-left: r(15);
           margin-top: r(15);
           width: r(150);
      }
      .right{
            margin-left: r(30);
            line-height: r(90);
      }
    }
  }
}
</style>


