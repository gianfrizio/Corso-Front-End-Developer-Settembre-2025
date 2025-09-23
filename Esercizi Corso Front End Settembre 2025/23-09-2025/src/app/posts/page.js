import Link from 'next/link'
import { posts } from '@/data/posts'

export default function PostsPage(){
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
