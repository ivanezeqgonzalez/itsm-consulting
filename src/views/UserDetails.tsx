import React from 'react'
import { useParams } from 'react-router'

const UserDetails = () => {
  const { id } = useParams()
  return <div>User Details page for id {id} </div>
}

export default UserDetails
