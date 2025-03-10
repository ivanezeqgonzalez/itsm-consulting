import { IPost } from '../../domain/Post'
import PostCard from '../PostCard/PostCard'
import styles from './ContainerPosts.module.css'
interface IContaienrPosts {
  posts: IPost[]
}
const ContainerPosts = (props: IContaienrPosts) => {
  const { posts } = props
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  )
}

export default ContainerPosts
