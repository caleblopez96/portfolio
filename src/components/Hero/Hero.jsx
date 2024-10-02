import { useState, useEffect } from 'react';
import "./Hero.css";

const DynamicHeroText = () => {
  const [jobTitle, setJobTitle] = useState('developer');

  useEffect(() => {
    const titles = ['developer', 'programmer', 'web developer', 'software engineer'];

    const intervalId = setInterval(() => {
      setJobTitle(prevTitle => {
        const currentIndex = titles.indexOf(prevTitle);
        const nextIndex = (currentIndex + 1) % titles.length;
        return titles[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-cyan-500">
      <div className="text-center">
        <h1 className="text-4xl text-orange-950">Hello, my name is Caleb</h1>
        <p className="py-6 text-2xl">
          I&apos;m a <span className="font-bold text-primary">{jobTitle}</span>
        </p>
      </div>
    </div>
  );
};

export default DynamicHeroText;
