"use client"

import React from 'react'
import { useFrame} from '@react-three/fiber';
import { Box } from '@react-three/drei';


export default function Cube(){
    const ref = React.useRef<THREE.Mesh>(null!)
    useFrame(() =>{
        ref.current.rotation.y += 0.002;
    })
    return(
    <mesh scale={1.5} ref={ref}>
        <Box args={[2,2,2]} >
        <meshBasicMaterial color="#712CF9" wireframe />
      </Box>
    </mesh>
    )
}
