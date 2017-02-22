<style lang="less" scoped>
	.ad-box{
		width: 100%;
		height: 100%;
		color: #666;
		overflow: hidden;
	    overflow-y: scroll;
	    -webkit-overflow-scrolling:touch;
	    .ad-bg{
	    	width: 100%;
	    	background: #fff;
			padding-left: 10px;
			box-sizing:border-box;
		}
	    .fr-div{
	    	height: 43px;
	    	line-height: 43px;
	    	font-size: 15px;
	    	width: 100%;
	    	border-bottom: 1px solid #E3EAF7;
	    	&:after{
	    		content: '\e683';
				font-family: 'iconfont';
				height: 44px;
				line-height: 46px;
				padding:0 10px;
				color: #ccc;
	    	}
	    }
	    .fr-title{
	    	width: 100px;
	    }
	    .fr-input{
	    	height: 100%;
	    	background: none;
	    	border: 0;
	    	font-size: 14px;
	    	text-align: right;
	    }
	    .fr-txt:after{
	    	content: '万元';
	    	font-size: 14px;
	    	color: #DA242A;
	    }
	    .fr-textarea{
	    	width: 100%;
	    	height: 110px;
	    	padding: 10px 10px 10px 0;
	    	font-size: 14px;
			box-sizing:border-box;
	    }
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
	<div class="ad-box">
		<div class="ad-bg">
			<div class="flex-wrap row-flex midCenter fr-div">
				<div class="fr-title">跟进时间</div>
				<input type="datetime-local" v-model="time" class="fr-input page"/>
			</div>
			<div class="flex-wrap row-flex midCenter fr-div">
				<div class="fr-title">跟进方式</div>
				<select v-model="status" class="fr-input page">
				  <option v-for="option in statusOption" :value="option.value">
				  	{{option.text}}
				  </option>
				</select>
			</div>
			<div class="flex-wrap row-flex midCenter fr-div">
				<div class="fr-title">客户地址</div>
				<div class="fr-input page" @click="citys()">{{adName}} {{ctName}}</div>
			</div>
			<div class="flex-wrap row-flex midCenter fr-div">
				<div class="fr-title">购车用途</div>
				<select v-model="type" class="fr-input page">
				  <option v-for="toption in typeOption" :value="toption.value">
				  	{{toption.text}}
				  </option>
				</select>
			</div>
			<div class="flex-wrap row-flex midCenter fr-div fr-txt">
				<div class="fr-title">意向价格</div>
				<input v-model.number="amount" type="number" class="fr-input page"/>
			</div>
			<textarea v-model="remark" class="fr-textarea" placeholder="备注请填写限800字内"></textarea>
		</div>
		<div class="flex-wrap row-flex pname pbtn">
			<div class="page gobtn"
			:class="{disabled: isNull }"
			@click="submits()">添加</div>
		</div>
		<v-alert :show="alertShow" :txt="alertTxt"></v-alert>
	</div>
</template>
<script>
	import XHR from '../../api/service'
    export default {
		data() {
			return {
				statusOption:[
					{text: '商家主动联系客户(电话)',value: 0},
					{text: '客户主动联系商家(电话)',value: 1},
					{text: '短信联系',value: 2},
					{text: '微信联系',value: 3},
					{text: '其他方式',value: 4}
				],
				typeOption:[
					{text: '渣土运输',value: 0},
					{text: '快递',value: 1},
					{text: '蔬菜水果',value: 2},
					{text: '日用百货',value: 3},
					{text: '集装箱',value: 4},
					{text: '其他用途',value: 5}
				],
				alertShow: false,
        		alertTxt:'',
				adName:'请选择',
				ctName:'',
				isNull: true,

				time: '',
				status: 0,
				region_id: '',
				type: 0,
				amount: '',
				remark: '',
			}
		},
		watch:{
			remark: 'remarkInput'
		},
		created () {
			let FROMS = JSON.parse(localStorage.getItem('MallFroms')) || ''
			let ADDRS = JSON.parse(localStorage.getItem('MallAddrs')) || ''
			let MCITY = JSON.parse(localStorage.getItem('MallCitys')) || ''
			if (FROMS !== '') {
				this.time = FROMS.time
		    	this.status = FROMS.status
		    	this.type = FROMS.type
		    	this.amount = FROMS.amount
		    	this.remark = FROMS.remark
			} else {
				this.time = this.getTimeLocal()
			}
			if(ADDRS !== ''){
            	this.adName = ADDRS.txt
            }
            if(MCITY !== ''){
            	this.ctName = MCITY.txt
            	this.region_id = MCITY.val
            	this.isNull = false
            }
		},
        methods:{
        	getTimeLocal(){
		        let Times = ""
		        let nTime = new Date()
		        Times += nTime.getFullYear() + "-"
		        Times += (nTime.getMonth() + 1) < 10 ? "0" + (nTime.getMonth()+1) : (nTime.getMonth() + 1)
		        Times += "-"
		        Times += nTime.getDate()<10?"0"+(nTime.getDate()):(nTime.getDate())
		        Times += "T"
		        Times += nTime.getHours()<10?"0"+(nTime.getHours()):(nTime.getHours())
		        Times += ":"
		        Times += nTime.getMinutes()<10?"0"+(nTime.getMinutes()):(nTime.getMinutes())
		        Times += ":00"
		        return Times
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
		    citys () {
		    	let FROMS = {}
		    	FROMS.time = this.time
		    	FROMS.status = this.status
		    	FROMS.region_id = ''
		    	FROMS.type = this.type
		    	FROMS.amount = this.amount
		    	FROMS.remark = this.remark
		    	FROMS.url = `/form/${this.$route.params.orderid}`
		    	localStorage.setItem('MallFroms',JSON.stringify(FROMS))
		    	this.$router.push('/addr')
		    },
		    remarkInput(curVal,oldVal){
		    	if(curVal.length > '800'){
		    		this.showAlert("备注请填写800字内")
		    		this.isNull = true
		    	}
		    	if(curVal.length <= '800'){
		    		this.isNull = false
		    	}
		    },
		    checkForm () {
		        if(this.time == ''){
		            this.showAlert("跟进时间不能为空")
		            return false
		        }
		        if(this.region_id == ''){
		            this.showAlert("请选择客户地址")
		            return false
		        }
		        if(this.isNull){
		        	return false
		        }
		        return true
		    },
		    submits () {
		    	if( this.checkForm() ){
		    		let self = this
		    		let json = {}
		    		this.isNull = true
		    		json.id = this.$route.params.orderid
		    		json.track_time = this.time
		    		json.status = this.status
					json.region_id = this.region_id
					json.type = this.type
					json.track_amount = this.amount
					json.remark = this.remark
					// console.log(json)
		    		XHR.getCreate(json)
		    		.then(function (res) {
                        // console.log(res)
                        if (res.data.status === 1) {
                        	let url = `/detail/${self.$route.params.orderid}`
                			self.$router.push({ path: url, query: { t: '2' }})
                        } else {
                        	self.showAlert(res.data.errInfo)
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
        }
    }
</script>
