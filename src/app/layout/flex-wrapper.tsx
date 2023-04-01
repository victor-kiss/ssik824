import styled from 'styled-components'

interface StyleProps{
    width:string;
    height:string;
    wrap:string;
    direction:string;
    justify:string;
    align:string;
    margin:string;
    padding:string;
}

const FlexWrapperContainer = styled.div<StyleProps>`
width:${props => props.width};
height:${props => props.height};
display:flex;
flex-wrap:${props => props.wrap};
flex-direction:${props => props.direction};
justify-content:${props => props.justify};
align-items:${props => props.align};
margin:${props => props.margin};
padding:${props => props.padding};
@media(max-width:576px){
    width:100%;
    flex-direction:column;
    align-items:baseline;
    justify-content:baseline;
    padding:10px;
    height:auto;
}
}

`
const FlexWrapper = ({
    width,
    height,
    wrap,
    direction,
    justify,
    align,
    margin,
    padding,
    children,
}:{
    width:string,
    height:string,
    wrap:string,
    direction:string,
    justify:string,
    align:string,
    margin:string,
    padding:string,
    children:React.ReactNode,
}) =>(
    <FlexWrapperContainer  width={width} height={height} margin={margin} padding={padding} wrap={wrap} direction={direction} justify={justify} align={align}>
        {children}
    </FlexWrapperContainer>
)

export default FlexWrapper

