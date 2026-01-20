import { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './ContactCard.css';

const contactLinks = [
    { icon: <FaLinkedin size={28} />, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", color: "#0077b5" },
    { icon: <FaGithub size={28} />, label: "GitHub", href: "https://github.com/yourusername", color: "#8a4baf" },
    { icon: <FaXTwitter size={28} />, label: "X", href: "https://x.com/yourhandle", color: "#00d9ff" },
    { icon: <FaEnvelope size={28} />, label: "Email", href: "mailto:your.email@example.com", color: "#ec4899" },
    { icon: <FaDiscord size={28} />, label: "Discord", href: "https://discord.gg/yourinvite", color: "#5865f2" },
];

const ContactCard = () => {
    const cardRef = useRef(null);
    const bgPatternRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const bgPattern = bgPatternRef.current;
        const socialIcons = card.querySelectorAll('.social-icon');

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

        socialIcons.forEach(icon => {
            const handleIconEnter = function () {
                createParticles(this);
            };

            const handleIconMove = function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.1) rotate(3deg)`;
            };

            const handleIconLeave = function () {
                this.style.transform = '';
            };

            const handleIconClick = function (e) {
                createRipple(e, this);
                showSuccessCheck(this);
            };

            icon.addEventListener('mouseenter', handleIconEnter);
            icon.addEventListener('mousemove', handleIconMove);
            icon.addEventListener('mouseleave', handleIconLeave);
            icon.addEventListener('click', handleIconClick);
        });

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    function createRipple(e, element) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        element.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    function showSuccessCheck(element) {
        const check = document.createElement('div');
        check.classList.add('success-check', 'show');
        check.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        `;
        element.appendChild(check);
        setTimeout(() => check.remove(), 600);
    }

    function createParticles(element) {
        const colors = ['#00d9ff', '#a855f7', '#ec4899', '#5865f2'];
        const particleCount = 6;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particles');
            particle.style.color = colors[Math.floor(Math.random() * colors.length)];

            const angle = (Math.PI * 2 * i) / particleCount;
            const distance = 40 + Math.random() * 20;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;

            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            particle.style.left = '50%';
            particle.style.top = '50%';

            element.appendChild(particle);
            particle.style.animation = 'particleBurst 0.8s ease-out forwards';

            setTimeout(() => particle.remove(), 800);
        }
    }

    return (
        <div className="contact-container">
            <div className="contact-card" ref={cardRef}>
                <div className="bg-pattern" ref={bgPatternRef}></div>

                <div className="label">Get in touch</div>
                <div className="accent-line"></div>
                <h1 className="title">Contact Me</h1>
                <p className="subtitle">Let's connect<span className="cursor"></span></p>

                <div className="social-grid">
                    {contactLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-icon ${link.label.toLowerCase()}`}
                            data-label={link.label}
                            style={{
                                '--icon-color': link.color,
                                animationDelay: `${idx * 0.1}s`
                            }}
                        >
                            <span className="tooltip">{link.label}</span>
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactCard;