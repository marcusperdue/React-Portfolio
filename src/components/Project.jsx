 
import FilmPulseCard from '../components/cards/filmpulse.jsx';
import GameYapCard from '../components/cards/gameyap.jsx'; 
import TechBlogCard from '../components/cards/techblog.jsx'; 
import TextEditorCard from '../components/cards/texteditor.jsx'; 
import SimpleTip from '../components/cards/texteditor.jsx'; 
import WeatherDashboard from '../components/cards/texteditor.jsx'; 
import Footer from './Footer'; 
 

const WorksPage = () => {
  return (
    <section id="works" className="p-6 works-section min-h-screen">
      <h2 className="heading-font text-3xl mt-40 mb-4">My Works</h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 md:overflow-x-auto my-container pt-20" style={{ width: 'max-content' }}>
         
          <FilmPulseCard />
          <GameYapCard />
          <TechBlogCard />
          <TextEditorCard />
          <SimpleTip />
          <WeatherDashboard />
           
         
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default WorksPage;
