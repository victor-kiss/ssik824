import styled from 'styled-components'

interface StyleProps{
    position?:string;
    color?:string;
    width?:string;
    height?:string;
    margin?:string;
    padding?:string;
}

const WrapperContainer = styled.div<StyleProps>`
    position:${props => props.position || "relative"};
    background:${props => props.color || "transparent"};
    width:${props => props.width || "auto"};
    height:${props => props.height || "auto"};
    margin:${props => props.margin || "0"};
    padding:${props => props.padding || "0"};
    @media(max-width:576px){
        position: relative;
        width:auto;
        height:100%;
        margin:10px;
        padding:5px;
}

`
interface WrapperProps {
    position?: string;
    color?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    children?: React.ReactNode;
}

const Wrapper:React.FC<WrapperProps> = ({
    position,
    color,
    width,
    height,
    margin,
    padding,
    children
}) =>(
    <WrapperContainer position={position} color={color} width={width} height={height} margin={margin} padding={padding}>
        {children}
    </WrapperContainer>
)

export default Wrapper
