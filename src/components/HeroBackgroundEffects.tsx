import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  color: string;
  pulsePhase: number;
}

interface HeroBackgroundEffectsProps {
  scrollY: number;
}

export const HeroBackgroundEffects: React.FC<HeroBackgroundEffectsProps> = ({ scrollY }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const scrollInertia = useRef(0);
  const lastScrollY = useRef(0);

  // Monitorar velocidade do scroll para dar impulso cinético nas partículas
  useEffect(() => {
    const delta = scrollY - lastScrollY.current;
    lastScrollY.current = scrollY;
    scrollInertia.current += delta * 0.08;
    // Limitar inércia máxima
    if (scrollInertia.current > 15) scrollInertia.current = 15;
    if (scrollInertia.current < -15) scrollInertia.current = -15;
  }, [scrollY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Configuração das Partículas da Hero
    const particleCount = width < 768 ? 28 : 58;
    const particles: Particle[] = [];
    const colors = [
      'rgba(198, 255, 0, 0.95)',   // Verde Neon Principal ODomoFit
      'rgba(215, 255, 60, 0.9)',   // Verde Claro
      'rgba(255, 255, 255, 0.85)', // Branco Luz
      'rgba(0, 229, 255, 0.75)',   // Azul Elétrico / Ciano
      'rgba(160, 240, 0, 0.7)',    // Verde Esmeralda
    ];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.55 + 0.25;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Movimento do mouse relativo à Hero
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mousePos.current.targetX = e.clientX - rect.left;
      mousePos.current.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mousePos.current.targetX = -1000;
      mousePos.current.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Loop de renderização em 60fps
    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Suavizar movimento do spotlight com interpolação lerp
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.12;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.12;

      if (spotlightRef.current) {
        if (mousePos.current.x > -400 && mousePos.current.x < width + 400 && mousePos.current.y > -400 && mousePos.current.y < height + 400) {
          spotlightRef.current.style.opacity = '1';
          spotlightRef.current.style.transform = `translate3d(${mousePos.current.x - 230}px, ${mousePos.current.y - 230}px, 0)`;
        } else {
          spotlightRef.current.style.opacity = '0';
        }
      }

      // Amortecer impulso cinético do scroll
      scrollInertia.current *= 0.94;

      const mx = mousePos.current.x;
      const my = mousePos.current.y;

      // Atualizar e desenhar partículas
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Pulsação suave de brilho
        p.pulsePhase += 0.025;
        p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.2;

        // Influência do Scroll (efeito de vento na rolagem)
        p.y -= scrollInertia.current * 0.5;

        // Movimento padrão
        p.x += p.vx;
        p.y += p.vy;

        // Interação com o Mouse (Repulsão suave e aceleração ao aproximar)
        if (mx > -400 && mx < width + 400) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 135;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 1.5;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
            p.alpha = Math.min(1, p.alpha + 0.45);
          }
        }

        // Loop nos limites da hero
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Desenhar partícula com Glow Neon
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#C6FF00';
        ctx.fill();
        ctx.restore();

        // Conectar partículas vizinhas com linhas sutis neon
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const connectDist = 95;

          if (dist < connectDist) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#C6FF00';
            ctx.globalAlpha = (1 - dist / connectDist) * 0.2;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* 1. Canvas Dinâmico de Partículas Cinéticas da Hero */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 2. Spotlight Interativo que segue o Cursor com Halo Neon Suave */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[460px] h-[460px] rounded-full bg-radial from-[#C6FF00]/[0.14] via-[#C6FF00]/[0.035] to-transparent blur-[70px] pointer-events-none transition-opacity duration-300 opacity-0"
        style={{ willChange: 'transform' }}
      />

      {/* 3. Grid Cibernético de Alta Precisão Atlética sobre a Hero */}
      <div className="absolute inset-0 cyber-grid-overlay opacity-40 pointer-events-none" />

      {/* 4. Orbs de Luz Neon Orgânicos em Flutuação Contínua */}
      <div className="absolute -top-12 -left-16 w-[450px] h-[450px] rounded-full bg-[#C6FF00]/[0.08] blur-[130px] pointer-events-none animate-neon-orb" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full bg-[#00E5FF]/[0.04] blur-[150px] pointer-events-none animate-neon-orb-reverse" />
    </div>
  );
};
