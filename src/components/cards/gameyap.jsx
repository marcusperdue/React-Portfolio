import React from 'react';
import p2 from '../../assets/images/gameyap.png';

const GameYapCard = () => {
  return (
    <div className="project-card max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <img src={p2} alt="" className="w-full h-64 object-cover object-top" />
      <div className="p-6">
        <h3 className="project-title text-xl font-semibold text-gray-800">Game-Yap</h3>
        <p className="project-description mt-2 text-sm text-gray-600">Game Yap is an innovative web application designed to provide an immersive and interactive gaming experience for users. Our platform serves as a comprehensive hub for both seasoned gamers and newcomers, offering a wide array of features that cater to the diverse gaming community.</p>
        <div className="project-technologies flex flex-wrap mt-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">HTML</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">CSS</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">JavaScript</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">Node.js</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">MySQL</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">Express.js</span>
        </div>
        <div className="project-links flex items-center mt-4">
          <a href="https://github.com/marcusperdue/Game-Yap" className="text-sm font-bold" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="mx-2">|</span>
          <a href="https://desolate-sea-54298-2d2f1e6b62d8.herokuapp.com/" className="text-sm font-bold ml-3" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default GameYapCard;
