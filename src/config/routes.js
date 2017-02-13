import App from '../app'

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/loding', //loding
                component: resolve => require(['../pages/loding/'], resolve)
            },
            {
                path: '/notice', //宣传BANNER
                component: resolve => require(['../pages/login/'], resolve)
            },
            {
                path: '/msg', //消息
                component: resolve => require(['../pages/msg/'], resolve)
            },
            {
                path: '/check', //去验车
                component: resolve => require(['../pages/check/'], resolve)
            },
            {
                path: '/follow', //跟进中
                component: resolve => require(['../pages/follow/'], resolve)
            },
            {
                path: '/traded', //已成交
                component: resolve => require(['../pages/login/'], resolve)
            },
            {
                path: '/refund', //已退款
                component: resolve => require(['../pages/login/'], resolve)
            },
            {
                path: '/login', //登录
                meta: { auth: false, pageTitle: '登录' },
                component: resolve => require(['../pages/login/'], resolve)
            },
            {
                path: '/signout', //退出
                meta: { pageTitle: '退出' },
                component: resolve => require(['../pages/signout/'], resolve),
            },
            {
                path: '/home', //个人主页
                meta: { pageTitle: '个人主页' },
                component: resolve => require(['../pages/home/'], resolve)
            },
            {
                path: '/', //首页
                meta: { auth: false, pageTitle: '首页' },
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/login'
            }
        ]
    }
]
