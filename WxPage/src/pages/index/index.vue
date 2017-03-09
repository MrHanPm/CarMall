<style lang="less" scoped>
	.ms-man{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.ms-tit{
		height: 44px;
		background: #fff;
		text-align: center;
		width: 100%;
		position: relative;
		font-size: 15px;
		line-height: 44px;
		color: #333;
		z-index: 4;
		box-shadow: 0 3px 3px #ececec;
		em{
			position: absolute;
			right: 0;
			top: 0;
			z-index: 9;
			display: inline-block;
			min-width: 60px;
			height: 44px;
			padding-right: 15px;
			font-size: 13px;
			&:before{
				content:'\e652';
				font-family: 'iconfont';
				font-size: 15px;
				margin-right: 4px;
				color: #1795f9;
			}
		}
	}
	.ms-list{
		margin-bottom: 10px;
		background: #fff;
		min-height: 120px;
		box-sizing:border-box;
		padding: 10px 15px;
		width: 100%;
		color: #666;
	}
	.li-tit{
		min-height: 30px;
		line-height: 25px;
		font-size: 16px;
		color: #333;
	}
	.li-tol{
		height: 26px;
		line-height: 26px;
		em{
		    font-size: 12px;
		    flex: 1;
		    overflow: hidden;
		}
		.li-time{flex: 2;}
		.ico-ai:before,.ico-ms:before{
			content:'\e627';
			font-family: 'iconfont';
			font-size: 15px;margin-right: 4px;
		}
		.ico-ms:before{content:'\e6a3';}
	}
	.li-btn{
		height: 40px;
		text-align: center;
		justify-content: space-around;
		div{
			margin-top: 10px;
			border: 1px solid #1795f9;
			color: #2196f3;
			height: 30px;
			line-height: 30px;
			width: 40%;
			font-size: 15px;
			border-radius: 4px;
		}
		.bt-gre{color: #4caf50; border-color: #54ca58;}
		.bt-red{color: #ff5722; border-color: #ff9800;}
	}
	.alt-box{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.6);
		z-index: 999;
		.alt-bgs{
			width: 83%;
			height: 130px;
			background: #fff;
			border-radius: 8px;
			dt{
				height: 75px;
				width: 100%;
				line-height: 75px;
				font-size: 17px;
				color: #333;
				text-align: center;
				border-bottom: 1px solid #E3EAF7;
			}
			dd{
				float: left;
				width: 49%;
				height: 54px;
				line-height: 54px;
				text-align: center;
				font-size: 16px;
				color: #666;
			}
			.alt-ok{
				color: #1571E5;
				border-left: 1px solid #E3EAF7;
			}
		}
	}
</style>
<template>
	<div class="flex-wrap col-flex ms-man">
		<div class="ms-tit">文章后台<em @click="newPud">发布文章</em></div>
		<div class="scroll-wrap"
		v-infinite-scroll="loadPage"
        infinite-scroll-disabled="isLoad"
        infinite-scroll-distance="60">

        

		  <transition-group name="list" class="ms-bgs" tag="div">

			<div v-for="(item, index) in DATA"
	             v-bind:key="index" 
	        	class="flex-wrap col-flex ms-list">
				<div class="li-tit" @click="goUrl(item.url)">{{item.title}}</div>
				<div class="flex-wrap row-flex li-tol">
					<em>{{item.editor}}</em>
					<em class="ico-ai">{{item.clickcount}}</em>
					<em class="ico-ms">{{item.commentcount}}</em>
					<em class="li-time">{{item.publishdatetime}}</em>
				</div>
				<div class="flex-wrap row-flex li-btn">
					<div @click="mdfAut(item.articleid)">修改</div>
					<div v-if="item.ispublish == false" class="bt-gre"
						 @click="readRom(index,item.articleid)">发布</div>
					<div v-if="item.ispublish == true" class="bt-red"
					     @click="clickRom(index,item.articleid)">取消发布</div>
				</div>
			</div>

		  </transition-group>

		  <v-more :show="loadMore"
                    :top="DATA.length > 0 ? true : false"
                    :no="DATA.length === 0 ? true : false"></v-more>
		</div>

		<div v-if="delBox" class="flex-wrap midCenter alt-box">
			<dl class="alt-bgs">
				<dt class="">确认取消发布？</dt>
				<dd class="" @click="clickRom('','')">取消</dd>
				<dd class="alt-ok" @click="romPub(2)">确定</dd>
			</dl>
		</div>
        <div v-if="readBox" class="flex-wrap midCenter alt-box">
            <dl class="alt-bgs">
                <dt class="">确认发布此文？</dt>
                <dd class="" @click="readRom('','')">取消</dd>
                <dd class="alt-ok" @click="romPub(1)">确定</dd>
            </dl>
        </div>
	</div>
</template>
<script>
	import XHR from '../../api/service'
    export default {
		data() {
            return {
                delBox: false,
                readBox: false,
                loadMore: true,
                isLoad: false,
                page:1,
                DATA: [],
                delId: '',
                delIndex: ''
            }
        },
        created () {},
        methods:{
            clickRom(indexs,mid){
                this.delIndex = indexs
                this.delId = mid
                this.delBox = !this.delBox
            },
            readRom(indexs,mid){
            	this.delIndex = indexs
            	this.delId = mid
                this.readBox = !this.readBox
            },
            loadPage(){
                let self = this
                let nowPage = this.page
                let json = {}
                json.pagesize = 10
                json.page = nowPage
                if (this.loadMore) {
                    this.isLoad = true
                    nowPage++
                    XHR.getArticleList(json)
                    .then(function (res) {
                        // console.log(res)
                        if (res.data.status === 1) {
                            if(res.data.totalpage < nowPage) {
                                self.loadMore = false
                            } else {
                                self.isLoad = false
                                self.page = nowPage
                            }
                            self.DATA.push(...res.data.data)
                        } else {
                            XHR.isErr(res)
                        }
                        
                    })
                    .catch(function (err) {
                        // self.showAlert('')
                        // self.$router.push('notice')
                    })
                }
            },
            mdfAut(mid){
            	this.$router.push(`/form/${mid}`)
            },
            newPud () {
            	this.$router.push('/form/add')
            },
            addPub (inNumb,mid) {
            	let self = this
            	console.log(inNumb,mid)
            	let json = {}
            	json.mid = mid
            	if (this.DATA[inNumb].type === 0) {
            		XHR.getMsgUpdate(json)
	                .then(function (res) {
	                    // console.log(res)
	                    if (res.data.status === 1) {
	                        self.DATA[inNumb].type = 1
	                    }
	                })
	                .catch(function (err) {
	                    // self.showAlert('')
	                    // self.$router.push('notice')
	                })
            	}
            },
            romPub (nmb) {
            	let self = this
            	const {delIndex, delId} = this
            	// console.log(delIndex, delId)
            	let json = {}
            	json.articleid = delId
            	json.publish = nmb
                if (nmb == '2') {this.delBox = !this.delBox}
            	if (nmb == '1') {this.readBox = !this.readBox}
        		XHR.isPublish(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.status === 1) {
                    	if(nmb == '2'){
                    		self.$set(self.DATA[delIndex],'ispublish',false)
                    	} else {
                    		self.$set(self.DATA[delIndex],'ispublish',true)
                    	}
                    }
                })
                .catch(function (err) {
                    // self.showAlert('')
                    // self.$router.push('notice')
                })
            	
            },
            goUrl (url) {
                window.location.href = url
            }
        }
    }
</script>
