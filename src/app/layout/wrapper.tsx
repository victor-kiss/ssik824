import styled from 'styled-components'

interface StyleProps{
    position:string;
    width:string;
    height:string;
    margin:string;
    padding:string;
}

const WrapperContainer = styled.div<StyleProps>`
    position:${props => props.position};
    width:${props => props.width};
    height:${props => props.height};
    margin:${props => props.margin};
    padding:${props => props.padding};
    @media(max-width:576px){
        position: relative;
        width:auto;
        height:100%;
        margin:10px;
        padding:5px;
}
`

const Wrapper = ({
    position,
    width,
    height,
    margin,
    padding,
    children
}:{
    position: string;
    color: string;
    width: string;
    height: string;
    margin: string;
    padding: string;
    children: React.ReactNode;
}) =>(
    <WrapperContainer position={position}  width={width} height={height} margin={margin} padding={padding}>
        {children}
    </WrapperContainer>
)

export default Wrapper

