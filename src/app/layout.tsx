import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="keywords" content="victor kiss, ssik824, sk824,design, designer, programador,victor kiss github, vercel, ui/ux, front-end, front end, web-design, web design, github projects, victor kiss ssik824"/>
        <meta name="author" content="ssik824"/>
        <meta color='#242424'/>
        <meta name="description" content="Venha explorar o mundo de ssik824!"/>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="Content-Language" content="pt-br"/>
        <meta name="robots" content="index, follow"/>
        <meta name="google-site-verification" content="VhQSA-WAgNF6QY7IUMhGqwGRrRVmaGFvypFs0QZHGrM" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"/>
        <meta name="p:domain_verify" content="ae78aae05c72e57e168bfb14302ac101"/>
        <title>ssik824</title>
      </head>
      <body className=`${inter.className} bg-dark>
        {children}
      </body>
    </html>
  )
}
