import { useState } from 'react';
import TableUsers from '../components/TableUsers/TableUsers';
import { IUser } from '../domain/User';
import { USERS_MOCK } from './mocks/users';


const AllUsers = () => {
  const [users, setUsers] = useState<IUser[]>(USERS_MOCK)
  return <TableUsers users={users}/>
}

export default AllUsers;