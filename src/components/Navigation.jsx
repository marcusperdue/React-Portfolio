 // Navigation.jsx
import logo from '../assets/images/logo.png';
import { useState } from 'react'; 

const Navigation = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <nav className="flex items-center justify-between p-4 navbar">
      <div className="text-black font-bold image-container">
        <img src={logo} alt="" style={{ maxWidth: '200px' }} />
      </div>

      <div className="md:hidden">
        <button id="mobile-menu-button" onClick={toggleMobileMenu}>
  
          <div className="md:hidden">
            <dotlottie-player
              src="https://lottie.host/65e237f5-b5ee-4c11-99db-3f4fb5a1f5eb/fHy7e26tSf.json"
              background="transparent"
              speed="1"
              style={{ width: '90px', height: '90px' }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </button>
      </div>

      {/* Menu Links */}
      <ul className={`md:flex flex-col md:flex-row absolute md:static left-0 right-0 top-full mt-1 md:mt-0 bg-white md:bg-transparent ${isMobileMenuVisible ? '' : 'hidden'}`} id="mobile-menu">
        <li className="mx-2 my-2">
          <a href="/" className="text-base hover:text-gray-300">HOME</a>
          <div className="dot hidden md:block"></div>
        </li>
        <li className="mx-2 my-2">
          <a href="/about" className="text-base hover:text-gray-300">ABOUT</a>
          <div className="dot hidden md:block"></div>
        </li>

         <li className="mx-2 my-2">
          <a href="/works" className="text-base hover:text-gray-300">WORKS</a>
          <div className="dot hidden md:block"></div>
        </li> 
        <li className="mx-2 my-2">
          <a href="/contact" className="text-base hover:text-gray-300">CONTACT</a>
          <div className="dot hidden md:block"></div>
        </li>
        <li className="mx-2 my-2">
          <a href="/resume" className="text-base hover:text-gray-300">RESUME</a>
          <div className="dot hidden md:block"></div>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navigation;
