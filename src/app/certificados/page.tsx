"use client"

import Navbar from '../components/navbar/navbar'
import GridWrapper from '../layout/grid-wrapper'
import FlexWrapper from '../layout/flex-wrapper'
import Card from '../components/card/card'
import Footer from '../components/footer/footer'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

export default function Certificados() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <GridWrapper width="100vw" height="100vh" margin="40px 60px" mobileReverse={false} padding="0">
          <FlexWrapper direction='column' align='baseline' justify='center' height='auto' margin='0' padding='0' wrap='no-wrap' position='inherit' width='auto'>
          <h1>Certificados</h1>
          <p>Aqui estão meus certificados, são frutos de todos os meus estudos, esforço e dedicação. Frequentemente uso os conhecimentos que adquiri para realizar diversas tarefas como programação, design, estudos de documentação e novas ferramentas para web dentre outras tarefas.</p>
          <p>O conteúdo dos cursos variam de acordo com meus interesses e gostos.</p>
          </FlexWrapper>
          <FlexWrapper direction='column' align='center' justify='center' height='auto' margin='0' padding='0' wrap='no-wrap' position='inherit' width='auto'>
          <Carousel variant="dark" indicators={false}>
        <Carousel.Item>
            <Image width={650} height={450}
            className="cropped"
            src="/diploma-ingles.jpg"
            alt="Diploma Ingles"
            />
        </Carousel.Item>
        <Carousel.Item>
            <Image width={650} height={450}
            className="cropped"
            src="/diploma-marketing-digital.jpg"
            alt="Diploma Marketing Digital"
            />
        </Carousel.Item>
        <Carousel.Item>
            <Image width={650} height={450}
            className="cropped"
            src="/diploma-web-design.jpg"
            alt="Diploma Web Design"
            />
      </Carousel.Item>
      <Carousel.Item>
            <Image width={650} height={450}
            className="cropped"
            src="/diploma-web1.jpg"
            alt="Diploma Desenvolvimento Web 1"
            />
      </Carousel.Item>
      <Carousel.Item>
            <Image width={650} height={450}
            className="cropped"
            src="/diploma-web2.png"
            alt="Diploma Desenvolvimento Web 2"
            />
      </Carousel.Item>
    </Carousel>
          </FlexWrapper>
      </GridWrapper>
      <FlexWrapper width="100%" height="100vh" align='center' justify='center' margin='0' padding='0' wrap='no-wrap' position='inherit' direction='row'>
        <Card title='Certificados' description='Descubra meus cursos realizados para ter uma base de conhecimento e aprimorar minhas habilidades.' link="/certificados"/>
        <Card title='Conhecimentos' description='Veja todos os meus conhecimentos adquiridos e aplicados na criação dos meus projetos' link='/conhecimentos'/>
        <Card title='Sites' description='Veja todos os meus projetos já realizados de forma cronológica, os projetos possuem diferentes temas e usam diferentes tecnologias.' link='/sites'/>
      </FlexWrapper>
      <Footer/>
    </>
  )
}

