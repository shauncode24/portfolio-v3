import React from 'react';
import LogoLoop from '../LogoLoop';
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

const SkillsCard = ({ card }) => {
    return (
        <div className="skills-container">
            <div className="skills-card">
                {/* Top Section - Header & Stats */}
                <div className="skills-header">
                    <div className="skills-title-section">
                        <h2 className="skills-title">
                            Expertise & Tools
                        </h2>
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

                {/* Bottom Section - Categories */}
                <div className="skills-categories">
                    <div className="category-item">
                        <div className="category-icon">⚡</div>
                        <div className="category-text">
                            <div className="category-title">Frontend</div>
                            <div className="category-desc">Modern UI/UX</div>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-icon">🔧</div>
                        <div className="category-text">
                            <div className="category-title">Backend</div>
                            <div className="category-desc">Scalable APIs</div>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-icon">🗄️</div>
                        <div className="category-text">
                            <div className="category-title">Database</div>
                            <div className="category-desc">Data Management</div>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-icon">☁️</div>
                        <div className="category-text">
                            <div className="category-title">DevOps</div>
                            <div className="category-desc">CI/CD Pipeline</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;