/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import selfie from '../../assets/selfie.png';
import "./Hero.css";

const DynamicHeroText = () => {
  const [jobTitle, setJobTitle] = useState('Full-Stack Web Developer');

  useEffect(() => {
    const titles = ['Full-Stack Web Developer', 'Programmer', 'Software Engineer'];

    const intervalId = setInterval(() => {
      setJobTitle(prevTitle => {
        const currentIndex = titles.indexOf(prevTitle);
        const nextIndex = (currentIndex + 1) % titles.length;
        return titles[nextIndex];
      });
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen p-2">
      <div className="text-center">
        <img src={selfie} alt='test' />
        <h1 className="text-3xl font-mono">Hello, I'm Caleb! I'm a </h1>
        <p className="py-6 text-2xl">
          <span className="font-mono text-red-700">
            {jobTitle}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DynamicHeroText;
