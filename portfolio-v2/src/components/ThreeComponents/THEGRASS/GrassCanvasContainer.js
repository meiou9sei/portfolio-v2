import { Canvas } from "@react-three/fiber";
import Grass from "./Grass";
import CameraController from "../CameraController";
import { PerspectiveCamera } from "three";
import RevivedAnimatedSheep from './../RevivedAnimatedSheep';

//SHEEP SETTINGS
const sheepScale = 3;
//spawn position min and max x and z. also their movement range
const spawnPosMinX = -50;
const spawnPosMaxX = 50;
const spawnPosY = -1;
const spawnPosMinZ = 7; //change this according to camera setting so sheep don't clip top of Canvas
const spawnPosMaxZ = -25;

//spawns random number of sheep 
const minSheepCount = 1;
const maxSheepCount = 10;
let SheepGroup = [];
//scroll down for sheep spawner formula
for (let i = 0; i < getRandomInt(minSheepCount, maxSheepCount); i++) {
    console.log("sheep number " + i);
    SheepGroup.push(<RevivedAnimatedSheep 
        key={i} 
        position={ getValidSpawnCoords(0, spawnPosMinZ, spawnPosMinX, spawnPosMaxZ, spawnPosMaxX, spawnPosMaxZ) }
        sheepAnimation={ getRandomSheepAnimation() }
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
            {/* <CameraController />  */}

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




/*************/
/* FUNCTIONS */
/*************/

/* RANDOM NUM FUNCTIONS */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

/* THE SHEEP SPAWNER FORMULA */
function getValidSpawnCoords(Ax, Ay, Bx, By, Cx, Cy) {
    
    let x; 
    let y = spawnPosY; 
    let z;

    let validCoord = false;

    while(!validCoord) {
        x = getRandomNum(spawnPosMinX, spawnPosMaxX);
        z = getRandomNum(spawnPosMinZ, spawnPosMaxZ);

        validCoord = checkIfCoordInTriangle(Ax, Ay, Bx, By, Cx, Cy, x, z);
    }

    return [x, y, z];
}

/* based on this math https://www.youtube.com/watch?v=HYAgJN3x4GA, 
checks if random coordinate is within triangle or not */
function checkIfCoordInTriangle(Ax, Ay, Bx, By, Cx, Cy, Px, Py) {
    const w1 = (Ax*(Cy-Ay)+(Py-Ay)*(Cx-Ax)-Px*(Cy-Ay)) / ((By-Ay)*(Cx-Ax)-(Bx-Ax)*(Cy-Ay));
    const w2 = (Py-Ay-w1*(By-Ay)) / (Cy-Ay);

    if (w1 >= 0 && w2 >= 0 && (w1+w2) <= 1) {
        return true;
    } else {
        return false;
    }
}

/* SET SHEEP ANIMATION RANDOMLY */
function getRandomSheepAnimation() {
    //currently only 2 sheep animation modes - eating or walking
    let godsWill = getRandomNum(0, 1);
    let godsCommand = "TPose";

    if (godsWill < 0.5) {
        console.log("YOU SHALL BE AN EATER");
        godsCommand = "Eater";
    } else {
        console.log("YOU SHALL BE A WALKER");
        godsCommand = "Walker";
    }

    return godsCommand;
}

