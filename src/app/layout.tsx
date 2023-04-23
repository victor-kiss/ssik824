import Navbar from './components/navbar/navbar';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });
export const metadata:Metadata = {
    title:'ssik824',
    authors:[{name:'ssik824'}],
    description:'Venha conhecer um pouco mais sobre ssik824!',
    generator:'victor kiss, ssik824, desenvolvedor web, front-end, web, web-design, web projects, projetos web, github projects'
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="p:domain_verify" content="ae78aae05c72e57e168bfb14302ac101"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous"/> 
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"></script>
        <link rel='stylesheet' href='/globals.css'/>
      </head>
      <body className={inter.className} id="bg-dark">
      <header>
        <Navbar/>
      </header>
        {children}
        <footer className='footer'>
        <span>Desenvolvido com  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EA5455" className="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg> e <a href="https://nextjs.org/">Next.js</a></span>
        </footer>
      </body>
    </html>
  )
}
