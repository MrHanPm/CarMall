<style lang="less" scoped>
	
</style>
<template>
	<div class="jump-cover">
          <div class="loading visible">
              <span class="loading-ring"> </span>
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
