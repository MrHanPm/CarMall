<style lang="less" scoped>
	.ad-box{
		width: 100%;
		height: 100%;
		color: #333;
		overflow: hidden;
		.pad-bo{padding:0 15px;
		box-sizing:border-box;}
	    .fr-div{
	    	height: 43px;
	    	line-height: 43px;
	    	font-size: 15px;
	    	width: 100%;
	    }
	    .fr-input{
	    	height: 100%;
	    	background: none;
	    	text-indent: 10px;
	    	border: 0;
	    	font-size: 14px;
	    	line-height: 43px;
	    }
	    .fr-txt{
	    	height: 43px;
	    	background: #fff;
	    	border-radius: 5px;
	    	width: 100%;
	    	border: 1px solid #E3EAF7;
	    	overflow: hidden;
	    }
	    
	    .msx-box{
	    	height: 30px;
	    	padding: 10px 0;
	    	width: 100%;
	    	em{
	    		display: inline-block;
	    		height: 30px;
	    		line-height: 30px;
	    		font-size: 15px;
	    		min-width:20px;
	    		margin-right: 15px; 
	    	}
	    }
	    .ico-img:before,.ico-cuo:before{
	    	content: '\e643';
			font-family: 'iconfont';
	    }
	    .ico-cuo:before{
	    	content: '\e645';
	    }
	}
	.li-btn{
		height: 50px;
		text-align: center;
		justify-content: space-around;
		div{
			border: 1px solid #1795f9;
			color: #2196f3;
			background: #fff;
			margin-top: 10px;
			height: 30px;
			line-height: 30px;
			width: 40%;
			font-size: 15px;
			border-radius: 4px;
		}
		.bt-jue{color: #f15625; border-color: #FF9800;}
		.disabled{color: #ccc; border-color: #ccc;}
	}

	.pname{
		height: 44px;
		padding: 0 15px;
		white-space: nowrap;
		text-overflow:ellipsis;
		line-height: 44px;
		font-size: 18px;
		background: #fff;
	}
	.pbtn{ background: none; margin-top: 20px;}
	.gobtn{ 
		background: #DA242A;
		border-radius: 8px;
		color: #fff;
		text-align: center;
	}
	.disabled{
	    background: #f78488;
	    color: #fde8e8;
	}
</style>
<template>
	<div class="flex-wrap col-flex ad-box">
		<div class="flex-wrap col-flex scroll-wrap pad-bo">
			<div class="flex-wrap row-flex midCenter fr-div">
				<div class="page">标题1～18个汉字(36个字符)</div>
			</div>
			<div class="flex-wrap row-flex midCenter fr-txt">
				<input v-model="amount" class="fr-input page" placeholder="请输入标题"/>
			</div>
			<div class="msx-box">
				<em>正文</em>
				<em class="ico-img" @click="addImage('album')"></em>
				<em class="ico-cuo" @click="addImage('camera')"></em>
			</div>
			
			<wx-textarea-img :imgsurl="imageUrl" :content="content"></wx-textarea-img>
		</div>
		<div class="flex-wrap row-flex li-btn">
			<div :class="{disabled: isNull}" @click="saveFom(1)">保存</div>
			<div class="bt-jue" :class="{disabled: isNull}" @click="saveFom(2)">保存并预览</div>
		</div>
		<v-alert :show="alertShow" :txt="alertTxt"></v-alert>
		<div v-if="loadMore" class="jump-cover">
            <div class="loading visible">
                <span class="loading-ring"> </span>
            </div>
        </div>
	</div>
</template>
<script>
	import XHR from '../../api/service'
    export default {
		data() {
			return {
				loadMore: true,
				alertShow: false,
        		alertTxt:'',

				isNull: true,

				amount: '',
				content: '',
				imageUrl: '',
				img:[],
				imgURL:[],
			}
		},
		watch:{
			amount:'checkTitle'
		},
		created () {
			let self = this
			if (this.$route.params.articleid !== 'add') {
				XHR.getArticle({'articleid':this.$route.params.articleid})
				.then(function (res) {
                    if (res.data.status === 1) {
                    	self.loadMore = false
                    	self.isNull = false
                    	self.amount = res.data.data.title
                    	self.content = res.data.data.content
                    } else {
                    	XHR.isErr(res)
                    }
                })
                .catch(function (err) {
                	// console.log(err)
                	self.isNull = false
                    // self.showAlert(err)
                })
			} else {
				this.loadMore = false
			}

		},
        methods:{
        	getByteLen(val) {
	            let len = 0
	            for (let i = 0; i < val.length; i++) {
	                let a = val.charAt(i)
	                if (a.match(/[^\x00-\xff]/ig) != null) {
	                    len += 2
	                } else {
	                    len += 1
	                }
	            }
	            return len
	        },
        	allJSON(){
        		if (!this.isNull) {
        			let json = {}
        			let imgKey = {}
        			this.isNull = true
        			if (this.$route.params.articleid !== 'add'){
        				json.articleid = this.$route.params.articleid
        			}
        			json.title = this.amount
        			json.content = this.$children[0].$refs.content.innerHTML
        			for(let i=0; i<this.imgURL.length; i++){
        				let imurl = this.imgURL[i]
        				imgKey[imurl] = this.img[i]
        			}
        			json.mediaids = imgKey
        			return json
        		}
        	},
        	saveFom(nums){
        		let self = this
        		if (this.checkForm()) {
        			if (this.$route.params.articleid !== 'add'){
        				XHR.updateArticle(this.allJSON())
						.then(function (res) {
		                    if (res.data.status === 1) {
		                    	if (nums == '1') {
		                    		self.$router.go(-1)
		                    	} else {
		                    		window.location.href = res.data.url
		                    	}
		                    } else {
		                    	XHR.isErr(res)
		                    	self.isNull = false
		                    }
		                })
		                .catch(function (err) {
		                	// console.log(err)
		                	self.isNull = false
		                    // self.showAlert(err)
		                })
        			} else {
        				XHR.createArticle(this.allJSON())
						.then(function (res) {
		                    if (res.data.status === 1) {
		                    	if (nums == '1') {
		                    		self.$router.go(-1)
		                    	} else {
		                    		window.location.href = res.data.url
		                    	}
		                    } else {
		                    	XHR.isErr(res)
		                    	self.isNull = false
		                    }
		                })
		                .catch(function (err) {
		                	// console.log(err)
		                	self.isNull = false
		                    // self.showAlert(err)
		                })
        			}
        		}
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
		    checkTitle(curVal,oldVal){
		    	if( this.getByteLen(curVal) > '36'){
		    		this.showAlert("标题不能超出字符范围")
		    		this.isNull = true
		    	}
		    	if(this.getByteLen(curVal) <= '36'){
		    		this.isNull = false
		    	}
		    },
		    checkForm () {
		        if(this.amount == ''){
		            this.showAlert("标题不能为空")
		            return false
		        }
		        if(this.$children[0].$refs.content.innerHTML == ''){
		            this.showAlert("正文内容不能为空")
		            return false
		        }
		        if(this.isNull){
		        	return false
		        }
		        return true
		    },
		    addImage(sour){
		    	let self = this
		    	let txt
		    	wx.chooseImage({
				    count: 1,
				    sizeType: ['original', 'compressed'],
				    sourceType: [sour],
				    success: function (res) {
				    	self.imageUrl = res.localIds[0]
				    	self.imgURL.push(res.localIds[0])
				        wx.uploadImage({
						    localId: res.localIds[0],
						    isShowProgressTips: 1,
						    success: function (ores) {
						        self.img.push(ores.serverId)
						     //    txt = `[图片${self.img.length}]`
		    					// self.content = self.content + txt
						    }
						})
				    }
				})

		    }
        }
    }
</script>

