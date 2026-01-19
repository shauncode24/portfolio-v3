import { useEffect, useState } from 'react';
import './ObservatoryFrame.css';

export default function ObservatoryFrame({ show, transitionProgress = 0 }) {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (show) {
            // Fade in starting at 0.8 seconds (0.8/3.5 = 0.23)
            if (transitionProgress > 0.23) {
                const fadeProgress = Math.min((transitionProgress - 0.23) / 0.2, 1);
                setOpacity(fadeProgress);
            }
        }
    }, [show, transitionProgress]);

    if (!show) return null;

    return (
        <div className="observatory-frame" style={{ opacity }}>
            {/* Corner Brackets */}
            <div className="corner-bracket top-left"></div>
            <div className="corner-bracket top-right"></div>
            <div className="corner-bracket bottom-left"></div>
            <div className="corner-bracket bottom-right"></div>

            {/* Mechanical Border */}
            <div className="observatory-border top"></div>
            <div className="observatory-border right"></div>
            <div className="observatory-border bottom"></div>
            <div className="observatory-border left"></div>

            {/* HUD Elements */}
            <div className="hud-element top-left-hud">
                <span className="hud-label">SYSTEM</span>
                <span className="hud-value">v3.1.4</span>
            </div>

            <div className="hud-element top-right-hud">
                <span className="hud-label">SIGNAL</span>
                <div className="signal-bars">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar active"></div>
                </div>
            </div>

            <div className="hud-element bottom-left-hud">
                <span className="hud-label">DEPTH</span>
                <span className="hud-value">{Math.floor(transitionProgress * 300)} AU</span>
            </div>

            <div className="hud-element bottom-right-hud">
                <span className="hud-label">TRACKING</span>
                <span className="hud-value status-active">ACTIVE</span>
            </div>

            {/* Central Reticle */}
            <div className="reticle-container">
                <svg className="reticle" viewBox="0 0 200 200" width="200" height="200">
                    {/* Outer ring */}
                    <circle cx="100" cy="100" r="80" fill="none" stroke="cyan" strokeWidth="1" opacity="0.6" />

                    {/* Middle ring - pulsing */}
                    <circle
                        cx="100"
                        cy="100"
                        r="60"
                        fill="none"
                        stroke="cyan"
                        strokeWidth="1.5"
                        opacity="0.8"
                        className="pulse-ring"
                    />

                    {/* Inner ring */}
                    <circle cx="100" cy="100" r="40" fill="none" stroke="cyan" strokeWidth="2" opacity="0.9" />

                    {/* Center dot */}
                    <circle cx="100" cy="100" r="3" fill="cyan" opacity="1" />

                    {/* Crosshairs */}
                    <line x1="100" y1="20" x2="100" y2="80" stroke="cyan" strokeWidth="1" opacity="0.6" />
                    <line x1="100" y1="120" x2="100" y2="180" stroke="cyan" strokeWidth="1" opacity="0.6" />
                    <line x1="20" y1="100" x2="80" y2="100" stroke="cyan" strokeWidth="1" opacity="0.6" />
                    <line x1="120" y1="100" x2="180" y2="100" stroke="cyan" strokeWidth="1" opacity="0.6" />
                </svg>
            </div>

            {/* Scanlines */}
            <div className="scanlines"></div>

            {/* Grid Overlay */}
            <div className="grid-overlay"></div>

            {/* Viewport Scale */}
            <div className="viewport-scale">
                <div className="scale-line"></div>
                <span className="scale-label">1:1,000,000</span>
            </div>
        </div>
    );
}
