export const posts = [
  {
	id: 1,
    slug: 'hello-world',
    title: 'Hello World',
    content: 'Questo è il primo post di esempio. Benvenuto nel blog!'
  },
  {
	id: 2,
    slug: 'secondo-post',
    title: 'Secondo Post',
    content: 'Ecco un altro post per testare le rotte dinamiche in Next.js.'
  },
  {
	id: 3,
    slug: 'approfondimento',
    title: 'Approfondimento',
    content: 'Un post più lungo con contenuto di esempio per mostrare la pagina dinamica.'
  },
  {
	id: 4,
    slug: 'novita-in-arrivo',
    title: 'Novità in arrivo',
    content: 'Aggiornamenti recenti sul progetto e novità.'
  },
  {
	id: 5,
    slug: 'come-fare-2-2',
    title: 'Come fare 2+2',
    content: 'Una guida rapida passo-passo per risolvere un problema comune.'
  }
]

function normalizeSlug(s){
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g,'')
}

export function getPostBySlug(slug){
  const target = normalizeSlug(slug)
  return posts.find(p => normalizeSlug(p.slug) === target)
}

