"use client"

import Navbar from '../components/navbar/navbar'
import GridWrapper from '../layout/grid-wrapper'
import FlexWrapper from '../layout/flex-wrapper'
import Card from '../components/card/card'
import Footer from '../components/footer/footer'
import Carousel from 'react-bootstrap/Carousel';


export default function Certificados() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <GridWrapper width="100vw" height="100vh" margin="40px 60px" mobileReverse={false}>
          <FlexWrapper direction='column' align='baseline' justify='center'>
          <h1>Certificados</h1>
          <p>Aqui estão meus certificados, são frutos de todos os meus estudos, esforço e dedicação. Frequentemente uso os conhecimentos que adquiri para realizar diversas tarefas como programação, design, estudos de documentação e novas ferramentas para web dentre outras tarefas.</p>
          <p>O conteúdo dos cursos variam de acordo com meus interesses e gostos.</p>
          </FlexWrapper>
          <FlexWrapper direction='column' align='center' justify='center'>
          <Carousel variant="dark" indicators={false}>
        <Carousel.Item>
            <img
            className="d-block cropped"
            src="/diploma-ingles.jpg"
            alt="Diploma Ingles"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block cropped"
            src="/diploma-marketing-digital.jpg"
            alt="Diploma Marketing Digital"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block cropped"
            src="/diploma-web-design.jpg"
            alt="Diploma Web Design"
            />
      </Carousel.Item>
      <Carousel.Item>
            <img
            className="d-block cropped"
            src="/diploma-web1.jpg"
            alt="Diploma Desenvolvimento Web 1"
            />
      </Carousel.Item>
      <Carousel.Item>
            <img
            className="d-block cropped"
            src="/diploma-web2.png"
            alt="Diploma Desenvolvimento Web 2"
            />
      </Carousel.Item>
    </Carousel>
          </FlexWrapper>
      </GridWrapper>
      <FlexWrapper width="100%" height="100vh" align='center' justify='center'>
        <Card title='Certificados' description='Descubra meus cursos realizados para ter uma base de conhecimento e aprimorar minhas habilidades.' link="#"/>
        <Card title='Conhecimentos' description='Veja todos os meus conhecimentos adquiridos e aplicados na criação dos meus projetos' link='#'/>
        <Card title='Sites' description='Veja todos os meus projetos já realizados de forma cronológica, os projetos possuem diferentes temas e usam diferentes tecnologias.' link='#'/>
      </FlexWrapper>
      <Footer/>
    </>
  )
}
