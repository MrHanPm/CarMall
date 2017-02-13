import xhr from 'axios'
import API from './api'

class XHR {

// 获取当天拍卖场列表
  getToday (page) {
    return xhr({ 
              url: API.getToday(page),
              type: 'get'
          })
    }
// 获取登录用户信息
  getUsInfo () {
    return xhr({ 
              url: API.getUsInfo(),
              type: 'get'
          })
  }



  isAlert (res) {
    if (res.status === 1) {
        if( typeof(res.data) == 'string' ) {
          alert(res.data)
        } else {
          let url = window.location.href
          alert(res.data.error_msg)
          window.location.href = 'http://2b.360che.com/m/logging.php?action=login&referer=' + url
        }
        return false
    } else {
      return true
    }
  }
  
}

// 实例化后再导出
export default new XHR()





