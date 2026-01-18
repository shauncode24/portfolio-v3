import { FaLinkedin, FaGithub, FaEnvelope, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './ContactCard.css';

const contactLinks = [
    { icon: <FaLinkedin size={28} />, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", color: "#0A66C2" },
    { icon: <FaGithub size={28} />, label: "GitHub", href: "https://github.com/yourusername", color: "#ffffff" },
    { icon: <FaXTwitter size={28} />, label: "X", href: "https://x.com/yourhandle", color: "#000000" },
    { icon: <FaEnvelope size={28} />, label: "Email", href: "mailto:your.email@example.com", color: "#EA4335" },
    { icon: <FaDiscord size={28} />, label: "Discord", href: "https://discord.gg/yourinvite", color: "#5865F2" },
];

const ContactCard = ({ card }) => {
    const handleRipple = (e) => {
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        e.currentTarget.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    };

    return (
        <div className="contact-card-wrapper">
            <div className="contact-card-header">
                <div className="contact-card-label">{card.label}</div>
            </div>
            <div className="contact-card-content">
                <h2 className="contact-card-title">
                    {card.title}
                    <span className="contact-title-underline"></span>
                </h2>
                <p className="contact-card-description">
                    {card.description}
                    <span className="blinking-cursor"></span>
                </p>
            </div>
            <div className="contact-icons-container">
                {contactLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon-link"
                        style={{
                            '--icon-color': link.color,
                            '--float-delay': `${idx * 0.3}s`,
                            animationDelay: `${idx * 0.1}s, calc(${idx * 0.3}s + 0.6s)`
                        }}
                        onClick={handleRipple}
                        title={link.label}
                        data-tooltip={link.label === 'Email' ? 'Click to copy' : link.label}
                    >
                        <span className="icon-gradient-border"></span>
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ContactCard;
