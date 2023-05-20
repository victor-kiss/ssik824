import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from './components/navbar/navbar';
import { Inter } from 'next/font/google';
import Link from 'next/link';
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
      </head>
      <body className={inter.className} id="bg-dark">
      <header>
        <Navbar/>
      </header>
        {children}
        <div className='flex-wrapper'>
          <div className='card'>
              <span>Certificados</span>
              <p>Descubra meus cursos realizados para ter uma base de conhecimento e aprimorar minhas habilidades.</p>
              <Link href="/certificados">Ver</Link>
          </div>
          <div className='card'>
              <span>Conhecimentos</span>
              <p>Veja todos os meus conhecimentos adquiridos e aplicados na criação dos meus projetos</p>
              <Link href="/conhecimentos">Ver</Link>
          </div>
          <div className='card'>
              <span>Sites</span>
              <p>Veja todos os meus projetos já realizados de forma cronológica, os projetos possuem diferentes temas e usam diferentes tecnologias</p>
              <Link href="/sites">Ver</Link>
          </div>
        </div>
        <footer className='footer'>
        <span>Desenvolvido com  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EA5455" className="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg> e <a href="https://nextjs.org/" rel="noreferrer" target="_blank" >Next.js. </a></span>
        <span>Ilustrações feitas por <a href="https://storyset.com/" rel="noreferrer" target="_blank"> Story Set </a><span>
        </footer>
      </body>
    </html>
  )
}
