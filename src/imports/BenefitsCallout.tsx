import imgChatGptImageAug182025100240Pm1 from "figma:asset/40f7cf7546bd9e0efe9124728ce832d5803d15d1.png";
import imgChatGptImageAug182025100409Pm1 from "figma:asset/03d14d79726ef0cb6587b4ac134f69ea8f71b7e5.png";

function InfoIcon() {
  return (
    <div className="bg-[#fef1c7] overflow-clip relative rounded-[100px] shrink-0 size-[60px]" data-name="info icon">
      <div className="absolute bg-center bg-cover bg-no-repeat left-0 mix-blend-darken size-[60px] top-0" data-name="ChatGPT Image Aug 18, 2025, 10_02_40 PM 1" style={{ backgroundImage: `url('${imgChatGptImageAug182025100240Pm1}')` }} />
    </div>
  );
}

function InfoCard() {
  return (
    <div className="flex-1 h-full bg-[#fffbee] relative rounded-[16px]" data-name="info card">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-start p-[16px] relative size-full">
          <InfoIcon />
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#101828] text-[14px] text-center tracking-[0.25px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5]">Drinking ~500 ml water increases resting energy expenditure by ~24–30% for about an hour</p>
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
      <div className="absolute bg-center bg-cover bg-no-repeat left-[3px] mix-blend-darken size-[54px] top-[3px]" data-name="ChatGPT Image Aug 18, 2025, 10_04_09 PM 1" style={{ backgroundImage: `url('${imgChatGptImageAug182025100409Pm1}')` }} />
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
            <p className="leading-[1.5]">Water is essential for nutrient transport, digestion, and maintaining body temperature</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7c144] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function BenefitsCallout() {
  return (
    <div className="flex flex-row gap-2 items-stretch h-auto relative shrink-0 w-full" data-name="benefits callout">
      <InfoCard />
      <InfoCard1 />
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