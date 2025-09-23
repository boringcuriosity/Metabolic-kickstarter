import React from 'react';
import svgPaths from '../imports/svg-ubypisumsa';

// Completed step (green with checkmark)
export function CompletedStep() {
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

// Current step (blue with location icon)
export function CurrentStep() {
  return (
    <div className="h-[30px] relative shrink-0 w-[40px]" data-name="journey stages">
      <div className="absolute bottom-[-6.35%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 32">
          <g id="journey stages">
            <g filter="url(#filter0_d_3_502)" id="platform">
              <path d={svgPaths.p390b20c0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p26669700} stroke="var(--stroke-0, #444CE7)" strokeWidth="0.5" />
            </g>
            <g id="Location">
              <path d={svgPaths.p2e2acb00} fill="var(--fill-0, #444CE7)" id="Shape" />
            </g>
            <line id="Line 1" stroke="var(--stroke-0, #D0D5DD)" x1="36" x2="40" y1="21.5" y2="21.5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.8114" id="filter0_d_3_502" width="33.0756" x="1.46222" y="14.0943">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.298039 0 0 0 0 0.905882 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_502" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_502" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// Upcoming step with line (gray)
export function UpcomingStepWithLine() {
  return (
    <div className="h-[16px] relative shrink-0 w-[40px]" data-name="journey stages">
      <div className="absolute bottom-[-11.91%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 18">
          <g id="journey stages">
            <g filter="url(#filter0_d_3_511)" id="platform">
              <path d={svgPaths.p2d884400} fill="var(--fill-0, #D0D5DD)" />
            </g>
            <line id="Line 1" stroke="var(--stroke-0, #D0D5DD)" x1="36" x2="40" y1="7.5" y2="7.5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.8114" id="filter0_d_3_511" width="33.0756" x="1.46222" y="0.0943177">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.596078 0 0 0 0 0.635294 0 0 0 0 0.701961 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_511" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_511" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// Upcoming step without line (gray, for last steps)
export function UpcomingStepWithoutLine() {
  return (
    <div className="h-[16px] relative shrink-0 w-[40px]" data-name="journey stages">
      <div className="absolute bottom-[-11.91%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 18">
          <g id="journey stages">
            <g filter="url(#filter0_d_3_508)" id="platform">
              <path d={svgPaths.p2d884400} fill="var(--fill-0, #D0D5DD)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.8114" id="filter0_d_3_508" width="33.0756" x="1.46222" y="0.0943177">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.596078 0 0 0 0 0.635294 0 0 0 0 0.701961 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_508" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_508" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}