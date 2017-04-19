
import { HTTP_DEV,HTTPS, DEBUG } from './config'
let SEK = JSON.parse(localStorage.getItem('vipLodData')) || {}
let SESSION = '70115_ff4e3f088e1476267abc5c22ac4ff96740500dde'
export const SEID = DEBUG ? SESSION : SEK.sessionid

const HTTP = DEBUG ? HTTP_DEV : HTTPS
class API {
// 登录
  getLogin () {
    return  `${HTTP}/login`
  }
// 获取首页数据
  getIndex () {
    return  `${HTTP}/order/count`
  }
// 订单管理
  getOrder () {
    return  `${HTTP}/order/index`
  }
// 订单详情
  getOrderView () {
    return  `${HTTP}/order/view`
  }
// 处理记录
  getRecord () {
    return  `${HTTP}/record/index`
  }
// 跟踪记录
  getTrack () {
    return  `${HTTP}/track/index`
  }
// 添加跟踪记录
  getCreate () {
    return  `${HTTP}/track/create?sessionid=${DEBUG ? SESSION : SEK.sessionid}`
    // return  `${HTTP}/track/create`
  }
// 地区接口
  getRegion () {
    return  `${HTTP}/track/region`
  }
// 判断验车/提车
  getVerify () {
    return  `${HTTP}/verify/view`
  }
// 验车
  getInspec () {
    return  `${HTTP}/verify/inspection`
  }
// 提车
  getExtract () {
    return  `${HTTP}/verify/extract`
  }
// 消息
  getMessage () {
    return  `${HTTP}/message/index`
  }
// 修改单条消息状态
  getMsgUpdate () {
    return  `${HTTP}/message/update`
  }
// 修改全部消息状态
  getAllMsg () {
    return  `${HTTP}/message/batch-update`
  }
// 删除单条消息
  getDelMsg () {
    return  `${HTTP}/message/delete`
  }
// 清空消息
  getDelAll () {
    return  `${HTTP}/dealer-message/batch-delete`
  }

}

// 实例化后再导出
export default new API
