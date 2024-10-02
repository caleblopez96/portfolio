import { useState, useEffect } from 'react';
import "./Hero.css"

const DynamicHeroText = () => {
  const [jobTitle, setJobTitle] = useState('developer');

  useEffect(() => {
    const titles = ['developer', 'programmer', 'web developer', 'software engineer']; // Move inside useEffect

    const intervalId = setInterval(() => {
      setJobTitle(prevTitle => {
        const currentIndex = titles.indexOf(prevTitle);
        const nextIndex = (currentIndex + 1) % titles.length;
        return titles[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []); // No need for 'titles' in the dependency array

  return (
    <div id='container' className="py-40">
      <div className="hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-main ">Hello, my name is Caleb</h1>
          <p className="py-6 text-2xl">
            I&apos;m a <span className="font-bold text-primary">{jobTitle}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DynamicHeroText;
