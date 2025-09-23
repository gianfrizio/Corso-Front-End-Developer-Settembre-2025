import Link from 'next/link'
import { posts } from '../data/posts'

export default function Page(){
  return (
    <>
      <h1>Home - App Router</h1>
      <p>Questa è la pagina principale del mini progetto Next Router.</p>

      <section>
        <h2>Post recenti</h2>
        <ul>
          {posts.map(p => (
            <li key={p.slug}><Link href={`/posts/${p.slug}`}>{p.title}</Link></li>
          ))}
        </ul>
      </section>
    </>
  )
}
