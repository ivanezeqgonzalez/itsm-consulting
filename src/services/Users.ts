import { axios } from './axiosConfig'

export const getUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}
