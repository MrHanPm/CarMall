import App from '../app'

export default [
    {
        path: '/',
        meta: { pageTitle: '微发布' },
        component: App,
        children: [
            {
                path: '/', //loding
                meta: { pageTitle: '加载' },
                component: resolve => require(['../pages/loding/'], resolve)
            },
            {
                path: '/form/:articleid', //添加跟进记录
                meta: { pageTitle: '文章编辑' },
                component: resolve => require(['../pages/form/'], resolve)
            },
            {
                path: '/home', //首页
                meta: { pageTitle: '文章列表' },
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/'
            }
        ]
    }
]
