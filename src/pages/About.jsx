import { motion } from 'framer-motion'
import { FaCalendarAlt, FaGraduationCap, FaAward, FaLaptopCode, FaUsers, FaBasketballBall, FaTrophy } from 'react-icons/fa'
import { FaCertificate, FaBriefcase, FaCode } from 'react-icons/fa6'

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const education = [
        {
            period: "2023 - 2027",
            title: "B.E. Information Science & Engineering",
            institution: "CMR Institute of Technology, Bengaluru",
            score: "CGPA: 8.7 (Pursuing)"
        },
        {
            period: "2021 - 2023",
            title: "Pre-University Course (Science)",
            institution: "St. Francis Composite PU College, Bengaluru",
            score: "Percentage: 90.88%"
        },
        {
            period: "2019 - 2021",
            title: "SSLC - Karnataka State Board",
            institution: "St. Francis High School, Bengaluru",
            score: "Percentage: 90.88%"
        }
    ]

    const certifications = [
        "SAP Machine Learning Certification – ML model development using Python on SAP HANA",
        "SQL and Relational Databases 101 – IBM Cognitive Class",
        "Data Analysis with Python – freeCodeCamp",
        "Introduction to Generative AI – Simplilearn",
        "Introduction to Prompt Engineering with GitHub Copilot – Simplilearn"
    ]

    const workshops = [
        {
            title: "GenAI Powered Data Analytics Job Simulation",
            org: "Tata Group (Forage)",
            desc: "Exploratory data analysis and risk profiling using real-world financial datasets"
        },
        {
            title: "Software Engineering Job Simulation",
            org: "JPMorgan Chase & Co. (Forage)",
            desc: "Kafka-based data streaming and REST API integration"
        },
        {
            title: "Data Analytics Job Simulation",
            org: "Forage",
            desc: "Tableau dashboards, calculated fields, and Excel data classification"
        }
    ]

    const hackathons = [
        {
            title: "Smart India Hackathon 2025",
            desc: "Collaborated on real-world problem solving with focus on rapid prototyping and innovation"
        },
        {
            title: "FSD Hackathon 2025 – Full Stack, Full Impact",
            desc: "Developed a full-stack solution under time constraints, organized by ISE Dept, CMRIT"
        }
    ]

    const experience = [
        {
            period: "2023 - Present",
            title: "Full Stack Developer",
            description: "Building modern, responsive web applications using React.js, Node.js, and databases like MySQL and MongoDB. Passionate about creating seamless user experiences."
        },
        {
            period: "2023 - Present",
            title: "DSA & Competitive Programming",
            description: "Strong foundation in Data Structures and Algorithms. Regular practice on LeetCode with proficiency in C, Java, and Python."
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="container section"
        >
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="section-title cyber-glitch" data-text="ABOUT_ME">ABOUT_ME</h1>
                <div className="section-underline" />
            </motion.div>

            {/* Intro - Terminal Style */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ 
                    marginBottom: '3rem', 
                    maxWidth: '800px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    padding: '1.5rem',
                    clipPath: 'polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))',
                    position: 'relative'
                }}
            >
                {/* Terminal header */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--border)'
                }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff3366', boxShadow: '0 0 5px #ff3366' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffaa00', boxShadow: '0 0 5px #ffaa00' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 5px #00ff88' }} />
                    <span style={{ 
                        marginLeft: '1rem', 
                        fontFamily: 'var(--font-accent)', 
                        fontSize: '0.75rem', 
                        color: 'var(--text-muted)',
                        letterSpacing: '0.1em'
                    }}>
                        user_profile.dat
                    </span>
                </div>
                
                <h2 style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '1rem', 
                    fontWeight: 400,
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-secondary)'
                }}>
                    <span style={{ color: 'var(--accent-primary)' }}>{'>'} </span>
                    CAREER OBJECTIVE
                </h2>
                <p style={{ 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.8',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem'
                }}>
                    Aspiring Software Engineer with hands-on experience in building AI-driven and scalable full-stack applications using the MERN stack and modern LLM technologies. Skilled in Data Structures, RESTful API development, and RAG-based systems, with experience in developing secure, AI-powered platforms that improve efficiency by up to 50%. Passionate about building production-ready solutions that solve real-world problems through intelligent automation.
                </p>
            </motion.div>

            {/* Education & Certifications Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}
            >
                {/* Education */}
                <motion.div variants={itemVariants}>
                    <h3 style={{ 
                        fontSize: '1.2rem', 
                        marginBottom: '1.5rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        fontFamily: 'var(--font-heading)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--accent-primary)',
                        textShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
                    }}>
                        <FaGraduationCap /> Education_Log
                    </h3>
                    <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--accent-primary)', boxShadow: '0 0 10px rgba(0, 255, 136, 0.2)' }}>
                        {education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                style={{ 
                                    position: 'relative', 
                                    marginBottom: '1.5rem', 
                                    paddingBottom: '1.5rem', 
                                    borderBottom: idx < education.length - 1 ? '1px solid var(--border)' : 'none' 
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    left: '-1.75rem',
                                    top: '4px',
                                    width: '12px',
                                    height: '12px',
                                    background: 'var(--bg-dark)',
                                    border: '2px solid var(--accent-primary)',
                                    boxShadow: '0 0 10px var(--accent-primary)'
                                }} />

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                                    <FaCalendarAlt style={{ color: 'var(--accent-tertiary)', fontSize: '0.75rem' }} />
                                    <span style={{ 
                                        color: 'var(--accent-tertiary)', 
                                        fontSize: '0.8rem',
                                        fontFamily: 'var(--font-accent)',
                                        letterSpacing: '0.05em'
                                    }}>{edu.period}</span>
                                </div>
                                <h4 style={{ 
                                    color: '#fff', 
                                    fontSize: '0.95rem', 
                                    marginBottom: '0.3rem', 
                                    fontWeight: 600,
                                    fontFamily: 'var(--font-body)'
                                }}>{edu.title}</h4>
                                <p style={{ 
                                    color: 'var(--text-secondary)', 
                                    fontSize: '0.85rem', 
                                    marginBottom: '0.2rem',
                                    fontFamily: 'var(--font-body)'
                                }}>{edu.institution}</p>
                                <p style={{ 
                                    color: 'var(--accent-primary)', 
                                    fontSize: '0.85rem',
                                    fontFamily: 'var(--font-accent)',
                                    textShadow: '0 0 5px rgba(0, 255, 136, 0.3)'
                                }}>{edu.score}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div variants={itemVariants}>
                    <h3 style={{ 
                        fontSize: '1.2rem', 
                        marginBottom: '1.5rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        fontFamily: 'var(--font-heading)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--accent-tertiary)',
                        textShadow: '0 0 10px rgba(0, 212, 255, 0.5)'
                    }}>
                        <FaCertificate /> Certifications
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                style={{ 
                                    padding: '1rem',
                                    background: 'rgba(0, 212, 255, 0.05)',
                                    border: '1px solid var(--border)',
                                    borderLeft: '3px solid var(--accent-tertiary)'
                                }}
                            >
                                <p style={{ 
                                    color: 'var(--text-secondary)', 
                                    fontSize: '0.85rem',
                                    fontFamily: 'var(--font-body)',
                                    lineHeight: '1.6'
                                }}>
                                    <span style={{ color: 'var(--accent-tertiary)' }}>{'>'}</span> {cert}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Workshops & Hackathons */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}
            >
                {/* Workshops & Internships */}
                <motion.div variants={itemVariants}>
                    <h3 style={{ 
                        fontSize: '1.2rem', 
                        marginBottom: '1.5rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        fontFamily: 'var(--font-heading)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--accent-secondary)',
                        textShadow: '0 0 10px rgba(255, 0, 255, 0.5)'
                    }}>
                        <FaBriefcase /> Workshops & Internships
                    </h3>
                    <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--accent-secondary)', boxShadow: '0 0 10px rgba(255, 0, 255, 0.2)' }}>
                        {workshops.map((workshop, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                style={{ 
                                    position: 'relative', 
                                    marginBottom: '1.5rem', 
                                    paddingBottom: '1.5rem', 
                                    borderBottom: idx < workshops.length - 1 ? '1px solid var(--border)' : 'none' 
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    left: '-1.75rem',
                                    top: '4px',
                                    width: '12px',
                                    height: '12px',
                                    background: 'var(--bg-dark)',
                                    border: '2px solid var(--accent-secondary)',
                                    boxShadow: '0 0 10px var(--accent-secondary)'
                                }} />

                                <h4 style={{ 
                                    color: '#fff', 
                                    fontSize: '0.95rem', 
                                    marginBottom: '0.3rem', 
                                    fontWeight: 600,
                                    fontFamily: 'var(--font-body)'
                                }}>{workshop.title}</h4>
                                <p style={{ 
                                    color: 'var(--accent-tertiary)', 
                                    fontSize: '0.8rem',
                                    fontFamily: 'var(--font-accent)',
                                    marginBottom: '0.4rem',
                                    letterSpacing: '0.05em'
                                }}>{workshop.org}</p>
                                <p style={{ 
                                    color: 'var(--text-secondary)', 
                                    fontSize: '0.85rem', 
                                    lineHeight: '1.6',
                                    fontFamily: 'var(--font-body)'
                                }}>{workshop.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Hackathons */}
                <motion.div variants={itemVariants}>
                    <h3 style={{ 
                        fontSize: '1.2rem', 
                        marginBottom: '1.5rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        fontFamily: 'var(--font-heading)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--accent-primary)',
                        textShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
                    }}>
                        <FaTrophy /> Hackathons
                    </h3>
                    <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--accent-primary)', boxShadow: '0 0 10px rgba(0, 255, 136, 0.2)' }}>
                        {hackathons.map((hack, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                style={{ 
                                    position: 'relative', 
                                    marginBottom: '1.5rem', 
                                    paddingBottom: '1.5rem', 
                                    borderBottom: idx < hackathons.length - 1 ? '1px solid var(--border)' : 'none' 
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    left: '-1.75rem',
                                    top: '4px',
                                    width: '12px',
                                    height: '12px',
                                    background: 'var(--bg-dark)',
                                    border: '2px solid var(--accent-primary)',
                                    boxShadow: '0 0 10px var(--accent-primary)'
                                }} />

                                <h4 style={{ 
                                    color: '#fff', 
                                    fontSize: '0.95rem', 
                                    marginBottom: '0.4rem', 
                                    fontWeight: 600,
                                    fontFamily: 'var(--font-body)'
                                }}>{hack.title}</h4>
                                <p style={{ 
                                    color: 'var(--text-secondary)', 
                                    fontSize: '0.85rem', 
                                    lineHeight: '1.6',
                                    fontFamily: 'var(--font-body)'
                                }}>{hack.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Activities Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '3rem'
                }}
            >
                {/* Technical Activities */}
                <motion.div variants={itemVariants}>
                    <h3 style={{ 
                        fontSize: '1.2rem', 
                        marginBottom: '1.5rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        fontFamily: 'var(--font-heading)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--accent-primary)',
                        textShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
                    }}>
                        <FaCode /> Technical Club Activities
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <motion.div
                            variants={itemVariants}
                            style={{ 
                                padding: '1rem',
                                background: 'rgba(0, 255, 136, 0.05)',
                                border: '1px solid var(--border)',
                                borderLeft: '3px solid var(--accent-primary)'
                            }}
                        >
                            <p style={{ 
                                color: '#fff', 
                                fontSize: '0.9rem',
                                fontFamily: 'var(--font-body)',
                                lineHeight: '1.6',
                                marginBottom: '0.5rem',
                                fontWeight: 600
                            }}>Smart India Hackathon 2025</p>
                            <p style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: '0.85rem',
                                fontFamily: 'var(--font-body)',
                                lineHeight: '1.6'
                            }}>Collaborated on real-world problem solving during internal round with focus on rapid prototyping and innovation.</p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            style={{ 
                                padding: '1rem',
                                background: 'rgba(0, 255, 136, 0.05)',
                                border: '1px solid var(--border)',
                                borderLeft: '3px solid var(--accent-primary)'
                            }}
                        >
                            <p style={{ 
                                color: '#fff', 
                                fontSize: '0.9rem',
                                fontFamily: 'var(--font-body)',
                                lineHeight: '1.6',
                                marginBottom: '0.5rem',
                                fontWeight: 600
                            }}>FSD Hackathon 2025 – Full Stack, Full Impact</p>
                            <p style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: '0.85rem',
                                fontFamily: 'var(--font-body)',
                                lineHeight: '1.6'
                            }}>Organized by the Department of Information Science & Engineering, CMRIT. Developed a full-stack solution under time constraints.</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Non-Technical Activities */}
                <motion.div variants={itemVariants}>
                    <h3 style={{ 
                        fontSize: '1.2rem', 
                        marginBottom: '1.5rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        fontFamily: 'var(--font-heading)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--accent-secondary)',
                        textShadow: '0 0 10px rgba(255, 0, 255, 0.5)'
                    }}>
                        <FaUsers /> Extracurricular Activities
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <motion.div
                            variants={itemVariants}
                            style={{ 
                                padding: '1rem',
                                background: 'rgba(255, 0, 255, 0.05)',
                                border: '1px solid var(--border)',
                                borderLeft: '3px solid var(--accent-secondary)'
                            }}
                        >
                            <p style={{ 
                                color: '#fff', 
                                fontSize: '0.9rem',
                                fontFamily: 'var(--font-body)',
                                lineHeight: '1.6',
                                marginBottom: '0.5rem',
                                fontWeight: 600
                            }}><FaUsers style={{ display: 'inline', marginRight: '0.5rem' }} /> NSS Volunteer</p>
                            <p style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: '0.85rem',
                                fontFamily: 'var(--font-body)',
                                lineHeight: '1.6'
                            }}>Participated in Blood Donation Camp and Swachh Bharat Abhiyan.</p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            style={{ 
                                padding: '1rem',
                                background: 'rgba(255, 0, 255, 0.05)',
                                border: '1px solid var(--border)',
                                borderLeft: '3px solid var(--accent-secondary)'
                            }}
                        >
                            <p style={{ 
                                color: '#fff', 
                                fontSize: '0.9rem',
                                fontFamily: 'var(--font-body)',
                                lineHeight: '1.6',
                                marginBottom: '0.5rem',
                                fontWeight: 600
                            }}><FaBasketballBall style={{ display: 'inline', marginRight: '0.5rem' }} /> Sports & Cultural Events</p>
                            <p style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: '0.85rem',
                                fontFamily: 'var(--font-body)',
                                lineHeight: '1.6'
                            }}>Active participant in Basketball and college cultural events (Cultura 2025).</p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
