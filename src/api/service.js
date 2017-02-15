import axios from 'axios'
import API from './api'
// axios.defaults.withCredentials = true
// axios.defaults.headers.cookies = document.cookie
var http = axios.create({
  withCredentials: true,
  headers: {'Cookie': document.cookie}

})
// http.defaults.withCredentials = true

// axios({
//   method: 'get',
//   headers: {'Cookie': document.cookie},
//   // url: API.getIndex(),
//   withCredentials: true
// })

class XHR {

// 
  getIndex () {
    return http.get(API.getIndex())
    }

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





