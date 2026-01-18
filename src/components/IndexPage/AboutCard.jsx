import RotatingText from '../RotatingText';
import './AboutCard.css';

const AboutCard = ({ card }) => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="magic-bento-card__header">
                <div className="magic-bento-card__label">{card.label}</div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
                <div>
                    <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        color: 'white',
                        margin: '0 0 8px 0',
                        letterSpacing: '-0.02em'
                    }}>
                        Shaun
                    </h3>
                    <div style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255, 255, 255, 0.6)',
                        lineHeight: '1.6',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '4px'
                    }}>
                        <span>Full-stack</span>
                        <RotatingText
                            texts={['developer', 'designer', 'creator', 'builder']}
                            mainClassName="rotating-text-inline"
                            staggerFrom="first"
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            staggerDuration={0.015}
                            splitLevelClassName="overflow-hidden"
                            transition={{ type: "spring", damping: 35, stiffness: 500 }}
                            rotationInterval={3000}
                        />
                        <span>based in India</span>
                    </div>
                </div>

                <p style={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    margin: '0'
                }}>
                    Crafting elegant solutions through code. Passionate about building seamless user experiences and scalable systems.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '24px',
                    marginTop: '8px',
                    fontSize: '0.85rem'
                }}>
                    <div>
                        <div style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '2px' }}>Experience</div>
                        <div style={{ color: 'white', fontWeight: '600' }}>3+ years</div>
                    </div>
                    <div>
                        <div style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '2px' }}>Projects</div>
                        <div style={{ color: 'white', fontWeight: '600' }}>20+</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;
