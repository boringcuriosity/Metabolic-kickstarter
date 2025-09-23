import React from 'react';

interface ThemeCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  backgroundColor?: string;
  textColor?: string;
  onPlayClick?: () => void;
}

export function ThemeCard({ 
  title, 
  subtitle, 
  imageUrl, 
  backgroundColor = "#2d3282",
  textColor = "white",
  onPlayClick 
}: ThemeCardProps) {
  return (
    <div className={`h-[195px] relative shrink-0 w-[160px]`}>
      <div 
        className="absolute bg-gradient-to-b from-[#2d3282] h-[33px] left-0 rounded-tl-[16px] rounded-tr-[16px] to-[#8098f9] top-[28px] w-[160px]" 
        style={{ background: `linear-gradient(to bottom, ${backgroundColor}, #8098f9)` }}
      />
      <div 
        className="absolute bg-center bg-cover bg-no-repeat left-0 size-[160px] top-[-6px]"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="absolute left-0 overflow-clip rounded-[16px] shadow-[0px_4px_9px_0px_rgba(7,47,141,0.48)] size-[160px] top-[35px]">
        <div 
          className="absolute bg-center bg-cover bg-no-repeat left-0 size-[160px] top-0"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="absolute bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[10px] items-center justify-center left-1/2 overflow-clip px-[12px] py-[8px] rounded-[12px] top-[92px] translate-x-[-50%] w-[152px]">
          <div 
            className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[18px] tracking-[0.25px] w-[136px]"
            style={{ fontVariationSettings: "'wdth' 100", color: textColor }}
          >
            <p className="leading-[24px]">{title}</p>
          </div>
        </div>
        <div 
          className="absolute inset-[7.5%_7.33%_82.69%_78.75%] cursor-pointer"
          onClick={onPlayClick}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 16">
            <g>
              <path fill="white" fillOpacity="0.25" d="M5.77298 0.464215C6.60065 -0.235756 7.839 -0.132495 8.53897 0.695174L11.208 3.84978L13.8581 0.71094C14.5573 -0.117518 15.7957 -0.221569 16.6241 0.477614C17.4526 1.1768 17.5566 2.41515 16.8574 3.24361L12.6986 8.17021C11.9994 8.99867 10.7611 9.10272 9.93261 8.40353C9.7789 8.27347 9.65041 8.12528 9.54715 7.96448L5.54281 3.231C4.84284 2.40333 4.9461 1.16498 5.77377 0.465004L5.77298 0.464215Z" />
              <path fill="white" fillOpacity="0.25" d="M20.5384 4.03024C21.3424 4.75701 21.4047 5.99851 20.6779 6.80253L17.9064 9.86727L21.37 12.076C22.2836 12.6585 22.5524 13.8724 21.9699 14.786C21.3874 15.7004 20.1734 15.9684 19.2598 15.3859L13.824 11.9199C12.9104 11.3374 12.6416 10.1235 13.2242 9.20987C13.3322 9.0404 13.4622 8.89299 13.608 8.76923L17.7661 4.17054C18.4929 3.36652 19.7344 3.30425 20.5384 4.03102V4.03024Z" />
              <path fill="white" fillOpacity="0.25" d="M1.73925 4.03044C0.935232 4.75721 0.872959 5.99871 1.59973 6.80273L4.37124 9.86747L0.907643 12.0762C-0.00594637 12.6587 -0.274742 13.8726 0.30778 14.7862C0.890301 15.7006 2.10422 15.9686 3.01781 15.3861L8.45362 11.9201C9.36721 11.3376 9.63601 10.1237 9.05348 9.21007C8.94549 9.04059 8.81543 8.89319 8.6696 8.76943L4.51155 4.17074C3.78478 3.36672 2.54328 3.30445 1.73925 4.03122V4.03044Z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}