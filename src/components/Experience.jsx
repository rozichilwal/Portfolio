import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const experiences = [

    {
        role: 'Full Stack Developer Intern',
        company: 'ShipScout',
        location: 'Hybrid',
        period: 'Jan 2026 - Present',
        points: [
            'Developed frontend features using React.js and JavaScript.',
            'Built REST APIs using Node.js and Express.js.',
            'Integrated MongoDB for data storage and CRUD operations.',
            'Learned and experimented with AI-based development tools.',
        ],
    },
    {
        role: 'Java Developer Intern',
        company: 'Binary Semantics Ltd.',
        location: 'Gurugram, India',
        period: 'June 2025 – July 2025',

        points: [
            'Developed backend services using Java and Spring Boot.',
            'Implemented REST APIs and integrated database operations.',
            'Learned secure authentication concepts using JWT and Spring Security.',
            'Debugged and tested backend application features.',
        ],
    },
];

export default function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="experience" className="section experience">
            <div className="orb orb-cyan exp__orb" />
            <div className="container" ref={ref}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    My <span>Experience</span>
                </motion.h2>

                <div className="exp__timeline">
                    {/* Vertical line */}
                    <motion.div
                        className="exp__line"
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.role + exp.company}
                            className={`exp__item ${i % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            {/* Dot */}
                            <div className={`exp__dot color-${exp.color}`} />

                            <div className={`exp__card glass-card color-${exp.color}`}>
                                <div className="exp__card-header">
                                    <div>
                                        <h3 className="exp__role">{exp.role}</h3>
                                        <p className="exp__company">
                                            <FiBriefcase /> {exp.company}
                                        </p>
                                    </div>
                                    <span className={`exp__badge exp__badge--${exp.color}`}>{exp.type}</span>
                                </div>
                                <div className="exp__meta">
                                    <span><FiCalendar /> {exp.period}</span>
                                    <span><FiMapPin /> {exp.location}</span>
                                </div>
                                <ul className="exp__points">
                                    {exp.points.map((pt) => (
                                        <li key={pt}>{pt}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
