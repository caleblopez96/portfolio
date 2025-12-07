import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tenp from "../../assets/Tenp.png";

const caseStudies = [
    {
        id: "website-redesign", // ✅ FIXED: Changed to kebab-case (no spaces)
        title: "10th Planet Phoenix Website Redesign",
        category: "Frontend Development",
        description: "Rebuilt the 10th Planet Phoenix website with React and Node.js, increasing accessibility and modernizing the site",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
        image: Tenp,
        gradient: "from-blue-500 to-purple-600",
    },
    {
        id: "financial-industry-services",
        title: "Financial Services Dashboard",
        category: "Backend Development",
        description:
            "I designed and built an automated system that keeps Cambridge Investment Research's internal records synchronized with FINRA's regulatory data.",
        technologies: ["C#", "SQL Server", "REST APIs"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        gradient: "from-green-500 to-teal-600",
    },
    {
        id: "task-management-app",
        title: "Team Task Management System",
        category: "Full-Stack Development",
        description:
            "Created a collaborative task management application with real-time updates, team collaboration features, and project tracking.",
        technologies: ["React", "Express", "PostgreSQL", "Socket.io", "JWT"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        gradient: "from-orange-500 to-red-600",
    },
];

export default function CaseStudies() {
    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
            <div className="container mx-auto px-4 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2
                        id="casestudies"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-4"
                    >
                        Case Studies
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl">
                        Explore my recent projects and the solutions I've built to solve real-world problems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link to={`/case-study/${study.id}`}>
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                    {/* Image with gradient overlay */}
                                    <div className="relative h-48 overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-90`}></div>
                                        <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-full text-sm font-semibold">
                                                {study.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">{study.title}</h3>
                                        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{study.description}</p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {study.technologies.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {study.technologies.length > 3 && (
                                                <span className="text-gray-600 dark:text-gray-400 text-sm px-2 py-1">
                                                    +{study.technologies.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center text-red-700 dark:text-red-500 font-semibold group">
                                            View Case Study
                                            <svg
                                                className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
