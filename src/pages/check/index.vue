<style lang="less" scoped>
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
	.ch-img{
		width: 100%;
		margin: 0 auto;
		padding: 20px 24px 0;
		box-sizing:border-box;
		background: none;
		height: auto;
		img{width: 100%;}
	}
	.ch-input{
		border-radius: 4px;
		border: 0;
		font-size: 14px;
		text-indent: 10px;
	}
	.disabled{
		background: #f78488;
		color: #fde8e8;
	}
</style>
<template>
	<div class="flex-wrap col-flex scroll-wrap">
		<div class="ch-img">
			<img :src="carbg" class="" alt="">
		</div>
		<div class="flex-wrap row-flex pname pbtn" style="margin:0;">
			<input class="page ch-input" placeholder="卡车之家车商城验车／提车码为12位数字串号" 
			v-model.trim="codes" type="tel">
		</div>
		<div class="flex-wrap row-flex pname pbtn">
			<div class="page gobtn"
			:class="{disabled: isNull }"
			@click="goCheck()">去验车</div>
		</div>
		<v-toast :show="toastShow" :txt="toastTxt"></v-toast>
	</div>
</template>
<script>
    import XHR from '../../api/service'
    import carbg from './car.png'
    export default {
		data() {
			return {
				carbg,
				toastShow: false,
        		toastTxt:'',
				isNull: true,

				codes: ''
			}
		},
		watch:{
			codes: 'changInput'
		},
        methods:{
        	showToast(txt) {
	          let self = this
	          self.toastShow = true
	          self.toastTxt = txt
	          setTimeout(function() {
	            self.toastShow = false
	            self.toastTxt = ''
	          },3000)
	        },
	        checkForm () {
		        if(this.isNull){
		        	return false
		        }
		        return true
		    },
		    changInput(curVal,oldVal){
		    	if(curVal.length < '12'){
		    		this.isNull = true
		    	}
		    	if(curVal.length == '12'){
		    		this.isNull = false
		    	}
		    	if(curVal.length > 12) {
		    		this.showToast("您输入已超出12位")
		    	}
		    },
		    goCheck () {
		    	if (this.checkForm()) {
		    		let self = this
		    		let json = {}
		    		this.isNull = true
		    		json.code = this.codes
		    		XHR.getVerify(json)
		    		.then(function (res) {
                        // console.log(res)
                        if (res.data.status === 1) {
                        	let url = `/detail/${res.data.data}`
                			self.$router.push({ path: url, query: { dd: self.codes }})
                        } else {
                        	self.showToast(res.data.errInfo)
                        	self.isNull = false
                        }
                    })
                    .catch(function (err) {
                    	// console.log(err)
                    	self.isNull = false
                        // self.showToast(err)
                    })
		    	}
		    }
        }
    }
</script>
