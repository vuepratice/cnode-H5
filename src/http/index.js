import axios from 'axios'
let instance = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 10000
})

// 请求拦截
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response)
  const res = response.data
  if (res.success) {
    return response
  }
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '请求错误'
        break
      case 500:
        error.message = '服务端出错'
        break
    }
  } else {
    error.message = '网络异常'
  }
  alert(error.message)
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
