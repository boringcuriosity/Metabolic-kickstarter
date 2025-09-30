import React, { useState } from 'react';
import { ProgressDots } from '../../ProgressDots';
import { InfoSection } from '../../InfoSection';
import PodcastSectionDay3Week2 from '../../../imports/PodcastSectionDay3Week2';
import GoalDay3Week2 from '../../../imports/GoalDay3Week2';
import { ResourcesSection } from '../../ResourcesSection';
import { resourcesData } from '../../../constants/resourcesData';
import BenefitsCalloutDay3Week2 from '../../BenefitsCalloutDay3Week2';
import { HowToAchieveDay3Week2 } from '../../HowToAchieveDay3Week2';

import { RecommendedProductDay3 } from '../../RecommendedProductDay3';
import FeedbackComponent from '../../FeedbackComponent';

interface Day3Week2Props {
  onResourceClick?: (resourceId: string) => void;
  onProductClick?: () => void;
}

export function Day3Week2({ onResourceClick, onProductClick }: Day3Week2Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px] mx-[0px] my-[8px] m-[0px] overflow-x-hidden">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start min-w-full pb-[0px] pt-[8px] px-[16px] to-[#ffffff] w-full">
        <ProgressDots currentDay={3} totalDays={7} />
      </div>

      {/* Podcast Section */}
      <PodcastSectionDay3Week2 />

      {/* Goal of the Day Section */}
        <GoalDay3Week2 />

      {/* Main Content Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">
        <InfoSection 
          title="Why it matters?"
          content="When you start jogging your body uses quick energy from carbs. As you keep going it gradually begins to tap into fat stores, almost like opening a hidden energy vault."
        />

        <BenefitsCalloutDay3Week2 />

        <HowToAchieveDay3Week2 />
      </div>

      {/* Resources Section */}
      <ResourcesSection 
        resources={resourcesData['day3-week2']}
        onResourceClick={onResourceClick}
      />


      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 3 - Week 2" />
    </div>
  );
}
