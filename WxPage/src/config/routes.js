import App from '../app'

export default [
    {
        path: '/',
        meta: { pageTitle: '车商城' },
        component: App,
        children: [
            {
                path: '/', //loding
                meta: { pageTitle: '车商城' },
                component: resolve => require(['../pages/loding/'], resolve)
            },
            {
                path: '/msg', //消息
                meta: { pageTitle: '我的消息' },
                component: resolve => require(['../pages/msg/'], resolve)
            },
            {
                path: '/form/:articleid', //添加跟进记录
                meta: { pageTitle: '添加跟进记录' },
                component: resolve => require(['../pages/form/'], resolve)
            },
            {
                path: '/home', //首页
                meta: { pageTitle: '车商城' },
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/'
            }
        ]
    }
]
