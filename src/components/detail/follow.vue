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
                min-height: 28px;
                word-wrap:break-word;
                white-space:initial;
                max-height: 100px;
                overflow-y: scroll;
            }
            .press{
                max-height: none;
                overflow-y: visible;
            }
            .deDown{
                border-top: 1px solid #f5f5f5;
                height: 25px;
                line-height: 32px;
                font-size: 13px;
                text-align: center;
                box-shadow: 0 -20px 32px #fff;
                z-index: 55;
                position: relative;
            }
            .displayNone{
                display: none;
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
                <pre :class="{press: item.showAll }"><i>备注：</i>{{item.remark}}</pre>
                <div v-if="item.remark.length > 300"
                     class="deDown"
                     :class="{displayNone: item.showAll}"
                     @click="$emit('show-all', index)">展开全部 ▾</div>
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
        }
    }
</script>
