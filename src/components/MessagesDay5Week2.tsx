import React from 'react';
import svgPaths from "../imports/svg-xe237yzcds";

interface MessagesDay5Week2Props {
  title?: string;
  content?: string;
}

function TrackerIcons() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="tracker icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tracker icons">
          <path d={svgPaths.p38446780} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconForGoal() {
  return (
    <div className="bg-[#444ce7] overflow-clip relative rounded-[24px] shrink-0 size-[24px]" data-name="icon for goal">
      <TrackerIcons />
    </div>
  );
}

function Content({ title, content }: { title: string; content: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#101828] tracking-[0.25px]" data-name="content">
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">{title}</p>
      </div>
      <div className="font-['Roboto:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100", width: "min-content" }}>
        <p className="leading-[1.2]">{content}</p>
      </div>
    </div>
  );
}

function RedoTask({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-gradient-to-r from-[#e0eaff] relative rounded-[16px] shrink-0 to-[#e0ffff] w-full" data-name="redo task">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start justify-start px-[16px] py-[12px] relative w-full">
          <IconForGoal />
          <Content title={title} content={content} />
        </div>
      </div>
    </div>
  );
}

export function MessagesDay5Week2({ 
  title = "Get Ready for Tomorrow", 
  content = "Tomorrow is your HIIT day. Set aside 20 minutes, find a space to move, and keep water ready."
}: MessagesDay5Week2Props) {
  return (
    <div className="relative size-full" data-name="messages">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-start px-[16px] py-0 relative size-full">
          <RedoTask title={title} content={content} />
        </div>
      </div>
    </div>
  );
}
