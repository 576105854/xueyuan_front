import axios from 'axios'
import cookie from 'js-cookie'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:3000/api', // api的base_url
  timeout: 20000 // 请求超时时间
})

//http request 拦截器
service.interceptors.request.use(
  config => {
    //判断cookie是否有有zrgj_token数据
    if(cookie.get('zrgj_token')){
      //把cookie值放到header里
      config.headers['token'] = cookie.get('zrgj_token');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

export default service
