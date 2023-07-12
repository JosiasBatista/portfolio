import Navbar from '@/components/Navbar'
import './globals.css'
import Hero from '@/components/Hero'

export const metadata = {
  title: 'Josias | Portfolio',
  description: '3D Portfolio to showcase my projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
          {children}
        </main>
      </body>
    </html>
  )
}
