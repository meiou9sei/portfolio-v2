import AboutMe from "./AboutMe";
import Hero from "./Hero";
import CanvasGeneral from "./../../ThreeComponents/CanvasContainer";

//css
import '../../../css/home.scss'

const HomePage = () => {
    return ( 
        <div>
            <CanvasGeneral />
            <main>
                <Hero />
                <AboutMe />
                {/* <StarCanvasContainer /> */}
            </main>
        </div>
    );
}
 
export default HomePage;