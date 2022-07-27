//css
import '../../../css/subpage.scss';
import '../../../css/resume.scss';

const ResumePage = () => {
    return (
        <main className="subpage-main">
            <div className="resume">
                <h1>my resume</h1>
                <p><a href="https://drive.google.com/file/d/16bu750wVymO4eRXSFWBcrDmzoWVNlt_U/view?usp=sharing">View my Resume on Google Drive</a></p>
                <embed src={process.env.PUBLIC_URL + "/Cameron-Avvampato-Resume.pdf"} type="application/pdf" />
                <embed src="../../../../public/Cameron-Avvampato-Resume.pdf" type="application/pdf" />
            </div>
        </main>
    );
}
 
export default ResumePage;