 // Hero.jsx
import Footer from './Footer';  
 
 
function Hero() {
  return (
    <section id="home" className="hero-section bg-gray-900 text-white flex min-h-screen justify-center items-center flex-col">
  
      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center hero-image-container">
        <div className="hero-text w-full text-center mt-30">
          <h1 className="text-xl text-sm md:text-xl lg:text-2xl">Hello, I am Marcus Perdue</h1>
          <h2 className="font-extrabold heading-font text-3xl md:text-3xl lg:text-7xl mb-2">Full Stack Developer</h2>
          <div className="text-center">
       
            <a href="/Resume - (Marcus Perdue).pdf" target="_blank">
              <button className="custom-button mr-4 mb-2">
                Download Resume
              </button>
            </a>
            <a href="#contact">
              <button className="custom-button">
                Lets Talk!
              </button>
            </a>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Hero;
