import { posts, getPostBySlug } from '../../../data/posts'
import { notFound } from 'next/navigation'

export default async function PostPage({ params }){
  const { slug } = await params
  const post = getPostBySlug(slug)
  if(!post) return notFound()

  return (
    <div style={{padding:'20px', fontFamily:'sans-serif'}}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export function generateStaticParams(){
  return posts.map(post => ({ slug: post.slug }))
}
