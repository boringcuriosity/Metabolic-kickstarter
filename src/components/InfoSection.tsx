import React from 'react';

interface InfoSectionProps {
  title: string;
  content: string;
}

export function InfoSection({ title, content }: InfoSectionProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-[8px] items-start justify-start leading-[0] px-[16px] py-0 relative text-[14px] tracking-[0.25px] w-full">
          <div className="relative shrink-0 text-[#667085] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">{title}</p>
          </div>
          <div className="relative shrink-0 text-[#101828] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5]">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}