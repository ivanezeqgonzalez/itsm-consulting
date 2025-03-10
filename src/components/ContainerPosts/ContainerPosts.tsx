import { IPost } from '../../domain/Post'
import PostCard from '../PostCard/PostCard'

interface IContaienrPosts {
  posts: IPost[]
}
const ContainerPosts = (props: IContaienrPosts) => {
  const { posts } = props
  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  )
}

export default ContainerPosts
