import React from 'react';

interface BenefitCard {
  icon: string;
  title: string;
  description: string;
}

interface BenefitCardsProps {
  title: string;
  cards: BenefitCard[];
}

export function BenefitCards({ title, cards }: BenefitCardsProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-0 relative w-full">
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667085] text-[14px] tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">{title}</p>
          </div>
          <div className="flex flex-row gap-2 items-stretch h-auto relative shrink-0 w-full">
            {cards.map((card, index) => (
              <div key={index} className="flex-1 h-full bg-[#fffbee] relative rounded-[16px]">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-start overflow-clip p-[16px] relative w-full h-full">
                  <div className="bg-[#fef1c7] overflow-clip relative rounded-[100px] shrink-0 size-[60px]">
                    <div 
                      className="absolute bg-center bg-cover bg-no-repeat left-1/2 size-[60px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
                      style={{ backgroundImage: `url('${card.icon}')` }}
                    />
                  </div>
                  <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#101828] text-[14px] text-center tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100", width: "min-content" }}>
                    <p className="leading-[1.5]">{card.description}</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e7c144] border-solid inset-0 pointer-events-none rounded-[16px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}