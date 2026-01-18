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
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="magic-bento-card__header">
                <div className="magic-bento-card__label">{card.label}</div>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
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
        </div>
    );
};

export default SkillsCard;
