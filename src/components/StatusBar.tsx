import React from 'react';

export function StatusBar() {
  return (
    <div className="absolute backdrop-blur-[25px] backdrop-filter bg-white h-[54px] left-0 top-0 w-full z-20">
      <div className="absolute h-[54px] left-0 right-[64.25%] top-1/2 translate-y-[-50%]">
        <div className="absolute font-['Manrope:Regular',_sans-serif] font-normal inset-[33.96%_37.94%_25.3%_38.39%] leading-[0] text-[17px] text-black text-center text-nowrap">
          <p className="leading-[22px] whitespace-pre">9:41</p>
        </div>
      </div>
      <div className="absolute h-[54px] left-[64.25%] right-0 top-1/2 translate-y-[-50%]">
        <div className="absolute bottom-[33.33%] contents top-[42.59%] translate-x-[-50%]" style={{ left: "calc(50% + 24.95px)" }}>
          <div className="absolute bottom-[33.33%] opacity-[0.35] rounded-[4.3px] top-[42.59%] translate-x-[-50%] w-[25px]" style={{ left: "calc(50% + 23.786px)" }}>
            <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4.3px]" />
          </div>
          <div className="absolute bottom-[41.01%] top-[51.45%] translate-x-[-50%] w-[1.328px]" style={{ left: "calc(50% + 37.95px)" }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
              <path fill="black" opacity="0.4" d="M0 0V4.07547C0.804731 3.7303 1.32804 2.92734 1.32804 2.03774C1.32804 1.14813 0.804731 0.345169 0 0" />
            </svg>
          </div>
          <div className="absolute bg-black bottom-[37.04%] rounded-[2.5px] top-[46.3%] translate-x-[-50%] w-[21px]" style={{ left: "calc(50% + 23.786px)" }} />
        </div>
        <div className="absolute bottom-[33.4%] top-[43.77%] translate-x-[-50%] w-[17.142px]" style={{ left: "calc(50% - 4.444px)" }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
            <path clipRule="evenodd" fill="black" fillRule="evenodd" d="M8.5713 2.46628C11.0584 2.46639 13.4504 3.38847 15.2529 5.04195C15.3887 5.1696 15.6056 5.16799 15.7393 5.03834L17.0368 3.77487C17.1045 3.70911 17.1422 3.62004 17.1417 3.52735C17.1411 3.43467 17.1023 3.34603 17.0338 3.28104C12.3028 -1.09368 4.83907 -1.09368 0.108056 3.28104C0.039524 3.34598 0.000639766 3.4346 7.82398e-06 3.52728C-0.000624118 3.61996 0.0370483 3.70906 0.104689 3.77487L1.40255 5.03834C1.53615 5.16819 1.75327 5.1698 1.88893 5.04195C3.69167 3.38836 6.08395 2.46628 8.5713 2.46628ZM8.56795 6.68656C9.92527 6.68647 11.2341 7.19821 12.2403 8.12234C12.3763 8.2535 12.5907 8.25065 12.7234 8.11593L14.0106 6.79663C14.0784 6.72742 14.1161 6.63355 14.1151 6.536C14.1141 6.43844 14.0746 6.34536 14.0054 6.27757C10.9416 3.38672 6.19688 3.38672 3.13305 6.27757C3.06384 6.34536 3.02435 6.43849 3.02345 6.53607C3.02254 6.63366 3.06028 6.72752 3.12822 6.79663L4.41513 8.11593C4.54778 8.25065 4.76215 8.2535 4.89823 8.12234C5.90368 7.19882 7.21152 6.68713 8.56795 6.68656ZM11.0924 9.48011C11.0943 9.58546 11.0572 9.68703 10.9899 9.76084L8.81327 12.2156C8.74946 12.2877 8.66247 12.3283 8.5717 12.3283C8.48093 12.3283 8.39394 12.2877 8.33013 12.2156L6.1531 9.76084C6.08585 9.68697 6.04886 9.58537 6.05085 9.48002C6.05284 9.37467 6.09365 9.27491 6.16364 9.20429C7.55374 7.8904 9.58966 7.8904 10.9798 9.20429C11.0497 9.27497 11.0904 9.37476 11.0924 9.48011Z" />
          </svg>
        </div>
        <div className="absolute bottom-[33.77%] top-[43.59%] translate-x-[-50%] w-[19.2px]" style={{ left: "calc(50% - 30.114px)" }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
            <path clipRule="evenodd" fill="black" fillRule="evenodd" d="M19.2 1.14623C19.2 0.513183 18.7224 0 18.1333 0H17.0667C16.4776 0 16 0.513183 16 1.14623V11.0802C16 11.7132 16.4776 12.2264 17.0667 12.2264H18.1333C18.7224 12.2264 19.2 11.7132 19.2 11.0802V1.14623ZM11.7659 2.44528H12.8326C13.4217 2.44528 13.8992 2.97078 13.8992 3.61902V11.0527C13.8992 11.7009 13.4217 12.2264 12.8326 12.2264H11.7659C11.1768 12.2264 10.6992 11.7009 10.6992 11.0527V3.61902C10.6992 2.97078 11.1768 2.44528 11.7659 2.44528ZM7.43411 5.09433H6.36745C5.77834 5.09433 5.30078 5.62652 5.30078 6.28301V11.0377C5.30078 11.6942 5.77834 12.2264 6.36745 12.2264H7.43411C8.02322 12.2264 8.50078 11.6942 8.50078 11.0377V6.28301C8.50078 5.62652 8.02322 5.09433 7.43411 5.09433ZM2.13333 7.53962H1.06667C0.477563 7.53962 0 8.06421 0 8.71132V11.0547C0 11.7018 0.477563 12.2264 1.06667 12.2264H2.13333C2.72244 12.2264 3.2 11.7018 3.2 11.0547V8.71132C3.2 8.06421 2.72244 7.53962 2.13333 7.53962Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}