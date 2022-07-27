import AboutMe from "./AboutMe";
import Hero from "./Hero";

//css
import '../../../css/home.scss'

const HomePage = () => {
    return ( 
        <div>
            <main>
                <Hero />
                <AboutMe />
                {/* <StarCanvasContainer /> */}
            </main>
        </div>
    );
}
 
export default HomePage;