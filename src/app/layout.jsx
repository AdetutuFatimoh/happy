
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './globals.css'
import { Fasthand } from 'next/font/google'

const fast = Fasthand({ 
  subsets: ['latin'],
  weight: ['400'] 
})

export const metadata = {
  title: 'Learning Next js',
  description: 'Understanding the principles of next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fast.className}>
        <Navbar/>
        {children}
    
        <Footer/>
        </body>
    </html>
  )
}
