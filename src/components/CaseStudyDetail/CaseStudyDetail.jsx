import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Tenp from "../../assets/Tenp.png";

const caseStudiesData = {
    "Website Redesign": {
        title: "Website Redesign",
        category: "Full-Stack Development",
        client: "10th Planet Phoenix",
        duration: "4 months",
        role: "Lead Full-Stack Developer",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Redis", "AWS S3"],
        image: Tenp,
        gradient: "from-blue-500 to-purple-600",

        overview:
            "Redesigned and rebuilt the 10th Planet Phoenix platform to improve performance, user experience, and scalability. The project involved transforming an early 2000’s WIX website into a modern, fully responsive full-stack application with improved load times, cleaner UI, and support for future feature expansion, .",

        challenge:
            "The existing platform was built on outdated technology with poor performance (5+ second load times), frequent crashes during high traffic, and a confusing checkout process that resulted in a 70% cart abandonment rate.",

        solution:
            "Implemented a modern React frontend with server-side rendering for improved SEO and performance. Built a scalable Node.js backend with microservices architecture.",

        results: [
            { metric: "Page Load Time", value: "80% faster", description: "Reduced from 5.2s to 1.1s" },
            { metric: "Conversion Rate", value: "32% increase", description: "Significant revenue boost" },
            { metric: "User Satisfaction", value: "4.8/5 stars", description: "Up from 3.1/5 stars" },
        ],

        features: ["Advanced product filtering and search functionality", "Responsive design optimized for mobile commerce"],

        lessons: ["Value of user testing throughout development"],
    },

    "financial-industry-services": {
        title: "FINRA API Sync",
        category: "Backend Development",
        client: "Cambridge Investment Research",
        duration: "3 months",
        role: "Software Developer",
        technologies: ["C#", "SQL Server", "REST APIs"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
        gradient: "from-green-500 to-teal-600",

        overview:
            "Designed and implemented an automated data-synchronization system to keep internal firm records aligned with FINRA’s regulatory data, removing the need for daily manual updates.",

        challenge:
            "The existing legacy system had no automated process for ingesting FINRA data. Due to FINRA delivering reports through web-based ETFs and scheduled datasets, internal records frequently became outdated, requiring manual reconciliation.",

        solution:
            "Developed a backend service that consumes the FINRA API, compares incoming data with internal records, and automatically updates any discrepancies—ensuring systems remain current without manual intervention.",

        results: [
            {
                metric: "Operational Time Saved",
                value: "60% reduction",
                description: "Significantly decreased time spent manually retrieving and validating FINRA data.",
            },
            { metric: "Data Accuracy", value: "99.9%", description: "Automated updates removed nearly all errors caused by manual entry." },
            {
                metric: "System Reliability",
                value: "24/7 uptime",
                description: "Scheduled, automated syncs eliminate gaps caused by manual delays.",
            },
            {
                metric: "Stakeholder Efficiency",
                value: "Improved by 40%",
                description: "Advisors and compliance teams received faster and more accurate data.",
            },
        ],

        features: [
            "Automated scheduled syncs with FINRA APIs",
            "Record-level comparison and selective updating",
            "Error logging and exception handling for failed API runs",
            "Integration with existing SQL Server datasets",
        ],

        lessons: [
            "Importance of strict data validation when working with regulatory datasets",
            "Value of building idempotent services that avoid double-processing records",
            "Need for production-like QA environments when ingesting external data",
            "Critical role of security and auditability in financial applications",
        ],
    },

    "task-management-app": {
        title: "Team Task Management System",
        category: "Full-Stack Development",
        client: "ProductivityHub",
        duration: "5 months",
        role: "Full-Stack Developer",
        technologies: ["React", "Express", "PostgreSQL", "Socket.io", "JWT", "Docker", "AWS"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
        gradient: "from-orange-500 to-red-600",

        overview:
            "Created a collaborative task management system designed for remote teams, featuring real-time updates, team collaboration tools, and comprehensive project tracking capabilities.",

        challenge:
            "Remote teams struggled with coordination and visibility into project progress. Existing tools were either too complex or lacked essential features like real-time collaboration and detailed analytics.",

        solution:
            "Developed a full-stack application with real-time synchronization using Socket.io, enabling instant updates across all team members. Implemented a clean, intuitive interface with drag-and-drop functionality and comprehensive project views.",

        results: [
            { metric: "Team Productivity", value: "35% increase", description: "Measured by tasks completed" },
            { metric: "Meeting Time", value: "50% reduction", description: "Better async communication" },
            { metric: "Active Users", value: "10,000+", description: "Within first 6 months" },
            { metric: "Response Time", value: "<100ms", description: "Real-time updates" },
        ],

        features: [
            "Real-time task updates and notifications",
            "Drag-and-drop task management with Kanban boards",
            "Project timeline visualization with Gantt charts",
            "Team collaboration with comments and mentions",
            "Advanced filtering and custom views",
            "Time tracking and productivity analytics",
        ],

        lessons: [
            "Critical importance of real-time features for collaboration",
            "Value of intuitive UI/UX in productivity tools",
            "Need for scalable WebSocket implementation",
            "Importance of offline support and conflict resolution",
        ],
    },
};

export default function CaseStudyDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const study = caseStudiesData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!study) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Case Study Not Found</h1>
                    <Link to="/" className="text-red-700 dark:text-red-500 hover:underline">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <motion.div
                className="relative h-96 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-90`}></div>
                <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 lg:px-12">
                        <button onClick={() => navigate(-1)} className="text-red-700 mb-4 flex items-center hover:underline">
                            <svg className="w-5 h-5 mr-2 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    className="text-red-700"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back
                        </button>
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {study.title}
                        </motion.h1>
                        <motion.p
                            className="text-xl text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {study.category}
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 lg:px-12 py-12">
                {/* Project Info */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">CLIENT</h3>
                        <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{study.client}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">DURATION</h3>
                        <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{study.duration}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">ROLE</h3>
                        <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{study.role}</p>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Overview</h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{study.overview}</p>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">The Challenge</h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{study.challenge}</p>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">The Solution</h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{study.solution}</p>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Results</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {study.results.map((result, index) => (
                                    <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{result.metric}</h3>
                                        <p className="text-3xl font-bold text-red-700 dark:text-red-500 mb-2">{result.value}</p>
                                        <p className="text-gray-700 dark:text-gray-300">{result.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Key Features</h2>
                            <ul className="space-y-3">
                                {study.features.map((feature, index) => (
                                    <li key={index} className="flex items-start text-lg text-gray-700 dark:text-gray-300">
                                        <svg
                                            className="w-6 h-6 text-red-700 dark:text-red-500 mr-3 flex-shrink-0 mt-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Lessons Learned</h2>
                            <ul className="space-y-3">
                                {study.lessons.map((lesson, index) => (
                                    <li key={index} className="flex items-start text-lg text-gray-700 dark:text-gray-300">
                                        <svg
                                            className="w-6 h-6 text-red-700 dark:text-red-500 mr-3 flex-shrink-0 mt-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            />
                                        </svg>
                                        {lesson}
                                    </li>
                                ))}
                            </ul>
                        </motion.section>
                    </div>

                    {/* Sidebar */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg sticky top-24">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {study.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg text-sm font-semibold"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
