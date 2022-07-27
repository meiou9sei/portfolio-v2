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
            <Stars ref={ref} radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        </>
    );
}
 
export default CanvasContents;