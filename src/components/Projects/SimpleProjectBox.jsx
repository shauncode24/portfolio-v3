import './SimpleProjectBox.css';

export default function SimpleProjectBox({ className, projectNumber, title, description, tags, gradient }) {
    return (
        <div className={`default project-box-container ${className}`}>
            <div className="project-gradient-bg" style={{ background: gradient }}></div>
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
        </div>
    );
}
