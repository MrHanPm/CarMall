<style lang="less" scoped>
    .dt-box{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
	.head-rout {
		text-align: center;
        line-height: 44px;
        font-size: 15px;
	}
    .head-box .active{color: #DA242A; border-bottom: 2px solid #DA242A;}
    .dt-footer{
        height: 49px;
        text-align: right;
        border-top: 1px solid #eadfdf;
    }
    .bt-min{
        padding-bottom: 10px;
    }
    .bt-btn{
        display: inline-block;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        padding: 0 6px;
        margin: 8px 10px 0 0;
        border: 1px solid #c7d0e2;
        color: #DA242A;
        border-radius: 4px;
    }
    .blue{color: #1571E5;}
    .bt-call{ 
        color: #8794AD;
        &:before{
            content:'\e67d';
            font-family: 'iconfont';
            color: #DA242A;
            padding-right: 4px;
        }
    }
</style>
<template>
	<div class="flex-wrap col-flex dt-box">
        <div class="scroll-wrap bt-min">
    		<v-mlist :DATA="VDATA"></v-mlist>
    		<header class="flex-wrap row-flex head-box mt10">
    			<div class="page head-rout" 
    	             :class="{ active: table === 1 }"
                     @click="clickTab(1)">订单详情</div>
    			<div class="page head-rout" 
    	             :class="{ active: table === 2 }"
                     @click="clickTab(2)">跟进记录</div>
    	        <div class="page head-rout" 
    	             :class="{ active: table === 3 }"
                     @click="clickTab(3)">处理记录</div>
    		</header>
    		<v-demsg v-if="table === 1" :DATA="VDATA"></v-demsg>
    		<v-defol v-if="table === 2" :DATA="TDATA" @show-all="showAll"></v-defol>
    		<v-deals v-if="table === 3" :DATA="RDATA"></v-deals>
        </div>
        <footer class="dt-footer">
            <a :href="'tel:'+ VDATA.phone" class="bt-btn bt-call">呼叫用户</a>
            <div class="bt-btn blue"
                 @click="addTR()">添加跟进记录</div>
            <div v-if="VDATA.isInspection == '1'"
                 class="bt-btn"
                 @click="goCheck()">确认验车</div>
            <div v-if="VDATA.isExtract == '1'"
                 class="bt-btn"
                 @click="goCars()">确认提车</div>
        </footer>
        <div v-if="loadMore" class="jump-cover">
            <div class="loading visible">
                <span class="loading-ring"> </span>
            </div>
        </div>
        <v-toast :show="toastShow" :txt="toastTxt"></v-toast>
        <v-alert :show="alertShow" :txt="alertTxt"></v-alert>
	</div>
</template>
<script>
    import XHR from '../../api/service'
    import axios from 'axios'
    export default {
		data() {
			return {
                toastShow: false,
                toastTxt:'',
                alertShow: false,
                alertTxt:'',
				table: 1,
                loadMore: true,
                VDATA: {
                    productInfo:{},
                    inspectionInfo:{},
                    extractInfo:{},
                    refundInfo:[],
                    serviceInfo:[],
                },
                TDATA: [],
                RDATA: []
			}
		},
        created () {
            let self = this
            let json = {}
            if(this.$route.query.t){
                this.table = parseInt(this.$route.query.t)
            }
            if(this.$route.query.dd){
                json.code = this.$route.query.dd
            }
            json.id = this.$route.params.orderid
            XHR.getOrderAll(json)
            .then(axios.spread(function (View, Record, Track ) {
                // console.log(View.data.data.id.length)
                if (View.data.status === 1) {
                    self.VDATA = View.data.data
                    self.loadMore = false
                } else {
                    XHR.isErr(res)
                }
                if (Track.data.status === 1) {
                    self.TDATA = Track.data.data
                }
                if (Record.data.status === 1) {
                    self.RDATA = Record.data.data
                }
            }))
            .catch(axios.spread(function (err, errs, errsd) {
                // console.log(err, errs, errsd)
            }))


        },
        methods: {
            clickTab(index){
                this.table = index
            },
            showAll (id){
                this.$set(this.TDATA[id],'showAll',true)
            },
            addTR () {
                localStorage.removeItem('MallFroms')
                let url = `/form/${this.$route.params.orderid}`
                this.$router.push(url)
            },

            goCheck(){
                if(this.$route.query.dd){
                    let json = {}
                    json.id = this.$route.params.orderid
                    json.code = this.VDATA.code
                    XHR.getInspec(json)
                    .then(function (res) {
                        if (res.data.status === 1) {
                            window.location.reload()
                        }
                    })
                    .catch(function (err) {
                        // console.log(err, errs, errsd)
                    })
                } else {
                    this.$router.push('/check')
                }
            },
            goCars(){
                if(this.$route.query.dd){
                    let json = {}
                    json.id = this.$route.params.orderid
                    json.code = this.VDATA.code
                    XHR.getExtract(json)
                    .then(function (res) {
                        if (res.data.status === 1) {
                            window.location.reload()
                        }
                    })
                    .catch(function (err) {
                        // console.log(err, errs, errsd)
                    })
                } else {
                    this.$router.push('/check')
                }
            },


            showToast(txt) {
              let self = this
              self.toastShow = true
              self.toastTxt = txt
              setTimeout(function() {
                self.toastShow = false
                self.toastTxt = ''
              },3000)
            },
            showAlert(txt) {
              let self = this
              self.alertShow = true
              self.alertTxt = txt
              setTimeout(function() {
                self.alertShow = false
                self.alertTxt = ''
              },3000)
            },
        }
    }
</script>
