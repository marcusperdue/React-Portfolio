import React from 'react';
import p1 from '../../assets/images/filmpulse.png';

const FilmPulseCard = () => {
  return (
    <div className="project-card max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <img src={p1} alt="" className="w-full h-64 object-cover object-top" />
      <div className="p-6">
        <h3 className="project-title text-xl font-semibold text-gray-800">FilmPulse</h3>
        <p className="project-description mt-2 text-sm text-gray-600"> FilmPulse is your ultimate destination for exploring the world of movies. Whether you're a dedicated cinephile searching for information about your favorite films or just curious about the latest releases, FilmPulse is your go-to platform.</p>
        <div className="project-technologies flex flex-wrap mt-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">HTML</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">CSS</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">JavaScript</span>
        </div>
        <div className="project-links flex items-center mt-4">
          <a href="https://github.com/marcusperdue/FilmPulse?tab=readme-ov-file" className="text-sm font-bold" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="mx-2">|</span>
          <a href="https://marcusperdue.github.io/FilmPulse/" className="text-sm font-bold ml-3" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default FilmPulseCard;
