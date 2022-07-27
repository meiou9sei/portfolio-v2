import { Canvas } from "@react-three/fiber";
import Grass from "./Grass";

const GrassCanvasContainer = () => {
    return (
        <div id="grass-canvas-container" style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
            <Grass />
        </div>
    );
}
 
export default GrassCanvasContainer;