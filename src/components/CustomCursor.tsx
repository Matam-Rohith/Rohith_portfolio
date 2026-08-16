import { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
          if (window.matchMedia('(pointer: coarse)').matches) return;
          const dot = document.createElement('div');
          const ring = document.createElement('div');
          dot.className = 'cursor-dot'; ring.className = 'cursor-ring';
          document.body.append(dot, ring);
          let x = -100, y = -100, rx = -100, ry = -100, frame = 0;
          const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; document.body.classList.add('cursor-ready'); };
          const animate = () => { rx += (x - rx) * .16; ry += (y - ry) * .16; dot.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`; ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`; frame = requestAnimationFrame(animate); };
          const over = (e: MouseEvent) => { const el = e.target as HTMLElement; if (el.closest('a,button,[role=button],img,.card-aesthetic')) ring.classList.add('cursor-hover'); };
          const out = (e: MouseEvent) => { const el = e.target as HTMLElement; if (el.closest('a,button,[role=button],img,.card-aesthetic')) ring.classList.remove('cursor-hover'); };
          document.addEventListener('mousemove', move); document.addEventListener('mouseover', over); document.addEventListener('mouseout', out);
          frame = requestAnimationFrame(animate);
          const style = document.createElement('style'); style.id = 'custom-cursor-style'; style.textContent = `.cursor-dot,.cursor-ring{position:fixed;top:0;left:0;pointer-events:none;z-index:99999;border-radius:999px;opacity:0;transition:opacity .25s ease,transform .2s ease}.cursor-dot{width:6px;height:6px;background:#6366f1;box-shadow:0 0 16px #6366f1}.cursor-ring{width:34px;height:34px;border:1px solid rgb(99 102 241 / .55);background:rgb(99 102 241 / .06);backdrop-filter:blur(2px)}.cursor-ready .cursor-dot,.cursor-ready .cursor-ring{opacity:1}.cursor-ring.cursor-hover{width:54px;height:54px;border-color:#0ea5e9;background:rgb(14 165 233 / .1)}@media (prefers-reduced-motion:reduce){.cursor-dot,.cursor-ring{display:none}}`; document.head.appendChild(style);
          return () => { cancelAnimationFrame(frame); document.removeEventListener('mousemove',move); document.removeEventListener('mouseover',over); document.removeEventListener('mouseout',out); dot.remove(); ring.remove(); style.remove(); document.body.classList.remove('cursor-ready'); };
    }, []);
    return null;
};

export default CustomCursor;
