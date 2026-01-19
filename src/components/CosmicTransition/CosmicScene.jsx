import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CosmicScene() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Three.js setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            2000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Create stars
        const starsGeometry = new THREE.BufferGeometry();
        const starPositions = [];
        const starCount = 3000;

        for (let i = 0; i < starCount; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starPositions.push(x, y, z);
        }

        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));

        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 2,
            sizeAttenuation: true
        });

        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        // Animation
        const duration = 7000; // Reduced from 10 seconds to 7 seconds total
        const zoomDuration = 3000; // First 3 seconds for zoom
        const searchDuration = 4000; // Reduced from 7 to 4 seconds for searching
        const startTime = Date.now();

        // Hide canvas initially
        renderer.domElement.style.opacity = '0';
        renderer.domElement.style.transition = 'opacity 1s ease-in-out';

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Phase 1: Zoom out (0-3 seconds)
            if (elapsed < zoomDuration) {
                const zoomProgress = elapsed / zoomDuration;
                const scale = 1 + (zoomProgress * 5);
                const blur = zoomProgress * 30;

                const homepage = document.querySelector('.homepage-container');
                if (homepage) {
                    homepage.style.transform = `scale(${scale})`;
                    homepage.style.filter = `blur(${blur}px)`;
                    homepage.style.opacity = 1 - zoomProgress;
                }

                // Start fading in starfield near end of zoom (at 2 seconds)
                if (elapsed > 2000) {
                    const fadeProgress = (elapsed - 2000) / 1000; // 1 second fade
                    renderer.domElement.style.opacity = fadeProgress.toString();
                } else {
                    renderer.domElement.style.opacity = '0';
                }
            }
            // Phase 2: Search across universe (3-10 seconds)
            else {
                // Starfield fully visible
                renderer.domElement.style.opacity = '1';

                // Hide homepage completely
                const homepage = document.querySelector('.homepage-container');
                if (homepage) {
                    homepage.style.opacity = 0;
                }

                const searchProgress = (elapsed - zoomDuration) / searchDuration;

                // Pan camera across the starfield - much smaller movement
                const panDistance = 50; // Reduced from 100
                camera.position.x = Math.sin(searchProgress * Math.PI * 2) * panDistance;
                camera.position.y = Math.cos(searchProgress * Math.PI * 1.5) * panDistance * 0.5;

                // Rotate camera slightly as if searching
                camera.rotation.z = Math.sin(searchProgress * Math.PI * 3) * 0.08; // Reduced from 0.15

                // Look at offset point - much smaller offsets
                camera.lookAt(
                    Math.cos(searchProgress * Math.PI * 2) * 15, // Reduced from 30
                    Math.sin(searchProgress * Math.PI) * 10, // Reduced from 20
                    0
                );
            }

            renderer.render(scene, camera);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
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
            const homepage = document.querySelector('.homepage-container');
            if (homepage) {
                homepage.style.transform = '';
                homepage.style.filter = '';
                homepage.style.opacity = '';
            }
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            starsGeometry.dispose();
            starsMaterial.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 9999,
                pointerEvents: 'none'
            }}
        />
    );
}