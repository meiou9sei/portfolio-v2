import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import Box2 from "./Box2";

import Sheep from './Sheep'

const CanvasContainer = () => {
    return ( 
        <div id="canvas-container" style={{ height: '500px' }}>
            <Canvas>
                {/* lights */}
                <ambientLight intensity={0.1} />
                <directionalLight color="white" position={[-3, 10, 5]} />

                {/* objects */}
                {/* <Box /> */}
                {/* <Box2 /> */}
                <Sheep />
                
            </Canvas>
        </div>
    );
}
 
export default CanvasContainer;


