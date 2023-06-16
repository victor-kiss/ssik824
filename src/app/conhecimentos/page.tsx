"use client"

import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';


const skills: String[] = ["html", "css", "javascript", "react", "next.js", "node", "bootstrap", "react bootstrap", "web-design", "google search console", "ui/ux", "SEO", "git", "github", "windows", "mac OS", "linux", "canva", "photoshop express"];

export default function Conhecimentos() {
  return (
    <div className='grid-wrapper'>
      <div className='flex-column-wrapper'>
       <h1>Conhecimentos</h1>
        <p>Através da realização de cursos e projetos pude construir uma base de habilidades que frequentemente uso na minha área de atuação, os conhecimentos variam de acordo com meus gostos e interesses mas todos são voltados para a área de tecnologia e estou frenquentemente aprimorando e aprendendo novas coisas para aumentar cada vez mais minha base de conhecimento. Veja minhas habilidades abaixo:</p>
        <Carousel slide={false} indicators={false} variant='dark'>
          {
            skills.map((skill, index) => 
              (
                <Carousel.Item key={index}>
                  <div className='skills-card'>
                    <span>{skill}</span>
                  </div>
                </Carousel.Item>
              )
            )
          }
        </Carousel>
      </div>
      <div className='flex-column-wrapper'>
        <Image src="/robot.svg" width={800} height={800} alt="robot image" className="cropped" loading='eager' priority={true}/>
      </div>
    </div>
  )
}
