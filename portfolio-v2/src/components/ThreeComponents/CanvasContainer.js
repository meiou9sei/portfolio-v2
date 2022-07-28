//imports general
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import Box2 from "./Box2";
import Sheep from "./Sheep";
import AnimatedSheep from "./AnimatedSheep";

//canvas contents
import CanvasContents from "./CanvasContents";



//the horde of sheep
// import AnimatedSheep1 from "./AnimatedSheepFarm/AnimatedSheep1";
// import AnimatedSheep2 from "./AnimatedSheepFarm/AnimatedSheep2";
// import AnimatedSheep3 from "./AnimatedSheepFarm/AnimatedSheep3";
// import AnimatedSheep4 from "./AnimatedSheepFarm/AnimatedSheep4";
// import AnimatedSheep5 from "./AnimatedSheepFarm/AnimatedSheep5";
// import AnimatedSheep6 from "./AnimatedSheepFarm/AnimatedSheep6";
// import AnimatedSheep7 from "./AnimatedSheepFarm/AnimatedSheep7";
// import AnimatedSheep8 from "./AnimatedSheepFarm/AnimatedSheep8";
// import AnimatedSheep9 from "./AnimatedSheepFarm/AnimatedSheep9";
// import AnimatedSheep10 from "./AnimatedSheepFarm/AnimatedSheep10";


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

// let sheepKey = 0;
// //super hacky, but I made 10 different sheep components and spawn a random number of them
// let SheepGroup = [];
// switch (getRandomInt(1, 10)) {
//     case 10:
//         SheepGroup.push(<AnimatedSheep10 key={sheepKey} position={ [getRandomNum(-3, 3), 0, getRandomNum(-3, 3)] } />);
//         sheepKey++;
//         console.log('mrsheep 10');
//     case 9:
//         SheepGroup.push(<AnimatedSheep9 key={sheepKey} position={ [getRandomNum(-3, 3), 0, getRandomNum(-3, 3)] } />)
//         sheepKey++;
//         console.log('mrsheep 9');
//     case 8:
//         SheepGroup.push(<AnimatedSheep8 key={sheepKey} position={ [getRandomNum(-3, 3), 0, getRandomNum(-3, 3)] } />)
//         sheepKey++;
//         console.log('mrsheep 8');
//     case 7:
//         SheepGroup.push(<AnimatedSheep7 key={sheepKey} position={ [getRandomNum(-3, 3), 0, getRandomNum(-3, 3)] } />)
//         sheepKey++;
//         console.log('mrsheep 7');
//     case 6: 
//         SheepGroup.push(<AnimatedSheep6 key={sheepKey} position={ [getRandomNum(-3, 3), 0, getRandomNum(-3, 3)] } />)
//         sheepKey++;
//         console.log('mrsheep 6');
//     case 5:
//         SheepGroup.push(<AnimatedSheep5 key={sheepKey} position={ [getRandomNum(-3, 3), 0, getRandomNum(-3, 3)] } />)
//         sheepKey++;
//         console.log('mrsheep 5');
//     case 4:
//         SheepGroup.push(<AnimatedSheep4 key={sheepKey} position={ [getRandomNum(-3, 3), 0, getRandomNum(-3, 3)] } />)
//         sheepKey++;
//         console.log('mrsheep 4');
//     case 3:
//         SheepGroup.push(<AnimatedSheep3 key={sheepKey} position={ [getRandomNum(-3, 3), 0, getRandomNum(-3, 3)] } />)
//         sheepKey++;
//         console.log('mrsheep 3');
//     case 2:
//         SheepGroup.push(<AnimatedSheep2 key={sheepKey} position={ [getRandomNum(-3, 3), 0, getRandomNum(-3, 3)] } />)
//         sheepKey++;
//         console.log('mrsheep 2');
//     default:
//         SheepGroup.push(<AnimatedSheep1 key={sheepKey} position={ [getRandomNum(-3, 3), 0, getRandomNum(-3, 3)] } />)
//         sheepKey++;
//         console.log('mrsheep 1');
// }

//IF YOU EVER get the hang of react lmao reinstate this code instead of the monster above
// for (let i = 0; i < getRandomInt(1, 10); i++) {
//     console.log(i);
//     console.log(3 + i, 3 + i);
    
//    SheepGroup.push(<AnimatedSheep key={i} position={ [getRandomNum(-3, 3), 0, getRandomNum(-3, 3)] }

//     />)
// }

//nvm neither worked 😔

const CanvasGeneral = () => {


    return ( 
        <div id="canvas-container" style={{ height: '100vh', position: 'absolute', top: 0, width: '100%', pointerEvents: 'none' }}>
            {/* , pointerEvents: 'none' */}
            <Canvas>

                <CanvasContents />

                {/* objects */}
                {/* <Box /> */}
                {/* <Box2 /> */}
                
                {/* Spawn multiple sheep */}
                {/* SheepGroup */} 

                {/* Spawn one sheep */}
                {/* <AnimatedSheep position={[3, 0, 0]}/>
                <AnimatedSheep position={[-3, 0, 0]}/>

                <Box position={[3, 0, 0]}/> */}
                {/* <Box2 position={[-5, 0, 0]}/> */}




            </Canvas>
        </div>
    );
}
 
export default CanvasGeneral;


