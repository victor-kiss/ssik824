"use client"
import Navbar from './components/navbar/navbar'
import GridWrapper from './layout/grid-wrapper'
import FlexWrapper from './layout/flex-wrapper'

import CubeScene from './scenes/cube-scene'
import Card from './components/card/card'
import Footer from './components/footer/footer'

import styled from 'styled-components'


const LinkButton = styled.a`
  color:#FFF;
  text-decoration:none;
  border-radius:10px;
  padding:0.8rem 1.2rem;
  background:#696eff;
  display:block;
  margin:10px 0;
  font-weight:100;

  &:hover{
   font-weight:bold;
   transition:.1s ease-in-out;
   color:#FFF;
   letter-spacing:1px;
  }
`

export default function Home() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <GridWrapper width="100vw" height="100vh" margin="40px 60px" padding="0" mobileReverse={false}>
          <FlexWrapper direction='column' align='baseline' justify='center' width='100%' height='auto' margin='0' padding='0' wrap='no-wrap' position='inherit'>
          <h1>Visão Geral</h1>
          <p>Meu nome é Victor Kiss, mas pode me chamar de ssik, tenho 18 anos e sou desenvolvedor front-end! Meu foco é na criação de interfaces intuitivas, com um bom design e código.Minha jornada em programação começou no ano de 2020, quando tive vontade de entender mais sobre tecnologia e me aprofundei na área de desenvolvimento web. No mesmo ano saiu meu primeiro projeto a <a href="https://victor-kiss.github.io/webdex/" rel="noreferrer" target="_blank">webdex</a>, esse projeto marca o início da minha constante evolução em front-end!</p>
          <p>Atualmente estudo sistemas para internet na  instituição Estácio de Sá e estou sempre fazendo algo relacionado a T.I, descubra mais abaixo:</p>

          <LinkButton href={process.env.GITHUB} rel="noreferrer" target="_blank">GitHub</LinkButton>
          <LinkButton href={process.env.CODEPEN} rel="noreferrer" target="_blank">Code Pen</LinkButton>
          </FlexWrapper>
          <CubeScene/>
      </GridWrapper>
      <FlexWrapper width="100%" height="100vh" align='center' justify='center' direction='row'  margin='0' padding='0' wrap='no-wrap' position='inherit'>
        <Card title='Certificados' description='Descubra meus cursos realizados para ter uma base de conhecimento e aprimorar minhas habilidades.' link="/certificados"/>
        <Card title='Conhecimentos' description='Veja todos os meus conhecimentos adquiridos e aplicados na criação dos meus projetos' link='/conhecimentos'/>
        <Card title='Sites' description='Veja todos os meus projetos já realizados de forma cronológica, os projetos possuem diferentes temas e usam diferentes tecnologias.' link='/sites'/>
      </FlexWrapper>
      <Footer/>
    </>
  )
}

