'use client';
import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const particles: any[] = [];
    const count = 120;

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number; color: string;
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.color = ['#00F0FF', '#B000FF', '#FF2EB6'][Math.floor(Math.random() * 3)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > w) this.speedX *= -1;
        if (this.y < 0 || this.y > h) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
      }
    }

    function init() {
      for (let i = 0; i < count; i++) particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    }

    init(); animate();
    window.onresize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-40" />;
}
