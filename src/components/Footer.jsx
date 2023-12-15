 
import githubIcon from '../assets/icons/icons8-github-30.svg';  
import linkedinIcon from '../assets/icons/icons8-linkedin-30.svg';  

function Footer() {
  return (
    <footer>
      <div className="footer-content flex justify-center items-center mt-10">
        <a href="https://github.com/marcusperdue" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
          <span className="text-sm">GitHub</span>
        </a>
        <a href="www.linkedin.com/in/marcus-perdue" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 ml-2">
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
