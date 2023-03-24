import React from "react";
import styled from "styled-components";

interface StyleProps{
    width?:string,
    height?:string;
    margin?:string;
    padding?:string;
    color?:string;
    column?:string;
    mobileReverse?:boolean;
}

const GridWrapperContainer = styled.div<StyleProps>`
    display:grid;
    grid-template-columns:50% 50%;
    grid-template-rows:auto;
    width:${props => props.width || "100%"};
    height:${props => props.height || "auto"} ;
    margin:${props => props.margin || "0px"};
    padding:${props => props.padding || "0px"};
    background-color:${props => props.color || "none"};
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

interface GridWrapperProps{
    width?:string,
    height?:string;
    margin?:string;
    padding?:string;
    color?:string;
    column?:string;
    mobileReverse?:boolean;
    children:React.ReactNode;
}


const GridWrapper:React.FC<GridWrapperProps> = ({
    width,
    height,
    margin,
    padding,
    color,
    column, 
    children,
    mobileReverse
}) =>(
    <GridWrapperContainer width={width} height={height} margin={margin} padding={padding} color={color} column={column} mobileReverse={mobileReverse}>
        {children}
    </GridWrapperContainer>
)

export default GridWrapper;