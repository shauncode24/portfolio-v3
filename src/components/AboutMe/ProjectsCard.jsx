import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardSwap, { Card } from '../Global/CardSwap';
import './ProjectsCard.css';

const ProjectsCard = () => {
    const navigate = useNavigate();

    const projects = [
        {
            title: "E-Commerce Platform",
            subtitle: "Full-stack marketplace solution",
            tech: "React • Node.js • MongoDB",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            icon: "🛍️"
        },
        {
            title: "Real-time Analytics Dashboard",
            subtitle: "Data visualization & insights",
            tech: "Next.js • D3.js • WebSocket",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            icon: "📊"
        },
        {
            title: "AI-Powered Chat Application",
            subtitle: "Intelligent conversation platform",
            tech: "React • Python • TensorFlow",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            icon: "🤖"
        },
        {
            title: "Cloud Infrastructure Manager",
            subtitle: "DevOps automation suite",
            tech: "Docker • Kubernetes • AWS",
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            icon: "☁️"
        }
    ];

    return (
        <div className="default projects-container">
            <div className="projects-card">
                {/* Left Column - Info */}
                <div className="projects-info">
                    <div className="projects-badge">
                        <span className="badge-dot">●</span>
                        <span className="badge-text">FEATURED WORK</span>
                    </div>

                    <h2 className="projects-title">
                        Selected Projects
                    </h2>

                    <p className="projects-description">
                        Transforming ideas into elegant solutions. Each project represents a commitment to excellence and innovation.
                    </p>

                    <button className="view-all-button" onClick={() => navigate('/projects')}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="14" width="7" height="7" rx="1" />
                            <rect x="3" y="14" width="7" height="7" rx="1" />
                        </svg>
                        View All Projects
                        <span className="arrow">→</span>
                    </button>
                </div>

                <div className="default projects-card-swap-wrapper">
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <CardSwap
                            width={250}
                            height={200}
                            cardDistance={10}
                            verticalDistance={25}
                            delay={3000}
                            pauseOnHover={true}
                            easing="smooth"
                        >
                            <Card style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                                Card 1
                            </Card>
                            <Card style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                                Card 2
                            </Card>
                            <Card style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                                Card 3
                            </Card>
                            <Card style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                                Card 4
                            </Card>
                        </CardSwap>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;