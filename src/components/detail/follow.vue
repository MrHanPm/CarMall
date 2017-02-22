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
            height: auto;
            margin-top: 8px;
            padding-top: 10px;
            border-top: 1px solid #f5f5f5;
            line-height: 25px;
            font-size: 14px;
            color: #666;
            i{color: #999;display: inline-block;}
            pre{
                min-height: 34px;
                max-height: 150px;
                word-wrap:break-word;
                white-space:initial;
                overflow-y: scroll;
            }
        }
    }
    dl:first-child{margin-top: 2px;}
</style>
<template>
    <div>
        <dl v-for="(item, index) in DATA"
            class="de-box de-msg-box">
            <dd>跟进时间：{{item.track_time}}</dd>
            <dd>跟进方式：{{item.status}}</dd>
            <dd>客户地址：{{item.region}}</dd>
            <dd>购车用途：{{item.type}}</dd>
            <dd>意向价格：<i class="red">{{item.track_amount}}万</i></dd>
            <dt>
                <i>备注：</i><pre>{{item.remark}}</pre>
            </dt>
        </dl>

    </div>
</template>
<script>
    export default {
        props: {
            DATA: Array
        },
        methods: {
            // switchThread (id) {
            //   this.$store.dispatch('switchThread', { id })
            // }
        }
    }
</script>
