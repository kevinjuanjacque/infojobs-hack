import './globals.css'
import { Roboto } from 'next/font/google'

const sourceSerifPro = Roboto({ 
  weight: ["100" , "300" , "400" , "500" , "700" , "900" ],
  subsets: ["cyrillic"],
 })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={sourceSerifPro.className}>{children}</body>
    </html>
  )
}
