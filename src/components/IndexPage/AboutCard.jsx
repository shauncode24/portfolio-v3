import { useState, useEffect, useRef } from 'react';
import './AboutCard.css';

const RotatingText = ({ texts }) => {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % texts.length);
                setIsAnimating(false);
            }, 300);
        }, 3000);
        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <span className={`rotating-word ${isAnimating ? 'exit' : 'enter'}`}>
            {texts[index]}
        </span>
    );
};

const AboutCard = () => {
    const cardRef = useRef(null);
    const bgPatternRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const bgPattern = bgPatternRef.current;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);

            const moveX = (e.clientX - rect.left - rect.width / 2) / 50;
            const moveY = (e.clientY - rect.top - rect.height / 2) / 50;
            bgPattern.style.transform = `translate(${moveX}px, ${moveY}px)`;
        };

        const handleMouseLeave = () => {
            bgPattern.style.transform = 'translate(0, 0)';
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const createRipple = (e) => {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    };

    return (
        <div className="about-container">
            <div className="about-card" ref={cardRef}>

                <div className="default card-header">
                    <h1 className="name">Shaunak Karve</h1>
                    <div className="status-badge">
                        <span className="status-indicator"></span>
                        <span className="status-text">Available for work</span>
                    </div>
                </div>


                <div className="about-content">
                    <div className="role-section">
                        <div className="location">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Based in Mumbai, India</span>
                        </div>
                        <p className="bio">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sint explicabo. Doloremque necessitatibus laborum ab asperiores aut libero explicabo voluptas! Soluta vitae odit accusantium iusto explicabo nihil architecto perferendis eaque!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, itaque nostrum ipsum dolor asperiores autem iusto enim tenetur illo ipsa dignissimos mollitia, facilis sint minus cum modi, reprehenderit expedita magnam!
                        </p>
                        <div className="role-line">
                            <span className="role-text">Besides, I love </span>
                            <RotatingText texts={['sports', 'sketching', 'gaming', 'writing', 'history', 'movies', 'songs']} />
                        </div>
                    </div>

                    <a
                        href="/resume.pdf"
                        className="resume-button"
                        onClick={createRipple}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        <span>View Resume</span>
                        <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;