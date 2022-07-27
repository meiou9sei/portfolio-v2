//general imports
import CameraController from "./CameraController";
import Box from "./Box";

//stars 
import { Stars } from "@react-three/drei";
import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber'

const CanvasContents = () => {
    const ref = useRef()
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 50
        ref.current.rotation.y -= delta / 15
    })
    
    return (
        <>

            {/* <CameraController /> */}

            {/* lights */}
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[-3, 10, 5]} />

            <Stars ref={ref} radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />


            <mesh>
                    <boxGeometry args={[1, 1, 1]} position={[-5, 0, 0]} />
                    <meshStandardMaterial color={"red"}/>
                </mesh>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} position={[5, 0, 0]} />
                    <meshStandardMaterial color={"green"}/>
                </mesh>

                <Box position={[-3, 0, 0]} />
                <Box position={[3, 0, 0]} />


        </>
    );
}
 
export default CanvasContents;