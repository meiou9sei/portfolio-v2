import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';


const Box2 = (props) => {
    const mesh = useRef();
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01, mesh.current.rotation.y += 0.01));

    return (
      <mesh ref={mesh} {...props}>
        <boxGeometry args={[2, 2, 2,]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
     );
}
 
export default Box2;