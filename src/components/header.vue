<style lang="less" scoped>
	.head-rout {
		text-align: center;
        line-height: 44px;
        font-size: 15px;
	}
    .head-box .active{color: #DA242A; border-bottom: 2px solid #DA242A;}
</style>
<template>
	<header class="flex-wrap row-flex head-box">
		<div class="page head-rout" 
             :class="{ active: table === 1 }"
             @click="jump({path:'/follow',query:{s:$route.query.s,g:2}})">抵扣券</div>
		<div class="page head-rout" 
             :class="{ active: table === 2 }"
             @click="jump({path:'/traded',query:{s:$route.query.s,g:1}})">一口价</div>
        <!-- <div class="page head-rout" 
             :class="{ active: table === 3 }"
             @click="jump('/refund')">已退款</div> -->
	</header>
</template>
<script>
    export default {
        props: {
            table: {
                type: Number,
                default: 1
            }
        }
    }
</script>
