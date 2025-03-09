import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { USERS_MOCK } from './mocks/users'
import CardUserDetail from '../components/CardUserDetail/CardUserDetail'
import { Button } from '@mui/material'

const UserDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/allUsers')
  }

  return (
    <div>
      <p>User Details page for id {id} </p>
      <CardUserDetail user={USERS_MOCK[0]} />
      <Button onClick={handleBack} variant='contained'>
        Volver al listado
      </Button>
    </div>
  )
}

export default UserDetails
