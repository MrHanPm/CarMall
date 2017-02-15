<style lang="less" scoped>
	.ad-box{
		width: 100%;
		height: 100%;
		box-sizing:border-box;
		background: #fff;
		padding-left: 10px;
		overflow: hidden;
	    overflow-y: scroll;
	    -webkit-overflow-scrolling:touch;
	    li{
	    	height: 43px;
	    	line-height: 43px;
	    	font-size: 15px;
	    	width: 100%;
	    	border-bottom: 1px solid #E3EAF7;
	    }
	    .active{
	    	color: red;
	    	position: relative;
	    	&:after{
	    		content:'\e684';
	    		font-family: 'iconfont';
	    		position: absolute;
	    		font-size: 25px;
	    		right: 20px;
	    		top: 2px;
	    	}
	    }
	}
</style>
<template>
	<ul class="ad-box">
		<li class="active">北京</li>
		<li>北京</li>
		<li>北京</li>
	</ul>
</template>
<script>
    import { mapState } from 'vuex'

    export default {
		data() {
			return {
				pageTitle: '首页'
			}
		},
        // computed: mapState({ user: state => state.user }),
    }
</script>
