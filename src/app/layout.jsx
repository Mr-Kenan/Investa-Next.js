import Header from '@/components/Header'
import './globals.css'
import { Container } from 'postcss'


export const metadata = {
  title: 'Investa',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header></Header>
        {children}
        </body>
    </html>
  )
}
