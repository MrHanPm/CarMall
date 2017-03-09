
import { HTTP_DEV,HTTPS, DEBUG } from './config'

const HTTP = DEBUG ? HTTP_DEV : HTTPS
class API {
  getWxConfig () {
    return  `${HTTP}/api/auth/WX/GetAuthorization`
  }

// 读取文章列表
  getArticleList () {
    return  `${HTTP}/api/kuaibao/Article/GetArticleList`
  }
// 读取文章内容接口
  getArticle () {
    return  `${HTTP}/api/kuaibao/Article/GetArticle`
  }
// 修改文章接口
  updateArticle () {
    return  `${HTTP}/api/kuaibao/Article/PostUpdateArticle`
  }
// 创建文章接口
  createArticle () {
    return  `${HTTP}/api/kuaibao/Article/PostCreateArticle`
  }
// 发布/取消发布 文章接口
  isPublish () {
    return  `${HTTP}/api/kuaibao/Article/PostArticlePublish`
  }

}

// 实例化后再导出
export default new API
