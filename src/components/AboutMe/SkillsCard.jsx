import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoLoop from '../Global/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker } from 'react-icons/si';
import './SkillsCard.css';

const techLogos = [
    { node: <SiReact size={40} />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs size={40} />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript size={40} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss size={40} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs size={40} />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiMongodb size={40} />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiPostgresql size={40} />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiDocker size={40} />, title: "Docker", href: "https://www.docker.com" },
];

const SkillsCard = () => {
    const navigate = useNavigate();

    return (
        <div className="skills-container">
            <div className="skills-card">
                {/* Top Section - Header & Stats */}
                <div className="skills-header">
                    <div className="skills-title-section">
                        <h2 className="skills-title">
                            Expertise & Tools
                        </h2>
                        <p className="skills-description">
                            Passionate about building modern, scalable applications with cutting-edge technologies.
                        </p>
                    </div>
                </div>

                {/* Middle Section - Logo Loop */}
                <div className="skills-logos-section">
                    <LogoLoop
                        logos={techLogos}
                        speed={60}
                        direction="left"
                        logoHeight={40}
                        gap={50}
                        hoverSpeed={20}
                        scaleOnHover
                        fadeOut={false}
                        ariaLabel="Technology stack"
                    />
                </div>

                {/* Button Section */}
                <button className="view-all-button" onClick={() => navigate('/skills')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" />
                    </svg>
                    View All Skills
                    <span className="arrow">→</span>
                </button>
            </div>
        </div>
    );
};

export default SkillsCard;