"use client"
import dynamic from 'next/dynamic';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Image from 'next/image';

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

export default function Conhecimentos() {
  const FlexWrapper = dynamic(() => import('../layout/flex-wrapper'));
  const GridWrapper = dynamic(() => import('../layout/grid-wrapper'));
  const Card = dynamic(() => import('../components/card/card'));
  return (
    <>
      <GridWrapper width="100vw" height="100vh" margin="40px 60px" mobileReverse={true} padding="0">
          <FlexWrapper direction='column' align='baseline' justify='center' width='auto' height="auto"  margin='0' padding="0" wrap="wrap">
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
          <FlexWrapper direction='column' align='center' justify='center' width='100%' height='auto' margin='0' padding='0' wrap='no-wrap'>
            <Image src="/ssik.png" width={800} height={600} className="cropped" alt="home image" loading={'eager'} quality={90}/>
        </FlexWrapper>
      </GridWrapper>
    </>
  )
}
