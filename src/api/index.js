// 首页api
import request from '@/http'

// 获取主题列表
export function getTopic (params) {
  return request({
    url: '/topics',
    method: 'get',
    params
  })
}
