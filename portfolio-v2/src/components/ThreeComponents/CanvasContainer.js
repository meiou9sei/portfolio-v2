import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import Box2 from "./Box2";
import Sheep from "./Sheep";
import AnimatedSheep from "./AnimatedSheep";
import CameraController from "./CameraController";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

//spawns a random number of sheep on canvas
let SheepGroup = [];
for (let i = 0; i < getRandomInt(1, 10); i++) {
    SheepGroup.push(<AnimatedSheep key={i} position={ [getRandomNum(-3, 3), 0, getRandomNum(-3, 3)] }
    />)
}

const CanvasContainer = () => {
    return ( 
        <div id="canvas-container" style={{ height: '500px' }}>
            <Canvas>
                <CameraController />

                {/* lights */}
                <ambientLight intensity={0.1} />
                <directionalLight color="white" position={[-3, 10, 5]} />

                {/* objects */}
                {/* <Box /> */}
                {/* <Box2 /> */}
                
                {/* Spawn multiple sheep */}
                {/* {SheepGroup} */}

                {/* Spawn one sheep */}
                <AnimatedSheep />

            </Canvas>
        </div>
    );
}
 
export default CanvasContainer;


