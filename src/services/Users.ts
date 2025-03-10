import { axios } from './axiosConfig'

export const getUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}

export const getUser = (id: string) => {
  return axios.get('https://jsonplaceholder.typicode.com/users/' + id)
}
