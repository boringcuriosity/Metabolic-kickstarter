import React from "react";
import svgPaths from "./svg-zs1u84bjbg";

function Heading() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[17px] items-center justify-start px-[16px] py-0 relative shrink-0 w-full" data-name="heading">
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

function GoalOfTheDay() {
  return (
    <div className="content-stretch flex items-start gap-[8px] relative shrink-0 w-full" data-name="goal of the day">
      <IconForGoal />
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[0.25px] flex-1" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Enjoy a celebratory meal</p>
      </div>
    </div>
  );
}

function OptionalSeparator() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-start pb-0 pt-[4px] px-0 relative shrink-0 w-full" data-name="optional separator">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Continue Previous Habit(s)</p>
      </div>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(68, 76, 231, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 1">
            <line id="Line 2" stroke="var(--stroke-0, #444CE7)" strokeDasharray="7 7" strokeLinecap="round" x1="0.5" x2="201.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Coupon() {
  return (
    <div className="bg-[#6172f3] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[24px] shrink-0" data-name="coupon">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">+ Add protein to 1 meal</p>
      </div>
    </div>
  );
}

function Coupon1() {
  return (
    <div className="bg-[#6172f3] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[24px] shrink-0" data-name="coupon">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">+ Drink 2l water</p>
      </div>
    </div>
  );
}

function Coupon2() {
  return (
    <div className="bg-[#6172f3] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[24px] shrink-0" data-name="coupon">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">+ 10 min light activity</p>
      </div>
    </div>
  );
}

function Coupon3() {
  return (
    <div className="bg-[#6172f3] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[24px] shrink-0" data-name="coupon">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">+ Consistent sleep routine</p>
      </div>
    </div>
  );
}

function ReinforceHabits() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="reinforce habits">
      <Coupon />
      <Coupon1 />
      <Coupon2 />
      <Coupon3 />
    </div>
  );
}

function MainGoal() {
  return (
    <div className="relative shrink-0 w-full" data-name="main goal">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start justify-start p-[16px] relative w-full bg-gradient-to-br from-[#444CE7] to-[#2D3282]">
          <GoalOfTheDay />
          <OptionalSeparator />
          <ReinforceHabits />
        </div>
      </div>
    </div>
  );
}

export default function GoalDay7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative size-full" data-name="goal day 7">
      <Heading />
      <MainGoal />
    </div>
  );
}