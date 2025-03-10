import { IPost } from '../../domain/Post'
import styles from './PostCard.module.css'

interface IPostCard {
  post: IPost
}
const PostCard = (props: IPostCard) => {
  const { id, title, body } = props.post
  return (
    <div className={styles.cardPost}>
      <p className={styles.idPost}><b>ID:</b> {id}</p>
      <p className={styles.title}><b>Título:</b> {title}</p>
      <p className={styles.body}><b>Descripción:</b> {body}</p>
    </div>
  )
}

export default PostCard
