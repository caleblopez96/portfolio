/* eslint-disable react/no-unescaped-entities */
import ToolGrid from './ToolGrid'; // Adjust the path according to your folder structure

const About = () => {
  return (
    <>
      <div className="min-h-screen px-3 py-10 font-mono border-b-4 border-b-red-700">
        <h1 id="About" className="text-3xl font-semibold mb-4 text-red-700">About Me</h1>
        <h2 className="text-lg italic py-2">Turning my passion into a career...</h2>
        <p className="text-base leading-relaxed mb-4">
          Thanks to my GI-BILL, I’m diving deep into full-stack web development at Arizona State University. Web development constantly challenges me, and I love working across both the front-end and back-end. I’m on the lookout for full-stack internships in summer 2025 where I can put my skills to the test, learn, and contribute to some exciting projects.
        </p>

        <ToolGrid />
      </div>
    </>
  );
};

export default About;
