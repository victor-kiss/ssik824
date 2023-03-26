"use client"

import { Canvas } from '@react-three/fiber'
import Cube from './models-tsx/cube'
import { Preload } from '@react-three/drei'

export default function CubeScene(): JSX.Element{
    return (
        <Canvas camera={{position:[0,0,20]}} shadows={true} id="canvas-scene">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Cube />
            <Preload all={true}/>
        </Canvas>
    )
}
