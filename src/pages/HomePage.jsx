import "./HomePage.css";
import GlowOrb from "../components/GlowOrb";
import Starfield from "../components/Starfield";
import LightPillar from '../components/LightPillar';
import Particles from '../components/Particles';

export default function HomePage() {
  return (
    <>
      <div className="default homepage-container">
        {/* Dynamic starfield */}


        {/* Space nebula background - 3 layers for depth */}
        <GlowOrb className="glow-orb-1" />
        <GlowOrb className="glow-orb-2" />
        <GlowOrb className="glow-orb-3" />
        <GlowOrb className="glow-orb-4" />

        {/* Light Pillar Effect - Full viewport */}
        <div className="light-pillar-wrapper">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={0.35}
            rotationSpeed={0.5}
            glowAmount={0.002}
            pillarWidth={4.0}
            pillarHeight={0.4}
            noiseIntensity={0.1}
            pillarRotation={75}
            interactive={false}
            mixBlendMode="normal"
          />
        </div>

        {/* Particles Effect - Full viewport */}
        <div className="particles-wrapper">
          {/* <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}


          /> */}
          <Starfield starCount={150} />
        </div>

        {/* Your content goes here */}
        <div className="homepage-content">
          {/* Content will be added here */}
        </div>
      </div>
    </>
  );
}
