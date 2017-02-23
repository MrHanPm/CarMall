<style lang="less" scoped>
    .de-box{
        min-height: 44px;
        background: #fff;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 15px;
        font-size: 14px;
        color: #666;
        line-height:24px;
    }
    .de-msg-box{
        margin-top: 2px;
        overflow: hidden;
        dd{
            font-size: 14px;
            color: #666;
            height: 25px;
            line-height: 25px;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow:ellipsis;
        }
        .red{color: red;}
        dt{
            height: 40px;
            display: block;
            margin-top: 8px;
            vertical-align: bottom;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            overflow-x:scroll; 
            border-top: 1px solid #f5f5f5;
            box-sizing: border-box;
            padding-top: 9px;
            span{
                font-size: 12px;
                display: inline-block;
                min-width: 50px;
                height: 20px;
                line-height: 20px;
                color: #FF6200;
                border-radius: 5px;
                padding: 0 5px;
                margin-right: 10px;
                border: 1px solid #FF6200;
            }
        }
    }
    .de-yu-time{
        li{
            font-size: 14px;
            color: #666;
            height: 25px;
            line-height: 25px;
        }
    }
</style>
<template>
    <div class="">
        <dl class="de-box de-msg-box">
            <dd>定金：<i class="red">{{DATA.margin}}元</i></dd>
            <dd>裸车尾款：
                <i class="red">{{DATA.amount}}元</i>
                {{DATA.balance}}
            </dd>
            <dd>购车人：{{DATA.name}}</dd>
            <dd>手机号码：{{DATA.phone}}</dd>
            <dt v-if="DATA.serviceInfo.length > 0">
                <span v-for="item in DATA.serviceInfo">{{item}}</span>
            </dt>
        </dl>

        <ul v-if="DATA.status < 6" class="de-box de-yu-time mt10">
            <li>预计时间：{{DATA.plan_date}}</li>
            <li>最晚验车：{{DATA.inspection_date}}</li>
            <li>最晚提车：{{DATA.extract_date}}</li>
        </ul>

        <ul v-if="DATA.inspectionInfo.dealer_time"
        class="de-box de-yu-time mt10">
            <li>商户验车时间：{{DATA.inspectionInfo.dealer_time}}</li>
            <li v-if="DATA.inspectionInfo.type > 0">验车完成时间：{{DATA.inspectionInfo.user_time}}</li>
        </ul>

        <ul v-if="DATA.extractInfo.dealer_time"
        class="de-box de-yu-time mt10"
        :class="{isBuy: DATA.extractInfo.type > 0}">
            <li>商户提车时间：{{DATA.extractInfo.dealer_time}}</li>
            <li v-if="DATA.extractInfo.type > 0">用户提车时间：{{DATA.extractInfo.user_time}}</li>
        </ul>

        <ul v-if="DATA.refundInfo.length > 0" v-for="item in DATA.refundInfo"
        class="de-box de-yu-time mt10"
        :class="{noBuy: item.status == '3'}">
            <li>申请时间：{{item.apply_time}}</li>
            <li>审核通过时间：{{item.audit_time}}</li>
            <li>退款时间：{{item.refund_time}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            DATA: Object
        },
        methods: {
            refundInfoST (num) {
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
