import axios from 'axios'
export function request(config) {
  const instants1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  instants1.interceptors.request.use(res => {
    // 操作完以后要返回，不然数据被拦截
    return res;
  }, err => {
    console.log(err);
  })
  instants1.interceptors.response.use(res => {
    // 操作完以后要返回，不然数据被拦截
    return res.data;
  }, err => {
    console.log(err);
  })
  return instants1(config);
}