import { useNavigate } from 'react-router'
import { USERS_MOCK } from './mocks/users'
import CardUserDetail from '../components/CardUserDetail/CardUserDetail'
import { Button } from '@mui/material'
import { POSTS_MOCK } from './mocks/posts'
import ContainerPosts from '../components/ContainerPosts/ContainerPosts'

const UserDetails = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/allUsers')
  }

  return (
    <div>
      <h1>Detalles del usuario</h1>
      <CardUserDetail user={USERS_MOCK[0]} />
      <h2>Posteos</h2>
      <ContainerPosts posts={POSTS_MOCK} />
      <Button onClick={handleBack} variant='contained'>
        Volver al listado
      </Button>
    </div>
  )
}

export default UserDetails
