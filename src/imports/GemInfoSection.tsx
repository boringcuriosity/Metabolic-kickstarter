import svgPaths from "./svg-0re2cs0imp";
import imgFoundationGem from "figma:asset/foundation-gem.png";

function GemFrame() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="gem frame">
      <div className="absolute size-[51px] translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% + 0.5px)", left: "calc(50% + 0.5px)" }}>
        <div className="absolute inset-[-49.02%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 101">
            <g filter="url(#filter0_f_1_1133)" id="Ellipse 3368">
              <circle cx="50.5" cy="50.5" fill="var(--fill-0, #32DE9F)" fillOpacity="0.64" r="25.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="101" id="filter0_f_1_1133" width="101" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_1133" stdDeviation="12.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bg-center bg-cover bg-no-repeat left-[11px] size-[58px] top-[11px]" data-name="foundation gem" style={{ backgroundImage: `url('${imgFoundationGem}')` }} />
    </div>
  );
}

function GemName() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start leading-[0] relative shrink-0 text-[#101828] tracking-[0.25px] w-[173px]" data-name="gem name">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">You have unlocked</p>
      </div>
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">The Foundation Gem</p>
      </div>
    </div>
  );
}

function Ribbon() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Ribbon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Ribbon">
          <path d={svgPaths.p75eac80} fill="url(#paint0_linear_1_1128)" id="Shape" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1128" x1="8.5" x2="8.5" y1="1.41667" y2="15.5808">
            <stop stopColor="#8098F9" />
            <stop offset="1" stopColor="#3538CD" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SpecialReward() {
  return (
    <div className="bg-[#eef4ff] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[24px] shrink-0" data-name="special reward">
      <div aria-hidden="true" className="absolute border border-[#444ce7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Ribbon />
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#826e2d] text-[0px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[#2d3282] text-[14px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Top 50%
        </p>
      </div>
    </div>
  );
}

function GemInfoContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="gem info content">
      <GemName />
      <SpecialReward />
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#667085] text-[14px] tracking-[0.25px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5]">{`You're ahead of 50% of the GoodFlip family — only half take this first step to begin their journey`}</p>
      </div>
    </div>
  );
}

export default function GemInfoSection() {
  return (
    <div className="relative size-full" data-name="gem info section">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start justify-start px-[16px] py-0 relative size-full">
          <GemFrame />
          <GemInfoContent />
        </div>
      </div>
    </div>
  );
}