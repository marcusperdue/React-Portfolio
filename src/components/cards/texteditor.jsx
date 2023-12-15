 
import p4 from '../../assets/images/text-editor.png';

const TextEditorCard = () => {
  return (
    <div className="project-card max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <img src={p4} alt="" className="w-full h-64 object-cover object-top" />
      <div className="p-6">
        <h3 className="project-title text-xl font-semibold text-gray-800">Text Editor Offline</h3>
        <p className="project-description mt-2 text-sm text-gray-600">This is a web-based text editor that is designed to function both online and offline, allowing users to create and save notes or code snippets reliably.</p>
        <div className="project-technologies flex flex-wrap mt-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">HTML</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">CSS</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">JavaScript</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">Node.js</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">Babel</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">Express.js</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">Webpack</span>
        </div>
        <div className="project-links flex items-center mt-4">
          <a href="https://github.com/marcusperdue/Text-Editor-Project" className="text-sm font-bold" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="mx-2">|</span>
          <a href="https://protected-island-59811-22528ebb796c.herokuapp.com/" className="text-sm font-bold ml-3" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default TextEditorCard;
