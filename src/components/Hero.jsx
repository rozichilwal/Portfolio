import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import './Hero.css';

const roles = ['Problem Solver', 'React Enthusiast', 'Java Developer', 'Full Stack Developer'];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const current = roles[roleIndex];
        if (!deleting && displayed.length < current.length) {
            timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        } else if (!deleting && displayed.length === current.length) {
            timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
        } else if (deleting && displayed.length > 0) {
            timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [displayed, deleting, roleIndex]);

    const containerVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    return (
        <section id="hero" className="hero">
            {/* Background orbs */}
            <div className="orb orb-cyan hero__orb1" />
            <div className="orb orb-purple hero__orb2" />
            <div className="hero__grid" />

            <div className="container hero__content">
                <motion.div
                    className="hero__text"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.p className="hero__greeting" variants={itemVariants}>
                        👋 Hello, I&apos;m
                    </motion.p>
                    <motion.h1 className="hero__name" variants={itemVariants}>
                        Rozi
                    </motion.h1>
                    <motion.div className="hero__role-wrapper" variants={itemVariants}>
                        <span className="hero__role">{displayed}</span>
                        <span className="hero__cursor" />
                    </motion.div>
                    <motion.p className="hero__sub" variants={itemVariants}>
                        I craft elegant digital experiences — from pixel-perfect interfaces to
                        scalable backends. Let&apos;s build something amazing together.
                    </motion.p>
                    <motion.div className="hero__actions" variants={itemVariants}>
                        <ScrollLink to="projects" smooth duration={600} offset={-70} className="btn btn-primary">
                            View My Work <FiArrowDown />
                        </ScrollLink>
                        <ScrollLink to="contact" smooth duration={600} offset={-70} className="btn btn-outline">
                            Get In Touch
                        </ScrollLink>
                    </motion.div>
                    <motion.div className="hero__socials" variants={itemVariants}>
                        <a href="https://github.com/rozichilwal" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
                        <a href="https://www.linkedin.com/in/rozi-chilwal-6b7723260" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                        <a href="mailto:rozichilwal09@gmail.com" aria-label="Email"><FiMail /></a>
                    </motion.div>
                </motion.div>

                {/* Floating avatar card */}
                <motion.div
                    className="hero__avatar-wrap"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                >

                    <div className="hero__avatar">
                        <img src="/image.jpeg" alt="Rozi" className="hero__avatar-img" />
                    </div>

                </motion.div>
            </div>

            <motion.div
                className="hero__scroll-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
            >
                <ScrollLink to="about" smooth duration={600} offset={-70}>
                    <div className="scroll-mouse">
                        <div className="scroll-wheel" />
                    </div>
                    <span>Scroll down</span>
                </ScrollLink>
            </motion.div>
        </section>
    );
}
