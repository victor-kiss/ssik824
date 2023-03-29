import styled from 'styled-components'

const FooterContainer = styled.footer`
    background:#202020;
    margin-top:40px;
    padding:10px;
    width:100%;
    text-align:center;
    color:#FFF;
    padding:1rem;

    svg{
        vertical-align:middle;
    }
    span{
        font-size:18px;
    }

`

export default function Footer():JSX.Element{
    return (
        <FooterContainer>
            <span>Desenvolvido com  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EA5455" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> e <a href="https://nextjs.org/">Next.js</a></span>
        </FooterContainer>
    )
}
