import { useEffect, useState } from 'react'
import TableUsers from '../components/TableUsers/TableUsers'
import { IUser } from '../domain/User'
import './AllUsers.module.css'
import { getUsers } from '../services/Users'

const AllUsers = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(() => true)
    getUsers().then((response) => {
      setUsers(response.data)
      setLoading(() => false)
    })
  }, [])

  return (
    <div>
      <h1>Búsqueda de usuarios</h1>
      <TableUsers users={users} loading={loading} />
    </div>
  )
}

export default AllUsers
