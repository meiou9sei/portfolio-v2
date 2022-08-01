//general imports
import CameraController from "./CameraController";
import Box from "./Box";

//stars 
import { Stars } from "@react-three/drei";
import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber'

//sheep
import AnimatedSheep from "./AnimatedSheep";
import RevivedAnimatedSheep from "./RevivedAnimatedSheep";
import Box2 from "./Box2";


const CanvasContents = () => {
    const ref = useRef()
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 50
        ref.current.rotation.y -= delta / 15
    })
    
    return (
        <>

            <CameraController />

            {/* lights */}
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[-3, 10, 5]} />

            <Stars ref={ref} radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />


            {/* DOESN'T WORK */}
            {/* <AnimatedSheep />
            <AnimatedSheep /> */}

            {/* WORKS */}
            {/* <Box2 position={[-3, 0, 0]} />
            <Box2 position={[3, 0, 0]} /> */}
            
            {/* <AnimatedSheep position={[3, 0, 0]} /> */}


            {/* <RevivedAnimatedSheep position={[-3, 0, 0]} color="#ff0000" />
            <RevivedAnimatedSheep position={[3, 0, 0]} color="#ff00c1" /> */}


        </>
    );
}
 
export default CanvasContents;