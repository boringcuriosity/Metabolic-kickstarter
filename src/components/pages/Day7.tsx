import React, { useState } from 'react';
import { ProgressDots } from '../ProgressDots';
import { InfoSection } from '../InfoSection';
import CheatDaySection from '../../imports/CheatDaySection';
import PodcastSectionDay7 from '../PodcastSectionDay7';
import GoalDay7 from '../../imports/GoalDay7';
import { ResourcesSection } from '../ResourcesSection';
import { resourcesData } from '../../constants/resourcesData';
import Messages from '../../imports/Messages-28-2455';
import StatementStructure from '../../imports/StatementStructure-29-379';
import FeedbackComponent from '../FeedbackComponent';

interface Day7Props {
  onResourceClick?: (resourceId: string) => void;
}

export function Day7({ onResourceClick }: Day7Props) {

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px] overflow-x-hidden">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start min-w-full pb-[10px] pt-[16px] px-[16px] to-[#ffffff] w-full">
        <ProgressDots currentDay={7} totalDays={7} />
      </div>

      {/* Cheat Day Section */}
      <CheatDaySection />

      {/* Podcast Section */}
      <PodcastSectionDay7 />

      {/* Goal of the Day Section */}
      <GoalDay7 />

      {/* Main Content Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">

        <InfoSection 
          title="Why it matters?"
          content="Health isn't about perfection it's about balance. Giving yourself permission to celebrate helps you stay consistent in the long run. This 'reset' reminds you that one treat doesn't undo your progress, it's simply part of living a sustainable lifestyle."
        />

        <StatementStructure />
      </div>

      {/* Messages Section */}
      <Messages />

      {/* Resources Section */}
      <ResourcesSection 
        resources={resourcesData['day7-week1']}
        onResourceClick={onResourceClick}
      />

      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 7" />
    </div>
  );
}