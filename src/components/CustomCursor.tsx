import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Create ripple container
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        z-index: 99999;
        transform: translate(-50%, -50%);
      `;

      // Create multiple burst rings
      for (let i = 0; i < 3; i++) {
        const ring = document.createElement('div');
        ring.style.cssText = `
          position: absolute;
          width: 0;
          height: 0;
          border-radius: 50%;
          border: 2px solid rgba(139, 92, 246, ${0.8 - i * 0.2});
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: rippleBurst 0.6s ease-out ${i * 0.1}s forwards;
        `;
        ripple.appendChild(ring);
      }

      // Inner dot flash
      const dot = document.createElement('div');
      dot.style.cssText = `
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: linear-gradient(135deg, #8b5cf6, #06b6d4);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        animation: dotFlash 0.4s ease-out forwards;
        box-shadow: 0 0 16px rgba(139,92,246,0.8);
      `;
      ripple.appendChild(dot);

      // Spark particles
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * 360;
        const spark = document.createElement('div');
        spark.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: ${i % 2 === 0 ? '#8b5cf6' : '#06b6d4'};
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: sparkFly${i} 0.5s ease-out forwards;
        `;

        // Inline keyframe via style tag per spark direction
        const styleEl = document.createElement('style');
        const dx = Math.cos((angle * Math.PI) / 180) * 28;
        const dy = Math.sin((angle * Math.PI) / 180) * 28;
        styleEl.textContent = `
          @keyframes sparkFly${i} {
            0%   { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0); opacity: 0; }
          }
        `;
        document.head.appendChild(styleEl);
        setTimeout(() => styleEl.remove(), 1000);

        ripple.appendChild(spark);
      }

      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 800);
    };

    // Inject global keyframes once
    const styleTag = document.createElement('style');
    styleTag.id = 'click-ripple-styles';
    styleTag.textContent = `
      @keyframes rippleBurst {
        0%   { width: 0;    height: 0;    opacity: 1; }
        100% { width: 60px; height: 60px; opacity: 0; }
      }
      @keyframes dotFlash {
        0%   { transform: translate(-50%, -50%) scale(1.5); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(0);   opacity: 0; }
      }
    `;
    if (!document.getElementById('click-ripple-styles')) {
      document.head.appendChild(styleTag);
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.getElementById('click-ripple-styles')?.remove();
    };
  }, []);

  return null;
};

export default CustomCursor;
