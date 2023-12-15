import Footer from './Footer'; 

function Resume() {
  const imageUrl = 'src/assets/images/resume.jpg';  
  const pdfUrl = ' /public/resume.pdf';  

  return (
    <div className="resume-page text-white flex min-h-screen justify-center items-center flex-col">
      <div className="resume-container mt-4">
        <img src={imageUrl} alt="Resume" />
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
