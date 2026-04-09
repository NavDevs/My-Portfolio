import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Contact = () => {
    const contactInfo = [
        {
            icon: <FaGithub />,
            label: "GitHub",
            value: "NavDevs",
            link: "https://github.com/NavDevs"
        },
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            value: "Naveen S",
            link: "https://www.linkedin.com/in/naveen-s-b77a03343/"
        }
    ]

    const socialLinks = [
        {
            icon: <FaGithub />,
            label: "GitHub",
            url: "https://github.com/NavDevs",
            color: "#fff"
        },
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/naveen-s-b77a03343/",
            color: "#0077b5"
        },
        {
            icon: <SiLeetcode />,
            label: "LeetCode",
            url: "https://leetcode.com/u/Naveen_031",
            color: "#FFA116"
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="container section"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '80vh'
            }}
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginBottom: '3rem' }}
            >
                <h1 className="section-title cyber-glitch" data-text="CONTACT">CONTACT</h1>
                <div className="section-underline" style={{ margin: '0 auto' }} />
                <p style={{ 
                    color: 'var(--text-secondary)', 
                    marginTop: '1rem', 
                    maxWidth: '500px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem'
                }}>
                    {'>'} INITIATING COMMUNICATION PROTOCOL... SELECT CHANNEL BELOW_
                </p>
            </motion.div>

            {/* Contact Info Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1.5rem',
                    width: '100%',
                    maxWidth: '900px',
                    marginBottom: '4rem'
                }}
            >
                {contactInfo.map((info, idx) => (
                    <motion.a
                        key={idx}
                        href={info.link}
                        target={info.link.startsWith('http') ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="card"
                        whileHover={{ 
                            y: -4, 
                            borderColor: 'var(--accent-primary)',
                            boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)'
                        }}
                        style={{
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            textDecoration: 'none',
                            border: '1px solid var(--border)',
                            clipPath: 'polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))'
                        }}
                    >
                        <div style={{
                            color: 'var(--accent-primary)',
                            fontSize: '2rem',
                            background: 'rgba(0, 255, 136, 0.1)',
                            width: '70px',
                            height: '70px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '0.5rem',
                            border: '2px solid var(--accent-primary)',
                            boxShadow: '0 0 15px rgba(0, 255, 136, 0.3)',
                            clipPath: 'polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))'
                        }}>
                            {info.icon}
                        </div>
                        <h4 style={{ 
                            color: 'var(--text-muted)', 
                            fontSize: '0.8rem', 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.15em',
                            fontFamily: 'var(--font-accent)'
                        }}>
                            {info.label}
                        </h4>
                        <p style={{ 
                            color: '#fff', 
                            fontSize: '1rem', 
                            fontWeight: 600,
                            fontFamily: 'var(--font-body)'
                        }}>
                            {info.value}
                        </p>
                    </motion.a>
                ))}
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ textAlign: 'center' }}
            >
                <h3 style={{ 
                    marginBottom: '2rem', 
                    fontSize: '1.3rem', 
                    color: '#fff',
                    fontFamily: 'var(--font-heading)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
                }}>
                    {'>'} Network_Channels
                </h3>
                <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    {socialLinks.map((link, idx) => (
                        <motion.a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ 
                                scale: 1.15,
                                color: link.color,
                                textShadow: `0 0 15px ${link.color}`
                            }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--text-secondary)',
                                transition: 'all 0.3s'
                            }}
                        >
                            <span style={{ fontSize: '2.5rem' }}>{link.icon}</span>
                            <span style={{ 
                                fontSize: '0.75rem', 
                                fontWeight: 600,
                                fontFamily: 'var(--font-accent)',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase'
                            }}>{link.label}</span>
                        </motion.a>
                    ))}
                </div>

                <motion.a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=huesh180@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '1rem 2.5rem',
                        fontSize: '0.9rem'
                    }}
                >
                    <FaEnvelope /> {'>'} TRANSMIT_EMAIL
                </motion.a>
            </motion.div>
        </motion.div>
    )
}

export default Contact
