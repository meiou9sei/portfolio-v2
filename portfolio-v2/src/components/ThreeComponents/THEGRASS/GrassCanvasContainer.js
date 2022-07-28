import { Canvas } from "@react-three/fiber";
import Grass from "./Grass";


import RevivedAnimatedSheep from './../RevivedAnimatedSheep';


const GrassCanvasContainer = () => {
    return (
        <Canvas id="grass-canvas-container" style={{ position: 'fixed', left: 0, bottom: 0, height: '25vh' }}>

            {/* lights */}
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[-3, 10, 5]} />

            {/* <Grass /> */}
            <RevivedAnimatedSheep position={[0, -1, 3]} color="#13ff00" />
        </Canvas>
    );
}
 
export default GrassCanvasContainer;