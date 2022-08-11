//this page used to be MAIP required blogs - quickly reformatted to be a projects showcase

const BlogPage = () => {
    return (
        <div id="about" className="non-title-main subpage-main">
            <div>
                <h1>Projects</h1>
                <p>Links to live demos - Code available on github</p>
            </div>
            
            <div className="what-i-do about-me-section">
                <h2>Large Projects 🧰</h2>
                <div className="about-me-mini">
                    <div className="title-description-container">
                        <h3>Portfolio v2</h3>
                        <p>Independent project for Elephant Internship</p>
                    </div>
                    <img src="/projects-images/portfolio-v2.gif" alt="demo of my portfolio site" style={{width: '100%'}}/>
                    <ul>
                        <li>Project to showcase technologies and skills acquired in the 2 months at Elephant</li>
                        <li>3D Sheep Models and Animations created in Blender</li>
                        <li>Learned React, Three.js, and React Three Fiber from scratch</li>   
                        <li>Deployed initially on GitHub Pages, later on proper hosting site</li>
                    </ul>
                </div>
            </div>
            
            <div className="skills about-me-section">
                <h2>Webapps in Javascript 📜</h2>
                <div className="about-me-mini">
                    <div className="title-description-container">
                        <p>Interactive and Responsive webapps created in Javascript/HTML/CSS</p>
                    </div>
                    <img src="/projects-images/javascriptapps.gif" alt="demo of my javascript apps" style={{width: '100%'}}/>
                    <ul>
                        <li><a href="https://meiou9sei.github.io/jsCalculator/">Calculator</a></li>   
                        <li><a href="https://meiou9sei.github.io/etch-a-sketch/">Etch a Sketch</a></li>   
                        <li><a href="https://meiou9sei.github.io/rockpaperscissors/">Rock Paper Scissors</a></li>   
                    </ul>
                </div>
            </div>

            <div className="experience about-me-section">
                <h2>Mockup Sites with HTML/CSS 🎃</h2>
                <div className="about-me-mini">
                <div className="title-description-container">
                        <p>Landing pages, signup pages, and forms that are responsive. HTML/CSS</p>
                    </div>
                    <img src="/projects-images/mockupsites.gif" alt="showcase of my HTML/CSS sites" style={{width: '100%'}}/>
                    <ul>
                        <li><a href="https://meiou9sei.github.io/fcc-rwd-project-product/">BF Model RA-dQw4</a></li>   
                        <li><a href="https://meiou9sei.github.io/TOP-foundation-landing-page/">The House of Cards</a></li>   
                        <li><a href="https://meiou9sei.github.io/TOP-CSS-signup-form/">Hard Love</a></li>   
                        <li><a href="https://meiou9sei.github.io/fcc-rwd-project-tribute/">カメババ Tribute</a></li>   
                        <li><a href="https://meiou9sei.github.io/fcc-rwd-project-form/">Pluto's Planethood Petition</a></li>   
                    </ul>
                </div>
            </div>

        </div>
    );
}
 
export default BlogPage;