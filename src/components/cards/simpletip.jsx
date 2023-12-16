 
import p5 from '../../assets/images/simpletipcalculator.png';

const SimpleTip = () => {
  return (
    <div className="project-card max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <img src={p5} alt="" className="w-full h-64 object-cover object-top" />
      <div className="p-6">
        <h3 className="project-title text-xl font-semibold text-gray-800">SimpleTipCalculator%</h3>
        <p className="project-description mt-2 text-sm text-gray-600">Simple IOS tip % calculator app.</p>
        <div className="project-technologies flex flex-wrap mt-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">Python</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">Swift</span>
 
        </div>
        <div className="project-links flex items-center mt-4">
          <a href="https://github.com/marcusperdue/Tech-Blog-MVC-Project" className="text-sm font-bold" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="mx-2">|</span>
          <a href="https://powerful-brushlands-75865-4619707f144b.herokuapp.com/" className="text-sm font-bold ml-3" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default SimpleTip;
