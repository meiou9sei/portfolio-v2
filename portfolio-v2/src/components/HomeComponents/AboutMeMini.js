const AboutMeMini = ({title, subtitle, skills}) => {
    return (
        <div className="about-me-mini">
            <div className="title-description-container">
                {(title !== null) &&
                    <h3>{title}</h3>
                }
                {(subtitle !== null) &&
                    <p>{subtitle}</p>
                }
            </div>
            <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}   
            </ul>
        </div>
    )
}

export default AboutMeMini;

/*
const AboutMeMini = () => {
    return (
        <div className="about-me-mini">
            <div className="title-description-container">
                <h3>Sample H3 (can be optional)</h3>
                <p>Sample description (can be optional)</p>
            </div>
            <ul>
                <li>1ee</li>
                <li>2ee</li>
                <li>3ee</li>
            </ul>
        </div>
    );
}
*/