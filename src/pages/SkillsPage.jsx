import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiRedux,
    SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiFirebase, SiSupabase,
    SiDocker, SiKubernetes, SiGit, SiGithub, SiFigma, SiAdobephotoshop, SiPython, SiRust
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import Skill from '../components/Skills/Skill';
import './SkillsPage.css';

const SkillsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    const skillsData = [
        {
            title: "Frontend",
            icons: [
                { name: "React", icon: <SiReact /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "Redux", icon: <SiRedux /> },
                { name: "HTML5", icon: <SiHtml5 /> },
                { name: "CSS3", icon: <SiCss3 /> }
            ]
        },
        {
            title: "Backend",
            icons: [
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "Express", icon: <SiExpress /> },
                { name: "Python", icon: <SiPython /> },
                { name: "PostgreSQL", icon: <SiPostgresql /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "GraphQL", icon: <SiGraphql /> },
                { name: "Supabase", icon: <SiSupabase /> },
                { name: "Firebase", icon: <SiFirebase /> }
            ]
        },
        {
            title: "DevOps",
            icons: [
                { name: "Docker", icon: <SiDocker /> },
                { name: "Kubernetes", icon: <SiKubernetes /> },
                { name: "AWS", icon: <FaAws /> },
                { name: "Git", icon: <SiGit /> },
                { name: "GitHub", icon: <SiGithub /> }
            ]
        },
        {
            title: "Design",
            icons: [
                { name: "Figma", icon: <SiFigma /> },
                { name: "Photoshop", icon: <SiAdobephotoshop /> }
            ]
        }
    ];

    return (
        <div className="skills-page">
            <div className="background-fixed"></div>

            <div className="skills-container-single">
                <header className="skills-header-section">
                    <button onClick={() => navigate('/')} className="back-button-simple">
                        ← Back to Home
                    </button>

                    <div className="header-content-stack">
                        <h1 className="page-title-large">Technical Arsenal</h1>
                        <div className="decorative-line-horizontal"></div>

                        <div className="bio-section-stack">
                            <p className="bio-text-large muted">
                                I don't just write code; I architect solutions that stand the test of time, leveraging the best tools for each unique challenge.
                            </p>
                        </div>
                    </div>
                </header>

                <div className="skills-grid-stack">
                    {skillsData.map((skill, index) => (
                        <Skill key={index} title={skill.title} icons={skill.icons} />
                    ))}
                </div>

                <footer className="skills-footer-simple">
                    <p>Constantly evolving and learning new technologies.</p>
                </footer>
            </div>
        </div>
    );
};

export default SkillsPage;
