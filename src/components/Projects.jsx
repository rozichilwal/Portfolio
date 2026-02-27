import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projects = [
    {
        title: 'AI Resume Analyzer',
        description:
            'An intelligent resume analysis tool that leverages AI to extract skills, match job descriptions, perform grammar checks, and score resumes — built with React and Node.js.',
        tags: ['React.js', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Google Gemini API'],
        category: 'Full Stack',
        github: 'https://github.com/rozichilwal/AI-resume-analyzer.git',
        live: '#',
        gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        emoji: '🤖',
    },
    {
        title: 'Slack Clone App',
        description:
            'A full-stack Slack-like collaboration platform using MongoDB, Express.js, React.js, and Node.js, featuring real-time chat, video calling, user authentication, and scalable backend services.',
        tags: ['React.js', 'Vite', 'Tailwind CSS', 'Express.js', 'Node.js', 'MongoDB'],
        category: 'Full Stack',
        github: 'https://github.com/rozichilwal/Slack-clone.git',
        live: '#',
        gradient: 'linear-gradient(135deg, #0a3d62, #1e3799)',
        emoji: '💬',
    },
    {
        title: 'Phegon Airlines',
        description:
            'a full-stack Airline Management System using React for the frontend and Spring Boot for backend services, with PostgreSQL as the database. The system supports airline operations such as flight management, booking workflows, and secure data handling through structured APIs.',
        tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'Java'],
        category: 'Full Stack',
        github: 'https://github.com/rozichilwal/Phegon-Airline-Portal.git',
        live: '#',
        gradient: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
        emoji: '✈️',
    },
    {
        title: 'Expense Tracker',
        description:
            'A React-based expense tracker with real-time income/expense calculations, localStorage persistence, and an interactive pie chart for visualizing spending.',
        tags: ['React', 'Chart.js', 'LocalStorage', 'CSS'],
        category: 'Frontend',
        github: 'https://github.com/rozichilwal/expenses-tracker.git',
        live: '#',
        gradient: 'linear-gradient(135deg, #134e5e, #71b280)',
        emoji: '💰',
    },
    {
        title: 'React Dashboard',
        description:
            'A production-ready analytics dashboard with KPI cards, revenue & orders charts, data tables, user management page, and real API integration — built with React, Recharts, and React Router.',
        tags: ['React.js', 'Recharts', 'React Router', 'Vite', 'CSS3'],
        category: 'Frontend',
        github: 'https://github.com/rozichilwal/Inventory-Dashboard.git',
        live: '#',
        gradient: 'linear-gradient(135deg, #3d1a1a, #6a2c2c)',
        emoji: '📊',
    },
    {
        title: 'GitHub Finder',
        description:
            'A GitHub user finder app that allows users to search for GitHub profiles, view repositories, and explore user information.',
        tags: ['HTML', 'CSS', 'JavaScript', 'GNews API'],
        category: 'Frontend',
        github: 'https://github.com/rozichilwal/Github-Finder.git',
        live: '#',
        gradient: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
        emoji: '�',
    },
];

const filters = ['All', 'Frontend', 'Full Stack', 'Backend'];

export default function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [active, setActive] = useState('All');

    const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

    return (
        <section id="projects" className="section projects">
            <div className="orb orb-purple projects__orb" />
            <div className="container" ref={ref}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Featured <span>Projects</span>
                </motion.h2>

                {/* Filter buttons */}
                <motion.div
                    className="projects__filters"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    {filters.map((f) => (
                        <button
                            key={f}
                            className={`filter-btn ${active === f ? 'active' : ''}`}
                            onClick={() => setActive(f)}
                        >
                            {f}
                        </button>
                    ))}
                </motion.div>

                <div className="projects__grid">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.title}
                            className="project-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            layout
                        >
                            {/* Thumbnail */}
                            <div className="project-card__thumb" style={{ background: project.gradient }}>
                                <span className="project-card__emoji">{project.emoji}</span>
                                <div className="project-card__overlay">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="overlay-btn">
                                        <FiGithub /> Code
                                    </a>
                                    <a href={project.live} target="_blank" rel="noreferrer" className="overlay-btn">
                                        <FiExternalLink /> Live
                                    </a>
                                </div>
                            </div>

                            <div className="project-card__body">
                                <div className="project-card__category">{project.category}</div>
                                <h3 className="project-card__title">{project.title}</h3>
                                <p className="project-card__desc">{project.description}</p>
                                <div className="project-card__tags">
                                    {project.tags.map((t) => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
