import { useState } from 'react'
import TableUsers from '../components/TableUsers/TableUsers'
import { IUser } from '../domain/User'
import { USERS_MOCK } from './mocks/users'
import './AllUsers.module.css'

const AllUsers = () => {
  const [users, setUsers] = useState<IUser[]>(USERS_MOCK)
  return (
    <div>
      <h1>Búsqueda de usuarios</h1>
      <TableUsers users={users} />
    </div>
  )
}

export default AllUsers
