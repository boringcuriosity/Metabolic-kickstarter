import React from "react";
import iconPillow from "../assets/Icon type=pillow.png";
import iconLotus from "../assets/Icon type=lotus.png";

function InfoIcon() {
  return (
    <div className="bg-[#fef1c7] overflow-clip relative rounded-[100px] shrink-0 size-[60px]" data-name="info icon">
      <div className="absolute bg-center bg-cover bg-no-repeat left-[4px] size-[52px] top-[4px]" data-name="Pillow Icon" style={{ backgroundImage: `url('${iconPillow}')` }} />
    </div>
  );
}

function InfoCard() {
  return (
    <div className="basis-0 bg-[#fffbee] grow h-full min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="info card">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-start p-[16px] relative size-full">
          <InfoIcon />
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#101828] text-[14px] text-center tracking-[0.25px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5]">Better sleep quality by calming your nervous system.</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7c144] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function InfoIcon1() {
  return (
    <div className="bg-[#fef1c7] overflow-clip relative rounded-[100px] shrink-0 size-[60px]" data-name="info icon">
      <div className="absolute bg-center bg-cover bg-no-repeat left-[6px] size-[49px] top-[5px]" data-name="Lotus Icon" style={{ backgroundImage: `url('${iconLotus}')` }} />
    </div>
  );
}

function InfoCard1() {
  return (
    <div className="basis-0 bg-[#fffbee] grow h-full min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="info card">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-start p-[16px] relative size-full">
          <InfoIcon1 />
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#101828] text-[14px] text-center tracking-[0.25px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5]">{`Improved focus & mood through reduced stress hormone levels.`}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7c144] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function BenefitsCallout() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="benefits callout">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <InfoCard />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <InfoCard1 />
      </div>
    </div>
  );
}

export default function BenefitsCallout1() {
  return (
    <div className="relative size-full" data-name="benefits callout">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-0 relative size-full">
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667085] text-[14px] tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">How it helps?</p>
          </div>
          <BenefitsCallout />
        </div>
      </div>
    </div>
  );
}