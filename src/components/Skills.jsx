import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiServer, FiTool, FiCpu, FiDatabase, FiLayers, FiWifi, FiBookOpen } from 'react-icons/fi';
import { FaJava } from 'react-icons/fa';
import {
    SiReact, SiJavascript, SiHtml5, SiCss3, SiNodedotjs,
    SiExpress, SiMongodb, SiGit, SiGithub,
    SiPostman, SiVite, SiTailwindcss,
    SiSpring, SiMysql, SiIntellijidea,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import './Skills.css';

const skillGroups = [
    {
        icon: <FiCode />,
        title: 'Frontend',
        color: 'cyan',
        skills: [
            { name: 'React', icon: <SiReact /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'HTML5', icon: <SiHtml5 /> },
            { name: 'CSS3', icon: <SiCss3 /> },
            { name: 'Tailwind', icon: <SiTailwindcss /> },
            { name: 'Vite', icon: <SiVite /> },
        ],
    },
    {
        icon: <FiServer />,
        title: 'Backend',
        color: 'purple',
        skills: [
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'Express', icon: <SiExpress /> },
            { name: 'Java', icon: <FaJava /> },
            { name: 'Spring Boot', icon: <SiSpring /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'MySQL', icon: <SiMysql /> },
        ],
    },
    {
        icon: <FiTool />,
        title: 'Tools',
        color: 'pink',
        skills: [
            { name: 'Git', icon: <SiGit /> },
            { name: 'GitHub', icon: <SiGithub /> },
            { name: 'Postman', icon: <SiPostman /> },
            { name: 'VS Code', icon: <VscVscode /> },
            { name: 'IntelliJ IDEA', icon: <SiIntellijidea /> },
        ],
    },
    {
        icon: <FiBookOpen />,
        title: 'Other',
        color: 'cyan',
        skills: [
            { name: 'DSA', icon: <FiCpu /> },
            { name: 'DBMS', icon: <FiDatabase /> },
            { name: 'OS', icon: <FiLayers /> },
            { name: 'OOPs', icon: <FiCode /> },
            { name: 'CN', icon: <FiWifi /> },
        ],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="skills" className="section skills">
            <div className="orb orb-cyan skills__orb" />
            <div className="container" ref={ref}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    My <span>Skills</span>
                </motion.h2>

                <div className="skills__groups">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={group.title}
                            className={`skills__group glass-card color-${group.color}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: gi * 0.15 }}
                        >
                            <div className="skills__group-header">
                                <span className="skills__group-icon">{group.icon}</span>
                                <h3>{group.title}</h3>
                            </div>

                            <div className="skills__list">
                                {group.skills.map((skill) => (
                                    <div key={skill.name} className="skill-item">
                                        <div className="skill-meta">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
