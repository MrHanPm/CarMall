<style lang="less" scoped>
    .image {
        width: 100%;
        height: auto;
    }
</style>
<template>
    <div class="page-box">
        <img :src="image" class="image" alt="">
    </div>
</template>
<script>
    import image from './yes.gif'
    export default {
        data() {
            return {
                image
            }
        }
    }
</script>
