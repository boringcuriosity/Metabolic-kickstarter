import React, { useState } from 'react';
import { ProgressDots } from '../ProgressDots';
import { InfoSection } from '../InfoSection';
import { TrackingButton } from '../TrackingButton';
import PodcastSectionDay4 from '../PodcastSectionDay4';
import GoalDay4 from '../../imports/GoalDay4';
import Heading from '../../imports/Heading';
import { ResourcesSection } from '../ResourcesSection';
import { resourcesData } from '../../constants/resourcesData';
import BenefitsCalloutDay4New from '../../imports/BenefitsCallout-28-3107';
import StatementStructureDay4 from '../../imports/StatementStructure-28-3048';
import { RecommendedProductDay4 } from '../RecommendedProductDay4';
import FeedbackComponent from '../FeedbackComponent';

interface Day4Props {
  onResourceClick?: (resourceId: string) => void;
  onProductClick?: () => void;
}

export function Day4({ onResourceClick, onProductClick }: Day4Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px] mx-[0px] my-[8px] m-[0px] overflow-x-hidden">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start min-w-full pb-[0px] pt-[8px] px-[16px] to-[#ffffff] w-full">
        <ProgressDots currentDay={4} totalDays={7} />
      </div>

      {/* Podcast Section */}
      <PodcastSectionDay4 />

      {/* Goal of the Day Section */}
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0 w-full">
        <Heading />
        <GoalDay4 />
      </div>

      {/* Main Content Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">
        <InfoSection 
          title="Why it matters?"
          content="Your body's repair, hormone balance, and metabolic efficiency all happen when you sleep well. A consistent bedtime and wake-up time trains your internal clock, making it easier to fall asleep, wake up refreshed, and keep your metabolism running smoothly."
        />

        <BenefitsCalloutDay4New />

        <StatementStructureDay4 />
      </div>

      {/* Resources Section */}
      <ResourcesSection 
        resources={resourcesData['day4-week1']}
        onResourceClick={onResourceClick}
      />


      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 4" />
    </div>
  );
}