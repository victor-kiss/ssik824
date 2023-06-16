"use client"

import Image from 'next/image';
import Link from 'next/link';



export default function Home() {
  return (
      <div className='grid-wrapper'>
          <div className='flex-column-wrapper'>
          <h1>Visão Geral</h1>
          <p>Meu nome é Victor Kiss, mas pode me chamar de ssik, tenho 18 anos e sou desenvolvedor front-end! Meu foco é na criação de interfaces intuitivas, com um bom design e código.Minha jornada em programação começou no ano de 2020, quando tive vontade de entender mais sobre tecnologia e me aprofundei na área de desenvolvimento web. No mesmo ano saiu meu primeiro projeto a <a href="https://victor-kiss.github.io/webdex/" rel="noreferrer" target="_blank">webdex</a>, esse projeto marca o início da minha constante evolução em front-end!</p>
          <p>Atualmente estudo sistemas para internet na  instituição Estácio de Sá e estou sempre fazendo algo relacionado a T.I, descubra mais abaixo:</p>

          <div>
            <Link href="https://github.com/victor-kiss" rel="noreferrer" target="_blank" className="link-button">GitHub</Link>
            <Link href="https://codepen.io/victor-kiss" rel="noreferrer" target="_blank" className="link-button">Code Pen</Link>
          </div>
          </div>
          <div className='flex-column-wrapper'>
          <Image src="/home.svg" width={900} height={800} alt="home image" className="cropped" loading='eager' priority={true}/>
          </div>
      </div>
  )
}
