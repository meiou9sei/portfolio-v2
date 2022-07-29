document.querySelectorAll(".about-nav").forEach(e => {e.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
})});

const Hero = () => {
    return (
        <div>
            <div className="hero-container">
                <div className="hero">
                    <h1 className="hero-text">Cameron Avvampato</h1>
                    <p className="hero-subtext">Think that's long? Wait till you see my middle name</p>
                    <div className="heros-empty-space" id="about-nav-container">
                        <p><a className="about-nav" href="#about">About</a></p>
                        <p><a className="about-nav" href="#about">v</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;