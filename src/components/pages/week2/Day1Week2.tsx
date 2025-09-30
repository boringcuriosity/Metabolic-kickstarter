import React, { useState } from 'react';
import { ProgressDots } from '../../ProgressDots';
import { ThemeCard } from '../../ThemeCard';
import { GoalSection } from '../../GoalSection';
import { InfoSection } from '../../InfoSection';
import { BenefitCards } from '../../BenefitCards';
import { HowToAchieveDay1Week2 } from '../../HowToAchieveDay1Week2';

import { ResourcesSection } from '../../ResourcesSection';
import { resourcesData } from '../../../constants/resourcesData';
import PodcastSectionDay1Week2 from '../../../imports/PodcastSectionDay1Week2';
import BenefitsCalloutDay1Week2 from '../../BenefitsCalloutDay1Week2';
import RecommendedProduct from '../../../imports/RecommendedProduct-3-1829';
import GoalDay1Week2 from '../../../imports/GoalDay1Week2';
import Heading from '../../../imports/Heading';
import FeedbackComponent from '../../FeedbackComponent';

interface Day1Week2Props {
  onResourceClick?: (resourceId: string) => void;
  onProductClick?: () => void;
}

export function Day1Week2({ onResourceClick, onProductClick }: Day1Week2Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px] mx-[0px] my-[8px] m-[0px] overflow-x-hidden max-w-full">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start pb-[0px] pt-[8px] px-[8px] sm:px-[16px] to-[#ffffff] w-full max-w-full">
        <ProgressDots currentDay={1} totalDays={7} />
      </div>

      {/* Podcast Section */}
      <PodcastSectionDay1Week2 />

      {/* Goal of the Day Section */}
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0 w-full">
        <Heading />
        <GoalDay1Week2 />
      </div>

      {/* Main Content Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">

        <InfoSection 
          title="Why it matters?"
          content="Your body stores fat when it doesn't get enough nutrients for long stretches. Fibre-rich vegetables help by keeping your stomach full for longer, slowing down digestion, and preventing sudden hunger spikes."
        />

        <BenefitsCalloutDay1Week2 />

        <HowToAchieveDay1Week2 />
      </div>

      {/* Resources Section */}
      <ResourcesSection 
        resources={resourcesData['day1-week2']}
        onResourceClick={onResourceClick}
      />


      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 1 - Week 2" />
    </div>
  );
}
