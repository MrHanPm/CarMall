<template>
	<div class="flex-wrap col-flex scroll-wrap">
		<router-link to="/hot" class="banner"><img :src="banner" class="banner" alt=""></router-link>
		<div class="pname">{{name}}</div>

		<div class="flex-wrap col-flex plist">
			<div class="flex-wrap row-flex page plist-pitem pborder midCenter" @click="jump({path:'/follow',query:{s:1,g:1}})">
				<div class="page">跟进中的订单</div>
				<i v-if="DATA.processCount > '0'">{{DATA.processCount}}</i>
			</div>
			<div class="flex-wrap row-flex page plist-pitem midCenter pyan pborder" @click="jump({path:'/follow',query:{s:2,g:1}})">
				<div class="page">已完成的订单</div>
				<i v-if="DATA.completedCount > '0'">{{DATA.completedCount}}</i>
			</div>
			<div class="flex-wrap row-flex page plist-pitem midCenter ptt"  @click="jump({path:'/follow',query:{s:3,g:1}})">
				<div class="page">申请退款的订单</div>
				<i v-if="DATA.refundCount > '0'">{{DATA.refundCount}}</i>
			</div>
		</div>

		<div class="flex-wrap col-flex plist">
			<!-- <router-link class="flex-wrap row-flex page plist-pitem pborder midCenter pmei" to="/follow">
				<div class="page">我的订单</div>
				<i v-if="DATA.orderCount > '0'">{{DATA.orderCount}}</i>
			</router-link> -->
			<router-link class="flex-wrap row-flex page plist-pitem midCenter pmsg" to="/msg">
				<div class="page">我的消息</div>
				<i v-if="DATA.messageCount > '0'">{{DATA.messageCount}}</i>
			</router-link>
		</div>

		<div class="flex-wrap row-flex pname pbtn">
			<router-link to="/check" class="page gobtn">验车 / 提车</router-link>
		</div>
	</div>
</template>
<script>
	import banner from './banner.jpg'
	import XHR from '../../api/service'
    export default {
		data() {
			return {
				banner,
				name:'',
				DATA: {
					messageCount:'0',
					refundCount:'0',
					completedCount:'0',
					processCount:'0'
				}
			}
		},
		beforeCreate(){},
		created () {
			let SEK = JSON.parse(localStorage.getItem('vipLodData')) || {}
			let self = this
			this.name = SEK.dealername
			XHR.getIndex()
			.then(function (res) {
				// console.log(res)
				if (res.data.status === 1) {
					self.DATA = res.data.data
				} else {
					XHR.isErr(res)
				}
			})
			.catch(function (err) {
		        // self.showAlert('')
		        // self.$router.push('notice')
		    })
		},
		beforeMount () {
			// console.log(this.DATA,'beforeMount')
		},
		mounted () {
			// console.log(this.DATA,'mounted')
		},
		beforeUpdate () {
			// console.log(3)
		},
		updated () {
			// console.log(4)
		},
		beforeDestroy () {
			// console.log(5)
		},
		destroyed () {
			// console.log(6)
		},
		
    }
</script>
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
		width: 100%;
		box-sizing:border-box;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
		line-height: 44px;
		font-size: 18px;
		background: #fff;
	}
	.plist {
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
	.ptt:before{content: '\e6a3';}
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
