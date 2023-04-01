import Link from "next/link";
import styled from "styled-components";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:baseline;
    justify-content: space-between;
    width: 350px;
    height: 350px;
    border-radius: 10px;
    background:rgba(255,255,255,0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding:15px;
    margin:10px;

    span{
        padding:20px;
        font-size:20px;
        font-weight: bold;
        color:#FFF;
        margin:0 auto;
        letter-spacing: 1px;
    }

    a{
        color:#FFF;
        background:#93aaff
        padding:1rem 1.5rem;
        border-radius:10px;
        font-weight:bold;
    }
    @media screen and (max-width: 768px){
        position:relative;
        width:calc(80%);
        height: 350px;
        margin:20px auto;
    }
`

interface CardProps{
    title: string;
    description: string;
    link:string
}

const Card:React.FC<CardProps> = ({
    title,
    description,
    link
}) =>(
    <CardWrapper>
        <span>{title}</span>
        <p>{description}</p>
       <Link href={link} >Ver</Link>
    </CardWrapper>
)

export default Card;
