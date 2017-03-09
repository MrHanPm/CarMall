import Vue from 'vue'
import VueRouter from 'vue-router'
import InfiniteScroll from 'vue-infinite-scroll'
import routes from './routes/routes'
import WxTextareaImg from './util'

import components from './components/' //加载公共组件

import './css/common.css'

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

Vue.use(VueRouter)
Vue.use(InfiniteScroll)
Vue.use(WxTextareaImg)

const router = new VueRouter({
    routes
})
router.beforeEach(({meta, path}, from, next) => {
    // document.title = meta.pageTitle   // 动态更新页面标题
    next()
})

new Vue({ router }).$mount('#app')

