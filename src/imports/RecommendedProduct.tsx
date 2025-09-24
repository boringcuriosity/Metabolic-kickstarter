import React from "react";
import svgPaths from "./svg-cn31iqhel4";
import imgImage19 from "figma:asset/bb0a3de378056ad17a9ad9efcf2bb8220092ef36.png";

function LeftFiller() {
  return (
    <div className="h-[25px] relative shrink-0 w-[16px]" data-name="left filler">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 25">
        <g id="left filler">
          <path d={svgPaths.p26329580} fill="var(--fill-0, #B42318)" id="Vector 36" />
          <path d={svgPaths.p1bf7800} fill="var(--fill-0, #F04438)" id="Vector 34" />
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#f04438] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[4px] relative shrink-0" data-name="tag">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-nowrap text-white tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Recommended
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
          <path d={svgPaths.p1d9b61c0} fill="var(--fill-0, #B42318)" id="Vector 35" />
          <path d={svgPaths.p1eba8d00} fill="var(--fill-0, #F04438)" id="Vector 33" />
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

function Poster() {
  return (
    <div className="h-[149px] relative shrink-0 w-[358px]" data-name="poster">
      <div className="absolute bg-center bg-cover bg-no-repeat h-[141px] left-0 top-[8px] w-[358px]" data-name="image 19" style={{ backgroundImage: `url('${imgImage19}')` }} />
      <NewTagDesignRed />
    </div>
  );
}

export default function RecommendedProduct() {
  return (
    <div className="relative size-full" data-name="recommended product">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-start px-[16px] py-0 relative size-full">
          <Poster />
        </div>
      </div>
    </div>
  );
}