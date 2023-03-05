export function save (key, value) {
  if (!value) {
    console.log('必须传入value值')
    return
  }
  window.localStorage.setItem(key, value)
}

export function get (key) {
  return window.localStorage.getItem(key)
}

export function del (key) {
  window.localStorage.setItem(key, null)
  // window.localStorage.removeItem(key)
  // window.localStorage.clear()   //不可以用，原因：是清空所有
}
