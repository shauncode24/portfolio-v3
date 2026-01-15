import "./HomePage.css";
import GlowOrb from "../components/Homepage/GlowOrb";
import Starfield from "../components/Homepage/Starfield";
import LightPillar from '../components/Homepage/LightPillar';
import GlassSurface from '../components/Homepage/GlassSurface';
import { LightBeam } from "@stianlarsen/react-light-beam";
import { useState, useEffect } from 'react';
import BlurText from '../components/Homepage/BlurText';

export default function HomePage() {
  const [glassSize, setGlassSize] = useState({ width: 550, height: 550 });

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

  return (
    <>
      <div className="default homepage-container">
        <GlowOrb className="glow-orb-1" />
        <GlowOrb className="glow-orb-2" />
        <GlowOrb className="glow-orb-3" />
        <GlowOrb className="glow-orb-4" />

        <div className="light-pillar-wrapper">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={0.37}
            rotationSpeed={0.5}
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
                <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
                <stop offset="4=30%" stop-color="#40ffff" stop-opacity="0.8" />
                <stop offset="50%" stop-color="#0099ff" stop-opacity="0.7" />
                <stop offset="100%" stop-color="#0066cc" stop-opacity="0" />
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
            Shaunak <br />Karve
          </h1>

          <p className="hero-subtext">
            Designing and engineering web experiences with an emphasis on
            clarity, performance, and thoughtful interaction.
          </p>

          {/* <div className="hero-cta">
            <button className="hero-primary">Explore</button>
            <a className="hero-secondary">What I Do</a>
          </div> */}
          {/* <img src="https://t3.ftcdn.net/jpg/08/09/58/06/360_F_809580697_HrJHtfi3HK97lZu8x7GieptgwShcJbl1.jpg" alt="" className="astronaut" /> */}

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
          // redOffset={50}
          greenOffset={15}
          blueOffset={50}
          // brightness={100}
          opacity={0.8}
          mixBlendMode="screen"
        >
        </GlassSurface>


      </div>
    </>
  );
}
