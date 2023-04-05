import React from 'react'
import { useFrame,useLoader } from '@react-three/fiber';
import {FBXLoader} from  'three/examples/jsm/loaders/FBXLoader'


export default function Laptop(){
    const ref = React.useRef<THREE.Mesh>(null!)

    const model = useLoader(FBXLoader,'/laptop.fbx')
    useFrame(() => {
        ref.current.rotation.y += 0.002
    })
    return(
        <mesh ref={ref} scale={0.4}>
            <primitive object={model}/>
        </mesh>
    )
}
