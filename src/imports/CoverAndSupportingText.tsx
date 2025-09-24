import React from "react";
import imgFrame5 from "figma:asset/5f57ee5964167f9dceed944478064bb1c4e0c022.png";

function Frame5() {
  return (
    <div className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-[8px] h-[214px] items-center justify-end px-[21px] py-[25px] relative shrink-0 w-[178px]" style={{ backgroundImage: `url('${imgFrame5}')` }}>
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[0.25px] w-[136px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Sleep for Success</p>
      </div>
    </div>
  );
}

export default function CoverAndSupportingText() {
  return (
    <div className="relative size-full" data-name="cover and supporting text">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-start px-[16px] py-0 relative size-full">
          <Frame5 />
          <div className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#667085] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5]">Sleep might be your secret weapon—discover how a simple tweak makes all the difference</p>
          </div>
        </div>
      </div>
    </div>
  );
}