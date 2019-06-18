<template>
  <div class="jg-gonggao">
    <div class="jg-gonggao1">
      <div class="jg-text-z">划线价格</div>
      <div class="jg-text-y">商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。</div>
    </div>
    <div class="jg-gonggao1">
      <div class="jg-text-z">未划线价格</div>
      <div class="jg-text-y">商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</div>
    </div>
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
    .jg-gonggao{
      
        .jg-gonggao1{
            display: flex;

            .jg-text-z{
                font-size: r(9);
                width: r(86);
                height:r(19);
                color: #181818
            }
            .jg-text-y{
                width: r(208);
                height:r(76);
                color: #a2a2a2;
                 font-size: r(9);
            }

        } 
    }
</style>


