import { IPost } from '../../domain/Post'

interface IPostCard {
  post: IPost
}
const PostCard = (props: IPostCard) => {
  const { userId, id, title, body } = props.post
  return (
    <div>
      <p>ID de usuario:{userId}</p>
      <p>ID de Post:{id}</p>
      <p>Título: {title}: 'qui est esse'</p>
      <p>
        Descripción: {body}: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae
        ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui
        aperiam non debitis possimus qui neque nisi nulla'
      </p>
    </div>
  )
}

export default PostCard
