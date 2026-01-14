import { useEffect, useRef } from "react";
import "./Starfield.css";

export default function Starfield({ starCount = 100 }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clear any existing stars
        containerRef.current.innerHTML = "";

        // Generate stars with random properties
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.className = "star";

            // Random position (0-100%)
            const x = Math.random() * 100;
            const y = Math.random() * 100;

            // Random size (1-3px, with most being small)
            const sizeRandom = Math.random();
            let size;
            if (sizeRandom < 0.7) {
                size = 1; // 70% are 1px
            } else if (sizeRandom < 0.9) {
                size = 2; // 20% are 2px
            } else {
                size = 3; // 10% are 3px
            }

            // Random opacity/intensity (0.3 - 1.0)
            const intensity = 0.3 + Math.random() * 0.7;

            // Random color variation (mostly white, some with slight blue/yellow tint)
            const colorRandom = Math.random();
            let color;
            if (colorRandom < 0.8) {
                color = "#ffffff"; // 80% pure white
            } else if (colorRandom < 0.9) {
                color = "#d4e4ff"; // 10% slight blue tint
            } else {
                color = "#fff8e1"; // 10% slight warm tint
            }

            // Apply styles
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.opacity = intensity;
            star.style.backgroundColor = color;
            star.style.boxShadow = `0 0 ${size * 2}px ${color}`;

            // Random twinkle animation delay
            star.style.animationDelay = `${Math.random() * 5}s`;

            containerRef.current.appendChild(star);
        }
    }, [starCount]);

    return <div ref={containerRef} className="starfield"></div>;
}
