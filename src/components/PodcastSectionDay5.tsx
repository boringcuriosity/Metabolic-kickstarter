import React, { useRef } from "react";
import imgFrame6 from "../assets/day_5_cover.png";
import Player from '../imports/Player-4-3066';
import { PODCAST_AUDIO_URLS } from '../constants/audioUrls';

function Frame6({ onCoverClick }: { onCoverClick?: () => void }) {
  return (
    <div 
      className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-[8px] h-[214px] items-center justify-end px-[21px] py-[23px] relative shrink-0 w-[178px] cursor-pointer transition-transform hover:scale-105 active:scale-95" 
      style={{ backgroundImage: `url('${imgFrame6}')` }}
      onClick={onCoverClick}
      onTouchStart={(e) => {
        // iOS Safari workaround: Ensure touch events are properly handled
        e.preventDefault();
      }}
      aria-label="Play/Pause podcast"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onCoverClick?.();
        }
      }}
    >
    </div>
  );
}

function CoverAndSupportingText({ onCoverClick }: { onCoverClick?: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="cover and supporting text">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-start px-[16px] py-0 relative w-full">
          <Frame6 onCoverClick={onCoverClick} />
          <div className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#667085] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5]">Peace doesn't take hours discover how five minutes today can shift everything.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PodcastSectionDay5() {
  const playPauseRef = useRef<(() => void) | null>(null);

  const handleCoverClick = () => {
    if (playPauseRef.current) {
      playPauseRef.current();
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-start relative size-full" data-name="podcast section">
      <CoverAndSupportingText onCoverClick={handleCoverClick} />
      <Player 
        englishUrl={PODCAST_AUDIO_URLS.week1.day5.english}
        hindiUrl={PODCAST_AUDIO_URLS.week1.day5.hindi}
        onPlayPauseRef={playPauseRef}
      />
    </div>
  );
}