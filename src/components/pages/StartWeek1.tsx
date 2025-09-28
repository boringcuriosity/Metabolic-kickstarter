import React from 'react';
import HeroSection from '../../imports/HeroSection-29-714';
import GemInfoSection from '../../imports/GemInfoSection';
import TrustIndicators from '../../imports/TrustIndicators-30-762';
import DisclaimerMessage from '../../imports/DisclaimerMessage-1-4364';

interface StartWeek1Props {
  onNext?: () => void;
}

export function StartWeek1({ onNext }: StartWeek1Props) {
  return (
    <>
      <div className="content-stretch flex flex-col items-center justify-start w-full pb-[120px] pt-[0px] pr-[0px] pl-[0px]">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Gem Info Section */}
        <div className="w-full px-4 py-6 pt-[34px] pr-[16px] pb-[24px] pl-[16px]">
          <GemInfoSection />
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
        <div className="bg-white relative w-full mr-[0px] mb-[0px] ml-[0px] py-[20px] px-[0px]">
          <div className="px-[16px]">
            <button 
              className="cta-button cta-button-primary"
              onClick={onNext}
            >
              <div className="cta-button-front py-[16px] px-[16px] mx-[0px] m-[0px]">
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