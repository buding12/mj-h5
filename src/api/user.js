import request from '@/utills/request'
export function register (data) {
  // request请求,return将结果return出去
  return request({
    method: 'POST',
    url: '/h5/user/register',
    data
  })
}

export function login (data) {
  // request请求,return将结果return出去
  return request({
    method: 'POST',
    url: '/h5/user/login',
    data
  })
}

export function getUserInfo () {
  // request请求,return将结果return出去
  return request({
    method: 'GET',
    url: '/h5/user/currentUser'

  })
}
export function del () {
  // request请求,return将结果return出去
  return request({
    method: 'GET',
    url: '/h5/user/logout'

  })
}
