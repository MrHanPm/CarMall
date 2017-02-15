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
            <dd>定金：<i class="red">899元</i></dd>
            <dd>裸车尾款：<i class="red">899元</i>(111元－899元订金)</dd>
            <dd>购车人：刘强</dd>
            <dd>手机号码：343434</dd>
            <dt>
                <span>店内分期</span>
                <span>店内分期</span>
                <span>店内分期</span>
                <span>店内分期</span>
                <span>店内分期</span>
                <span>店内分期</span>
                <span>店内分期</span>
                <span>店内分期</span>
                <span>店内分期</span>
            </dt>
        </dl>

        <ul class="de-box de-yu-time mt10">
            <li>预计时间：2016.12.12</li>
            <li>最晚验车：2016.12.12</li>
            <li>最晚提车：2016.12.12</li>
        </ul>

        <ul class="de-box de-yu-time mt10">
            <li>商户验车时间：2016.12.12</li>
            <li>验车完成时间：2016.12.12</li>
        </ul>

        <ul class="de-box de-yu-time mt10">
            <li>商户提车时间：2016.12.12</li>
            <li>用户提车时间：2016.12.12</li>
        </ul>

        <ul class="de-box de-yu-time mt10">
            <li>申请时间：2016.12.12</li>
            <li>审核通过时间：2016.12.12</li>
            <li>退款时间：2016.12.12</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            
        },
        methods: {
            // switchThread (id) {
            //   this.$store.dispatch('switchThread', { id })
            // }
        }
    }
</script>
