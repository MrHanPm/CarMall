<style lang="less" scoped>
	.ms-box{
		background: #fff;
		padding-left: 15px;
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
	.ms-list:nth-last-child(1){
		border:0 none;
	}
</style>
<template>
	<div class="flex-wrap col-flex scroll-wrap">
		<div class="flex-wrap col-flex ms-box">

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
