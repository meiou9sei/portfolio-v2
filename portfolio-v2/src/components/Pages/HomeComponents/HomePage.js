import AboutMe from "./AboutMe";
import Hero from "./Hero";

//css
import '../../../css/home.css'

const HomePage = () => {
    return ( 
        <div>
            <main>
                <Hero />
                <AboutMe />
            </main>
        </div>
    );
}
 
export default HomePage;