import React, { useState } from 'react';
import { ProgressDots } from '../ProgressDots';
import { InfoSection } from '../InfoSection';

import PodcastSectionDay5 from '../PodcastSectionDay5';
import GoalDay5 from '../../imports/GoalDay5';
import Heading from '../../imports/Heading';
import { ResourcesSection } from '../ResourcesSection';
import { resourcesData } from '../../constants/resourcesData';
import BenefitsCalloutDay5New from '../../imports/BenefitsCallout-28-3145';
import StatementStructureDay5 from '../../imports/StatementStructure-28-3260';
import MessagesDay5 from '../../imports/Messages-28-3289';
import FeedbackComponent from '../FeedbackComponent';

interface Day5Props {
  onResourceClick?: (resourceId: string) => void;
}

export function Day5({ onResourceClick }: Day5Props) {

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px] overflow-x-hidden">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start min-w-full pb-0 pt-[16px] px-[16px] to-[#ffffff] w-full">
        <ProgressDots currentDay={5} totalDays={7} />
      </div>

      {/* Podcast Section */}
      <PodcastSectionDay5 />

      {/* Goal of the Day Section */}
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0 w-full">
        <Heading />
        <GoalDay5 />
      </div>

      {/* Main Content Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">

        <InfoSection 
          title="Why it matters?"
          content="Stress isn't just a mental hurdle it directly impacts your metabolism, sleep, and appetite control. Chronic stress keeps cortisol levels high, which can make fat loss harder and increase cravings."
        />

        <BenefitsCalloutDay5New />

        <StatementStructureDay5 />
      </div>

      {/* Messages Section */}
      <MessagesDay5 />

      {/* Resources Section */}
      <ResourcesSection 
        resources={resourcesData['day5-week1']}
        onResourceClick={onResourceClick}
      />

      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 5" />
    </div>
  );
}