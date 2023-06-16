"use client"

import Image from 'next/image';
import Link from 'next/link';

import Carousel from 'react-bootstrap/Carousel';


const projectData = [
    {
        title:'Sozinho? Não!',
        description:'Se você se sente sozinho, triste, ou pensa que tudo já acabou veja esse site, ele vai te ajudar! Esse site foi feito como uma forma de ajudar todas as pessoas que estão sofrendo de alguma forma. Uma palavra pode mudar seu dia para melhor, garanto que esse site vai conseguir fazer isso!',
        link:'https://sozinhonao.vercel.app/'
    },
    {
        title:'All Animes VK',
        description:'Um site de animes que fiz no meu período de estudos. O site possui dados de mais de 21 mil animes, mais de 40 genêros de animes e um sistema de busca, venha conferir!',
        link:'https://allanimesvk.vercel.app/'
    },
    {
        title:'Space Newss',
        description:'Um site que fiz focado em melhorar minhas habilidades em criação de interfaces, o site usa uma API da Nasa que todo dia envia uma notícia relacionada ao espaço ou suas missões.',
        link:'https://spacenewss.vercel.app/'
    },
    {
        title:'Cor Aleatória',
        description:'Atualize o site para obter diversas cores diferentes com seus código hexadecimais!',
        link:'https://cor-aleatoria-victor-kiss.vercel.app/'
    },
    {
        title:'Web-Dex',
        description:'Uma versão web da tão conhecida pokédex, o site é totalmente em inglês e é um redesign de um projeto antigo com esse mesmo conceito.',
        link:'https://web-dex.vercel.app/'
    },
    {
        title:'Marvel Data',
        description:'Discovery more about MCU in a simple click! Get datas abouts events, HQs and characters, reliably and quickly. This Website use Marvel API, an oficial API made by Marvel with datas about your characters, comics, events and more!',
        link:'https://marveldata.vercel.app/'
    },
    {
        title:'3D Place',
        description:'3d place is a web project focused on the integration between 3d models and websites. Come see the result!',
        link:'https://3dplace.vercel.app/'
    }
];

export default function Sites() {
  return (
      <>
      <div className='grid-wrapper'>
      <div className='flex-column-wrapper'>
        <h1>Sites</h1>
        <p>Aqui estão alguns projetos feitos por mim ao longo de meus estudos, usam diversas tecnologias, abordam  diversos temas e possuem projetos totalmente em inglês. Os projetos estão em ordem cronológica, desde meu primeiro até o mais recente:</p>

        <Carousel slide={false} indicators={false} variant='dark'>

          {projectData.map((project, index) => (
            <Carousel.Item key={index}>
              <div className="project-card">
                <span>{project.title}</span>
                <p>{project.description}</p>
                <Link href={project.link} target="_blank" rel="noreferrer">Ver site</Link>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    <div className='flex-column-wrapper'>
        <Image src="/robot2.svg" width={800} height={800} alt="robot 2" className="cropped" loading='eager' priority={true} />
    </div>
  </div>
    </>
  )
}
