import { useNavigate, useParams } from 'react-router'
import CardUserDetail from '../components/CardUserDetail/CardUserDetail'
import { Backdrop, Button } from '@mui/material'
import ContainerPosts from '../components/ContainerPosts/ContainerPosts'
import { useEffect, useState } from 'react'
import { IUser } from '../domain/User'
import { getUser } from '../services/Users'
import { IPost } from '../domain/Post'
import { getPosts } from '../services/Posts'

const UserDetails = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<IUser | null>(null)
  const [posts, setPosts] = useState<IPost[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { id } = useParams()

  const handleBack = () => {
    navigate('/allUsers')
  }

  useEffect(() => {
    if (!id) return
    getUser(id).then((response) => {
      setUser(response.data)
    })
    getPosts(id).then((response) => {
      setPosts(response.data)
      setLoading(() => false)
    })
  }, [])

  if (id === undefined) {
    return (
      <div>
        <h1>Detalles del usuario</h1>
        <h3>No se ha proporcionado un ID</h3>
      </div>
    )
  }

  return (
    <div>
      {loading || user === null ? (
        <Backdrop open={loading} style={{display: 'flex', flexDirection: 'column' }}>
          <h1>Detalles del usuario</h1>
          <h2>Cargando datos...</h2>
        </Backdrop>
      ) : (
        <>
          <h1>Detalles del usuario</h1>
          <CardUserDetail user={user} />
          <h2>Posteos</h2>
          <ContainerPosts posts={posts} />
          <Button onClick={handleBack} variant='contained'>
            Volver al listado
          </Button>
        </>
      )}
    </div>
  )
}

export default UserDetails
