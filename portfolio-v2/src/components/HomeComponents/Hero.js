document.querySelectorAll(".about-nav").forEach(e => {e.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
})});

const Hero = () => {
    return (
        <div>
            <div class="hero-container">
                <div class="hero">
                    <h1 class="hero-text">Cameron Avvampato</h1>
                    <p class="hero-subtext">Think that's long? Wait till you see my middle name</p>
                </div>
            </div>
            <div class="heros-empty-space" id="about-nav-container">
                <p><a class="about-nav" href="#about">About</a></p>
                <p><a class="about-nav" href="#about">v</a></p>
            </div>
        </div>
    );
}
 
export default Hero;