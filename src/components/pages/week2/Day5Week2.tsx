import React, { useState } from 'react';
import { ProgressDots } from '../../ProgressDots';
import { InfoSection } from '../../InfoSection';

import PodcastSectionDay5Week2 from '../../../imports/PodcastSectionDay5Week2';
import GoalDay5Week2 from '../../../imports/GoalDay5Week2';
import Heading from '../../../imports/Heading';
import AllResourcesDay5 from '../../../imports/AllResourcesDay5';
import BenefitsCalloutDay5Week2 from '../../BenefitsCalloutDay5Week2';
import StatementStructureDay5 from '../../../imports/StatementStructure-28-3260';
import MessagesDay5 from '../../../imports/Messages-28-3289';
import FeedbackComponent from '../../FeedbackComponent';

interface Day5Week2Props {
  onResourceClick?: (resourceId: string) => void;
}

export function Day5Week2({ onResourceClick }: Day5Week2Props) {

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px] overflow-x-hidden">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start min-w-full pb-0 pt-[16px] px-[16px] to-[#ffffff] w-full">
        <ProgressDots currentDay={5} totalDays={7} />
      </div>

      {/* Podcast Section */}
      <PodcastSectionDay5Week2 />

      {/* Goal of the Day Section */}
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0 w-full">
        <Heading />
        <GoalDay5Week2 />
      </div>

      {/* Main Content Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">

        <InfoSection 
          title="Why it matters?"
          content="Stress keeps your body in panic mode, holding onto fat and keeping you awake at night. Just 10 minutes of mindfulness tells your body 'you can relax now' so it finally starts burning fat and letting you sleep."
        />

        <BenefitsCalloutDay5Week2 />

        <StatementStructureDay5 />
      </div>

      {/* Messages Section */}
      <MessagesDay5 />

      {/* Resources Section */}
      <AllResourcesDay5 />

      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 5 - Week 2" />
    </div>
  );
}
