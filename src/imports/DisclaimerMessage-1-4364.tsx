import React from "react";
import svgPaths from "./svg-sfhl36atl7";

function Warning() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Warning">
          <path d={svgPaths.p2a6fe00} fill="var(--fill-0, #98A2B3)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function DisclaimerHeading() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-start relative shrink-0" data-name="disclaimer heading">
      <Warning />
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#98a2b3] text-[0px] text-center text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.5] text-[12px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Disclaimer
        </p>
      </div>
    </div>
  );
}

export default function DisclaimerMessage() {
  return (
    <div className="relative size-full" data-name="disclaimer message">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-start px-[16px] py-0 relative size-full">
          <div className="bg-gradient-to-r from-[#ffffff] h-px shrink-0 to-[#ffffff] via-[#e4e7ec] via-[49.26%] w-[204px]" />
          <DisclaimerHeading />
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#98a2b3] text-[12px] text-center tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100", width: "min-content" }}>
            <p className="leading-[1.5]">This is a generic metabolic health program designed to build healthy habits. It is not a medical treatment and does not promise cure or remission of any illness. If you have a medical condition or are on medication, please consult your doctor before making lifestyle changes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}