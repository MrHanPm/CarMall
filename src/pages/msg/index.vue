<style lang="less" scoped>
	.ms-man{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.ms-box{
		width: 100%;
		height: 100%;
		overflow: hidden;
		overflow-y: scroll;
    	-webkit-overflow-scrolling:touch;
	}
	.ms-list{
		min-height: 90px;
		padding:14px 15px 10px 0;
		border-bottom: 1px solid #E3EAF7;
		.ms-ico{
			flex:1;
			padding-right: 10px;
			
			line-height: 30px;
		}
		.ms-red{position: relative;}
		.ms-red:after{
			content: ' ';
			width: 8px;
			height: 8px;
			border-radius: 100%;
			background: red;
			border:1px solid #fff;
			position: absolute;
			top: 0;
			left: 25px;
			z-index: 5;
		}
		.ms-ico:before{
			content:'\e681';
			font-family: 'iconfont';
			font-size: 30px;
			color: #89B8F5;
			width: 30px;
			height: 30px;
		}
		.ms-item{
			flex:7;
			.ms-msg{
				font-size: 15px;
				color: #333;
			}
			.ms-time{
				height: 30px; line-height: 30px;
			}
		}

		.ms-msg-left{flex:8; color: #8794AD;}
		.ms-msg-right{flex:1;}
		.ms-msg-right:before{
			content:'\e682';
			font-family: 'iconfont';
			font-size: 20px;
			color: #ccc;
			width: 30px;
			text-align: right;
			height: 30px;
		}
	}
	.ms-bgs{
		padding-left: 15px;
		background: #fff;
		box-sizing:border-box;
	}
	.ms-list:last-child{
		border:0 none;
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
	<div class="ms-man">
		<div class="ms-box">
		  <div class="ms-bgs">

			<div class="flex-wrap row-flex ms-list">
				<div class="ms-ico ms-red"></div>
				<div class="flex-wrap col-flex ms-item">
					<div class="page ms-msg">对方回复大哥电饭锅对方回复大哥电饭锅电饭锅对方回复大哥电饭锅电饭锅对方回复大哥电饭锅电饭锅对方</div>
					<div class="flex-wrap row-flex ms-time">
						<div class="ms-msg-left">2016.12.22 12:12</div>
						<div class="ms-msg-right"></div>
					</div>
				</div>
			</div>

			
		  </div>
		</div>


		<div v-if="false" class="flex-wrap midCenter alt-box">
			<dl class="alt-bgs">
				<dt class="">确认删除这条系统消息？</dt>
				<dd class="">取消</dd>
				<dd class="alt-ok">确定</dd>
			</dl>
		</div>
	</div>
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
