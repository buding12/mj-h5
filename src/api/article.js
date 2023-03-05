import request from '@/utills/request'
export function getArticleList (params) {
  return request({
    url: '/h5/interview/query',
    method: 'GET',
    params
  })
}
