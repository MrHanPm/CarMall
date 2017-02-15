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
        .ib-nobe .ib-left{flex:3;}
        .ib-nobe .ib-right{flex:1;text-align: right;padding-right: 15px;color: #DA242A;}

        .ib-box{
            padding-top: 15px;
            .ib-icon{
                padding: 0 15px 9px 0;
            }
            .ib-items{
                flex:2;
                line-height: 22px;
                font-size: 14px;
                color: #666;
                div:first-child{color:#333;}
                div{
                    padding-right: 10px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow:ellipsis;
                }
                .red{color: red;}
            }
        }
	}
</style>
<template>
	<section class="flex-wrap col-flex item-box">
		<div class="flex-wrap row-flex midCenter ib-time">
            <div class="page">下单时间：2016-12-12 12:12</div>
        </div>
		<div class="flex-wrap row-flex midCenter ib-nobe" >
            <div class="ib-left">订单编号：34534343454</div>
            <div class="ib-right">已成交</div>
        </div>
        <div class="flex-wrap row-flex ib-box page">
            <div class="flex-wrap row-flex ib-icon page"><img :src="icon" class="page" alt=""></div>
            <div class="flex-wrap col-flex ib-items">
                <div>衣服解决的</div>
                <div>车架号：2323frr</div>
                <div>颜色：红色</div>
                <div>商城价：<i class="red">233元</i></div>
                <div>库存时长：10个月</div>
            </div>
        </div>
	</section>
</template>
<script>
    import logo from './logo.png'
    export default {
        data() {
            return {
                icon: logo
            }
        },
        props: {
            
        },
        methods: {
            // switchThread (id) {
            //   this.$store.dispatch('switchThread', { id })
            // }
        }
    }
</script>
