"use client"

import { Box,GradientTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"


export default function Cube() {
    const ref = React.useRef<THREE.Mesh>(null!)

    useFrame(() => {
        ref.current.rotation.x += 0.002
        ref.current.rotation.y += 0.002 
    })
    return (
        <Box args={[10, 10, 10]} ref={ref} receiveShadow={true} scale={1}>
            <meshBasicMaterial wireframe={true}>
                <GradientTexture stops={[0,1]} colors={['#696eff','#466dff']} />
            </meshBasicMaterial>
        </Box>
    )
}
