//css
import '../../../css/subpage.css';
import '../../../css/resume.css';

const ResumePage = () => {
    return (
        <main className="subpage-main">
            <div className="resume">
                <h1>my resume</h1>
                <p><a href="https://drive.google.com/file/d/16bu750wVymO4eRXSFWBcrDmzoWVNlt_U/view?usp=sharing">View my Resume on Google Drive</a></p>
                <embed src="../../../../public/Cameron-Avvampato-Resume.pdf" type="application/pdf" />
            </div>
        </main>
    );
}
 
export default ResumePage;