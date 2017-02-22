<style lang="less" scoped>
    .dt-box{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
<template>
    <div class="flex-wrap col-flex dt-box">
        <v-header :table="table"></v-header>
        <div class="scroll-wrap"
        v-infinite-scroll="loadPage"
        infinite-scroll-disabled="isLoad"
        infinite-scroll-distance="60">
            <v-plist :DATA="DATA"></v-plist>
            <v-more :show="loadMore"
                    :top="DATA.length > 0 ? true : false"
                    :no="DATA.length === 0 ? true : false"></v-more>
        </div>
    </div>
</template>
<script>
    import XHR from '../../api/service'
    export default {
        data() {
            return {
                table: 1,
                loadMore: true,
                isLoad: false,
                page:1,
                DATA: []
            }
        },
        created () {
            
        },
        methods:{
            clickTab(index){
                this.table = index
            },
            loadPage(){
                let self = this
                let nowPage = this.page
                let json = {}
                json.status = 1
                json.page = nowPage
                if (this.loadMore) {
                    this.isLoad = true
                    nowPage++
                    XHR.getOrder(json)
                    .then(function (res) {
                        // console.log(res)
                        if (res.data.status === 1) {
                            if(res.data.latest === 1) {
                                self.loadMore = false
                            } else {
                                self.isLoad = false
                                self.page = nowPage
                            }
                            self.DATA.push(...res.data.data)
                        } else {
                            XHR.isErr(res)
                        }
                        
                    })
                    .catch(function (err) {
                        // self.showAlert('')
                        // self.$router.push('notice')
                    })
                }
            }
        }
    }
</script>
