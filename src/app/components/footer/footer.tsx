import styled from 'styled-components'

const FooterContainer = styled.footer`
    background:#202020;
    margin-top:40px;
    padding:10px;
    width:100%;
    text-align:center;
    color:#FFF;
    padding:1rem;

    i.bi-heart-fill{
        color:#EA5455;
        vertical-align:middle;
    }
    span{
        font-size:18px;
    }

`

export default function Footer():JSX.Element{
    return (
        <FooterContainer>
            <span>Desenvolvido com <i className="bi bi-heart-fill"></i> e <a href="https://nextjs.org/">Next.js</a></span>
        </FooterContainer>
    )
}
