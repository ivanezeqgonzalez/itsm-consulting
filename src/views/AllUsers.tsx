import { useEffect, useState } from 'react'
import TableUsers from '../components/TableUsers/TableUsers'
import { IUser } from '../domain/User'
import './AllUsers.module.css'
import { getUsers } from '../services/Users'
import FilterUsers, { Options } from '../components/FilterUsers/FilterUsers'

export interface IQueriesFilterUser {
  name?: string
  username?: string
  email?: string
  companyName?: string
}

export const defaultQueries: IQueriesFilterUser = {}
const defaultOptions: Options = {
  name: [],
  username: [],
  email: [],
  companyName: []
}

const filterArrayOf = (arr: IUser[], key: string): any[] => {
  return arr.map((element) => element[key])
}

const getOptions = (users: IUser[]): Options => {
  const nameOptions = filterArrayOf(users, 'name')
  const userNameOptions = filterArrayOf(users, 'username')
  const emailOptions = filterArrayOf(users, 'email')
  const filteredCompany = filterArrayOf(users, 'company')
  const companyNameOptions = filterArrayOf(filteredCompany, 'name')
  return {
    name: nameOptions,
    username: userNameOptions,
    email: emailOptions,
    companyName: companyNameOptions
  }
}

const filterUsers = (users: IUser[], queries: IQueriesFilterUser): IUser[] => {
  const filteredKeys = Object.entries(queries).filter(([k, v]) => v !== '')
  let result = users
  filteredKeys.forEach(([key, value]) => {
    result = result.filter((user) => user[key] === value)
  })
  return result
}

const AllUsers = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [queries, setQueries] = useState<IQueriesFilterUser>(defaultQueries)
  const [options, setOptions] = useState<Options>(defaultOptions)
  const searchAllUsers = () => {
    setLoading(() => true)
    getUsers().then((response) => {
      setUsers(response.data)
      setLoading(() => false)
    })
  }

  const handleClearQueries = () => {
    setQueries(defaultQueries)
    searchAllUsers()
  }
  useEffect(() => {
    searchAllUsers()
  }, [])

  useEffect(() => {
    setOptions(getOptions(users))
  }, [users])

  useEffect(() => {
    setUsers(filterUsers(users, queries))
  }, [queries])

  return (
    <div>
      <h1>Búsqueda de usuarios</h1>
      <FilterUsers setQueries={setQueries} options={options} clearQueries={handleClearQueries} />
      <TableUsers users={users} loading={loading} />
    </div>
  )
}

export default AllUsers
