/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


/*******************/
/* IMPORTANT NOTES */
/*******************/
/*
- ref is renamed to group in RevivedAnimatedSheep (and probably same for future other models)
- "newYAngle/setNewYAngle" is now just "yAngle/setNewYAngle". same for x/z positions (zToAdd/setZToAdd)
- more notes here
*/


/* for future attempts trying to revive walking sheep: 
Useframe
runs the function inside it every frame

adds to delta * position x z if moving set to true (but have if statement on if max on the x and z for walking)

add delta to a global variable "pulse" and if pulse is > pulseInterval (set by randnum), then pulseInterval is set to new randNum

returns immediately if not pulse


(sentient sheep extra for future)
when pulse sent, does a randnum to determine next action:

- walks
- -- if already walking, calculate new way or use old one, choose which by randnum
- ----new way (calculate y and +0.0x and z)
- ------(set moving to true, which does the curr.position.x + 0.01 thing)
- ----old way (change nothing)

- sets moving to false and:
- --triggers t pose animation
- --triggers eat animation

for triggering animation, could be a dual layer variable? if new variable set and old variable are diff, play new animation and set old var to = new. if old = new, don't play new animation, just return (idr if this is useState and setVariable or what though)
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

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }  

//TAU = 1 full rotation
const TAU = Math.PI * 2;
//timer variable set outside below export, since clicking for new color sets new state and would reset timer? or something
let timer = 0;
//timer count at which resets
const timerMax = 100;

//sheep animation global variables
let newAnimationPlease = false;
let newMovementPlease = false;
let whichAnimation = null;
let newSpawn = true;

//sheep position and angles
let newYangle = 0;
let newXposition = 0;
let newZposition = 0;

function timerTicker() {
    //adds to timer - if timer > 1000, randomly starts new animation
    timer += 1;
    newAnimationPlease = false;
    newMovementPlease = false;
    if (timer >= timerMax) {
        timer = 0;
        newAnimationPlease = true;
        //console.log(newAnimationPlease + "new animation requested")
        
        newMovementPlease = true;
    }
}

//chances constants for animation change
const LOWCHANCE = 0.5;
const MIDCHANCE = 0.5;
const HIGHCHANCE = 0.8;


export default function Model(props) {
    const ref = useRef();
    const { nodes, materials, animations } = useGLTF(
        "/NEWSheepModelwAnimations3.gltf"
    );
    const { actions } = useAnimations(animations, ref);
    const randomColor = getRandomColor();

    // Upon click, changes color
    const [sheepColor, setSheepColor] = useState(randomColor);

    function resetAllSheepAnimations() {
        actions.zzzaTPose.reset();
        actions.Eating.reset();
        actions.Walking.reset();
        actions.HeadDown.reset();
        actions.HeadUp.reset();
    }
    
    //animation trigger and moving sheep
    function sheepSpawn() {
        //play spawning animation every time state refreshes
        actions.Spawning.reset();
        actions.Spawning.setLoop(THREE.LoopOnce).play();
    }

    function sheepEatAnimation() {
        actions.Eating.play();
    }

    function sheepRandomAnimations() {
        //if eating, plays through that animation
        if (whichAnimation === "EatingStart" && newAnimationPlease) {
            whichAnimation = "EatingMid";
            //for loop random animations forever - if doing an animation, continue it most of the time vvv
        } else if ( (newAnimationPlease && Math.random() < LOWCHANCE) || whichAnimation === null || (whichAnimation === "TPose" && Math.random() < MIDCHANCE) || whichAnimation === "EatingEnd") {

            let nextAnimation = Math.random();

            if (whichAnimation === "EatingMid") {
                if (nextAnimation < LOWCHANCE) {
                    resetAllSheepAnimations();
                    whichAnimation = "EatingEnd";
                } 
            } else if (nextAnimation < 0.333) { //3 options if need new animation 
                //1) stand still
                newMovementPlease = false;
                whichAnimation = "TPose";
            } else if (nextAnimation < 0.666) {
                //2) start eating
                newMovementPlease = false;
                whichAnimation = "EatingStart";
            } else {
                //3) walk
                newMovementPlease = true;
                whichAnimation = "Walking";
            }

        }

        //console.log(whichAnimation);

        switch (whichAnimation) {
            case "TPose":
                actions.zzzaTPose.play();
                break;
            case "EatingStart": 
                actions.HeadDown.play();
                actions.HeadDown.clampWhenFinished(true);
                break;
            case "EatingMid": 
                actions.Eating.play();
                break;
            case "EatingEnd":        
                actions.HeadUp.play();
                break;
            case "Walking": 
                actions.Walking.play();
                break;
        }
    }

    //NOTE: 1 full ref.current.rotation.axis = 6.28318... (TAU)
    function sheepRandomMovements() {
        timerTicker();

        if(false /* CHANGE ME */ ) {
            //newMovementPlease, whichAnimation are set in sheepRandomAnimations()
            if (newMovementPlease) {
                newYangle = getRandomNum(0, TAU);
                ref.current.rotation.y = newYangle;
                newXposition = Math.cos(newYangle);
                newZposition = Math.sin(newYangle);
                //above calculated w/ https://gamedev.stackexchange.com/questions/192379/move-2d-rotating-object-in-its-facing-direction
            }

            //calculates direction to move towards and executes, so sheep walks towards where it's rotated
            ref.current.position.x += newXposition/100;
            ref.current.position.z -= newZposition/100;
        }
    }

    //spawn animation trigger
    useEffect(() => {
        sheepSpawn();
    })

    //move sheep location, rotation
    useFrame((state, delta) => (
        sheepRandomMovements()
    ));
    useFrame((state, delta) => (
        //random animations
        //sheepRandomAnimations()

        sheepEatAnimation()
    ));

    //spawns new sheep on click
    function changeClickedSheep() {
        newSpawn = true;
        setSheepColor(sheepColor => getRandomColor());
    } 


 
    return (
        <group ref={ref} {...props} dispose={null} onClick={() => changeClickedSheep()}>
            <group name="Scene" >
                <group name="Armature" scale={1}>
                    <primitive object={nodes.Bone} />
                    <skinnedMesh
                        name="Sheep"
                        geometry={nodes.Sheep.geometry}
                        /* material={materials.Material} */
                        skeleton={nodes.Sheep.skeleton} >
                        <meshStandardMaterial color={sheepColor} />
                    </skinnedMesh>
                </group>




                {/* box */}
                <mesh 
                    scale={1.25}
                    position={[0, 0.6, 0]}
                >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial
                    transparent={true}
                    opacity={0.5} />
                </mesh>
            </group>
        </group>
    );
}


useGLTF.preload("/sheepModelwAnimations.gltf");












/* 
    //list available sheep animation
    //console.log(actions);

    //actions that work: 
    /* 
        NEWSheepModelwAnimations3.gltf
        -zzzaTPose
        -HeadDown
        -Eating
        -HeadUp
        -Walking
        -Spawning - "SpawnAnimation"
    */


        
    /* makes sheep rotate */
    // useFrame((state, delta) => (ref.current.rotation.y += 0.01));