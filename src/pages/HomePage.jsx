import "./HomePage.css";
import GlowOrb from "../components/Homepage/GlowOrb";
import Starfield from "../components/Homepage/Starfield";
import LightPillar from '../components/Homepage/LightPillar';
import GlassSurface from '../components/Homepage/GlassSurface';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CosmicScene from "@/components/CosmicTransition/CosmicScene";

export default function HomePage() {
  const [glassSize, setGlassSize] = useState({ width: 550, height: 550 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateGlassSize = () => {
      const width = window.innerWidth;

      if (width <= 360) {
        setGlassSize({ width: 300, height: 300 });
      } else if (width <= 480) {
        setGlassSize({ width: 350, height: 350 });
      } else if (width <= 640) {
        setGlassSize({ width: 400, height: 400 });
      } else if (width <= 768) {
        setGlassSize({ width: 450, height: 450 });
      } else if (width <= 1024) {
        setGlassSize({ width: 450, height: 450 });
      } else {
        setGlassSize({ width: 550, height: 550 });
      }
    };

    updateGlassSize();
    window.addEventListener('resize', updateGlassSize);
    return () => window.removeEventListener('resize', updateGlassSize);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      // Navigate after transition completes (7 seconds)
      const timer = setTimeout(() => {
        navigate('/index');
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning, navigate]);

  const handleEnterClick = () => {
    setIsTransitioning(true);
  };

  return (
    <>
      {/* Telescope Transition - Three.js scene */}
      {isTransitioning && <CosmicScene />}

      {/* Original Homepage Content */}
      <div
        className={`default homepage-container ${isTransitioning ? 'transitioning' : ''}`}
      >
        <GlowOrb className="glow-orb-1" />
        <GlowOrb className="glow-orb-2" />
        <GlowOrb className="glow-orb-3" />
        <GlowOrb className="glow-orb-4" />

        <div className="light-pillar-wrapper">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={0.37}
            rotationSpeed={0.7}
            glowAmount={0.0016}
            pillarWidth={4.0}
            pillarHeight={0.4}
            noiseIntensity={0.75}
            pillarRotation={-70}
            interactive={false}
            mixBlendMode="normal"
          />
        </div>

        <div className="light-ball">
          <svg height="200" width="200" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="30%" stopColor="#40ffff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0099ff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0066cc" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path
              fill="url(#grad)"
              d="M 200 140 C 250 140, 260 140, 260 200 C 260 260, 250 260, 200 260 C 150 260, 140 260, 140 200 C 140 140, 150 140, 200 140"
            />
          </svg>
        </div>

        <div className="hero-text">
          <span className="hero-eyebrow">INSPIRE TO CREATE</span>

          <h1 className="hero-heading">
            Shaunak <br />
            Karve
          </h1>

          <p className="hero-subtext">
            Designing and engineering web experiences with an emphasis on
            clarity, performance, and thoughtful interaction.
          </p>

          <div className="proceed-section">
            <span className="proceed-label">Proceed.</span>
            <button className="enter-button" onClick={handleEnterClick}>Enter</button>
          </div>
        </div>
      </div>

      <div className="particles-wrapper">
        <Starfield starCount={150} />
      </div>

      <div className="glass-surface-wrapper">
        <GlassSurface
          width={glassSize.width}
          height={glassSize.height}
          borderRadius={glassSize.width / 2}
          distortionScale={-150}
          greenOffset={15}
          blueOffset={50}
          opacity={0.8}
          mixBlendMode="screen"
        />
      </div>
    </>
  );
}