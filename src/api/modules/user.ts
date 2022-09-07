import http from '../index'
/**
 * @name 用户模块
 * 
 */
export const getImage = () => {
  return http.get('/user/image')
}