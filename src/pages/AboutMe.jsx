import React from 'react';
import './AboutMe.css';
import ProjectsCard from '@/components/AboutMe/ProjectsCard';
import SkillsCard from '@/components/AboutMe/SkillsCard';
import ContactCard from '@/components/AboutMe/ContactCard';
import LightRays from '@/components/Global/LightRays';
import LightPillar from '@/components/Homepage/LightPillar';
import Starfield from '@/components/Homepage/Starfield';
import Iridescence from '@/components/Iridescence';

function AboutMe() {

    return (
        <div className="about-me-container">
            <div className="plasma-container-main">
                {/* <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={0.5}
                    lightSpread={0.5}
                    rayLength={3}
                    followMouse={false}
                    mouseInfluence={0}
                    noiseAmount={0}
                    distortion={0}
                    className="custom-rays"
                    pulsating={false}
                    fadeDistance={1}
                    saturation={1}
                /> */}
                <Iridescence
                    color={[1, 1, 1]}
                    mouseReact
                    amplitude={0.1}
                    speed={1}
                />
                {/* <Starfield starCount={1000} /> */}
                {/* <Plasma
                    color="#1a1a3e"
                    speed={0.3}
                    direction="forward"
                    scale={2}
                    opacity={0.7}
                    mouseInteractive={true}
                /> */}
                {/* <LightPillar
                    topColor="#4a6fa5"
                    bottomColor="#1e3a5f"
                    intensity={1.2}
                    rotationSpeed={0.6}
                    glowAmount={0.002}
                    pillarWidth={8}
                    pillarHeight={0.4}
                    noiseIntensity={0.1}
                    pillarRotation={0}
                    interactive={false}
                    mixBlendMode="screen"
                    quality="high"
                /> */}


                {/* <img className="background-img" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2UlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D" alt="" /> */}
                {/* <img className="astronaut-img" src="https://pngimg.com/d/astronaut_PNG29.png" alt="" /> */}

                <div className="default page-content">
                    <div className="profile-image-div">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop" alt="Profile" />
                    </div>
                    <div className="default name-div">
                        Shaunak Karve
                    </div>
                    <div className="default about-me-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam autem voluptas libero voluptate aliquid repellat sint totam quasi sunt ipsa, delectus sequi! Hic, laborum voluptatum eveniet fuga illum officia?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate numquam recusandae in assumenda inventore? Mollitia excepturi, rem quia, sequi deleniti esse quidem quam repudiandae animi quos ab rerum odit quas!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus repudiandae dignissimos velit, eum error architecto fuga voluptatum inventore, nobis ut commodi similique provident eveniet ipsa dolore explicabo neque! Molestiae, minima?
                    </div>
                </div>

                <div className="default content-grid-container">
                    <div className="default content-grid-about-me">
                        <div className="default content-grid-column-1">
                            <div className="contact-text">
                                <ContactCard />
                            </div>

                            <div className="skills-text">
                                <SkillsCard />
                            </div>
                        </div>
                        <div className="default content-grid-column-2">
                            <div className="default col-2-row-1">
                                Column 2 Row 1
                            </div>
                            <div className="default projects-text">
                                <ProjectsCard />
                            </div>
                            <div className="default col-2-row-2">
                                Column 2 Row 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;