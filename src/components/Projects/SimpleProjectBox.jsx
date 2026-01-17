import './SimpleProjectBox.css';
export default function SimpleProjectBox({ className, title }) {
    return (
        <div className={`default project-box-container ${className}`}>
            <h2>{title}</h2>
        </div>
    );
}