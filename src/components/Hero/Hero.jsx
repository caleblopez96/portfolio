/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import "./Hero.css";
import Button from '../Button/Button';

const DynamicHeroText = () => {
  const [jobTitle, setJobTitle] = useState('Full-Stack Web Developer');

  useEffect(() => {
    const titles = ['Student', 'Programmer', 'Full-Stack Web Developer'];

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
    <div id="Top" className="flex items-center h-screen hero-container border-b-4 border-b-red-700">
      <div className="px-4 lg:px-12 py-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-primary font-semibold">
          Hi, I'm Caleb
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
          <span className="font-primary font-semibold text-red-700">
            {jobTitle}
          </span>
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-balance py-3 font-primary lg:w-2/3">
          I'm a full-time student studying full-stack web development at Arizona State University.
          I love building websites and web applications using JavaScript/TypeScript.
        </p>
        <Button />
        <div className="flex gap-2">
          <a href="https://github.com/caleblopez96">
            <svg className="w-10 h-10 fill-current text-gray-900 dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40px" height="40px">
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/caleblopez96/">
            <svg className="w-10 h-10 fill-current text-gray-900 dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40px" height="40px">
              <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DynamicHeroText;
