import React, { useState } from 'react';
import { ProgressDots } from '../../ProgressDots';
import { InfoSection } from '../../InfoSection';
import CheatDaySection from '../../../imports/CheatDaySection';
import PodcastSectionDay7Week2 from '../../../imports/PodcastSectionDay7Week2';
import GoalDay7Week2 from '../../../imports/GoalDay7Week2';
import AllResourcesDay7 from '../../../imports/AllResourcesDay7';
import Messages from '../../../imports/Messages-28-2455';
import { HowToAchieveDay7Week2 } from '../../HowToAchieveDay7Week2';
import FeedbackComponent from '../../FeedbackComponent';

interface Day7Week2Props {
  onResourceClick?: (resourceId: string) => void;
}

export function Day7Week2({ onResourceClick }: Day7Week2Props) {

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px] overflow-x-hidden">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start min-w-full pb-[10px] pt-[16px] px-[16px] to-[#ffffff] w-full pr-[16px] pl-[16px]">
        <ProgressDots currentDay={7} totalDays={7} />
      </div>

      {/* Cheat Day Section */}
      <CheatDaySection />

      {/* Podcast Section */}
      <PodcastSectionDay7Week2 />

      {/* Goal of the Day Section */}
        <GoalDay7Week2 />

      {/* Main Content Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">

        <InfoSection 
          title="Why it matters?"
          content={`Health isn't about perfection — it's about balance. Giving yourself permission to celebrate helps you stay consistent in the long run. This "reset" reminds you that one treat doesn't undo your progress, it's simply part of living a sustainable lifestyle.`}
        />

        <HowToAchieveDay7Week2 />
      </div>

      {/* Messages Section */}
      <Messages />

      {/* Resources Section */}
      <AllResourcesDay7 />

      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 7 - Week 2" />
    </div>
  );
}
