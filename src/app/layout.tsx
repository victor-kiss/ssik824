import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="keywords" content="victor kiss,programador,victor kiss, ui/ux, front-end, front end, web-design, web design, github projects, victor kiss ssik824"/>  
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"/>
        <meta name="p:domain_verify" content="ae78aae05c72e57e168bfb14302ac101"/>
        <meta name="author" content="ssik824"/>
        <meta name="description" content="Venha explorar o mundo de ssik824!"/>
        <meta name="p:domain_verify" content="ae78aae05c72e57e168bfb14302ac101"/>

      </head>
      <body className={inter.className} id="bg-dark">
        {children}
      </body>
    </html>
  )
}
