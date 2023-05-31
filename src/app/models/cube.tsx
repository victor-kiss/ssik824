import { Box } from '@react-three/drei';


export default function Cube(){
    return( 
        <Box args={[2,2,2]} >
        <meshBasicMaterial color="#712CF9" wireframe />
      </Box>
    )
}
