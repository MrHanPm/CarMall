<style lang="less" scoped>
    .dt-box{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
	.head-rout {
		text-align: center;
        line-height: 44px;
        font-size: 15px;
	}
    .head-box .active{color: #DA242A; border-bottom: 2px solid #DA242A;}
    .dt-footer{
        height: 49px;
        text-align: right;
        border-top: 1px solid #eadfdf;
    }
    .bt-min{
        padding-bottom: 10px;
    }
    .bt-btn{
        display: inline-block;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        padding: 0 6px;
        margin: 8px 10px 0 0;
        border: 1px solid #c7d0e2;
        color: #DA242A;
        border-radius: 4px;
    }
    .blue{color: #1571E5;}
    .bt-call{ 
        color: #8794AD;
        &:before{
            content:'\e67d';
            font-family: 'iconfont';
            color: #DA242A;
            padding-right: 4px;
        }
    }
</style>
<template>
	<div class="flex-wrap col-flex dt-box">
        <div class="scroll-wrap bt-min">
    		<v-mlist></v-mlist>
    		<header class="flex-wrap row-flex head-box mt10">
    			<div class="page head-rout" 
    	             :class="{ active: follow }">订单详情</div>
    			<div class="page head-rout" 
    	             :class="{ active: traded }">跟进记录</div>
    	        <div class="page head-rout" 
    	             :class="{ active: refund }">处理记录</div>
    		</header>

    		<v-demsg v-if="false"></v-demsg>
    		<v-defol v-if="false"></v-defol>
    		<v-deals ></v-deals>
        </div>
        <footer class="dt-footer">
            <a href="tel:123" class="bt-btn bt-call">呼叫用户</a>
            <div class="bt-btn blue">添加跟进记录</div>
            <div class="bt-btn">确认验车</div>
            <div v-if="false" class="bt-btn">确认提车</div>
        </footer>
	</div>
</template>
<script>
    // import { mapState } from 'vuex'

    export default {
		data() {
			return {
				follow: true,
	            traded: false,
	            refund: false,
			}
		},
        // computed: mapState({ user: state => state.user }),
    }
</script>
