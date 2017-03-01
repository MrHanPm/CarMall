import axios from 'axios'
import qs from 'qs'
import API from './api'
import { DEV_URL, PRO_URL, DEBUG } from './config'

var SEID
let hase = window.location.pathname
if (hase.length > 6) {
  SEID = hase.substring(1,hase.length)
} else {
  SEID = 'oCAQ0szOUWhNtcyYzATotEFYacEo'
}

var config = {
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}

class XHR {
  getWxConfig () {
    return axios.get(API.getWxConfig())
  }

// 读取文章列表
  getArticleList (json) {
    json.openid = SEID
    return axios.get(API.getArticleList(),{params:json})
  }
// 读取文章内容接口
  getArticle (json) {
    json.openid = SEID
    return axios.get(API.getArticle(),{params:json})
  }
// 修改文章接口
  updateArticle (json) {
    json.openid = SEID
    return axios.post(API.updateArticle(),qs.stringify(json),config)
  }
// 创建文章接口
  createArticle (json) {
    json.openid = SEID
    return axios.post(API.createArticle(),qs.stringify(json),config)
  }
// 发布/取消发布 文章接口
  isPublish (json) {
    json.openid = SEID
    return axios.post(API.isPublish(),qs.stringify(json),config)
  }



  isErr (res) {
    if (res.data.status === 0 && res.data.errInfo.indexOf('其它地点登录') !== -1 ) {
        alert(res.data.errInfo)

          // return window.location.href = `${DEV_URL}`

          // return window.location.href = `${PRO_URL}`

    } else {
      alert(res.data.errInfo)
    }
  }
  
}

// 实例化后再导出
export default new XHR





