"use client"


import GridWrapper from '../layout/grid-wrapper'
import FlexWrapper from '../layout/flex-wrapper'
import Card from '../components/card/card'
import Carousel from 'react-bootstrap/Carousel';
import SphereScene from '../scenes/sphere-scene'
import styled from 'styled-components'

const SkillsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:#202020;
  width:300px;
  height:280px;
  border-radius:10px;
  margin:20px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 1);
 
  span{
    color:#FFF;
    text-transform:uppercase;
    letter-spacing:1px;
    font-size:16px;
    text-shadow: 1px 1px 10px #FFF;
  }
`

const skills:String[] = ["html", "css", "javascript", "react", "next.js", "node", "bootstrap","react bootstrap","web-design","google search console","ui/ux","SEO","git","github","windows","mac OS","linux","canva","photoshop express"]

export default function Certificados() {
  return (
    <>
      <GridWrapper width="100vw" height="100vh" margin="40px 60px" mobileReverse={true} padding="0">
          <FlexWrapper direction='column' align='baseline' justify='center' width='auto' height="auto" position='inhreit' margin='0' padding="0" wrap="wrap">
          <h1>Conhecimentos</h1>
          <p>Através da realização de cursos e projetos pude construir uma base de habilidades que frequentemente uso na minha área de atuação, os conhecimentos variam de acordo com meus gostos e interesses mas todos são voltados para a área de tecnologia e estou frenquentemente aprimorando e aprendendo novas coisas para aumentar cada vez mais minha base de conhecimento. Veja minhas habilidades abaixo:</p>

          <Carousel slide={false} indicators={false}>
            {
                skills.map((skill, index) => {
                    return (
                       <Carousel.Item key={index}>
                        <SkillsCard>
                          <span>{skill}</span>
                        </SkillsCard>
                       </Carousel.Item>
                    )
                })
            }
        </Carousel>
        </FlexWrapper>
         <SphereScene/>
      </GridWrapper>
      <FlexWrapper width="100%" height="100vh" align='center' justify='center' direction="row"  margin='0' padding='0' wrap='no-wrap' position='inherit'>
        <Card title='Certificados' description='Descubra meus cursos realizados para ter uma base de conhecimento e aprimorar minhas habilidades.' link="/certificados" />
        <Card title='Conhecimentos' description='Veja todos os meus conhecimentos adquiridos e aplicados na criação dos meus projetos' link='/conhecimentos'/>
        <Card title='Sites' description='Veja todos os meus projetos já realizados de forma cronológica, os projetos possuem diferentes temas e usam diferentes tecnologias.' link='/sites'/>
      </FlexWrapper>
    </>
  )
}

