import React from "react";
import imgChatGptImageAug182025062236Pm1 from "figma:asset/340724327e3194ffd1e927f0ba234153bcf26742.png";
import imgChatGptImageAug182025062358Pm1 from "figma:asset/43545c7940bab02e8dabbb94ebb0e37b547ec925.png";

function InfoIcon() {
  return (
    <div className="bg-[#fef1c7] overflow-clip relative rounded-[100px] shrink-0 size-[60px]" data-name="info icon">
      <div className="absolute bg-center bg-cover bg-no-repeat left-1/2 size-[60px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="ChatGPT Image Aug 18, 2025, 06_22_36 PM 1" style={{ backgroundImage: `url('${imgChatGptImageAug182025062236Pm1}')` }} />
    </div>
  );
}

function InfoCard() {
  return (
    <div className="flex-1 h-full bg-[#fffbee] relative rounded-[16px]" data-name="info card">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-start p-[16px] relative w-full h-full">
          <InfoIcon />
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#101828] text-[14px] text-center tracking-[0.25px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5]">Stabilise blood glucose levels by slowing gastric emptying</p>
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
      <div className="absolute bg-center bg-cover bg-no-repeat left-1/2 size-[60px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="ChatGPT Image Aug 18, 2025, 06_23_58 PM 1" style={{ backgroundImage: `url('${imgChatGptImageAug182025062358Pm1}')` }} />
    </div>
  );
}

function InfoCard1() {
  return (
    <div className="flex-1 h-full bg-[#fffbee] relative rounded-[16px]" data-name="info card">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-start p-[16px] relative w-full h-full">
          <InfoIcon1 />
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#101828] text-[14px] text-center tracking-[0.25px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5]">Protein provides essential amino acids for muscle protein synthesis.</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7c144] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function MainCards() {
  return (
    <div className="flex flex-row gap-2 items-stretch h-auto relative shrink-0 w-full" data-name="main cards">
      <InfoCard />
      <InfoCard1 />
    </div>
  );
}

export default function BenefitsCalloutDay1() {
  return (
    <div className="relative size-full" data-name="benefits callout day 1">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-0 relative size-full">
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667085] text-[14px] tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">How it helps?</p>
          </div>
          <MainCards />
        </div>
      </div>
    </div>
  );
}