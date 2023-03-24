import { Canvas } from '@react-three/fiber'
import Laptop from './models-tsx/laptop'
import { Preload } from '@react-three/drei'
import { RandomizedLight,Center } from '@react-three/drei'
export default function LaptopScene(): JSX.Element{
    return (
        <Canvas camera={{position:[0,0,20]}} shadows={true} id="canvas-scene">
            <ambientLight intensity={0.5} />
            <RandomizedLight position={[10, 10, 10]} />
            <Center>
                <Laptop/>
            </Center>
            <Preload all={true}/>
        </Canvas>
    )
}