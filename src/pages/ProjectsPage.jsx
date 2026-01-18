import SimpleProjectBox from "@/components/Projects/SimpleProjectBox";
import './ProjectsPage.css';
import projectBg from '@/assets/project_bg.jpg';
import Iridescence from '@/components/Iridescence';
import Starfield from '@/components/Homepage/Starfield';

export default function ProjectsPage() {
    return (
        <div className="default projects-page">
            {/* Iridescence Background */}
            <Iridescence
                color={[1, 1, 1]} // #000000ff
                mouseReact={false}
                amplitude={1}
                speed={1.0}
            />

            {/* Starfield Overlay */}
            <Starfield />

            <div style={{
                position: 'absolute',
                inset: 0,
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(8px) saturate(120%)',
                background: 'rgba(10, 31, 93, 0.3)',
                zIndex: 1
            }} />


            {/* Page Header */}
            <div className="default projects-header">
                <h1 className="projects-main-title">Projects</h1>
                <p className="projects-subtitle">Explore my latest work and creations</p>
                {/* <img src="https://pngimg.com/d/astronaut_PNG29.png" height='100px' /> */}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
                <SimpleProjectBox
                    className="project-card-large"
                    projectNumber="01"
                    title="AI-Powered Analytics Dashboard"
                    description="A comprehensive analytics platform leveraging machine learning to provide real-time insights and predictive analytics for enterprise clients."
                    tags={["REACT", "NODE.JS", "AI"]}
                    gradient="linear-gradient(180deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)"
                    image="C:/Users/Shaun/.gemini/antigravity/brain/d4cee9ae-5c92-4237-a2b6-13dd647d846e/analytics_dashboard_mockup_1768669422187.png"
                />
                <SimpleProjectBox
                    className="project-card-medium"
                    projectNumber="02"
                    title="Fitness Tracking App"
                    description="iOS application with AI features for personalized workout routines and progress tracking."
                    tags={["MOBILE", "SWIFT"]}
                    gradient="linear-gradient(180deg, rgba(236, 72, 153, 0.3) 0%, rgba(239, 68, 68, 0.3) 100%)"
                    image="C:/Users/Shaun/.gemini/antigravity/brain/d4cee9ae-5c92-4237-a2b6-13dd647d846e/fitness_app_mockup_1768669443318.png"
                />
                <SimpleProjectBox
                    className="project-card-small"
                    projectNumber="03"
                    title="E-Commerce Platform"
                    description="Modern shopping experience with real-time inventory management and AI recommendations."
                    tags={["VUE.JS", "FIREBASE"]}
                    gradient="linear-gradient(180deg, rgba(6, 182, 212, 0.3) 0%, rgba(14, 165, 233, 0.3) 100%)"
                    image="C:/Users/Shaun/.gemini/antigravity/brain/d4cee9ae-5c92-4237-a2b6-13dd647d846e/ecommerce_platform_mockup_1768669461540.png"
                />
                <SimpleProjectBox
                    className="project-card-small"
                    projectNumber="04"
                    title="Brand Identity System"
                    description="Complete design system for a fintech startup including logo, components, and guidelines."
                    tags={["DESIGN", "FIGMA"]}
                    gradient="linear-gradient(180deg, rgba(251, 146, 60, 0.3) 0%, rgba(251, 191, 36, 0.3) 100%)"
                    image="C:/Users/Shaun/.gemini/antigravity/brain/d4cee9ae-5c92-4237-a2b6-13dd647d846e/brand_identity_mockup_1768669478044.png"
                />
                <SimpleProjectBox
                    className="project-card-small"
                    projectNumber="05"
                    title="Image Recognition Model"
                    description="Deep learning model for medical image analysis with 95% accuracy rate."
                    tags={["PYTHON", "TENSORFLOW"]}
                    gradient="linear-gradient(180deg, rgba(52, 211, 153, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%)"
                    image="C:/Users/Shaun/.gemini/antigravity/brain/d4cee9ae-5c92-4237-a2b6-13dd647d846e/image_recognition_mockup_1768669495051.png"
                />
            </div>
        </div>
    );
}
