import React from 'react';
import KairasResponse from '../../../imports/KairasResponse';
import NextSteps from '../../../imports/NextSteps';
import Poster from '../../../imports/Poster-16-71';
import Frame7 from '../../../imports/Frame7';

interface ConclusionWeek2Props {
  onUnlockWeek3?: () => void;
}

export function ConclusionWeek2({ onUnlockWeek3 }: ConclusionWeek2Props) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Certificate Section */}
      <div className="w-full px-4 pt-[32px] pb-[0px] pr-[16px] pl-[16px]">
        <div className="w-full">
          <Frame7 />
        </div>
      </div>

      {/* Kaira's Response Section */}
      <div className="w-full px-4 pb-[32px] pt-[0px] pr-[0px] pl-[0px]">
        <div className="w-full">
          <KairasResponse />
        </div>
      </div>

      {/* Next Steps Section */}
      <div className="w-full px-4 pb-[24px] pt-[0px] pr-[0px] pl-[0px]">
        <div className="w-full">
          <NextSteps />
        </div>
      </div>

      {/* Week 2 Reward Section */}
      <div className="relative w-full px-4 pb-[280px] pt-[0px] pr-[16px] pl-[16px]" data-name="week 2 reward">
        <div className="flex flex-col relative w-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] items-stretch justify-start py-0 relative w-full">
            <Poster />
          </div>
        </div>
      </div>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-40">
        <button 
          className="cta-button cta-button-primary w-full"
          onClick={onUnlockWeek3}
        >
          <div className="cta-button-front">
            <span className="font-['Roboto:Bold',_sans-serif] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Unlock Week 3
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
