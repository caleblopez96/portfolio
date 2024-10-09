import ToolGrid from './ToolGrid'

const About = () => {
  return (
    <>
      <div className="min-h-screen px-3 py-10 font-mono border-b-4 border-b-red-700">
        <h1 id="About" className="sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 text-red-700">About Me</h1>
        <h2 className="sm:text-2xl md:text-3xl lg:text-4xl italic py-2">Turning my passion into a career...</h2>
        <p className="sm:font-mono md:text-lg lg:text-2xl text-base text-balance mb-4">
          Thanks to my GI-BILL, I’m diving deep into full-stack web development at Arizona State University. Web development constantly challenges me, and I love working across both the front-end and back-end. I’m on the lookout for full-stack internships in summer 2025 where I can put my skills to the test, learn, and contribute to some exciting projects.
        </p>

        <ToolGrid />
      </div>
    </>
  );
};

export default About;
