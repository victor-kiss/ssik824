import styled from "styled-components";

interface StyleProps{
    width?:string,
    height?:string;
    margin?:string;
    padding?:string;
    color?:string;
    mobileReverse?:boolean;
}

const GridWrapperContainer = styled.div<StyleProps>`
    display:grid;
    grid-template-columns:50% 50%;
    grid-template-rows:auto;
    width:${props => props.width};
    height:${props => props.height} ;
    margin:${props => props.margin};
    padding:${props => props.padding};
    backdrop-filter:blur(4px);
    -webkit-backdrop-filter:blur(4px);
    border-radius:10px;
    @media(max-width:576px){
        display:flex;
        flex-direction:${props => props.mobileReverse == false ? "column" : "column-reverse"};
        align-items:flex-start;
        justify-content:center;
        margin:10px 0;
        padding:5px;
        height:100%;
    }
`



const GridWrapper = ({
    width,
    height,
    margin,
    padding,
    children,
    mobileReverse
}:{
    width:string,
    height:string;
    margin:string;
    padding:string;
    mobileReverse:boolean;
    children:React.ReactNode;
}) =>(
    <GridWrapperContainer width={width} height={height} margin={margin} padding={padding}  mobileReverse={mobileReverse}>
        {children}
    </GridWrapperContainer>
)

export default GridWrapper;
