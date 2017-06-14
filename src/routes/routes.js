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
                path: '/notice', //宣传BANNER
                meta: { pageTitle: '车商城' },
                component: resolve => require(['../pages/notice/'], resolve)
            },
            {
                path: '/msg', //消息
                meta: { pageTitle: '我的消息' },
                component: resolve => require(['../pages/msg/'], resolve)
            },
            {
                path: '/detail/:orderid', //订单详情页
                meta: { pageTitle: '订单详情' },
                component: resolve => require(['../pages/detail/'], resolve)
            },
            {
                path: '/form/:orderid', //添加跟进记录
                meta: { pageTitle: '添加跟进记录' },
                component: resolve => require(['../pages/form/'], resolve)
            },
            {
                path: '/addr', //地址省份
                meta: { pageTitle: '选择省份' },
                component: resolve => require(['../pages/addr/'], resolve)
            },
            {
                path: '/city', //地址城市
                meta: { pageTitle: '选择地区' },
                component: resolve => require(['../pages/addr/list'], resolve)
            },
            {
                path: '/check', //去验车
                meta: { pageTitle: '车商城' },
                component: resolve => require(['../pages/check/'], resolve)
            },
            {
                path: '/follow', //跟进中
                meta: { pageTitle: '订单管理' },
                component: resolve => require(['../pages/follow/'], resolve)
            },
            {
                path: '/traded', //已成交
                meta: { pageTitle: '订单管理' },
                component: resolve => require(['../pages/traded/'], resolve)
            },
            {
                path: '/refund', //已退款
                meta: { pageTitle: '订单管理' },
                component: resolve => require(['../pages/refund/'], resolve)
            },
            {
                path: '/hot', // 成功后宣传图
                meta: { pageTitle: '车商城' },
                component: resolve => require(['../pages/hot/'], resolve)
            },
            {
                path: '/home', //首页
                meta: { pageTitle: '车商城' },
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '/recod', //首页
                meta: { pageTitle: '订单跟踪' },
                component: resolve => require(['../pages/recod/'], resolve)
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/'
            }
        ]
    }
]
