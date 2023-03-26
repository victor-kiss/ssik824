"use client"

import { Sphere ,GradientTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"


export default function SphereModel() {
    const ref = React.useRef<THREE.Mesh>(null!)

    useFrame(() => {
        ref.current.rotation.x += 0.002
        ref.current.rotation.y += 0.002 
    })
    return (
        <Sphere  ref={ref} receiveShadow={true} scale={2.5}>
            <meshBasicMaterial wireframe={true}>
                <GradientTexture stops={[0,1]} colors={['#696eff','#466dff']} />
            </meshBasicMaterial>
        </Sphere>
    )
}
