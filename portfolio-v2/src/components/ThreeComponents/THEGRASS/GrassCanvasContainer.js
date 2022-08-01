import { Canvas } from "@react-three/fiber";
import Grass from "./Grass";
import CameraController from "../CameraController";
import { PerspectiveCamera } from "three";
import RevivedAnimatedSheep from './../RevivedAnimatedSheep';

/******************/
/* SHEEP SETTINGS */
/******************/
const sheepScale = 3;
//spawn position min and max x and z. also their movement range
const spawnPosMinX = -90;
const spawnPosMaxX = 90;
const spawnPosY = -1;
const spawnPosMinZ = 8; //change this according to camera setting so sheep don't clip top of Canvas
const spawnPosMaxZ = -15;
//NOTE: IF YOU CHANGE THESE: you need to change the spawn sections of sheep to make it look good on camera
const spawnSquareMinX = -62;
const spawnSquareMaxX = 62;
//area walkers can travel in
const walkersMinX = -90;
const walkersMaxX = 90;
const walkersMaxZ = -25;

//spawns random number of sheep 
const minSheepCount = 10;
const maxSheepCount = 10;
let SheepGroup = [];
//scroll down for sheep spawner formula
//i starts at 1, as one eater sheep will spawn by default, within scren width
for (let i = 1; i < getRandomInt(minSheepCount, maxSheepCount); i++) {
    console.log("sheep number " + (i + 1));
    SheepGroup.push(<RevivedAnimatedSheep 
        key={i} 
        //if want to spawn in triangle area matching a 1920 screen:
        // position={ getValidSpawnCoords(0, spawnPosMinZ, spawnPosMinX, spawnPosMaxZ, spawnPosMaxX, spawnPosMaxZ) }
        //if want spawn in rectangle area:
        position={[getRandomInt(spawnPosMaxX, spawnPosMinX), -1, getRandomInt(spawnPosMaxZ, spawnPosMinZ)]}
        sheepAnimation={ getRandomSheepAnimation() }
        scale={sheepScale} 
        />)
}

/******************/
/* OTHER SETTINGS */
/******************/
/* camera */
const cameraPosition = [0, 2, 10];
const cameraFOV = 50;

/* grass */
const grassPlotSize = 0.75;
const grassPlotPosition = [0, -0.5, 0];

/* to help set up camera - use w/ orbital controls on to place camera */
function CameraHelper() {
    const camera = new PerspectiveCamera(cameraFOV, 8, 2, 25);
    return <group position={ cameraPosition } >
        <cameraHelper args={[camera]} />
    </group>;
}

/**********/
/* CANVAS */
/**********/

const GrassCanvasContainer = () => {
    return (
        <Canvas 
        id="grass-canvas-container" 
        style={{ position: 'fixed', left: 0, bottom: 0, height: '25vh' }}
        camera={{ position: cameraPosition , fov: cameraFOV }}
        >
            <CameraHelper />

            {/* camera orbital controls */}
            <CameraController /> 

            {/* lights */}
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[-3, 10, 5]} />

            <Grass position={ grassPlotPosition } scale={grassPlotSize} />

            { SheepGroup } 
            {/*"godsChosenSheep" will spawn 1 eater within screen width"*/}          
            <RevivedAnimatedSheep position={[returnPosWithinScreen(), -1, 0]} name={"godsChosenSheep"} scale={sheepScale} sheepAnimation={"Eater"} />

            <RevivedAnimatedSheep position={[-9, -1, 0]} name={"landmarkSheep"} scale={sheepScale} sheepAnimation={"Walker"} />

            {/* <RevivedAnimatedSheep scale={sheepScale} position={[6, -1, 8]} color="#ff0000" />
            <RevivedAnimatedSheep scale={sheepScale} position={[3, -1, 5]} color="#00ffc9" />
            <RevivedAnimatedSheep scale={sheepScale} position={[0, -1, 3]} color="#9e00ff" />
            <RevivedAnimatedSheep scale={sheepScale} position={[-3, -1, 1]} color="#ff00c9" /> */}
        </Canvas>
    );
}
 
export default GrassCanvasContainer;




/*************/
/* FUNCTIONS */
/*************/

/************************/
/* RANDOM NUM FUNCTIONS */
/************************/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

/*****************************/
/* THE SHEEP SPAWNER FORMULA */
/*****************************/
//default sheep ("godsChosenSheep")
function returnPosWithinScreen() {
    //per 100 px sWidth, can spawn -3 or 3 X range
    let sWidth = window.screen.width / 100;
    console.log(sWidth);
    let spawnXLocation = getRandomNum(-sWidth * 3, sWidth * 3);
    console.log(spawnXLocation);
    return spawnXLocation;
}

function getValidSpawnCoords(Ax, Ay, Bx, By, Cx, Cy) {
    
    let x; 
    let y = spawnPosY; 
    let z;

    let validCoord = false;

    while(!validCoord) {
        x = getRandomNum(spawnPosMinX, spawnPosMaxX);
        z = getRandomNum(spawnPosMinZ, spawnPosMaxZ);

        validCoord = checkIfCoordInTriangle(Ax, Ay, Bx, By, Cx, Cy, x, z);
        if (!(spawnSquareMinX < x) || !(x < spawnSquareMaxX)) {
            validCoord = false;
        }
    }

    return [x, y, z];
}

/* based on this math https://www.youtube.com/watch?v=HYAgJN3x4GA, 
checks if random coordinate is within triangle or not */
//would have to adjust triangle settings based on screen width, so unused
function checkIfCoordInTriangle(Ax, Ay, Bx, By, Cx, Cy, Px, Py) {
    const w1 = (Ax*(Cy-Ay)+(Py-Ay)*(Cx-Ax)-Px*(Cy-Ay)) / ((By-Ay)*(Cx-Ax)-(Bx-Ax)*(Cy-Ay));
    const w2 = (Py-Ay-w1*(By-Ay)) / (Cy-Ay);

    if (w1 >= 0 && w2 >= 0 && (w1+w2) <= 1) {
        return true;
    } else {
        return false;
    }
}

//walkers can walk away if they want

/********************************/
/* SET SHEEP ANIMATION RANDOMLY */
/********************************/
function getRandomSheepAnimation() {
    //currently only 2 sheep animation modes - eating or walking
    let godsNum = getRandomNum(0, 1);
    let godsCommand = "TPose";

    if (godsNum < 0.5) {
        //console.log("YOU SHALL BE AN EATER");
        godsCommand = "Eater";
    } else {
        //console.log("YOU SHALL BE A WALKER");
        godsCommand = "Walker";
    }

    return godsCommand;
}

