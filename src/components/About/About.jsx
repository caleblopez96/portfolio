import ToolGrid from './ToolGrid'; // Adjust the path according to your folder structure

const About = () => {
  return (
    <>
      <div className="min-h-screen px-4 py-10 font-mono">
        <h1 className="text-4xl font-bold mb-4 text-red-700">About Me</h1>
        <p className=" text-base leading-relaxed">
          Full-time student currently pursuing my Bachelor of Science in Graphic Information Technology with a focus in full-stack web development from Arizona State University. I am passionate about solving problems with code, and I thrive on the challenges that web development offers. Capable of handling front-end and back-end tasks, I am eagerly seeking full-stack internship opportunities for the summer of 2025 to showcase my knowledge and learn from industry professionals. My dream is to turn this passion into a career.
        </p>
        <ToolGrid />
      </div>
    </>
  );
};

export default About;
