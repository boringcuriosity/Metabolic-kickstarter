import React from "react";
import svgPaths from "./svg-p3q6tipz96";
import imgImage24 from "figma:asset/f7bf84074dbd7abe82a99264e1b917609d271890.png";

function LeftFiller() {
  return (
    <div className="h-[25px] relative shrink-0 w-[16px]" data-name="left filler">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 25">
        <g id="left filler">
          <path d={svgPaths.p26329580} fill="var(--fill-0, #3538CD)" id="Vector 36" />
          <path d={svgPaths.p1bf7800} fill="var(--fill-0, #6172F3)" id="Vector 34" />
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#6172f3] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[4px] relative shrink-0" data-name="tag">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-nowrap text-white tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Week 1 Reward
        </p>
      </div>
    </div>
  );
}

function RightFIller() {
  return (
    <div className="h-[25.047px] relative shrink-0 w-[15.669px]" data-name="Right FIller">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 26">
        <g id="Right FIller">
          <path d={svgPaths.p1d9b61c0} fill="var(--fill-0, #3538CD)" id="Vector 35" />
          <path d={svgPaths.p1eba8d00} fill="var(--fill-0, #6172F3)" id="Vector 33" />
        </g>
      </svg>
    </div>
  );
}

function NewTagDesignRed() {
  return (
    <div className="absolute content-stretch flex items-center justify-start top-0 translate-x-[-50%]" data-name="New Tag Design/Red" style={{ left: "calc(50% - 0.165px)" }}>
      <LeftFiller />
      <Tag />
      <RightFIller />
    </div>
  );
}

export default function Poster() {
  return (
    <div className="relative size-full" data-name="poster">
      <div className="absolute bg-center bg-cover bg-no-repeat h-[164px] left-1/2 top-[8px] translate-x-[-50%] w-[382px]" data-name="image 24" style={{ backgroundImage: `url('${imgImage24}')` }} />
      <NewTagDesignRed />
    </div>
  );
}