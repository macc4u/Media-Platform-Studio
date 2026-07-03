'use client';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ui/ParticleBackground';
import Navbar from '@/components/Navbar';
import VideoFeed from '@/components/VideoFeed';

export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-dark text-white relative overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto px-4 pt-20 pb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent drop-shadow-neon">
          Chae-Won
        </h1>
        <VideoFeed />
      </motion.div>
    </main>
  );
}
