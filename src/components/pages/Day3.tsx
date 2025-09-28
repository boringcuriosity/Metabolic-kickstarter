import React, { useState } from 'react';
import { ProgressDots } from '../ProgressDots';
import { InfoSection } from '../InfoSection';
import PodcastSectionDay3 from '../PodcastSectionDay3';
import GoalDay3 from '../../imports/GoalDay3-27-973';
import AllResourcesDay3 from '../../imports/AllResourcesDay3';
import BenefitsCallout from '../../imports/BenefitsCallout-30-1385';
import StatementStructure from '../../imports/StatementStructure-28-2785';

import { RecommendedProductDay3 } from '../RecommendedProductDay3';
import FeedbackComponent from '../FeedbackComponent';

interface Day3Props {
  onResourceClick?: (resourceId: string) => void;
  onProductClick?: () => void;
}

export function Day3({ onResourceClick, onProductClick }: Day3Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px] mx-[0px] my-[8px] m-[0px] overflow-x-hidden">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start min-w-full pb-[0px] pt-[8px] px-[16px] to-[#ffffff] w-full">
        <ProgressDots currentDay={3} totalDays={7} />
      </div>

      {/* Podcast Section */}
      <PodcastSectionDay3 />

      {/* Goal of the Day Section */}
      <GoalDay3 />

      {/* Main Content Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">
        <InfoSection 
          title="Why it matters?"
          content="Even a short burst of light activity like walking, yoga, or stretching wakes up your muscles, improves circulation, and helps regulate blood sugar levels. It's a simple way to tell your body: we're in action mode."
        />

        <BenefitsCallout />

        <StatementStructure />
      </div>

      {/* Resources Section */}
      <AllResourcesDay3 />


      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 3" />
    </div>
  );
}