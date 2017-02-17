import axios from 'axios'
import API from './api'
import { SEID } from './api'


class XHR {
  getLogin () {
    return axios.get(API.getLogin(),{params:{sessionid:SEID}})
  }

  getIndex () {
    return axios.get(API.getIndex(),{params:{sessionid:SEID}})

    }

// 订单管理
  getOrder (json) {
    json.sessionid = SEID
    return  axios.get(API.getOrder(),{params:json})
  }
// 订单详情
  getOrderAll (json) {
    return  axios.all([this.getOrderView(json), this.getRecord(json), this.getTrack(json)])
  }
// 订单详情
  getOrderView (json) {
    json.sessionid = SEID
    return  axios.get(API.getOrderView(),{params:json})
  }
// 处理记录
  getRecord (json) {
    json.sessionid = SEID
    return  axios.get(API.getRecord(),{params:json})
  }
// 跟踪记录
  getTrack (json) {
    json.sessionid = SEID
    return  axios.get(API.getTrack(),{params:json})
  }

// 提车
  getExtract (json) {
    json.sessionid = SEID
    return  axios.get(API.getExtract(),{params:json})
  }
// 消息
  getMessage (json) {
    json.sessionid = SEID
    return  axios.get(API.getMessage(),{params:json})
  }
// 修改单条消息状态
  getMsgUpdate (json) {
    json.sessionid = SEID
    return  axios.get(API.getMsgUpdate(),{params:json})
  }
// 删除单条消息
  getDelMsg (json) {
    json.sessionid = SEID
    return  axios.get(API.getDelMsg(),{params:json})
  }


  isAlert (res) {
    if (res.status === 1) {
         
    } else {
      return true
    }
  }
  
}

// 实例化后再导出
export default new XHR()





