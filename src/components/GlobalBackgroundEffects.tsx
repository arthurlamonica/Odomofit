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

interface GlobalBackgroundEffectsProps {
  scrollY: number;
}

export const GlobalBackgroundEffects: React.FC<GlobalBackgroundEffectsProps> = ({ scrollY }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const scrollInertia = useRef(0);
  const lastScrollY = useRef(0);

  // Monitorar velocidade do scroll para dar impulso cinético nas partículas em qualquer ponto do site
  useEffect(() => {
    const delta = scrollY - lastScrollY.current;
    lastScrollY.current = scrollY;
    scrollInertia.current += delta * 0.08;
    // Limitar inércia máxima para manter movimento suave e controlado
    if (scrollInertia.current > 16) scrollInertia.current = 16;
    if (scrollInertia.current < -16) scrollInertia.current = -16;
  }, [scrollY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Configuração das Partículas Globais
    const particleCount = width < 768 ? 32 : 70;
    const particles: Particle[] = [];
    const colors = [
      'rgba(198, 255, 0, 0.95)',   // Verde Neon Principal ODomoFit
      'rgba(215, 255, 60, 0.85)',  // Verde Claro
      'rgba(255, 255, 255, 0.8)',  // Branco Luz
      'rgba(0, 229, 255, 0.7)',    // Azul Elétrico / Ciano
      'rgba(160, 240, 0, 0.65)',   // Verde Esmeralda
    ];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.5 + 0.25;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Movimento do mouse global na viewport
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.targetX = e.clientX;
      mousePos.current.targetY = e.clientY;
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
        if (mousePos.current.x > -400) {
          spotlightRef.current.style.opacity = '1';
          spotlightRef.current.style.transform = `translate3d(${mousePos.current.x - 240}px, ${mousePos.current.y - 240}px, 0)`;
        } else {
          spotlightRef.current.style.opacity = '0';
        }
      }

      // Amortecer impulso cinético do scroll suavemente
      scrollInertia.current *= 0.94;

      const mx = mousePos.current.x;
      const my = mousePos.current.y;

      // Atualizar e desenhar partículas cinéticas
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Pulsação suave de brilho
        p.pulsePhase += 0.025;
        p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.2;

        // Influência do Scroll (vento cinético na rolagem da página)
        p.y -= scrollInertia.current * 0.5;

        // Movimento padrão
        p.x += p.vx;
        p.y += p.vy;

        // Interação com o Mouse (Repulsão suave e aceleração ao aproximar)
        if (mx > -400) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 1.6;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
            p.alpha = Math.min(1, p.alpha + 0.45);
          }
        }

        // Loop contínuo nos limites da viewport
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
          const connectDist = 100;

          if (dist < connectDist) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#C6FF00';
            ctx.globalAlpha = (1 - dist / connectDist) * 0.16;
            ctx.lineWidth = 0.75;
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
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* 1. Canvas Dinâmico de Partículas Cinéticas Global */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 2. Spotlight Interativo que segue o Cursor por todo o site */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[480px] h-[480px] rounded-full bg-radial from-[#C6FF00]/[0.10] via-[#C6FF00]/[0.025] to-transparent blur-[75px] pointer-events-none transition-opacity duration-300 opacity-0"
        style={{ willChange: 'transform' }}
      />

      {/* 3. Grid Cibernético de Alta Precisão em Todo o Site */}
      <div className="absolute inset-0 cyber-grid-overlay opacity-30 pointer-events-none" />

      {/* 4. Orbs de Luz Neon Orgânicos em Flutuação Contínua */}
      <div className="absolute -top-16 -left-16 w-[500px] h-[500px] rounded-full bg-[#C6FF00]/[0.07] blur-[140px] pointer-events-none animate-neon-orb" />
      <div className="absolute top-1/3 -right-20 w-[460px] h-[460px] rounded-full bg-[#00E5FF]/[0.045] blur-[150px] pointer-events-none animate-neon-orb-reverse" />
      <div className="absolute bottom-1/4 -left-20 w-[440px] h-[440px] rounded-full bg-[#C6FF00]/[0.06] blur-[130px] pointer-events-none animate-neon-orb" />
      <div className="absolute -bottom-10 right-10 w-[420px] h-[420px] rounded-full bg-[#00E5FF]/[0.04] blur-[140px] pointer-events-none animate-neon-orb-reverse" />
    </div>
  );
};
