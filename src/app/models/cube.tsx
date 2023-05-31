
import React from 'react'
import { useFrame} from '@react-three/fiber';
import { Box } from '@react-three/drei';


export default function Cube(){
    return(
    <mesh scale={1.5}>
        <Box args={[2,2,2]} >
        <meshBasicMaterial color="#712CF9" wireframe />
      </Box>
    </mesh>
    )
}
