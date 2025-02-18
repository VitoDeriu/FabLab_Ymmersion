import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'FabLab',
  description: 'Plateforme de réservation du FabLab',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
