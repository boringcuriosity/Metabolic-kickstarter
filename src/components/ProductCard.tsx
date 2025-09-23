import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  badge?: string;
  onViewClick?: () => void;
}

export function ProductCard({ title, description, image, badge = "Recommended", onViewClick }: ProductCardProps) {
  return (
    <div className="h-[149px] relative shrink-0 w-full">
      <div className="absolute h-[141px] left-0 overflow-clip rounded-[16px] top-[8px] w-full">
        <div className="absolute font-['DIN_Condensed:Bold',_sans-serif] leading-[0] left-[99px] not-italic text-[32px] text-nowrap text-white top-[45px] tracking-[2px]">
          <p className="leading-[normal] whitespace-pre">{title}</p>
        </div>
        <div className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[0] left-[99px] opacity-60 text-[14px] text-white top-[83px] tracking-[0.25px] w-[231px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.5]">{description}</p>
        </div>
        <div className="absolute h-[21px] left-[9px] top-[204px] w-[101px]">
          <div className="absolute inset-[-57.14%_-11.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 45">
              <g filter="url(#filter0_f_1_3605)">
                <ellipse cx="62.5" cy="22.5" fill="#A62F19" rx="50.5" ry="10.5" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="45" id="filter0_f_1_3605" width="125" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_1_3605" stdDeviation="6" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div 
          className="absolute right-[16px] size-[22px] top-[16px] cursor-pointer"
          onClick={onViewClick}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g>
              <path fill="white" d="M11 2.0625C9.23233 2.0625 7.50436 2.58668 6.03459 3.56874C4.56483 4.55081 3.41929 5.94665 2.74283 7.57977C2.06637 9.21288 1.88938 11.0099 2.23423 12.7436C2.57909 14.4773 3.4303 16.0698 4.68023 17.3198C5.93017 18.5697 7.52268 19.4209 9.25638 19.7658C10.9901 20.1106 12.7871 19.9336 14.4202 19.2572C16.0533 18.5807 17.4492 17.4352 18.4313 15.9654C19.4133 14.4956 19.9375 12.7677 19.9375 11C19.935 8.6304 18.9926 6.35856 17.317 4.683C15.6414 3.00743 13.3696 2.065 11 2.0625ZM13.5489 11.4864L10.1114 14.9239C10.0475 14.9878 9.9717 15.0385 9.88824 15.073C9.80478 15.1076 9.71533 15.1254 9.625 15.1254C9.53467 15.1254 9.44522 15.1076 9.36176 15.073C9.2783 15.0385 9.20247 14.9878 9.13859 14.9239C9.07472 14.86 9.02405 14.7842 8.98948 14.7007C8.95491 14.6173 8.93712 14.5278 8.93712 14.4375C8.93712 14.3472 8.95491 14.2577 8.98948 14.1743C9.02405 14.0908 9.07472 14.015 9.13859 13.9511L12.0905 11L9.13859 8.04891C9.00959 7.9199 8.93712 7.74494 8.93712 7.5625C8.93712 7.38006 9.00959 7.2051 9.13859 7.07609C9.2676 6.94709 9.44256 6.87462 9.625 6.87462C9.80744 6.87462 9.9824 6.94709 10.1114 7.07609L13.5489 10.5136C13.6128 10.5774 13.6635 10.6533 13.6981 10.7367C13.7327 10.8202 13.7505 10.9097 13.7505 11C13.7505 11.0903 13.7327 11.1798 13.6981 11.2633C13.6635 11.3467 13.6128 11.4226 13.5489 11.4864Z" />
            </g>
          </svg>
        </div>
        <div 
          className="absolute bg-[61.21%_68.32%] bg-no-repeat bg-size-[160.56%_130.86%] h-[144px] left-[-28px] top-[18px] w-[118px]"
          style={{ backgroundImage: `url('${image}')` }}
        />

        {/* Protein measurement widget */}
        <div className="absolute bg-white box-border content-stretch flex gap-[4px] items-start justify-start left-[24px] overflow-clip p-[6px] rounded-[6px] shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.18)] top-[40px] w-[36px]">
          <div className="content-stretch flex flex-col gap-[2px] h-[37px] items-start justify-center relative shrink-0 w-[42px]">
            <div className="bg-[#c7d7fe] overflow-clip relative rounded-[10px] shrink-0 size-[11px]">
              <div className="absolute bg-center bg-cover bg-no-repeat left-0 size-[11px] top-0" />
            </div>
            <div className="content-end flex flex-wrap gap-[1px] items-end justify-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Manrope:Bold',_sans-serif] font-bold justify-center leading-[0] max-w-[42px] relative shrink-0 text-[#101828] text-[0px] text-nowrap">
                <p className="leading-[7px] whitespace-pre">
                  <span className="text-[6px]">Protein </span>
                  <span className="font-['SF_Pro:Regular',_sans-serif] font-normal text-[#475467] text-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    􀅴
                  </span>
                </p>
              </div>
            </div>
            <div className="font-['Manrope:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#475467] text-[0px] text-nowrap">
              <p className="leading-[6px] text-[4px] whitespace-pre">
                <span>Unit: </span>
                <span className="font-['Manrope:Bold',_sans-serif] font-bold">%</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Badge */}
      <div className="absolute content-stretch flex items-center justify-start top-0 translate-x-[-50%]" style={{ left: "calc(50% - 0.165px)" }}>
        <div className="h-[25px] relative shrink-0 w-[16px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 25">
            <g>
              <path fill="#B42318" d="M3.13303 2.17481C5.49312 0.848737 9.36105 0.885573 11 1.06975V7.97632H1.16629C0.838496 6.59502 0.772938 3.50089 3.13303 2.17481Z" />
              <path fill="#F04438" d="M8 0H16V24.9528C11.6 25.352 10.5 23.1229 10.5 21.9584V7.48583C10.5 5.98866 9.9 2.79471 7.5 1.99622C5.1 1.19773 2.83333 2.66163 2 3.49339C3.2 1.09792 6.5 0.166352 8 0Z" />
            </g>
          </svg>
        </div>
        <div className="bg-[#f04438] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[4px] relative shrink-0">
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-nowrap text-white tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              {badge}
            </p>
          </div>
        </div>
        <div className="h-[25px] relative shrink-0 w-[16px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 26">
            <g>
              <path fill="#B42318" d="M12.867 2.1985C10.5069 0.872419 6.63895 0.909255 5 1.09343V8H14.8337C15.1615 6.6187 15.2271 3.52457 12.867 2.1985Z" />
              <path fill="#F04438" d="M8 0H0V25C4.4 25.4 5.5 23.1667 5.5 22V7.5C5.5 6 6.1 2.8 8.5 2C10.9 1.2 13.1667 2.66667 14 3.5C12.8 1.1 9.5 0.166667 8 0Z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}