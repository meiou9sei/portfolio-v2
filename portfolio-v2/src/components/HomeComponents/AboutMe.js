import { useState } from "react";
import AboutMeMini from "./AboutMeMini";
import aboutMeMinis from "./aboutMeMinis";

const AboutMe = () => {
    //const [minis, setMinis] = useState([aboutMeMinis]);
    //import useState if you ever use this

    const [id, setId] = useState(0);

    const newId = () => {
        console.log('before' + id);
        setId(id + 1)
        console.log('after' + id);
    }

    return (
        <div id="about" className="non-title-main">
            <div className="what-i-do about-me-section">
                <h2>What I do 🔨</h2>
                <AboutMeMini {...aboutMeMinis.mini1} genNewId={newId} /> {/* what I do */}
            </div>
            
            <div className="skills about-me-section">
                <h2>Skills 🔧</h2>
                <AboutMeMini {...aboutMeMinis.mini2} genNewId={newId} /> {/* Tech */}
                <AboutMeMini {...aboutMeMinis.mini3} genNewId={newId} /> {/* Graphics */}
                <AboutMeMini {...aboutMeMinis.mini4} genNewId={newId} /> {/* Languages */}
            </div>

            <div className="experience about-me-section">
                <h2>Experience ⚙️</h2>
                <AboutMeMini {...aboutMeMinis.mini5} genNewId={newId} /> {/* Elephant / MAIP */}
                <AboutMeMini {...aboutMeMinis.mini6} genNewId={newId} /> {/* PoliSci UCF */}
            </div>

            <div className="fun-facts about-me-section">
                <div className="title-description-container">
                    <h2>Fun Facts 🍜</h2>
                </div>
                <AboutMeMini {...aboutMeMinis.mini7} genNewId={newId} /> {/* fun facts about me */}
            </div>
        </div>
    );
}
 
export default AboutMe;