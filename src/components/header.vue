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
             :class="{ active: follow }">跟进中</div>
		<div class="page head-rout" 
             :class="{ active: traded }">已成交</div>
        <div class="page head-rout" 
             :class="{ active: refund }">已退款</div>
	</header>
</template>
<script>
    export default {
        props: {
            follow: Boolean,
            traded: Boolean,
            refund: Boolean,
        },
        methods: {
            // switchThread (id) {
            //   this.$store.dispatch('switchThread', { id })
            // }
        }
    }
</script>
