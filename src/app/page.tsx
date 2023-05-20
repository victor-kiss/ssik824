"use client"
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Image from 'next/image';

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

          <a href={process.env.GITHUB} rel="noreferrer" target="_blank" className="link-button">GitHub</a>
          <a href={process.env.CODEPEN} rel="noreferrer" target="_blank" className="link-button">Code Pen</a>
          </FlexWrapper>
          <FlexWrapper direction='column' align='center' justify='center' width='100%' height='auto' margin='0' padding='0' wrap='no-wrap'>
            <Image src="/aliens.svg" width={800} height={640} className="cropped" alt="home image" loading={'eager'}/>
        </FlexWrapper>
      </GridWrapper>
    </>
  )
}
