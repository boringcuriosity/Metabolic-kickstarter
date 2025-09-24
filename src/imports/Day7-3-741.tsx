import React from "react";
import svgPaths from "./svg-rknsf701v2";

function JourneyStages() {
  return (
    <div className="h-[16px] relative shrink-0 w-[40px]" data-name="journey stages">
      <div className="absolute bottom-[-11.91%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 18">
          <g id="journey stages">
            <g filter="url(#filter0_d_3_515)" id="platform">
              <path d={svgPaths.p2d884400} fill="var(--fill-0, #A6F4C5)" />
            </g>
            <g id="Checkmark">
              <path d={svgPaths.pb808500} fill="var(--fill-0, #12B76A)" id="Shape" />
            </g>
            <line id="Line 1" stroke="var(--stroke-0, #D0D5DD)" x1="36" x2="40" y1="7.5" y2="7.5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.8114" id="filter0_d_3_515" width="33.0756" x="1.46222" y="0.0943177">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.196078 0 0 0 0 0.835294 0 0 0 0 0.513726 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_515" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_515" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function JourneyStages5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[40px]" data-name="journey stages">
      <div className="absolute bottom-[-11.91%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 18">
          <g id="journey stages">
            <g filter="url(#filter0_d_3_755)" id="platform">
              <path d={svgPaths.p2d884400} fill="var(--fill-0, #A6F4C5)" />
            </g>
            <g id="Checkmark">
              <path d={svgPaths.pb808500} fill="var(--fill-0, #12B76A)" id="Shape" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.8114" id="filter0_d_3_755" width="33.0756" x="1.46222" y="0.0943177">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.196078 0 0 0 0 0.835294 0 0 0 0 0.513726 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_755" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_755" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function JourneyStages6() {
  return (
    <div className="h-[30px] relative shrink-0 w-[40px]" data-name="journey stages">
      <div className="absolute bottom-[-6.35%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 32">
          <g id="journey stages">
            <g filter="url(#filter0_d_3_760)" id="platform">
              <path d={svgPaths.p390b20c0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p26669700} stroke="var(--stroke-0, #444CE7)" strokeWidth="0.5" />
            </g>
            <g id="Location">
              <path d={svgPaths.p2e2acb00} fill="var(--fill-0, #444CE7)" id="Shape" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.8114" id="filter0_d_3_760" width="33.0756" x="1.46222" y="14.0943">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.298039 0 0 0 0 0.905882 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_760" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_760" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function UserJourney() {
  return (
    <div className="content-stretch flex items-end justify-start relative shrink-0" data-name="user journey">
      {[...Array(5).keys()].map((_, i) => (
        <JourneyStages key={i} />
      ))}
      <JourneyStages5 />
      <JourneyStages6 />
    </div>
  );
}

export default function Day7() {
  return (
    <div className="bg-gradient-to-b from-[#eef4ff] relative size-full to-[#ffffff]" data-name="day 7">
      <div className="flex flex-col items-center min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-start min-w-inherit pb-0 pt-[16px] px-[16px] relative size-full">
          <UserJourney />
        </div>
      </div>
    </div>
  );
}