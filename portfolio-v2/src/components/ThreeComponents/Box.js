import { Canvas } from "@react-three/fiber";

const Box = ({position}) => {
    return ( 
      <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="yellow" />
      </mesh>
     );
}
 
export default Box;