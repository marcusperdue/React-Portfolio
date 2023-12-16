 import Footer from './Footer';
import resumeImage from '../assets/images/resume.jpg';  
import pdfUrl from "../assets/images/resume.pdf";

function Resume() {
  return (
    <div className="resume-page text-white flex min-h-screen justify-center items-center flex-col">
      <div className="resume-container mt-4">
        <img src={resumeImage} alt="Resume" /> {/* Use the imported image */}
      </div>
      <div className="download-link mt-4">
        <a href={pdfUrl} download="resume.pdf">
          Download Resume
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
