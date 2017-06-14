<template>
  <section class="flex-wrap col-flex item-box">
    <!-- <div class="flex-wrap row-flex midCenter ib-time">
      <div class="page">下单时间：{{DATA.date}}</div>
    </div> -->
    <div class="flex-wrap row-flex midCenter ib-nobe" >
      <div class="ib-left">订单编号：{{DATA.id}}</div>
      <div class="ib-right">{{DATA.order_status}}</div>
    </div>
    <div class="flex-wrap row-flex ib-box page">
      <div class="ib-icon">
        <img :src="DATA.productInfo.imguri" alt=""/>
      </div>
      <div class="ib-items page">
        <div>{{DATA.productInfo.name}}</div>
        <div>车架号：{{DATA.productInfo.vin}}</div>
        <div>颜色：{{DATA.productInfo.color}}</div>
        <div>商城价：<i class="red">
            {{DATA.productInfo.price}}万元</i></div>
        <div>库存时长：{{DATA.productInfo.store_date}}天</div>
      </div>
    </div>
  </section>
</template>
<script>
  // import logo from './logo.png'
  export default {
    data() {
        return {
            // icon: logo
        }
    },
    props: {
        DATA: Object,
    },
    methods: {
        // switchThread (id) {
        //   this.$store.dispatch('switchThread', { id })
        // }
    }
  }
</script>
<style lang="less" scoped>
.item-box {
    background: #fff;
    height: 214px;
    font-size: 15px;
    padding-left: 15px;
    .ib-time,.ib-nobe{
        border-bottom: 1px solid #E3EAF7;
        height: 40px;
        line-height: 40px;
        div{text-align: left;}
    }
    /*.ib-time:after{
        content: '\e683';
        font-family: 'iconfont';
        height: 40px;
        line-height: 42px;
        padding-right: 15px;
        color: #ccc;
    }*/
    .ib-nobe .ib-left{flex:4; overflow: scroll; white-space: nowrap;}
    .ib-nobe .ib-right{flex:1;text-align: right;padding-right: 15px;color: #DA242A;height: 40px; overflow: hidden;}

    .ib-box{
        padding-top: 15px;
        .ib-icon{
            padding: 0 15px 9px 0;
            width: 120px;
            overflow: hidden;
            img{
                height: auto;
            }
        }
        .ib-items{
            line-height: 22px;
            font-size: 14px;
            color: #666;
            div:first-child{color:#333;}
            div{
                padding-right: 10px;
                display: block;
                width: 100%;
                white-space:nowrap;
                overflow: hidden;
                height: 22px;
                text-overflow: ellipsis;
            }
            .red{color: red;}
        }
    }
}
@media screen and (max-width: 400px) {
  .item-box .ib-box .ib-icon{
    width: 100px;
  }
}
</style>
