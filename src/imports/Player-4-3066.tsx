import React, { useState, useRef, useEffect } from 'react';
import svgPaths from "./svg-abts2o1rva";
import Pause from './Pause';

// Utility function to detect iOS devices
const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

interface ProgressBarProps {
  isPlaying: boolean;
  progress: number; // percentage from 0 to 100
  onSeek: (percentage: number) => void;
}

function ProgressBar({ isPlaying, progress, onSeek }: ProgressBarProps) {
  const [animationPhase, setAnimationPhase] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) {
      setAnimationPhase(0);
      return;
    }

    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 6);
    }, 150);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const bars = React.useMemo(() => [
    { height: 12, ml: 0, mt: 6, index: 0 },
    { height: 12, ml: 84.672, mt: 6, index: 1 },
    { height: 13, ml: 72.576, mt: 5, index: 2 },
    { height: 9, ml: 158.592, mt: 7, index: 3 },
    { height: 12, ml: 24.192, mt: 6, index: 4 },
    { height: 12, ml: 108.864, mt: 6, index: 5 },
    { height: 10, ml: 48.384, mt: 7, index: 6 },
    { height: 7, ml: 134.4, mt: 8, index: 7 },
    { height: 12, ml: 12.096, mt: 6, index: 8 },
    { height: 12, ml: 96.768, mt: 6, index: 9 },
    { height: 4, ml: 36.288, mt: 10, index: 10 },
    { height: 3, ml: 122.304, mt: 10, index: 11 },
    { height: 15, ml: 60.48, mt: 4, index: 12 },
    { height: 10, ml: 146.496, mt: 7, index: 13 },
    { height: 20, ml: 2.688, mt: 2, index: 14 },
    { height: 20, ml: 88.704, mt: 2, index: 15 },
    { height: 10, ml: 76.608, mt: 7, index: 16 },
    { height: 7, ml: 161.28, mt: 8, index: 17 },
    { height: 12, ml: 26.88, mt: 6, index: 18 },
    { height: 12, ml: 112.896, mt: 6, index: 19 },
    { height: 7, ml: 51.072, mt: 8, index: 20 },
    { height: 4, ml: 137.088, mt: 10, index: 21 },
    { height: 9, ml: 14.784, mt: 7, index: 22 },
    { height: 15, ml: 100.8, mt: 4, index: 23 },
    { height: 10, ml: 38.976, mt: 7, index: 24 },
    { height: 7, ml: 124.992, mt: 8, index: 25 },
    { height: 15, ml: 64.512, mt: 4, index: 26 },
    { height: 10, ml: 149.184, mt: 7, index: 27 },
    { height: 17, ml: 6.72, mt: 3, index: 28 },
    { height: 17, ml: 91.392, mt: 3, index: 29 },
    { height: 15, ml: 79.296, mt: 4, index: 30 },
    { height: 10, ml: 163.968, mt: 7, index: 31 },
    { height: 8, ml: 30.912, mt: 8, index: 32 },
    { height: 6, ml: 115.584, mt: 9, index: 33 },
    { height: 15, ml: 55.104, mt: 4, index: 34 },
    { height: 10, ml: 139.776, mt: 7, index: 35 },
    { height: 23, ml: 18.816, mt: 0, index: 36 },
    { height: 23, ml: 103.488, mt: 0, index: 37 },
    { height: 21, ml: 43.008, mt: 1, index: 38 },
    { height: 15, ml: 127.68, mt: 4, index: 39 },
    { height: 17, ml: 67.2, mt: 3, index: 40 },
    { height: 12, ml: 151.872, mt: 6, index: 41 },
    { height: 9, ml: 9.408, mt: 7, index: 42 },
    { height: 13, ml: 94.08, mt: 5, index: 43 },
    { height: 15, ml: 81.984, mt: 4, index: 44 },
    { height: 10, ml: 166.656, mt: 7, index: 45 },
    { height: 10, ml: 33.6, mt: 7, index: 46 },
    { height: 7, ml: 118.272, mt: 8, index: 47 },
    { height: 21, ml: 57.792, mt: 1, index: 48 },
    { height: 15, ml: 142.464, mt: 4, index: 49 },
    { height: 12, ml: 21.504, mt: 6, index: 50 },
    { height: 12, ml: 106.176, mt: 6, index: 51 },
    { height: 15, ml: 45.696, mt: 4, index: 52 },
    { height: 10, ml: 130.368, mt: 7, index: 53 },
    { height: 21, ml: 69.888, mt: 1, index: 54 },
    { height: 15, ml: 154.56, mt: 4, index: 55 }
  ], []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = (clickX / rect.width) * 100;
    onSeek(Math.max(0, Math.min(100, percentage)));
  };

  const getBarHeight = React.useCallback((baseHeight: number, index: number) => {
    if (!isPlaying) return baseHeight;
    
    const variation = Math.sin((animationPhase + index) * 0.5) * 0.3 + 1;
    return Math.max(3, Math.round(baseHeight * variation));
  }, [isPlaying, animationPhase]);

  const getBarColor = React.useCallback((barIndex: number, barPosition: number) => {
    // Calculate which bars should be filled based on progress
    const totalBars = bars.length;
    const barProgressPosition = (barIndex / totalBars) * 100;
    
    const isFilled = barProgressPosition <= progress;
    const isActiveAnimation = isPlaying && (barIndex % 3 === animationPhase % 3);
    
    if (isFilled) {
      return isActiveAnimation ? '#2EBF75' : '#299D6B'; // Slightly brighter when animating
    }
    return '#d0d5dd';
  }, [progress, isPlaying, animationPhase, bars.length]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-[23px] relative cursor-pointer overflow-hidden" 
      data-name="Interactive Audio Spectrum"
      onClick={handleClick}
    >
      {/* Responsive spectrum container with distributed bars */}
      <div 
        className="absolute inset-0 flex items-end justify-between px-1"
        style={{ gap: `${Math.max(1, (100 / bars.length) * 0.1)}%` }}
      >
        {bars.map((bar, idx) => {
          const animatedHeight = getBarHeight(bar.height, bar.index);
          const color = getBarColor(idx, bar.ml);
          
          return (
            <div 
              key={idx}
              className="rounded-[6.413px] transition-all duration-150 hover:scale-110 flex-shrink-0"
              style={{
                backgroundColor: color,
                height: `${animatedHeight}px`,
                width: 'max(1px, 0.3vw)', // Responsive width that scales with viewport
                minWidth: '1px',
                maxWidth: '3px'
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

interface PlayerFeelProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  progress: number;
  onSeek: (percentage: number) => void;
}

function PlayerFeel({ isPlaying, onPlayPause, progress, onSeek }: PlayerFeelProps) {
  const lastClickTime = useRef(0);
  
  const handlePlayPauseClick = () => {
    const now = Date.now();
    console.log('Button clicked, time since last click:', now - lastClickTime.current);
    // Debounce to prevent double clicks
    if (now - lastClickTime.current < 300) {
      console.log('Click debounced, ignoring');
      return;
    }
    lastClickTime.current = now;
    console.log('Calling onPlayPause');
    onPlayPause();
  };

  return (
    <div className="flex items-center justify-start w-full min-h-[32px] relative" data-name="player feel">
      {/* Play/Pause Button - Fixed width on left */}
      <button 
        className="relative shrink-0 size-[32px] cursor-pointer transition-transform hover:scale-105 active:scale-95" 
        data-name="Vector"
        onClick={handlePlayPauseClick}
        onTouchEnd={(e) => {
          // iOS Safari: Only use touch events on iOS devices
          if (isIOS() && e.cancelable) {
            handlePlayPauseClick();
          }
        }}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? (
          <Pause />
        ) : (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p286ad900} fill="var(--fill-0, #299D6B)" id="Vector" />
          </svg>
        )}
      </button>
      
      {/* 8px gap */}
      <div className="w-[8px] shrink-0" />
      
      {/* Progress Bar - Expandable to fill remaining space */}
      <div className="flex-1 min-w-0">
        <ProgressBar isPlaying={isPlaying} progress={progress} onSeek={onSeek} />
      </div>
    </div>
  );
}

interface ToggleProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function Toggle({ isActive, onClick, children }: ToggleProps) {
  return (
    <button 
      className={`${isActive ? 'bg-white shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]' : ''} box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] sm:px-[12px] py-[6px] sm:py-[8px] relative rounded-[100px] shrink-0 cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]`}
      data-name="Toggle"
      onClick={onClick}
    >
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#299d6b] text-[0px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {children}
      </div>
    </button>
  );
}

interface LanguageToggleProps {
  selectedLanguage: 'english' | 'hindi';
  onLanguageChange: (language: 'english' | 'hindi') => void;
}

function LanguageToggle({ selectedLanguage, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[4px] sm:gap-[9px] items-center justify-start p-[4px] relative rounded-[24px] shrink-0" data-name="language toggle">
      <Toggle 
        isActive={selectedLanguage === 'english'} 
        onClick={() => onLanguageChange('english')}
      >
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px] sm:text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          English
        </p>
      </Toggle>
      <Toggle 
        isActive={selectedLanguage === 'hindi'} 
        onClick={() => onLanguageChange('hindi')}
      >
        <p className={`leading-[1.2] text-[14px] sm:text-[16px] whitespace-nowrap font-['Roboto:Regular',_'Noto_Sans_Devanagari:Regular',_sans-serif] ${selectedLanguage === 'hindi' ? 'font-bold' : '[text-underline-position:from-font] decoration-solid underline'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          हिंदी
        </p>
      </Toggle>
    </div>
  );
}

interface PlayerProps {
  englishUrl?: string;
  hindiUrl?: string;
  onPlayPauseRef?: React.MutableRefObject<(() => void) | null>;
}

export default function Player({ englishUrl, hindiUrl, onPlayPauseRef }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'hindi'>('english');
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioUrls = React.useMemo(() => ({
    english: englishUrl || 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hey_its_kaira-1ge4MB7NGxV34H1PGXCzm1a4gMBXgq.mp3',
    hindi: hindiUrl || 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hindi_hey_there-JXFjV9k3CJa5sxExXe2uBoK1lJLJlq.mp3'
  }), [englishUrl, hindiUrl]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const currentSrc = audioUrls[selectedLanguage];
    if (audio.src !== currentSrc) {
      audio.src = currentSrc;
    }
    
    // iOS Safari workaround: Ensure audio element is ready for user interaction
    // This helps establish the user interaction context for iOS
    const initializeAudio = () => {
      if (audio.readyState === 0) {
        audio.load();
      }
    };
    
    // Initialize audio on first user interaction
    const handleFirstInteraction = () => {
      initializeAudio();
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('click', handleFirstInteraction);
    };
    
    // Add event listeners for first user interaction
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });
    document.addEventListener('click', handleFirstInteraction, { once: true });
    
    return () => {
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, [selectedLanguage, audioUrls]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setIsLoading(false);
      setCurrentTime(0);
    };

    const handleError = (e: Event) => {
      console.error('Audio playback error:', e);
      setIsPlaying(false);
      setIsLoading(false);
      setCurrentTime(0);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handlePlayPause = React.useCallback(() => {
    const audio = audioRef.current;
    if (!audio || isLoading) return;

    console.log('handlePlayPause called, isPlaying:', isPlaying, 'isLoading:', isLoading);

    if (isPlaying) {
      console.log('Pausing audio');
      audio.pause();
      setIsPlaying(false);
    } else {
      console.log('Playing audio');
      setIsLoading(true);
      
      // iOS Safari requires the audio element to be properly initialized
      // Ensure the audio is loaded and ready
      if (audio.readyState < 2) {
        audio.load();
      }
      
      // For iOS Safari, we need to ensure the audio element has been "touched"
      // by setting currentTime to establish user interaction context
      try {
        if (audio.currentTime === 0) {
          audio.currentTime = 0.1;
          audio.currentTime = 0;
        }
      } catch (e) {
        // Ignore errors, this is just to establish user interaction
      }
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error playing audio:', error);
            setIsPlaying(false);
            setIsLoading(false);
            
            // If play fails, try to load and play again
            if (error.name === 'NotAllowedError') {
              console.warn('Audio playback blocked, attempting to load and retry...');
              audio.load();
              setTimeout(() => {
                audio.play()
                  .then(() => {
                    setIsPlaying(true);
                    setIsLoading(false);
                  })
                  .catch((retryError) => {
                    console.error('Retry failed:', retryError);
                    setIsPlaying(false);
                    setIsLoading(false);
                  });
              }, 100);
            }
          });
      } else {
        // Fallback for older browsers
        setIsPlaying(true);
        setIsLoading(false);
      }
    }
  }, [isPlaying, isLoading]);

  // Expose the handlePlayPause function through ref for external use (e.g., cover image click)
  useEffect(() => {
    if (onPlayPauseRef) {
      onPlayPauseRef.current = handlePlayPause;
    }
  }, [handlePlayPause, onPlayPauseRef]);

  const handleLanguageChange = React.useCallback((language: 'english' | 'hindi') => {
    const audio = audioRef.current;
    const wasPlaying = isPlaying;
    
    if (isPlaying && audio) {
      audio.pause();
      setIsPlaying(false);
    }
    
    // Reset progress when changing language
    setCurrentTime(0);
    setDuration(0);
    setSelectedLanguage(language);
    
    // Resume playing with new language if it was playing before
    if (wasPlaying) {
      setTimeout(() => {
        if (audio && !isLoading) {
          audio.play()
            .then(() => setIsPlaying(true))
            .catch((error) => {
              console.error('Error resuming audio:', error);
              setIsPlaying(false);
            });
        }
      }, 200);
    }
  }, [isPlaying, isLoading]);

  // Calculate progress percentage
  const progress = React.useMemo(() => {
    if (duration === 0) return 0;
    return Math.min(100, (currentTime / duration) * 100);
  }, [currentTime, duration]);

  const handleSeek = React.useCallback((percentage: number) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    
    const seekTime = (percentage / 100) * duration;
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  }, [duration]);

  return (
    <div className="relative w-full" data-name="player">
      <audio 
        ref={audioRef}
        preload="metadata"
        playsInline
        webkit-playsinline="true"
        controls={false}
        className="hidden"
      />
      
      {/* Responsive player layout */}
      <div className="flex items-center justify-between w-full px-4 py-0 gap-2 sm:gap-4">
        {/* Left side: Play button + spectrum (grows to fill space) */}
        <div className="flex-1 min-w-0">
          <PlayerFeel 
            isPlaying={isPlaying} 
            onPlayPause={handlePlayPause} 
            progress={progress} 
            onSeek={handleSeek} 
          />
        </div>
        
        {/* Right side: Language toggle (fixed width) */}
        <div className="shrink-0">
          <LanguageToggle 
            selectedLanguage={selectedLanguage} 
            onLanguageChange={handleLanguageChange} 
          />
        </div>
      </div>
    </div>
  );
}