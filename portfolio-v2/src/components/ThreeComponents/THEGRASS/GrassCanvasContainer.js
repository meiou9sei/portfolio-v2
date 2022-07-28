import { Canvas } from "@react-three/fiber";
import Grass from "./Grass";
import CameraController from "../CameraController";



import RevivedAnimatedSheep from './../RevivedAnimatedSheep';


const GrassCanvasContainer = () => {
    return (
        <Canvas id="grass-canvas-container" style={{ position: 'fixed', left: 0, bottom: 0, height: '50vh' }}>

            {/* camera */}
            <CameraController />

            {/* lights */}
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[-3, 10, 5]} />

            <Grass />
            <RevivedAnimatedSheep position={[1, -1, 3]} color="#ff0000" />
            <RevivedAnimatedSheep position={[2, -1, 3]} color="#00ffc9" />
            <RevivedAnimatedSheep position={[-1, -1, 3]} color="#9e00ff" />
            <RevivedAnimatedSheep position={[0, -1, 3]} color="#ff00c9" />
        </Canvas>
    );
}
 
export default GrassCanvasContainer;