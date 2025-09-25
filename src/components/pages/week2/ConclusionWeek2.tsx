import React from 'react';
import KairasResponse from '../../../imports/KairasResponse';
import NextStepsWeek2 from '../../../imports/NextStepsWeek2';
import Poster from '../../../imports/Poster-16-71';
import Frame7 from '../../../imports/Frame7';

interface ConclusionWeek2Props {
  onUnlockWeek3?: () => void;
}

export function ConclusionWeek2({ onUnlockWeek3 }: ConclusionWeek2Props) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Certificate Section */}
      <div className="w-full px-4 pt-[32px] pb-[0px] pr-[16px] pl-[16px]">
        <div className="w-full">
          <Frame7 />
        </div>
      </div>

      {/* Kaira's Response Section */}
      <div className="w-full px-4 pb-[32px] pt-[0px] pr-[0px] pl-[0px]">
        <div className="w-full">
          <KairasResponse />
        </div>
      </div>

      {/* Next Steps Section */}
      <div className="w-full px-4 pb-[24px] pt-[0px] pr-[0px] pl-[0px]">
        <div className="w-full">
          <NextStepsWeek2 />
        </div>
      </div>

    </div>
  );
}
