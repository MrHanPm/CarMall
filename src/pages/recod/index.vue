<template>
    <div class="flex-wrap col-flex rod-box">
        <div class="item-top-box">订单跟踪</div>
        <div class="scroll-wrap">

            <section v-for="(em, index) in DATA"
            class="flex-wrap row-flex da-box">
                <div class="flex-wrap col-flex da-line midCenter">
                    <div> </div>
                </div>
                <div class="flex-wrap col-flex da-msg midCenter">
                    <div class="da-list">{{em.record_status}}</div>
                    <div class="da-list">{{em.record_time}}</div>
                </div>
            </section>

        </div>
    </div>
</template>
<script>
    import XHR from '../../api/service'
    export default {
        data() {
            return {
                DATA: []
            }
        },
        created () {
            this.loadPage()
        },
        methods:{
            loadPage(){
                let self = this
                let json = {}
                json.id = this.$route.query.id
                XHR.getRecod(json)
                .then(function (res) {
                    if (res.data.status === 1) {
                        self.DATA = res.data.data
                    } else {
                        XHR.isErr(res)
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
.rod-box{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.item-top-box{width: 100%; box-sizing:border-box; padding-left:14px; background-color: #fff; margin-top:10px; height: 44px; line-height: 44px; font-size: 14px;color: #666; position: relative;}
.item-top-box:before{content: ''; display: inline-block; width: 9px;height: 9px;background-color: #56D065; border-radius: 50%; border:3px solid #b6f5be; position: relative; top: 3px; margin-right: 5px;}
.item-top-box:after{content: ''; color: #ccc; display: block; width: 100%; height: 2px; border-bottom: 1px solid #E3EBF7; position: relative;top: -3px;}
.scroll-wrap{background-color: #fff;}

.da-box{
        min-height: 60px;
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
            min-height: 60px;
            border-top: 1px solid #ececec;
            padding:10px 0;
                .da-list{
                    flex:1;
                    width: 100%;
                    color: #666;
                    overflow: hidden;
                    box-sizing: border-box;
                    padding-right: 10px;
                    text-align: left;
                }
                .da-list:last-child{color: #999;}
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
