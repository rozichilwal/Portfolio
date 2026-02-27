import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiPhone } from 'react-icons/fi';
import './Contact.css';

const socials = [
    { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/rozichilwal', handle: '@rozichilwal' },
    { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rozi-chilwal-6b7723260', handle: 'rozi-chilwal' },
    { icon: <FiMail />, label: 'Email', href: 'mailto:rozichilwal09@gmail.com', handle: 'rozichilwal09@gmail.com' },
];

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="contact" className="section contact">
            <div className="orb orb-cyan contact__orb1" />
            <div className="orb orb-purple contact__orb2" />

            <div className="container" ref={ref}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Get In <span>Touch</span>
                </motion.h2>

                <motion.div
                    className="contact__centered"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h3>Let&apos;s Connect!</h3>
                    <p>
                        I am currently seeking full-time roles, internships, and professional collaborations
                        where I can contribute, learn, and grow within a structured environment.
                    </p>

                    <div className="contact__details">
                        <div className="contact__detail">
                            <FiMapPin /> <span>India 🇮🇳</span>
                        </div>
                        <div className="contact__detail">
                            <FiMail /> <span>rozichilwal09@gmail.com</span>
                        </div>
                        <div className="contact__detail">
                            <FiPhone /> <span>+91 6375669429</span>
                        </div>
                    </div>

                    <div className="contact__socials contact__socials--grid">
                        {socials.map((s) => (
                            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-pill glass-card">
                                <span className="social-pill__icon">{s.icon}</span>
                                <div>
                                    <p className="social-pill__label">{s.label}</p>
                                    <p className="social-pill__handle">{s.handle}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
