import React from "react";
import svgPaths from "./svg-gxe2mrrb58";

function Warning() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Warning">
          <path d={svgPaths.p2a6fe00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconForGoal() {
  return (
    <div className="bg-[#f97066] overflow-clip relative rounded-[24px] shrink-0 size-[24px]" data-name="icon for goal">
      <Warning />
    </div>
  );
}

function RedoTask() {
  return (
    <div className="bg-gradient-to-r from-[#fef3f2] relative rounded-[16px] shrink-0 to-[#fee4e2] w-full" data-name="redo task">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start justify-start px-[16px] py-[12px] relative w-full">
          <IconForGoal />
          <div className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative self-stretch shrink-0 text-[#101828] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">A cheat day is not a license to overindulge — it’s a celebration of balance. Savor it, then continue with your new lifestyle.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Messages() {
  return (
    <div className="relative size-full" data-name="messages">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-start px-[16px] py-0 relative size-full">
          <RedoTask />
        </div>
      </div>
    </div>
  );
}