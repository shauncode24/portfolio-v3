import SimpleProjectBox from "@/components/Projects/SimpleProjectBox";
import './ProjectsPage.css';
import LiquidChrome from '@/components/LiquidChrome';
import Starfield from '@/components/Homepage/Starfield';

export default function ProjectsPage() {
    return (
        <div className="default projects-page">
            <div style={{ width: '100vw', height: '100vh', position: 'relative', opacity: '0.6' }}>
                <LiquidChrome interactive={false} baseColor={[0.0392, 0.1216, 0.3647]} />
                <Starfield starCount={200} />
            </div>
            <SimpleProjectBox className="project-box-1" title="Project 1" />
            <SimpleProjectBox className="project-box-2" title="Project 2" />
            <SimpleProjectBox className="project-box-3" title="Project 3" />
            <SimpleProjectBox className="project-box-4" title="Project 4" />
        </div>
    );
}
