import axios from 'axios'

const service = axios.create({
  baseURL: process.env.REACT_APP_TEST_BASEURL,
  timeout: 50000
  // headers: {
  //   Authorization: 'Bearer .......'
  // }
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // console.log('configconfig: ', config)
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // console.error('request', error)
  // 对请求错误做些什么
  return Promise.reject(error)
})

// todo: 规范状态码，添加响应拦截

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // console.log('responseresponse: ', response)
  // 对响应数据做点什么
  return response
}, function (error) {
  // console.error('response', error)
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default service
