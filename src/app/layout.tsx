import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })
import { Metadata } from 'next'

export const metadata:Metadata = {
    title:'ssik824',
    authors:[{name:'ssik824'}],
    description:'Venha conhecer um pouco mais sobre ssik824!',
    generator:'victor kiss, ssik824, desenvolvedor web, front-end, web, web-design, web projects, projetos web, github projects'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"/>
        <meta name="p:domain_verify" content="ae78aae05c72e57e168bfb14302ac101"/>
      </head>
      <body className={inter.className} id="bg-dark">
        {children}
      </body>
    </html>
  )
}
