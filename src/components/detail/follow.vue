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
        margin-top: 10px;
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
        dd:first-child{color: #333;}
        .red{color: red;}
        dt{
            min-height: 34px;
            max-height: 66px;
            margin-top: 8px;
            word-wrap:break-word;
            overflow-y: scroll;
            padding-top: 10px;
            border-top: 1px solid #f5f5f5;
            line-height: 25px;
            font-size: 14px;
            color: #666;
            i{color: #999;display: inline-block;}
        }
    }
    dl:first-child{margin-top: 2px;}
</style>
<template>
    <div class="">
        <dl class="de-box de-msg-box">
            <dd>跟进时间：6576767</dd>
            <dd>跟进方式：567567567fhg</dd>
            <dd>客户所在地：刘强</dd>
            <dd>购车用途：343434</dd>
            <dd>意向价格：<i class="red">899万</i></dd>
            <dt>
                <i>备注：</i>意向价意向价意向价意意向
            </dt>
        </dl>

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
