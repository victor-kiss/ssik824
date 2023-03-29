
"use client"

import Navbar from '../components/navbar/navbar'
import GridWrapper from '../layout/grid-wrapper'
import FlexWrapper from '../layout/flex-wrapper'
import Card from '../components/card/card'
import Footer from '../components/footer/footer'
import Carousel from 'react-bootstrap/Carousel';
import LaptopScene from '../scenes/laptop-scene'
import styled from 'styled-components'

const ProjectCard = styled.div`
display: flex;
flex-direction: column;
align-items:baseline;
justify-content: space-between;
width: 400px;
height:400px;
border-radius: 10px;
background:#202020;
backdrop-filter: blur(5px);
box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
padding:15px;
margin:50px;

span{
    padding:20px;
    font-size:20px;
    font-weight: bold;
    color:#FFF;
    margin:0 auto;
    letter-spacing: 1px;
}

a{
    color:#FFF;
    background:#696eff;
    padding:1rem 1.5rem;
    border-radius:10px;
    font-weight:100;
    margin:10px 0;
}
p{
  padding:5px;
}
@media screen and (max-width: 768px){
    position:relative;
    width:calc(80%);
    height:auto;
    margin:20px auto;
}
`

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
]

export default function Sites() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <GridWrapper width="100vw" height="100vh" margin="40px 60px" mobileReverse={true} padding="0">
          <FlexWrapper direction='column' align='baseline' justify='center' width="auto" height="auto" position="inhreit" wrap="wrap" margin="0" padding="0">
          <h1>Sites</h1>
          <p>Aqui estão alguns projetos feitos por mim ao longo de meus estudos, usam diversas tecnologias além de abordar diversos temas, os projetos estão em ordem cronológica, desde meu primeiro até o mais recente:</p>

          <Carousel slide={false} indicators={false}>
         
            {
               projectData.map((project, index) => (
                <Carousel.Item key={index}>
                 <ProjectCard>
                  <span>{project.title}</span>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer">Ver site</a>
                 </ProjectCard>
                 </Carousel.Item>
               ))
            }
        </Carousel>
        </FlexWrapper>
         <LaptopScene/>
      </GridWrapper>
      <FlexWrapper direction="row" width="100%" height="100vh" align='center' justify='center' position="inhreit" wrap="wrap" margin="0" padding="0">
        <Card title='Certificados' description='Descubra meus cursos realizados para ter uma base de conhecimento e aprimorar minhas habilidades.' link="/certificados"/>
        <Card title='Conhecimentos' description='Veja todos os meus conhecimentos adquiridos e aplicados na criação dos meus projetos' link='/conhecimentos'/>
        <Card title='Sites' description='Veja todos os meus projetos já realizados de forma cronológica, os projetos possuem diferentes temas e usam diferentes tecnologias.' link='/sites'/>
      </FlexWrapper>
      <Footer/>
    </>
  )
