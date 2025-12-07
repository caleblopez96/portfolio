import htmlIcon from "../../assets/icons8-html-48.png";
import cssIcon from "../../assets/icons8-css-48.png";
import javascriptIcon from "../../assets/icons8-javascript-48.png";
import typescriptIcon from "../../assets/icons8-typescript-48.png";
import csharpIcon from "../../assets/icons8-c-48.png";
import pythonIcon from "../../assets/icons8-python-48.png";
import sqlIcon from "../../assets/icons8-sql-48.png";
import tailwindIcon from "../../assets/icons8-tailwind-css-48.png";
import reactIcon from "../../assets/icons8-react-48.png";
import expressIcon from "../../assets/icons8-express-js-48.png";
import nodeIcon from "../../assets/icons8-nodejs-48.png";
import gitIcon from "../../assets/icons8-git-48.png";
import { motion } from "framer-motion";

const technologies = [
    { name: "React", image: reactIcon },
    { name: "JavaScript", image: javascriptIcon },
    { name: "TypeScript", image: typescriptIcon },
    { name: "NodeJS", image: nodeIcon },
    { name: "Express", image: expressIcon },
    { name: "HTML", image: htmlIcon },
    { name: "CSS", image: cssIcon },
    { name: "Tailwind CSS", image: tailwindIcon },
    { name: "SQL", image: sqlIcon },
    { name: "GIT", image: gitIcon },
    { name: "C#", image: csharpIcon },
    { name: "Python", image: pythonIcon },
];

// Pyramid structure: 1, 2, 3, 4, 2 (can adjust this)
const pyramidRows = [
    [technologies[0]], // Row 1: 1 item
    [technologies[1], technologies[2]], // Row 2: 2 items
    [technologies[3], technologies[4], technologies[5]], // Row 3: 3 items
    [technologies[6], technologies[7], technologies[8], technologies[9]], // Row 4: 4 items
    [technologies[10], technologies[11]], // Row 5: 2 items
];

export default function ToolsAndTechnologies() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-primary"
        >
            <div className="flex flex-col items-center gap-4 py-8">
                {pyramidRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-wrap justify-center gap-4">
                        {row.map((tech) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: rowIndex * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="bg-white dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 font-semibold px-4 py-3 rounded-lg shadow hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                            >
                                <img src={tech.image} alt={tech.name} className="w-8 h-8" />
                                <span>{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
