
import axios from 'axios'

export const http = axios.create({
  baseURL: process.env.API_URL
})

export function setToken (token) {
  http.defaults.headers.common.Authorization = `Bearer ${token}`
}

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return http
    }
  })
}
