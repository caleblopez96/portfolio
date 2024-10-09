import htmlIcon from '../../assets/icons8-html-48.png'
import cssIcon from '../../assets/icons8-css-48.png'
import javascriptIcon from '../../assets/icons8-javascript-48.png'
import typescriptIcon from '../../assets/icons8-typescript-48.png'
import pythonIcon from '../../assets/icons8-python-48.png'
import tailwindIcon from '../../assets/icons8-tailwind-css-48.png'
import reactIcon from '../../assets/icons8-react-48.png'
import expressIcon from '../../assets/icons8-express-js-48.png'
import nodeIcon from '../../assets/icons8-nodejs-48.png'
import gitIcon from '../../assets/icons8-git-48.png'

const technologies = [
  { name: "HTML", color: "bg-white dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900", image: htmlIcon },

  { name: "CSS", color: "bg-white dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900", image: cssIcon },

  { name: "JavaScript", color: "bg-white dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900", image: javascriptIcon },

  { name: "TypeScript", color: "bg-white dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900", image: typescriptIcon },

  { name: "Python", color: "bg-white dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900", image: pythonIcon },

  { name: "Tailwind CSS", color: "bg-white dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900", image: tailwindIcon },

  { name: "React", color: "bg-white dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900", image: reactIcon },

  { name: "Express", color: "bg-white dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900", image: expressIcon },

  { name: "NodeJS", color: "bg-white dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900", image: nodeIcon },

  { name: "GIT", color: "bg-white dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900", image: gitIcon }
];


const ToolsAndTechnologies = () => {
  return (
    <section className="py-8">
      <h1 className="sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-2 text-red-700">Tools & Tech I love</h1>
      <h2 className="sm:text-2xl md:text-3xl lg:text-4xl mb-4 italic">
        Here are some of my favorite technologies to build with:
      </h2>
      <div className="flex flex-wrap gap-4">
        {technologies.map((tech) => (
          <div key={tech.name} className={`${tech.color} font-semibold px-4 py-2 rounded shadow hover:shadow-lg transition-shadow duration-200`} role="button"> {tech.name}
            <img src={tech.image} alt={tech.name} className="w-8 h-8 inline-block ml-2" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsAndTechnologies;
