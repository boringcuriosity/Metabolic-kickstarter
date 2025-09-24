import React from "react";
import svgPaths from "./svg-tjs54gy5x3";

function Heading() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[17px] items-center justify-start px-[16px] py-0 relative shrink-0 w-[390px]" data-name="heading">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667085] text-[0px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Goals for the Day
        </p>
      </div>
    </div>
  );
}

function TrackerIcons() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="tracker icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tracker icons">
          <path d={svgPaths.p38446780} fill="url(#paint0_linear_27_514)" id="Shape" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_27_514" x1="3.41658" x2="12.9057" y1="2.44637" y2="13.4106">
            <stop stopColor="#A4BCFD" />
            <stop offset="1" stopColor="#444CE7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconForGoal() {
  return (
    <div className="bg-white overflow-clip relative rounded-[24px] shrink-0 size-[24px]" data-name="icon for goal">
      <TrackerIcons />
    </div>
  );
}

function MainGoal() {
  return (
    <div className="relative shrink-0 w-full" data-name="main goal">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start justify-start p-[16px] relative w-full bg-gradient-to-br from-[#444CE7] to-[#2D3282]">
          <IconForGoal />
          <div className="basis-0 font-['Roboto:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[18px] text-white tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">Boost your meals with fibre</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GoalDay1Week2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative size-full" data-name="goal day 1">
      <Heading />
      <MainGoal />
    </div>
  );
}
