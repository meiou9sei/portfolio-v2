import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import Box2 from "./Box2";

const CanvasContainer = () => {
    return ( 
        <div id="canvas-container">
            <Canvas>
                {/* lights */}
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />

                {/* objects */}
                {/* <Box /> */}
                <Box2 />
            </Canvas>
        </div>
    );
}
 
export default CanvasContainer;


