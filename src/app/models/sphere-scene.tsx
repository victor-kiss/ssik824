"use client"

import { Canvas } from '@react-three/fiber'
import SphereModel from './models-tsx/sphere'
import { Preload } from '@react-three/drei'

export default function SphereScene(): JSX.Element{
    return (
        <Canvas camera={{position:[0,0,7]}}  id="canvas-id">
            <ambientLight intensity={0.5} />
            <SphereModel />
            <Preload all={true}/>
        </Canvas>
    )
}
