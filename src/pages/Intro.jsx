"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

// Enhanced Meteors with glow
export const Meteors = ({ number = 30 }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -10,
      left: Math.floor(Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200)) + "px",
      animationDelay: Math.random() * 2 + "s",
      animationDuration: Math.floor(Math.random() * 6 + 3) + "s",
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 size-[2px] rotate-[215deg] animate-meteor rounded-full",
            "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600",
            "shadow-[0_0_10px_2px_rgba(6,182,212,0.6)]"
          )}
          style={style}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[2px] w-[80px] -translate-y-1/2 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent opacity-80" />
        </span>
      ))}
    </>
  );
};

// Floating particles
export const FloatingParticles = ({ number = 50 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const p = [...new Array(number)].map(() => ({
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      animationDelay: Math.random() * 5 + "s",
      animationDuration: Math.floor(Math.random() * 10 + 10) + "s",
      size: Math.random() * 3 + 1,
    }));
    setParticles(p);
  }, [number]);

  return (
    <>
      {particles.map((p, idx) => (
        <div
          key={idx}
          className="absolute rounded-full bg-white/20 animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size + "px",
            height: p.size + "px",
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        />
      ))}
    </>
  );
};

// Letter animation component
const AnimatedText = ({ text, className, delay = 0 }) => {
  return (
    <div className={cn("flex", className)}>
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          className="inline-block animate-letter-reveal opacity-0"
          style={{
            animationDelay: `${delay + idx * 0.1}s`,
            animationFillMode: "forwards",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default function Intro({ onIntroEnd }) {
  const [started, setStarted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setTimeout(() => {
      setGlitchActive(true);
      setTimeout(() => {
        setShowVideo(true);
        setGlitchActive(false);
      }, 600);
    }, 1500);
  };

  const handleVideoEnd = () => {
    if (onIntroEnd) {
      onIntroEnd();
    }
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((err) => {
        console.error("Video play error:", err);
        setVideoError(true);
      });
    }
  }, [showVideo]);

  if (!started) {
    return (
      <section 
        id="intro"
        className="relative h-screen w-full bg-black flex items-center justify-center cursor-pointer overflow-hidden"
        onClick={handleStart}
      >
        {/* Aurora gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingParticles number={60} />
        </div>

        {/* Meteors */}
        <div className="absolute inset-0 overflow-hidden">
          <Meteors number={25} />
        </div>

        {/* Main content */}
        <div className="text-center relative z-10 flex flex-col items-center gap-8">
          {/* Name reveal */}
          <div className="mb-4">
            <AnimatedText 
              text="KATHIRVEL" 
              className="text-6xl md:text-8xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
              delay={0.2}
            />
          </div>

          {/* Subtitle */}
          <div className="overflow-hidden">
            <p 
              className="text-xl md:text-2xl text-gray-400 tracking-[0.3em] uppercase animate-slide-up opacity-0"
              style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
            >
              Frontend Developer
            </p>
          </div>

          {/* Divider line */}
          <div 
            className="w-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-expand-width"
            style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
          />

          {/* Click to enter */}
          <div 
            className="mt-8 animate-fade-in opacity-0"
            style={{ animationDelay: "2s", animationFillMode: "forwards" }}
          >
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <button className="relative px-8 py-4 bg-black rounded-lg border border-white/10 text-white font-medium tracking-wider uppercase hover:border-cyan-500/50 transition-all duration-300">
                <span className="flex items-center gap-3">
                  <span className="animate-pulse">Click to Enter</span>
                  <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Hint text */}
          <p 
            className="text-xs text-gray-600 tracking-widest animate-fade-in opacity-0"
            style={{ animationDelay: "2.5s", animationFillMode: "forwards" }}
          >
            Press anywhere to continue
          </p>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-500/30" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-500/30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-500/30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-500/30" />
      </section>
    );
  }

  return (
    <section id="intro" className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Glitch overlay */}
      {glitchActive && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-cyan-500/20 animate-glitch-1" />
          <div className="absolute inset-0 bg-purple-500/20 animate-glitch-2" />
          <div className="text-4xl font-black text-white tracking-widest animate-glitch-text">
            INITIALIZING...
          </div>
        </div>
      )}

      <div className="absolute inset-0 overflow-hidden z-0">
        <Meteors number={20} />
      </div>

      {showVideo && (
        <div className="relative z-10 h-full w-full flex items-center justify-center animate-fade-in">
          <video
            ref={videoRef}
            className="h-full w-auto max-w-full object-contain"
            src="/video/intro.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            controls={videoError}
            onEnded={handleVideoEnd}
            onError={(e) => {
              console.error("Video load error:", e);
              setVideoError(true);
            }}
            onLoadedData={() => {
              console.log("Video loaded successfully");
              setVideoError(false);
            }}
          />
        </div>
      )}

      {!showVideo && !glitchActive && (
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-cyan-400 tracking-widest text-sm">LOADING EXPERIENCE</p>
        </div>
      )}

      {videoError && (
        <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/80">
          <div className="text-white text-center p-6">
            <p className="text-xl mb-2">Video failed to load</p>
            <p className="text-sm text-gray-400">Check console for details</p>
          </div>
        </div>
      )}
    </section>
  );
}