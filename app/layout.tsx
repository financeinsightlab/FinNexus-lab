import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'FinNexus Lab',
  description: 'Financial Intelligence Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">

        {/* Navbar (fixed) */}
        <Navbar />

        {/* Main Content */}
        <main className="pt-24 min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  )
}