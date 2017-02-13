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
		text-indent: 10px;
	}
</style>
<template>
	<div class="flex-wrap col-flex scroll-wrap">
		<div class="ch-img">
			<img :src="carbg" class="" alt="">
		</div>
		<div class="flex-wrap row-flex pname pbtn" style="margin:0;">
			<input class="page ch-input" placeholder="卡车之家车商城验车／提车码为12位数字串号">
		</div>
		<div class="flex-wrap row-flex pname pbtn">
			<router-link to="/check" class="page gobtn">去验车</router-link>
		</div>

	</div>
</template>
<script>
    import { mapState } from 'vuex'
    import carbg from './car.png'
    export default {
		data() {
			return {
				carbg,
				pageTitle: '首页'
			}
		},
        // computed: mapState({ user: state => state.user }),
    }
</script>
