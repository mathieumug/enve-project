import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Layout({ children }) {
  return (
    <main className={`flex  flex-col relative`}>
      <Navbar />

      {children}

      {/* footer */}
      <Footer />
    </main>
  )
}
