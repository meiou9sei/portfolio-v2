import AboutMeMini from "./AboutMeMini";

const AboutMe = () => {
    return (
        <div id="about" class="non-title-main">
            <div class="what-i-do about-me-section">
                <h2>What I do 🔨</h2>
                <AboutMeMini /> {/* what I do */}
            </div>
            
            <div class="skills about-me-section">
                <h2>Skills 🔧</h2>
                <AboutMeMini /> {/* Tech */}
                <AboutMeMini /> {/* Graphics */}
                <AboutMeMini /> {/* Languages */}
            </div>

            <div class="experience about-me-section">
                <h2>Experience ⚙️</h2>
                <AboutMeMini /> {/* Elephant / MAIP */}
                <AboutMeMini /> {/* PoliSci UCF */}
            </div>

            <div class="fun-facts about-me-section">
                <div class="title-description-container">
                    <h2>Fun Facts 🍜</h2>
                    <p>Wow, uhm... you came all the way down here? Have some fun facts</p>
                </div>
                <AboutMeMini /> {/* fun facts about me */}
            </div>
        </div>
    );
}
 
export default AboutMe;