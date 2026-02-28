import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiLayers, FiTrendingUp } from 'react-icons/fi';
import './About.css';

const stats = [
    { icon: <FiCode />, value: '5+', label: 'Projects Built' },
    { icon: <FiLayers />, value: '3+', label: 'Years Learning' },
    { icon: <FiTrendingUp />, value: '10+', label: 'Technologies' },
];

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="about" className="section about">
            <div className="orb orb-purple about__orb" />
            <div className="container" ref={ref}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    About <span>Me</span>
                </motion.h2>

                <div className="about__grid">
                    {/* Avatar card */}
                    <motion.div
                        className="about__card glass-card"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div className="about__avatar-box">
                            <img src="/image.jpeg" alt="Rozi" className="about__avatar-img" />
                        </div>
                        <div className="about__card-info">
                            <h3>Rozi</h3>
                            <p>Full Stack Developer</p>
                            <div className="about__tags">
                                <span>🌍 India</span>
                                <span>💼 Open to Work</span>
                            </div>
                        </div>

                        <div className="about__stats">
                            {stats.map((s) => (
                                <div key={s.label} className="about__stat">
                                    <span className="stat-icon">{s.icon}</span>
                                    <span className="stat-value">{s.value}</span>
                                    <span className="stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        className="about__bio"
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3 className="about__bio-heading">
                            Passionate about building <span>impactful</span> software
                        </h3>
                        <p>
                            I&apos;m a full stack developer with a passion for crafting elegant, performant web
                            applications. My journey started with curiosity about how websites work, and it
                            evolved into a deep love for writing clean, maintainable code that solves real problems.
                        </p>
                        <p>
                            My expertise includes frontend development with React.js and backend development using
                            Node.js and Java Spring Boot, with an emphasis on clean architecture, usability, and
                            performance.
                        </p>
                        <p>
                            When I&apos;m not coding, I&apos;m exploring new technologies or
                            sharpening my problem-solving skills on competitive coding platforms.
                        </p>

                        <a
                            href="/resume.pdf"
                            download="Rozi_Resume.pdf"
                            className="about__resume-btn"
                        >
                            📄 Download Resume
                        </a>

                        {/* <div className="about__highlights">
                            {[
                                '🎯 Detail-oriented & quality-focused',
                                '🤝 Collaborative team player',
                                '📚 Continuous learner',
                                '⚡ Fast learner & adaptable',
                            ].map((item) => (
                                <div key={item} className="about__highlight">{item}</div>
                            ))}
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
