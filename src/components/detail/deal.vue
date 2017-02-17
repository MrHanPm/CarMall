<style lang="less" scoped>
	.da-box{
        min-height: 99px;
        background: #fff;
        width: 100%;
        font-size: 14px;
        color: #666;
        line-height:24px;
        .da-line{
            flex:2;
            div{
                width: 2px;
                background: #ececec;
                position: relative;
                flex:1;
                &:before{
                    content: ' ';
                    width: 6px;
                    height: 6px;
                    background: #ececec;
                    border-radius: 100%;
                    display: block;
                    position: absolute;
                    top: 18px;
                    left: -2px;

                }
            }
        }
        .da-msg{
            flex:11;
            min-height: 68px;
            border-top: 1px solid #ececec;
            padding:10px 0;
                .da-list{
                    flex:1;
                    width: 100%;
                    color: #999;
                    overflow: hidden;
                    box-sizing: border-box;
                    padding-right: 10px;
                    text-align: left;

                }
                
        }
    }
    .da-box:first-child{
        margin-top: 2px;
        .da-line{
            div{
                margin-top: 20px;
                &:before{
                    width:8px;
                    height: 8px;
                    background: #DA242A;
                    top: 0;
                    left: -3px;
                }
            }
        }
        .da-msg{border-top: 0;}
    }
    .da-box:last-child{
        .da-line{
            div{
                background: none;
                &:after{
                    content: ' ';
                    width: 2px;
                    height: 20px;
                    background: #ececec;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
        }
    }
</style>
<template>
    <transition-group name="list" tag="div">

    	<section v-for="(item, index) in DATA"
        v-bind:key="index"
        class="flex-wrap row-flex da-box">
            <div class="flex-wrap col-flex da-line midCenter">
                <div> </div>
            </div>
            <div class="flex-wrap col-flex da-msg midCenter">
                <div class="da-list">{{item.add_time}}</div>
                <div class="da-list">处理类型：{{item.status}}</div>
                <div class="da-list">操作人：{{item.name}}</div>
            </div>
    	</section>

    </transition-group>
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
