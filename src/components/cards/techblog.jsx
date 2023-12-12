import React from 'react';
import p3 from '../../assets/images/tech-blog.png';

const TechBlogCard = () => {
  return (
    <div className="project-card max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <img src={p3} alt="" className="w-full h-64 object-cover object-top" />
      <div className="p-6">
        <h3 className="project-title text-xl font-semibold text-gray-800">Tech Blog</h3>
        <p className="project-description mt-2 text-sm text-gray-600">Tech Blog is a Content Management System blog site made for developers, tech enthusiasts, and anyone passionate about technology. It provides a platform for users to express their ideas, share insights, and engage in meaningful discussions on a wide range of tech-related topics.</p>
        <div className="project-technologies flex flex-wrap mt-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">HTML</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">CSS</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">JavaScript</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">Node.js</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">MySQL</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">Express.js</span>
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

export default TechBlogCard;
