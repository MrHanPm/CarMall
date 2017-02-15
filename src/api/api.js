
import { HTTP, HURL } from './config'
let SEK = JSON.parse(localStorage.getItem('vipLodData')) || {}
document.cookie = `session_id=${SEK.data.sessionid}`
class API {
// 
  getIndex () {
    return  `${HTTP}/order/count`
  }
// 获取登录用户信息
  getUsInfo () {
    return  `${HTTP}/member/info?session_id=${SESSIONID}`
  }

}

// 实例化后再导出
export default new API()
