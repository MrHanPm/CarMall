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
	    .fr-textarea{
	    	width: 100%;
	    	background: #fff;
	    	border: 10px solid #fff;
	    	font-size: 14px;
	    	overflow-y: scroll;
	    	border-radius: 5px;
			box-sizing:border-box;
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
			<textarea v-model="content" class="fr-textarea page" 
					  placeholder="请输入正文"></textarea>
			
		</div>
		<div class="flex-wrap row-flex li-btn">
			<div :class="{disabled: isNull}" @click="saveFom(1)">保存</div>
			<div class="bt-jue" :class="{disabled: isNull}" @click="saveFom(2)">预览</div>
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

				img:[],

			}
		},
		watch:{
			amount:'checkTitle',
			content: 'remarkInput'
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
        	allJSON(){
        		if (!this.isNull) {
        			let json = {}
        			if (this.$route.params.articleid !== 'add'){
        				json.articleid = this.$route.params.articleid
        			}
        			json.title = this.amount
        			json.content = this.content
        			json.mediaids = ''
        			json.accesstoken = ''
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
		                    		window.location.href = ''
		                    	}
		                    } else {
		                    	
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
		                    		window.location.href = ''
		                    	}
		                    } else {
		                    	
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
		    remarkInput(curVal,oldVal){
		    	
		    },
		    checkTitle(curVal,oldVal){
		    	if(curVal.length > '18'){
		    		this.showAlert("标题不能超出字符范围")
		    		this.isNull = true
		    	}
		    	if(curVal.length <= '18'){
		    		this.isNull = false
		    	}
		    },
		    checkForm () {
		        if(this.amount == ''){
		            this.showAlert("标题不能为空")
		            return false
		        }
		        if(this.content == ''){
		            this.showAlert("正文内容不能为空")
		            return false
		        }
		        if(this.isNull){
		        	this.showAlert('标题或内容不能为空')
		        	return false
		        }
		        return true
		    },
		    addImage(sour){
		    	let self = this
		    	let txt

		    	txt = `[图片${self.img.length}]`
		    	self.content = self.content + txt
		    	console.log(this.content,sour)
		  //   	wx.chooseImage({
				//     count: 1, // 默认9
				//     sizeType: ['original', 'compressed'],
				//     sourceType: ['album', 'camera'], 
				//     success: function (res) {
				//         var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
				//     }
				// })

				// wx.uploadImage({
				//     localId: '', // 需要上传的图片的本地ID，由chooseImage接口获得
				//     isShowProgressTips: 1, // 默认为1，显示进度提示
				//     success: function (res) {
				//         var serverId = res.serverId; // 返回图片的服务器端ID
				//     }
				// })
		    }
        }
    }
</script>
