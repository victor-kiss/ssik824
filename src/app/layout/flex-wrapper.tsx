import styled from 'styled-components'

interface StyleProps{
    position?: string;
    width?:string;
    height?:string;
    wrap?:string;
    direction?:string;
    justify?:string;
    align?:string;
    margin?:string;
    padding?:string;
}

const FlexWrapperContainer = styled.div<StyleProps>`
width:${props => props.width || "auto"};
height:${props => props.height|| "auto"};
display:flex;
flex-wrap:${props => props.wrap || "wrap"};
flex-direction:${props => props.direction || "row"};
justify-content:${props => props.justify || "baseline"};
align-items:${props => props.align || "baseline"};
margin:${props => props.margin || "0px"};
padding:${props => props.padding || "0px"};
background-color:${props => props.color || "none"};

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
interface FlexWrapperProps {
    width?: string;
    height?: string;
    wrap?: string;
    direction?: string;
    justify?: string;
    align?: string;
    margin?: string;
    padding?: string;
    color?: string;
    position?: string;
    children?: React.ReactNode;
}

const FlexWrapper:React.FC<FlexWrapperProps> = ({
    position,
    color,
    width,
    height,
    wrap,
    direction,
    justify,
    align,
    margin,
    padding,
    children,
}) =>(
    <FlexWrapperContainer position={position} color={color} width={width} height={height} margin={margin} padding={padding} wrap={wrap} direction={direction} justify={justify} align={align}>
        {children}
    </FlexWrapperContainer>
)

export default FlexWrapper
