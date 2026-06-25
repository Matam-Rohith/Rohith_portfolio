import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    let frame: number;
    let isHovering = false;

    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };

    const onEnter = () => { isHovering = true; };
    const onLeave = () => { isHovering = false; };

    const interactables = 'a, button, [role="button"], input, textarea, select, label';

    const addListeners = () => {
      document.querySelectorAll<HTMLElement>(interactables).forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    const loop = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform  = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${isHovering ? 1.7 : 1})`;
        ringRef.current.style.opacity   = isHovering ? '0.6' : '1';
      }
      frame = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMove);
    addListeners();
    loop();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-[opacity,transform] duration-200"
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '2px solid rgba(139, 92, 246, 0.7)',
          mixBlendMode: 'normal',
          willChange: 'transform',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
          boxShadow: '0 0 10px rgba(139,92,246,0.8)',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;
