import svgPaths from "./svg-e0l99mdyht";
import imgFrame2 from "figma:asset/day-4-week-2-podcast-cover.png";
// Import the functional Player component
import Player from './Player-4-3066';
import { PODCAST_AUDIO_URLS } from '../constants/audioUrls';

function Frame2() {
  return (
    <div className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-[8px] h-[214px] items-center justify-end px-[21px] py-[24px] relative shrink-0 w-[178px]" style={{ backgroundImage: `url('${imgFrame2}')` }}>
    </div>
  );
}

function CoverAndSupportingText() {
  return (
    <div className="relative shrink-0 w-full" data-name="cover and supporting text">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-start px-[16px] py-0 relative w-full">
          <Frame2 />
          <div className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#667085] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5]">Your screen might be the biggest thief of your sleep, want to see what happens when you take it back tonight?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PodcastSectionDay4Week2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-start relative size-full" data-name="podcast section">
      <CoverAndSupportingText />
      <Player 
        englishUrl={PODCAST_AUDIO_URLS.week2.day4.english}
        hindiUrl={PODCAST_AUDIO_URLS.week2.day4.hindi}
      />
    </div>
  );
}
