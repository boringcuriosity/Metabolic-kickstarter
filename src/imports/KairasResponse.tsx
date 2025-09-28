import React from "react";
import imgImage20 from "figma:asset/d0ceada5a6e15910cb50f6362519865731987c21.png";

export default function KairasResponse() {
  return (
    <div className="relative size-full" data-name="kaira\'s response">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start justify-start pl-[16px] pr-[40px] py-[8px] relative size-full">
          <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[41.5px]" data-name="image 20" style={{ backgroundImage: `url('${imgImage20}')` }} />
          <div className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#101828] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5]">{`It's okay if you didn't hit every goal what matters is your commitment to the process.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}