"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Adjusted timestamp for when the zipper is completely gone. 
// You can tweak this value (e.g., 3.5, 4.0, 4.5) to get the exact frame!
const ZIPPER_UNLOCK_TIME = 4.0; 

export function InteractiveHeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPausedAtZipper = useRef(false);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0.85]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Pause exactly when the zipper is completely removed (only do this once per playback)
      if (!hasPausedAtZipper.current && video.currentTime >= ZIPPER_UNLOCK_TIME) {
        video.pause();
        hasPausedAtZipper.current = true;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleInteraction = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      // If it ended, reset the video and the zipper pause flag
      if (video.ended) {
        video.currentTime = 0;
        hasPausedAtZipper.current = false;
      }
      video.play();
    } else {
      // Pause if currently playing
      video.pause();
    }
  };

  return (
    <div className="sticky top-0 w-full h-[60vh] sm:h-[80vh] min-h-[450px] sm:min-h-[600px] z-0 bg-white overflow-hidden">
      <motion.section 
        style={{ scale, opacity }}
        className="w-full h-full bg-white origin-top flex items-center justify-center pointer-events-none" 
      >
        <div 
          className="relative w-full max-w-4xl h-full overflow-hidden cursor-pointer pointer-events-auto bg-white"
          onClick={handleInteraction}
        >
          <video
            ref={videoRef}
            src="/assets/videos/interactive-hero.mp4"
            playsInline
            muted
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay to hide the Gemini watermark on the bottom right without altering video scale */}
          <div className="absolute -bottom-2 -right-2 w-48 h-32 bg-gradient-to-tl from-white via-white/90 to-transparent blur-md pointer-events-none" />
        </div>
      </motion.section>
    </div>
  );
}
