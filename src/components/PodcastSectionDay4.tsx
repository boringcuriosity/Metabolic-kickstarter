import imgFrame5 from "../assets/day_4_cover.png";
import Player from '../imports/Player-4-3066';
import { PODCAST_AUDIO_URLS } from '../constants/audioUrls';

function Frame5() {
  return (
    <div className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-[8px] h-[214px] items-center justify-end px-[21px] py-[25px] relative shrink-0 w-[178px]" style={{ backgroundImage: `url('${imgFrame5}')` }}>
    </div>
  );
}

function CoverAndSupportingText() {
  return (
    <div className="relative size-full" data-name="cover and supporting text">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-start px-[16px] py-0 relative size-full">
          <Frame5 />
          <div className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#667085] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5]">Sleep might be your secret weapon—discover how a simple tweak makes all the difference</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PodcastSectionDay4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-start relative size-full" data-name="podcast section">
      <CoverAndSupportingText />
      <Player 
        englishUrl={PODCAST_AUDIO_URLS.week1.day4.english}
        hindiUrl={PODCAST_AUDIO_URLS.week1.day4.hindi}
      />
    </div>
  );
}