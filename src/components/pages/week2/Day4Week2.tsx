import React, { useState } from 'react';
import { ProgressDots } from '../../ProgressDots';
import { InfoSection } from '../../InfoSection';
import { TrackingButton } from '../../TrackingButton';
import PodcastSectionDay4Week2 from '../../../imports/PodcastSectionDay4Week2';
import GoalDay4Week2 from '../../../imports/GoalDay4Week2';
import Heading from '../../../imports/Heading';
import { ResourcesSection } from '../../ResourcesSection';
import { resourcesData } from '../../../constants/resourcesData';
import BenefitsCalloutDay4Week2 from '../../BenefitsCalloutDay4Week2';
import { HowToAchieveDay4Week2 } from '../../HowToAchieveDay4Week2';
import { RecommendedProductDay4 } from '../../RecommendedProductDay4';
import FeedbackComponent from '../../FeedbackComponent';

interface Day4Week2Props {
  onResourceClick?: (resourceId: string) => void;
  onProductClick?: () => void;
}

export function Day4Week2({ onResourceClick, onProductClick }: Day4Week2Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px] mx-[0px] my-[8px] m-[0px] overflow-x-hidden">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start min-w-full pb-[0px] pt-[8px] px-[16px] to-[#ffffff] w-full">
        <ProgressDots currentDay={4} totalDays={7} />
      </div>

      {/* Podcast Section */}
      <PodcastSectionDay4Week2 />

      {/* Goal of the Day Section */}
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0 w-full">
        <Heading />
        <GoalDay4Week2 />
      </div>

      {/* Main Content Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">
        <InfoSection 
          title="Why it matters?"
          content="Your phone screen tricks your brain into thinking it's still daytime, so it refuses to release the sleepy hormone melatonin. Give your brain 30 minutes of darkness and it finally says 'okay, time to sleep' and lets you rest properly"
        />

        <BenefitsCalloutDay4Week2 />

        <HowToAchieveDay4Week2 />
      </div>

      {/* Resources Section */}
      <ResourcesSection 
        resources={resourcesData['day4-week2']}
        onResourceClick={onResourceClick}
      />


      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 4 - Week 2" />
    </div>
  );
}
