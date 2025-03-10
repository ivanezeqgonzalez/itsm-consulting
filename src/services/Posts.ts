import { axios } from './axiosConfig'

export const getPosts = (id: string) => {
  return axios.get('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
}
