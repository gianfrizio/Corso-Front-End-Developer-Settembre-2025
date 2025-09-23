import './globals.css'

export const metadata = {
  title: 'Next Router - 23-09-2025',
  description: 'Esercizio app router'
}
metadata.icons = {
  icon: '/favicon.ico'
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <header style={{padding:16, borderBottom:'1px solid #eee'}}>
          <nav style={{maxWidth:900, margin:'0 auto', display:'flex', gap:16}}>
            <a href="/">Home</a>
          </nav>
        </header>

        <main style={{maxWidth:900, margin:'24px auto', padding:'0 16px'}}>
          {children}
        </main>

        <footer style={{padding:16, borderTop:'1px solid #eee', marginTop:48}}>
          <div style={{maxWidth:900, margin:'0 auto'}}>Footer - Esercizio 23-09-2025</div>
        </footer>
      </body>
    </html>
  )
}
