import { motion } from "framer-motion";
import ToolGrid from "../ToolGrid/ToolGrid";

export default function About() {
    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex mb-32">
            <div className="container mx-auto px-4 lg:px-12 py-2">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="order-2 md:order-2 flex justify-center">
                        <div className="w-full max-w-md">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                                Tech I Love
                            </h2>

                            <ToolGrid />
                        </div>
                    </div>

                    {/* About text */}
                    <motion.div
                        className="space-y-6 order-1 md:order-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2
                            id="About"
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight"
                        >
                            About Me
                        </h2>

                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <p className="text-base md:text-lg leading-relaxed text-balance">
                                I’m a full-time student pursuing a BS in GIT with a focus on full-stack web development from Arizona State
                                University. I’m originally from Houston, Texas, but transferred to ASU after leaving the Army to pursue my
                                passion for programming. I have some minor experience building web applications using JavaScript, React, and
                                Node.js. I know I still have a lot to learn, but my passion for solving problems and the enjoyment I get
                                from programming keeps me coming back for more.
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-balance">
                                After graduation, I hope to work on enterprise-level web applications, particularly with JavaScript and
                                TypeScript. Outside of school, I enjoy playing Fortnite, training 10th Planet Jiu-Jitsu, and going on hikes
                                with my wife and our dog.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
