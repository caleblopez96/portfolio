const technologies = [
  { name: "HTML", color: "bg-orange-400", image: "../../assets/svg/" },
  { name: "CSS", color: "bg-blue-500" },
  { name: "JavaScript", color: "bg-yellow-500" },
  { name: "TypeScript", color: "bg-blue-500" },
  { name: "Python", color: "bg-purple-500" },
  { name: "Tailwind CSS", color: "bg-pink-500" },
  { name: "React", color: "bg-indigo-500" },
  { name: "Express", color: "bg-teal-500" },
  { name: "NodeJS", color: "bg-gray-500" },
  { name: "Postman", color: "bg-gray-600" },
  { name: "GIT", color: "bg-orange-600" }
];

const ToolsAndTechnologies = () => {
  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold mb-2 text-red-700">Tools and Technologies</h1>
      <h2 className="text-base mb-4">
        Here are some of my favorite technologies to build with:
      </h2>
      <div className="flex flex-wrap gap-4">
        {technologies.map((tech) => (
          <div key={tech.name} className={`${tech.color} font-semibold px-4 py-2 rounded shadow hover:shadow-lg transition-shadow duration-200`} role="button"> {tech.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsAndTechnologies;
