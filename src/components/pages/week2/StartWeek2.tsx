import React from 'react';
import HeroSectionWeek2 from '../../../imports/HeroSectionWeek2';
import GemInfoSectionWeek2 from '../../../imports/GemInfoSectionWeek2';
import TrustIndicators from '../../../imports/TrustIndicators-30-762';
import DisclaimerMessage from '../../../imports/DisclaimerMessage-1-4364';

interface StartWeek2Props {
  onNext?: () => void;
}

export function StartWeek2({ onNext }: StartWeek2Props) {
  return (
    <>
      <div className="content-stretch flex flex-col items-center justify-start w-full pb-[120px] pt-[0px] pr-[0px] pl-[0px]">
        {/* Hero Section */}
        <HeroSectionWeek2 />
        
        {/* Gem Info Section */}
        <div className="w-full px-4 py-6 pt-[34px] pr-[16px] pb-[24px] pl-[16px]">
          <GemInfoSectionWeek2 />
        </div>

        {/* Trust Indicators Section */}
        <div className="w-full px-4 py-6 px-[0px] py-[24px]">
          <TrustIndicators />
        </div>

        {/* Disclaimer Message Section */}
        <div className="w-full px-4 py-6">
          <DisclaimerMessage />
        </div>
      </div>

      {/* Sticky Next Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="backdrop-blur-[25px] backdrop-filter bg-[rgba(255,255,255,0.75)] mix-blend-hard-light relative w-full h-[64px] mt-[4px] mr-[0px] mb-[0px] ml-[0px] py-[14px] px-[0px]">
          <div className="absolute left-[16px] right-[16px] top-[8px]">
            <button 
              className="cta-button cta-button-primary"
              onClick={onNext}
            >
              <div className="cta-button-front py-[22px] px-[16px] mx-[0px] m-[0px]">
                <span className="font-['Roboto:Bold',_sans-serif] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Next
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
