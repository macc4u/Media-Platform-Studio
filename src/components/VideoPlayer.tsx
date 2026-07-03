'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

type Props = {
  videoUrl: string;
  autoPlay: boolean;
};

export default function VideoPlayer({ videoUrl, autoPlay }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLikeAnim, setShowLikeAnim] = useState(false);

  useEffect(() => {
    if (autoPlay) videoRef.current?.play().catch(() => {});
    else videoRef.current?.pause();
  }, [autoPlay]);

  const handleTap = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleDoubleTap = () => {
    setShowLikeAnim(true);
    setTimeout(() => setShowLikeAnim(false), 800);
  };

  return (
    <div
      className="relative w-full h-[85vh] rounded-xl overflow-hidden bg-black"
      onClick={handleTap}
      onDoubleClick={handleDoubleTap}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-contain"
        loop
        playsInline
      />
      {showLikeAnim && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center text-7xl text-cyber-pink drop-shadow-neon"
        >
          ❤️
        </motion.div>
      )}
      {/* Controls & Resolution Selector here */}
    </div>
  );
}
