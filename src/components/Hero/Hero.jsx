import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ToolGrid from "../ToolGrid/ToolGrid";

const DynamicHeroText = () => {
    const [jobTitle, setJobTitle] = useState("Full-Stack Web Developer");

    useEffect(() => {
        const titles = ["Software Developer", "Programmer", "Full-Stack Web Developer", "Graduate Student"];

        const intervalId = setInterval(() => {
            setJobTitle((prevTitle) => {
                const currentIndex = titles.indexOf(prevTitle);
                const nextIndex = (currentIndex + 1) % titles.length;
                return titles[nextIndex];
            });
        }, 2500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section
            id="Top"
            className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800
               pt-24 md:pt-32 lg:pt-0"
        >
            <div className="container mx-auto px-4 lg:px-12 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100">Hi, I'm Caleb</h1>

                        <motion.p
                            key={jobTitle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-3xl font-semibold text-red-700"
                        >
                            {jobTitle}
                        </motion.p>

                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            I have over two years of experience building UIs with React, integrating web APIs, and developing backend
                            services for the financial services industry.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <a
                                className="px-8 py-3 bg-red-700 text-white font-semibold rounded-full hover:bg-black transition duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://drive.google.com/file/d/1PH08Cp9IzocSPiOcQdKDGaqMwb2p6-0l/view?usp=sharing"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - Tech Stack */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <ToolGrid />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DynamicHeroText;
