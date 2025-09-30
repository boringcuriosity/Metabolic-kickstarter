import React, { useState } from 'react';
import { ProgressDots } from '../ProgressDots';
import { InfoSection } from '../InfoSection';
import PodcastSectionDay6 from '../PodcastSectionDay6';
import GoalDay6 from '../../imports/GoalDay6';
import Heading from '../../imports/Heading';
import { ResourcesSection } from '../ResourcesSection';
import { resourcesData } from '../../constants/resourcesData';
import BenefitsCalloutDay6New from '../../imports/BenefitsCallout-28-3413';
import StatementStructureDay6 from '../../imports/StatementStructure-28-3602';
import MessagesDay6 from '../../imports/Messages-28-3627';
import FeedbackComponent from '../FeedbackComponent';

interface Day6Props {
  onResourceClick?: (resourceId: string) => void;
}

export function Day6({ onResourceClick }: Day6Props) {

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px] overflow-x-hidden">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start min-w-full pb-0 pt-[16px] px-[16px] to-[#ffffff] w-full">
        <ProgressDots currentDay={6} totalDays={7} />
      </div>

      {/* Podcast Section */}
      <PodcastSectionDay6 />

      {/* Goal of the Day Section */}
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0 w-full">
        <Heading />
        <GoalDay6 />
      </div>

      {/* Main Content Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">

        <InfoSection 
          title="Why it matters?"
          content="Giving your body a break from heavy meals lightens the digestive load. With gentler foods, your system can reset, your energy feels steadier, and your cells still get the space to repair and recover."
        />

        <BenefitsCalloutDay6New />

        <StatementStructureDay6 />
      </div>

      {/* Messages Section */}
      <MessagesDay6 />

      {/* Resources Section */}
      <ResourcesSection 
        resources={resourcesData['day6-week1']}
        onResourceClick={onResourceClick}
      />

      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 6" />
    </div>
  );
}