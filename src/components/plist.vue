<style lang="less" scoped>
	.item-box {
		background: #fff;
        margin-top: 10px;
        height: 180px;
        font-size: 15px;
        padding-left: 15px;
        .ib-time,.ib-nobe{
            border-bottom: 1px solid #E3EAF7;
            height: 40px;
            line-height: 40px;
            div{text-align: left;}
        }
        .ib-time:after{
            content: '\e683';
            font-family: 'iconfont';
            height: 40px;
            line-height: 42px;
            padding-right: 15px;
            color: #ccc;
        }
        .ib-nobe .ib-left{flex:3;}
        .ib-nobe .ib-right{flex:1;text-align: right;padding-right: 15px;color: #DA242A;}

        .ib-box{
            padding-top: 15px;
            .ib-icon{
                padding: 0 15px 9px 0;
            }
            .ib-items{
                flex:2;
                line-height: 24px;
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
    <transition-group name="list">
    	<section v-for="(item, index) in DATA"
                 v-bind:key="index"
                 @click="goDetail(item.id)"
                 class="flex-wrap col-flex item-box">
    		<div class="flex-wrap row-flex midCenter ib-time">
                <div class="page">下单时间：{{item.date}}</div>
            </div>
    		<div class="flex-wrap row-flex midCenter ib-nobe" >
                <div class="ib-left">订单编号：{{item.id}}</div>
                <div class="ib-right">{{item.order_status}}</div>
            </div>
            <div class="flex-wrap row-flex ib-box page"
            :class="{noBuy: item.status == '6',isBuy: item.status == '3'}">
                <div class="flex-wrap row-flex ib-icon page">
                    <img :src="item.productInfo.imguri" class="page" alt=""/>
                </div>
                <div class="flex-wrap col-flex ib-items">
                    <div>{{item.productInfo.name}}</div>
                    <div>{{cachNumb(item.status)}}：{{item.plan_date}}</div>
                    <div>已付定金：<i class="red">{{item.margin}}元</i></div>
                </div>
            </div>
    	</section>
    </transition-group>
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
            DATA: Array
        },
        methods: {
            goDetail (nid) {
                let uid = `/detail/${nid}`
                this.$router.push(uid)
            },
            cachNumb (num) {
                switch (num) {
                    case 3:
                        return '成交时间'
                    case 4:
                        return '申请时间'
                    case 5:
                        return '申请时间'
                    case 6:
                        return '退款时间'
                    case 7:
                        return '取消时间'
                    case 8:
                        return '作废时间'
                    default:
                        return '预计验车时间'
                }
                
            }
        }
    }
</script>
