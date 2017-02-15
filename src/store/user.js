import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default {
    state: {
        user: '2323',
        session:{
            isshowclickmsg:0,
            clickmsg:'',
            errcode:0,
            msg:'',
            infomsg:'',
            data:{
                realname:'刘测试',
                usercategory:1,
                dealersalesallbrandsname:'东风柳汽',
                salesmansalesbrandsname:'东风柳汽',
                sessionid:'70060_97af315fba38d5a76f4098df9cffc2ef7f964934',
                iscanrob:1,
                ishavingpwd:1,
                userid:'70060',
                username:'13683672177',
                tel:'13683672177',
                dealername:'卡销宝免费会员测试经销商账号1',
                permission:[{key:'crm',value:1,remark:''},{key:'find_share',value:1,remark:''},{key:'recharge',value:1,remark:''},{key:'cluespage',value:0,remark:''}],
                salesmansalesshopname:'卡销宝免费会员测试经销商账号',
                alermsg:'',
                dealerid:'59580'
            },
            status:1
        }
    },
    
    mutations: {
        [USER_SIGNIN](state, user) {
            sessionStorage.setItem('user', JSON.stringify(user))
            Object.assign(state, user)
        },
        [USER_SIGNOUT](state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    getters:{
        user: state => state.user
    },
    actions: {
        [USER_SIGNIN]({commit}, user) {
            commit(USER_SIGNIN, user)
        },
        [USER_SIGNOUT]({commit}) {
            commit(USER_SIGNOUT)
        }
    }
}
