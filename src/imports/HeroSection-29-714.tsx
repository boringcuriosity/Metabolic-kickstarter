import imgImage25 from "figma:asset/66510bae6d71644ddcd1542c20c23e2bc24e6738.png";
import imgImage26 from "figma:asset/aa875488b979a1c01acefe0c660c7c262a7ed0c8.png";
import imgImage18 from "figma:asset/03c41d1f5b8bff513caffcc2167c89fb71433e5c.png";

function IconAndText() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-start relative shrink-0 w-full" data-name="icon and text">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[42px]" data-name="image 25" style={{ backgroundImage: `url('${imgImage25}')` }} />
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
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="message">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-start p-[16px] relative w-full">
          <div className="absolute bg-center bg-cover bg-no-repeat h-[93px] left-0 top-[4px] w-[356.5px]" data-name="image 26" style={{ backgroundImage: `url('${imgImage26}')` }} />
          <IconAndText />
          <IconAndText1 />
        </div>
      </div>
      <div 
  aria-hidden="true" 
  className="absolute inset-0 pointer-events-none rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] p-1"
  style={{
    background: 'linear-gradient(to bottom, #455CE7, #44D7E7)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    maskComposite: 'exclude'
  }}
/>
    </div>
  );
}

function Frame11() {
  return (
    <div className="mb-[-92px] relative shrink-0 w-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-start px-[16px] py-0 relative w-full">
          <Message />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start pb-[92px] pt-0 px-0 relative size-full" data-name="Hero section">
      <div className="aspect-[780/540] bg-center bg-cover bg-no-repeat mb-[-92px] shrink-0 w-full" data-name="image 18" style={{ backgroundImage: `url('${imgImage18}')` }} />
      <Frame11 />
    </div>
  );
}