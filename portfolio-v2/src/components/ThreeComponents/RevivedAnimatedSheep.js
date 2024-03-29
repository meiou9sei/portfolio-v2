/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo, useState } from "react";
import { useGLTF, useAnimations, useCursor } from "@react-three/drei";
import * as THREE from 'three';

/* skeleton utils */
import { SkeletonUtils } from "three-stdlib";
import { useGraph, useFrame } from "@react-three/fiber";

/* future me, confused what's going on? worry not, reference this bad boi: https://codesandbox.io/s/gltf-animations-re-used-k8phr?file=/src/Model.js:598-635 */

export default function Model(props) {
  /****************/
  /* SET UP STUFF */
  /****************/
  
  const group = useRef();
  const { materials, animations, scene } = useGLTF(
    "/NEWSheepModelwAnimations3.glb"
  );
  const { actions } = useAnimations(animations, group);

  // Skinned meshes cannot be re-used in threejs without cloning them
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  // useGraph creates two flat object collections for nodes and materials
  const { nodes } = useGraph(clone)
  
  //animation to trigger
  const godsCommand = props.sheepAnimation;

  /************************/
  /* RANDOM NUM FUNCTIONS */
  /************************/
  //I know it's repeat code but oh well, deal with DRY later
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

  function getRandomNum(min, max) {
      return Math.random() * (max - min) + min;
  }

  /****************/
  /* CHANGE COLOR */
  /****************/

  //sets initial color of sheep
  const randomColor = getRandomColor();
  // Upon click, changes color
  const [sheepColor, setSheepColor] = useState(randomColor);
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  /****************/
  /* CURSOR HOVER */
  /****************/

  // Hover 
  const [hovered, setHovered] = useState(false);
  // Change cursor on hover-state
  useCursor(hovered);

  /************/
  /* ON CLICK */
  /************/  
  function changeClickedSheep() {
    setSheepColor(sheepColor => getRandomColor());
    actions.Spawning.reset();
    actions.Spawning.setLoop(THREE.LoopOnce).play();
    console.log(props.name)
  }

  /*******************/
  /* SHEEP ANIMATION */
  /*******************/
  useFrame((state, delta) => (
    //random animations - NOT IMPLEMENTED YET. for future
    //sheepRandomAnimations()
    playSheepAnimation()
  ));

    //list available sheep animation
    //console.log(actions);

    /*  
    actions: 
        NEWSheepModelwAnimations3.gltf
        -zzzaTPose
        -HeadDown
        -Eating
        -HeadUp
        -Walking
        -Spawning - "SpawnAnimation"
    */

  function playSheepAnimation(){
    switch(godsCommand){
      case "Eater":
        actions.Eating.play();
        break;
      case "Walker": 
      actions.Walking.play();
        break;
      default:
        actions.zzzaTPose.play();
    }
  }

  /******************/
  /* SHEEP MOVEMENT */
  /******************/
  //sets up random y rotation - if walker, changes on pulse. if eater, sets initial and leaves it
  useFrame((state, delta) => (
    sheepRandomMovements(state, delta)
  ));

  /* SHEEP MOVEMENT VARIABLES */
  //TAU = 1 full rotation
  const TAU = Math.PI * 2;
  //sheep position and angles
  let [yAngle, setYAngle] = useState(getRandomNum(0, TAU));
  let xPosition = 0;
  let zPposition = 0;

  function sheepRandomMovements(state, delta){
    /******************/
    /* CLOCK SETTINGS */
    /******************/
    //https://tympanus.net/codrops/2020/12/17/recreating-a-dave-whyte-animation-in-react-three-fiber/

    //console.log(state);
    //console.log(delta);

    if (godsCommand !== "Walker") {
      group.current.rotation.y = yAngle;
      //setYAngle(yAngle => getRandomNum(0, TAU)) //uncomment to make em spin
    }
  }



  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Armature"
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => changeClickedSheep()} >
            <primitive object={nodes.Bone} />
            <skinnedMesh 
              name="Sheep"
              geometry={nodes.Sheep.geometry}
              // material={materials["Material.001"]}
              skeleton={nodes.Sheep.skeleton}
            >
              <meshStandardMaterial color={sheepColor} />
            </skinnedMesh>
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/NEWSheepModelwAnimations3.gltf");