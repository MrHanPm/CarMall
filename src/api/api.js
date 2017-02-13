
import { HTTP, HURL } from './config'
var SESSIONID
let hase = window.location.pathname
if (hase.length > 6) {
  SESSIONID = hase.substring(1,hase.length)
} else {
  SESSIONID = '43e4117524ed279d985526adef06b0b11b9b4d40'
}

class API {
// 获取当天拍卖场列表
  getToday (page) {
    return  `${HTTP}/salesroom/today/${page}/10?session_id=${SESSIONID}`
  }
// 获取登录用户信息
  getUsInfo () {
    return  `${HTTP}/member/info?session_id=${SESSIONID}`
  }

}

// 实例化后再导出
export default new API()
