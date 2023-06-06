"use client"

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';



export default function Home() {
  const FlexWrapper = dynamic(() => import('./layout/flex-wrapper'));
  const GridWrapper = dynamic(() => import('./layout/grid-wrapper'));
  return (
    <>
      <GridWrapper width="100vw" height="100vh" margin="40px 60px" padding="0" mobileReverse={true}>
          <FlexWrapper direction='column' align='baseline' justify='center' width='100%' height='auto' margin='0' padding='0' wrap='no-wrap'>
          <h1>Visão Geral</h1>
          <p>Meu nome é Victor Kiss, mas pode me chamar de ssik, tenho 18 anos e sou desenvolvedor front-end! Meu foco é na criação de interfaces intuitivas, com um bom design e código.Minha jornada em programação começou no ano de 2020, quando tive vontade de entender mais sobre tecnologia e me aprofundei na área de desenvolvimento web. No mesmo ano saiu meu primeiro projeto a <a href="https://victor-kiss.github.io/webdex/" rel="noreferrer" target="_blank">webdex</a>, esse projeto marca o início da minha constante evolução em front-end!</p>
          <p>Atualmente estudo sistemas para internet na  instituição Estácio de Sá e estou sempre fazendo algo relacionado a T.I, descubra mais abaixo:</p>

          <Link href="https://github.com/victor-kiss" rel="noreferrer" target="_blank" className="link-button">GitHub</Link>
          <Link href="https://codepen.io/victor-kiss" rel="noreferrer" target="_blank" className="link-button">Code Pen</Link>
          </FlexWrapper>
          <FlexWrapper direction='column' align='center' justify='center' width='100%' height='100%' margin='0' padding='0' wrap='no-wrap'>
          <Image src="/home.svg" width={800} height={800} alt="home image" className="cropped" loading='eager'/>
          </FlexWrapper>
      </GridWrapper>
    </>
  )
}
