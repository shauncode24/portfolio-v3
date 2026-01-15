import "./HomePage.css";
import GlowOrb from "../components/Homepage/GlowOrb";
import Starfield from "../components/Homepage/Starfield";
import LightPillar from '../components/Homepage/LightPillar';
import GlassSurface from '../components/Homepage/GlassSurface';

export default function HomePage() {
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
            pillarRotation={75}
            interactive={false}
            mixBlendMode="normal"
          />
        </div>

        <div className="particles-wrapper">
          <Starfield starCount={150} />
        </div>


        <div className="glass-surface-wrapper">
          <GlassSurface
            width={550}
            height={550}
            borderRadius={275}
          />
        </div>


      </div>
    </>
  );
}
