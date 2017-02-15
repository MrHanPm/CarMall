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
				  <option>商家主动联系客户（电话）</option>
				  <option>客户主动联系商家（电话）</option>
				  <option>短信联系</option>
				  <option>微信联系</option>
				  <option>其他方式</option>
				</select>
			</div>
			<div class="flex-wrap row-flex midCenter fr-div">
				<div class="fr-title">客户地址</div>
				<div class="fr-input page">北极光 速度</div>
			</div>
			<div class="flex-wrap row-flex midCenter fr-div">
				<div class="fr-title">购车用途</div>
				<select v-model="type" class="fr-input page">
				  <option>渣土运输</option>
				  <option>快递</option>
				  <option>蔬菜水果</option>
				  <option>日用百货</option>
				  <option>集装箱</option>
				  <option>其他用途</option>
				</select>
			</div>
			<div class="flex-wrap row-flex midCenter fr-div fr-txt">
				<div class="fr-title">意向价格</div>
				<input v-model="amount" class="fr-input page"/>
			</div>
			<textarea v-model="remark" class="fr-textarea" placeholder="备注请填写限800字内"></textarea>
		</div>
		<div class="flex-wrap row-flex pname pbtn">
			<router-link to="/check" class="page gobtn disabled">添加</router-link>
		</div>
	</div>
</template>
<script>
    import { mapState } from 'vuex'

    export default {
		data() {
			return {
				time: '',
				status: '商家主动联系客户（电话）',
				region_id: '',
				type:'渣土运输',
				amount: '12',
				remark: '商家主动联系',
			}
		},
        // computed: mapState({ user: state => state.user }),
    }
</script>
