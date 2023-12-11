 // AboutMe.jsx
import me from '../assets/images/me.png';
import Footer from './Footer';  

const AboutMe = () => {
  return (
    <section id="about" className="p-6 about-section min-h-screen text-center md:text-left">
      <h2 className="heading-font text-3xl mt-40 mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto"> 
        <img src={me} alt="" className="about-image w-80 h-auto mb-8 md:mr-8" />
        <p className="md:w-1/2 text-xl">
          Innovative full-stack developer with a solid background in web development,
          complemented by over 7 years of experience in audio-visual technology and event
          management. Skilled in crafting seamless digital experiences, I excel in fast-paced and
          collaborative environments, combining technical expertise with a strong proficiency in
          project execution.
        </p>
      </div>
      <Footer />
    </section>
  );
};

export default AboutMe;
