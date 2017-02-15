<style lang="less" scoped>
	.banner {
		width: 100%;
		height: auto;
		max-width: 800px;
		margin: 0 auto;
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
	.plist {
		height: 88px;
		margin-top: 10px;
		background: #fff;
		padding-left: 15px;
	}

	.plist-pitem{
		height: 44px;
		line-height: 44px;
		position: relative;
		padding-right:15px;
		font-size: 15px;
		i{
			font-size: 12px;
			color: #fff;
			min-width: 9px;
			text-align: center;
			height: 13px;
			line-height: 14px;
			padding: 2px 4px;
			background: #F88276;
			border-radius: 100px;
		}
	}
	.plist-pitem:after{
		content: '\e683';
		font-family: 'iconfont';
		height: 44px;
		line-height: 46px;
		padding-left: 10px;
		color: #ccc;
	}
	.plist-pitem:before{
		content: '\e67b';
		font-family: 'iconfont';
		font-size: 18px;
		height: 44px;
		line-height: 44px;
		padding-right: 12px;
		color: #F88276;
	}
	.pyan:before{content: '\e67c';}
	.pmei:before{content: '\e67e'; color: #60A7FA;}
	.pmsg:before{content: '\e67f'; color: #60A7FA;}
	.pborder{
		border-bottom: 1px solid #E3EAF7;
	}

	.pbtn{ background: none; margin-top: 20px;}
	.gobtn{ 
		background: #DA242A;
		border-radius: 8px;
		color: #fff;
		text-align: center;
	}
</style>
<template>
	<div class="flex-wrap col-flex scroll-wrap">
		<router-link to="/notice" class="banner"><img :src="banner" class="banner" alt=""></router-link>
		<div class="flex-wrap row-flex pname">{{name}}</div>

		<div class="flex-wrap col-flex plist">
			<router-link class="flex-wrap row-flex page plist-pitem pborder midCenter" to="/follow">
				<div class="page">待跟踪订单</div>
				<i>12</i>
			</router-link>
			<router-link class="flex-wrap row-flex page plist-pitem midCenter pyan" to="/follow">
				<div class="page">待验车订单</div>
				<i>2</i>
			</router-link>
		</div>

		<div class="flex-wrap col-flex plist">
			<router-link class="flex-wrap row-flex page plist-pitem pborder midCenter pmei" to="/follow">
				<div class="page">我的订单</div>
				<i>2</i>
			</router-link>
			<router-link class="flex-wrap row-flex page plist-pitem midCenter pmsg" to="/msg">
				<div class="page">我的消息</div>
				<i>{{session}}</i>
			</router-link>
		</div>

		<div class="flex-wrap row-flex pname pbtn">
			<router-link to="/check" class="page gobtn">去验车</router-link>
		</div>
	</div>
</template>
<script>
    import { mapGetters } from 'vuex'
	import banner from './banner.jpg'
	import XHR from '../../api/service'
    export default {
		data() {
			return {
				banner,
				name:'',
				session: 4
			}
		},
		beforeCreate(){
			// let txt = '{"isshowclickmsg":0,"clickmsg":"","errcode":0,"msg":"","infomsg":"","data":{"realname":"刘测试","usercategory":"1","dealersalesallbrandsname":"东风柳汽","salesmansalesbrandsname":"东风柳汽","sessionid":"70060_97af315fba38d5a76f4098df9cffc2ef7f964934","iscanrob":"1","ishavingpwd":"1","userid":"70060","username":"13683672177","tel":"13683672177","dealername":"卡销宝免费会员测试经销商账号1","permission":[{"key":"crm","value":"1","remark":""},{"key":"find_share","value":"1","remark":""},{"key":"recharge","value":"1","remark":""},{"key":"cluespage","value":"0","remark":""}],"salesmansalesshopname":"卡销宝免费会员测试经销商账号","alermsg":"","dealerid":"59580"},"status":1}'
			// window.localStorage.setItem('vipLodData',txt)
		},
		created () {
			let SEK = JSON.parse(localStorage.getItem('vipLodData')) || {}
			this.name = SEK.data.dealername
			console.log(document.cookie)
			XHR.getIndex().then(function (res) {
				console.log(res)
			})
		},
		beforeMount () {
			console.log(this.session,'beforeMount')
		},
		mounted () {
			console.log(this.session,'mounted')
		},
		beforeUpdate () {
			console.log(3)
		},
		updated () {
			console.log(4)
		},
		beforeDestroy () {
			console.log(5)
		},
		destroyed () {
			console.log(6)
		},
		
    }
</script>
