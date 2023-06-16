"use client"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';


export default function Certificados(){
  return (
      <div className='grid-wrapper'>
          <div className='flex-column-wrapper'>
          <h1>Certificados</h1>
          <p>Aqui estão meus certificados, são frutos de todos os meus estudos, esforço e dedicação. Frequentemente uso os conhecimentos que adquiri para realizar diversas tarefas como programação, design, estudos de documentação e novas ferramentas para web dentre outras tarefas.</p>
          <p>O conteúdo dos cursos variam de acordo com meus interesses e gostos.</p>
          </div>
          <div className='flex-column-wrapper'>
          <Carousel variant="dark" indicators={false} slide={false} >
        <Carousel.Item>
            <Image width={650} height={450} 
            className="cropped"
            src="/diploma-ingles.jpg"
            alt="Diploma Ingles"
             priority={true}/>
        </Carousel.Item>
        <Carousel.Item>
            <Image width={650} height={450}
            className="cropped"
            src="/diploma-marketing-digital.jpg"
            alt="Diploma Marketing Digital"
            priority={true}/>
        </Carousel.Item>
        <Carousel.Item>
            <Image width={650} height={450}
            className="cropped"
            src="/diploma-web-design.jpg"
            alt="Diploma Web Design"
            priority={true}/>
      </Carousel.Item>
      <Carousel.Item>
            <Image width={650} height={450}
            className="cropped"
            src="/diploma-web1.jpg"
            alt="Diploma Desenvolvimento Web 1"
            priority={true}/>
      </Carousel.Item>
      <Carousel.Item>
            <Image width={650} height={450}
            className="cropped"
            src="/diploma-web2.png"
            alt="Diploma Desenvolvimento Web 2"
            priority={true}/>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}
