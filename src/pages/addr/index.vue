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
        .jump-cover{position: fixed;left:0;top:0;width: 100%;height:100%;z-index: 1001;background: #f5f5f5;}
        .jump-cover .loading{position: absolute;margin:0;left:50%;top:50%;-webkit-transform: translate3d(-50%,-50%,0);transform: translate3d(-50%,-50%,0);}
	}
</style>
<template>
	<ul class="ad-box">
		<li v-for="(item, index) in DATA"
		:class="{active: val == index}"
		@click="addPos(index,item)">{{item}}</li>
        <li v-if="loadMore" class="jump-cover">
            <div class="loading visible">
                <span class="loading-ring"> </span>
            </div>
        </li>
	</ul>
</template>
<script>
    import XHR from '../../api/service'

    export default {
		data() {
			return {
				DATA: {},
                loadMore: true,
				val: '',
			}
		},
        created () {
        	let self = this
        	let json = {}
        	json.type = 0
        	json.parent_id = 0
        	XHR.getRegion(json)
        	.then(function (res) {
                if (res.data.status === 1) {
                    self.loadMore = false
                    self.DATA = res.data.data
                } else {
                    XHR.isErr(res)
                }
            })
            .catch(function (err) {
                // console.log(err, errs, errsd)
            })
            let ADDRS = JSON.parse(localStorage.getItem('MallAddrs')) || ''
            if(ADDRS !== ''){
            	self.val = ADDRS.val
            }

        },
        methods: {
        	addPos (val,txt) {
        		let json = {}
		        this.val = val
        		json.val = val
        		json.txt = txt
        		localStorage.removeItem('MallCitys')
        		localStorage.setItem('MallAddrs',JSON.stringify(json))
        		this.$router.push('/city')
        	}
        }
    }
</script>
