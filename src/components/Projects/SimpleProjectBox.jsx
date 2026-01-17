import './SimpleProjectBox.css';

export default function SimpleProjectBox({ className, projectNumber, title, description, tags, gradient, image }) {
    return (
        <div className={`default project-box-container ${className}`}>
            {/* Background image if provided */}

            {/* Gradient overlay */}
            <div className="project-gradient-bg" style={{ background: gradient }}></div>
            {/* Animated border effect */}
            <div className="project-border-glow"></div>
            {/* Large project number */}
            <div className="project-number">{projectNumber}</div>
            <div className="project-content">
                <div className="project-tags">
                    {tags && tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                    ))}
                </div>
                <h2 className="project-title">{title}</h2>
                <p className="project-description">{description}</p>
            </div>
            {/* Hover shine effect */}
            <div className="project-shine"></div>
        </div>
    );
}

