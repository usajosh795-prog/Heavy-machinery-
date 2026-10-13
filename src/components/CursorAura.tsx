import React, { useEffect, useState, useRef } from 'react';

interface CursorAuraProps {
  enabled: boolean;
}

export const CursorAura: React.FC<CursorAuraProps> = ({ enabled }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    // Check if device supports fine pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('textarea') ||
          target.closest('.tactile-btn') ||
          target.closest('[role="button"]'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [enabled, isVisible]);

  // Smooth lag for the aura ring
  useEffect(() => {
    if (!enabled || !isVisible) return;

    const smoothTrail = () => {
      setTrailPos((prev) => {
        const dx = pos.x - prev.x;
        const dy = pos.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22
        };
      });
      animFrameId.current = requestAnimationFrame(smoothTrail);
    };

    animFrameId.current = requestAnimationFrame(smoothTrail);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [pos, enabled, isVisible]);

  if (!enabled || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden no-print">
      {/* Precision center dot */}
      <div
        className="fixed -top-1 -left-1 w-2 h-2 rounded-full bg-amber-600 transition-opacity duration-200"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          opacity: isVisible ? 0.9 : 0
        }}
      />
      {/* Soft tracking aura ring */}
      <div
        className={`fixed -top-4 -left-4 rounded-full border transition-all duration-200 ease-out ${
          isHovered
            ? 'w-10 h-10 -top-5 -left-5 border-amber-600/70 bg-amber-500/10 shadow-[0_0_15px_rgba(217,119,6,0.25)]'
            : 'w-8 h-8 border-slate-400/50 bg-slate-400/5'
        }`}
        style={{
          transform: `translate3d(${trailPos.x}px, ${trailPos.y}px, 0)`,
          opacity: isVisible ? 1 : 0
        }}
      />
    </div>
  );
};
