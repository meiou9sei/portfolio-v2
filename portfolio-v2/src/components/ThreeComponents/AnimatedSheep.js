/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from "react";
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three';

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

export default function Model({ ...props }) {
    const ref = useRef();
    const { nodes, materials, animations } = useGLTF(
        "/sheepModelwAnimations.gltf"
    );
    const { actions } = useAnimations(animations, ref);
    const randomColor = getRandomColor();

    //changes cursor on hover
    /* const [hovered, setHovered] = useState(false);
    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered]); */

    //const mixer = new THREE.AnimationMixer(ref);

    // Upon click, changes color
    const [sheepColor, setSheepColor] = useState(randomColor);

    /* makes sheep rotate */
    //useFrame((state, delta) => (ref.current.rotation.y += 0.01));
    // or use this
    /* useFrame(({ clock }) => {
        ref.current.rotation.x = clock.getElapsedTime();
    }); */

    // makes sheep walk forward
    //useFrame((state, delta) => (ref.current.position.x += 0.01));

    //this triggers animations (console.log(actions) to see what animations you imported w/ model)
    useEffect(() => {
        actions.Walking.play();
    })
    
    return (
        <group ref={ref} {...props} dispose={null}>
            <group name="Scene" >
                <group name="Armature" scale={0.18}>
                    <primitive object={nodes.Bone} />
                    <skinnedMesh
                        name="Sheep"
                        geometry={nodes.Sheep.geometry}
                        /* material={materials.Material} */
                        skeleton={nodes.Sheep.skeleton}>
                        <meshStandardMaterial color={sheepColor} />
                    </skinnedMesh>
                </group>
                <mesh 
                    geometry={nodes.Sheep.geometry}
                    scale={1.0}
                    onClick={() => setSheepColor(sheepColor => getRandomColor())}
                    /* onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)} */ 
                    >
                    <meshStandardMaterial
                    transparent={true}
                    opacity={1.0} />
                </mesh>
            </group>
        </group>
    );
}


useGLTF.preload("/sheepModelwAnimations.gltf");

