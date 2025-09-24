import React from "react";
import imgImage18 from "figma:asset/03c41d1f5b8bff513caffcc2167c89fb71433e5c.png";

function IconAndText() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-start relative shrink-0 w-full" data-name="icon and text">
      <div className="object-cover rounded-[21px] shrink-0 size-[42px]" data-name="icon" />
      <div className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#101828] text-[0px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.5] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Congratulations on starting your Metabolic Journey!
        </p>
      </div>
    </div>
  );
}

function IconAndText1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-start relative shrink-0 w-full" data-name="icon and text">
      <div className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#101828] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5]">{`You've taken the first step toward building a healthier metabolic mindset.`}</p>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="bg-white mb-[-92px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-[358px]" data-name="message">
      <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-start overflow-clip p-[16px] relative w-[358px]">
        <div className="absolute h-[131px] left-0 top-[-38px] w-[356.088px]" data-name="Screen Recording 2025-06-11 at 1.28.23 PM 1" />
        <IconAndText />
        <IconAndText1 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#455ce7] border-solid inset-0 pointer-events-none rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px]" />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start pb-[92px] pt-0 px-0 relative size-full">
      <div className="aspect-[780/540] bg-center bg-cover bg-no-repeat mb-[-92px] shrink-0 w-full" data-name="image 18" style={{ backgroundImage: `url('${imgImage18}')` }} />
      <Message />
    </div>
  );
}