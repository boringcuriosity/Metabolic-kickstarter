import React from "react";
function InfoCard() {
  return (
    <div className="basis-0 bg-[#fffbee] grow h-full min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="info card">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-start p-[16px] relative size-full">
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#101828] text-[14px] tracking-[0.25px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5]">Unlock Week 2 by heading to the Progress section in GoodFlip.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitsCallout() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="benefits callout">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <InfoCard />
      </div>
    </div>
  );
}

export default function NextSteps() {
  return (
    <div className="relative size-full" data-name="next steps">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-0 relative size-full">
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667085] text-[14px] tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">How to unlock week 2?</p>
          </div>
          <BenefitsCallout />
        </div>
      </div>
    </div>
  );
}