import React, { useState } from 'react';
import { ProgressDots } from '../../ProgressDots';
import { InfoSection } from '../../InfoSection';
import PodcastSectionDay6Week2 from '../../../imports/PodcastSectionDay6Week2';
import GoalDay6Week2 from '../../../imports/GoalDay6Week2';
import Heading from '../../../imports/Heading';
import { ResourcesSection } from '../../ResourcesSection';
import { resourcesData } from '../../../constants/resourcesData';
import BenefitsCalloutDay6Week2 from '../../BenefitsCalloutDay6Week2';
import { HowToAchieveDay6Week2 } from '../../HowToAchieveDay6Week2';
import MessagesDay6 from '../../../imports/Messages-28-3627';
import FeedbackComponent from '../../FeedbackComponent';

interface Day6Week2Props {
  onResourceClick?: (resourceId: string) => void;
}

export function Day6Week2({ onResourceClick }: Day6Week2Props) {

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px] overflow-x-hidden">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start min-w-full pb-0 pt-[16px] px-[16px] to-[#ffffff] w-full">
        <ProgressDots currentDay={6} totalDays={7} />
      </div>

      {/* Podcast Section */}
      <PodcastSectionDay6Week2 />

      {/* Goal of the Day Section */}
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0 w-full">
        <Heading />
        <GoalDay6Week2 />
      </div>

      {/* Main Content Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">

        <InfoSection 
          title="Why it matters?"
          content="Short sprints make your body panic and say 'we need more energy fast.' So during rest, it digs into your fat stores to pay back that energy debt. Your metabolism stays fired up even after you stop, burning fat while you catch your breath."
        />

        <BenefitsCalloutDay6Week2 />

        <HowToAchieveDay6Week2 />
      </div>

      {/* Messages Section */}
      <MessagesDay6 />

      {/* Resources Section */}
      <ResourcesSection 
        resources={resourcesData['day6-week2']}
        onResourceClick={onResourceClick}
      />

      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 6 - Week 2" />
    </div>
  );
}
