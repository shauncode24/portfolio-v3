import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CosmicScene({ isTransitioning, onTransitionComplete }) {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const starsRef = useRef([]);
    const nebulaeRef = useRef([]);
    const sunRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera - starts INSIDE the universe
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5; // Very close - we're inside!
        cameraRef.current = camera;

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create 15,000 stars
        const createStars = () => {
            const geometry = new THREE.BufferGeometry();
            const positions = [];
            const colors = [];
            const sizes = [];

            for (let i = 0; i < 15000; i++) {
                // Distribute in 3D space
                const x = (Math.random() - 0.5) * 400;
                const y = (Math.random() - 0.5) * 400;
                const z = (Math.random() - 0.5) * 400;

                positions.push(x, y, z);

                // Slight color variation (white to blue-white)
                const color = new THREE.Color();
                color.setHSL(0.6 + Math.random() * 0.1, 0.3, 0.9 + Math.random() * 0.1);
                colors.push(color.r, color.g, color.b);

                // Random sizes
                sizes.push(Math.random() * 2 + 0.5);
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
            geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

            const material = new THREE.PointsMaterial({
                size: 2,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true,
                blending: THREE.AdditiveBlending
            });

            const stars = new THREE.Points(geometry, material);
            scene.add(stars);
            starsRef.current.push(stars);
        };

        // Create layered nebulae
        const createNebulae = () => {
            const colors = [
                new THREE.Color(0x8b00ff), // Purple
                new THREE.Color(0x4169e1), // Blue
                new THREE.Color(0x4b0082)  // Indigo
            ];

            colors.forEach((color, index) => {
                const geometry = new THREE.BufferGeometry();
                const positions = [];
                const nebulaColors = [];
                const sizes = [];

                for (let i = 0; i < 2000; i++) {
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.random() * Math.PI;
                    const radius = 100 + index * 30;

                    const x = radius * Math.sin(phi) * Math.cos(theta);
                    const y = radius * Math.sin(phi) * Math.sin(theta);
                    const z = radius * Math.cos(phi);

                    positions.push(x, y, z);
                    nebulaColors.push(color.r, color.g, color.b);
                    sizes.push(Math.random() * 15 + 5);
                }

                geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
                geometry.setAttribute('color', new THREE.Float32BufferAttribute(nebulaColors, 3));
                geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

                const material = new THREE.PointsMaterial({
                    size: 10,
                    vertexColors: true,
                    transparent: true,
                    opacity: 0.4,
                    sizeAttenuation: true,
                    blending: THREE.AdditiveBlending
                });

                const nebula = new THREE.Points(geometry, material);
                scene.add(nebula);
                nebulaeRef.current.push(nebula);
            });
        };

        // Create bright cyan pulsing star
        const createSun = () => {
            const geometry = new THREE.SphereGeometry(8, 32, 32);
            const material = new THREE.MeshBasicMaterial({
                color: 0x00ffff,
                transparent: true,
                opacity: 0.9
            });
            const sun = new THREE.Mesh(geometry, material);
            sun.position.set(50, 30, -80);
            scene.add(sun);
            sunRef.current = sun;

            // Add glow
            const glowGeometry = new THREE.SphereGeometry(15, 32, 32);
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: 0x00ffff,
                transparent: true,
                opacity: 0.3,
                blending: THREE.AdditiveBlending
            });
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            sun.add(glow);
        };

        createStars();
        createNebulae();
        createSun();

        // Animation loop
        let time = 0;
        let transitionProgress = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            time += 0.01;

            // Star twinkling
            starsRef.current.forEach(stars => {
                const sizes = stars.geometry.attributes.size.array;
                for (let i = 0; i < sizes.length; i++) {
                    sizes[i] = Math.abs(Math.sin(time + i)) * 2 + 0.5;
                }
                stars.geometry.attributes.size.needsUpdate = true;
            });

            // Nebulae swirl
            nebulaeRef.current.forEach((nebula, index) => {
                nebula.rotation.y = time * 0.05 * (index + 1);
                nebula.rotation.x = Math.sin(time * 0.1) * 0.1;
            });

            // Sun pulse
            if (sunRef.current) {
                const scale = 1 + Math.sin(time * 2) * 0.1;
                sunRef.current.scale.set(scale, scale, scale);
            }

            // Transition animation
            if (isTransitioning && transitionProgress < 1) {
                transitionProgress += 0.01 / 3.5; // 3.5 seconds total

                // EaseOutCubic
                const eased = 1 - Math.pow(1 - transitionProgress, 3);

                // Camera pullback from z=5 to z=300
                camera.position.z = 5 + (300 - 5) * eased;

                // Slight upward tilt
                camera.rotation.x = -0.1 * eased;

                if (transitionProgress >= 1 && onTransitionComplete) {
                    onTransitionComplete();
                }
            }

            renderer.render(scene, camera);
        };
        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, [isTransitioning, onTransitionComplete]);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1000,
                pointerEvents: 'none'
            }}
        />
    );
}
