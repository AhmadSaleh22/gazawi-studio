// WaveAnimation.tsx

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/style.css';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

export default function WaveAnimation() {
  const svgRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || !waveRef.current) return;

    const svg = svgRef.current;
    const wave = waveRef.current;

    const width = 800;
    const amplitude = 250;
    const frequency = 30;
    const segments = 1000;
    const interval = width / segments;

    const sinus = CustomEase.create("sinus", "M0,0 C0.4,0 0.3,1 0.5,1 0.7,1 0.6,0 1,0");

    gsap.defaults({
      ease: "sine.inOut"
    });

    gsap.set("g", {
      y: window.innerHeight / 2
    });

    for (let i = 0; i <= segments; i++) {
      const norm = 1 - i / segments;
      const point = wave.points.appendItem(svg.createSVGPoint());
      point.x = i * interval;
      point.y = amplitude / 2 * sinus(norm);

      gsap.to(point, {
        duration: 0.3,
        y: -point.y,
        repeat: -1,
        yoyo: true
      }).progress(norm * frequency);
    }

  }, []);

  return (
    <div className="wave-container">
      <svg ref={svgRef}>
        <g>
          <line id="line" x1="0" x2="100%" />
          <polyline id="wave" ref={waveRef} />
        </g>
      </svg>
    </div>
  );
}