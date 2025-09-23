import React from 'react';

interface BackNavigationProps {
  onBack?: () => void;
}

export function BackNavigation({ onBack }: BackNavigationProps) {
  return (
    <div className="bg-white flex items-center justify-start px-[16px] w-full h-[38px]">
      <div 
        className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 cursor-pointer"
        onClick={onBack}
      >
        <div className="relative shrink-0 size-[22px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g>
              <path fill="#344054" d="M9.40864 3.44425C9.3937 3.42923 8.93562 3.31441 8.39077 3.18918C7.84585 3.06395 7.39413 2.98063 7.38687 3.00389C7.37967 3.02722 7.32328 3.40541 7.26164 3.84438C7.13779 4.72586 6.83794 5.75506 6.51753 6.39873C5.51882 8.40475 3.72695 9.73301 1.55365 10.0782L1.00023 10.1662L1.00023 11.0523L1.00023 11.9386L1.50183 12.0227C4.78814 12.5741 6.93065 15.0313 7.33145 18.7085C7.3576 18.9486 7.38887 19.145 7.40091 19.145C7.51175 19.145 9.34825 18.7024 9.38298 18.6673C9.40809 18.642 9.38941 18.4169 9.3414 18.1672C8.80997 15.4023 7.28835 13.1525 5.31375 12.2118L4.8401 11.9861L14.5802 11.9685L20.7393 11.9572L20.7393 10.1638L14.5644 10.1526L4.84722 10.1348L5.44521 9.83184C6.99651 9.0459 8.22472 7.5042 8.948 5.43483C9.15411 4.84529 9.4651 3.50124 9.40864 3.44425Z" />
            </g>
          </svg>
        </div>
        <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#344054] text-[16px] text-center text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.2] whitespace-pre">Back</p>
        </div>
      </div>
    </div>
  );
}