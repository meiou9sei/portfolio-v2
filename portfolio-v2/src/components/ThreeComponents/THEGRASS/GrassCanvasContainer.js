import { Canvas } from "@react-three/fiber";
import Grass from "./Grass";
import CameraController from "../CameraController";
import { PerspectiveCamera } from "three";
import RevivedAnimatedSheep from './../RevivedAnimatedSheep';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

//SHEEP SETTINGS
const sheepScale = 3;
//spawn position min and max x and z
const spawnPosMinX = -50;
const spawnPosMaxX = 50;
const spawnPosMinZ = 5;
const spawnPosMaxZ = -50;

//spawns random number of sheep 
const minSheep = 1;
const maxSheep = 10;
let SheepGroup = [];
for (let i = 0; i < getRandomInt(minSheep, maxSheep); i++) {
    console.log("sheep number " + i);
    SheepGroup.push(<RevivedAnimatedSheep 
        key={i} 
        position={ [getRandomNum(spawnPosMinX, spawnPosMaxX), 0, getRandomNum(spawnPosMinZ, spawnPosMaxZ)]}
        scale={sheepScale} 
        />)
}

/* to help set up camera - use w/ orbital controls on to place camera */
function CameraHelper() {
    const camera = new PerspectiveCamera(50, 1, 1, 3);
    return <group position={[0, 2, 10]} >
        <cameraHelper args={[camera]} />
    </group>;
}

const GrassCanvasContainer = () => {
    return (
        <Canvas 
        id="grass-canvas-container" 
        style={{ position: 'fixed', left: 0, bottom: 0, height: '25vh' }}
        camera={{ position: [0, 2, 10], fov: 50 }} 
        >
            <CameraHelper />

            {/* camera orbital controls */}
            <CameraController /> 

            {/* lights */}
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[-3, 10, 5]} />

            <Grass position={ [0, 0, 0] }/>

            { SheepGroup }

            {/* <RevivedAnimatedSheep scale={3} position={[6, -1, 8]} color="#ff0000" />
            <RevivedAnimatedSheep scale={3} position={[3, -1, 5]} color="#00ffc9" />
            <RevivedAnimatedSheep scale={3} position={[0, -1, 3]} color="#9e00ff" />
            <RevivedAnimatedSheep scale={3} position={[-3, -1, 1]} color="#ff00c9" /> */}
        </Canvas>
    );
}
 
export default GrassCanvasContainer;