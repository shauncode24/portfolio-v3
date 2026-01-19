import React from 'react';
import './Skill.css';

const Skill = ({ title, icons }) => {
    return (
        <div className="skill-row">
            <div className="skill-title-container">
                <h2 className="skill-title">{title}</h2>
                <div className="skill-underline"></div>
            </div>
            <div className="skill-icons-container">
                {icons.map((iconItem, index) => (
                    <div key={index} className="skill-icon-item" style={{ '--delay': `${index * 0.1}s` }}>
                        <div className="skill-icon-wrapper">
                            {iconItem.icon}
                        </div>
                        <span className="skill-name">{iconItem.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
