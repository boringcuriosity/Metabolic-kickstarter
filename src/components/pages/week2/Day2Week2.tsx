import React from 'react';
import { ProgressDots } from '../../ProgressDots';
import { InfoSection } from '../../InfoSection';
import PodcastSectionDay2Week2 from '../../../imports/PodcastSectionDay2Week2';
import GoalDay2Week2 from '../../../imports/GoalDay2Week2';
import Heading from '../../../imports/Heading';
import BenefitsCalloutDay2Week2 from '../../BenefitsCalloutDay2Week2';
import StatementStructure from '../../../imports/StatementStructure-3-2813';
import AllResourcesDay2 from '../../../imports/AllResourcesDay2';
import FeedbackComponent from '../../FeedbackComponent';

interface Day2Week2Props {
  onResourceClick?: (resourceId: string) => void;
}

export function Day2Week2({ onResourceClick }: Day2Week2Props) {

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px]">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start min-w-full pb-0 pt-[16px] px-[16px] to-[#ffffff] w-full">
        <ProgressDots currentDay={2} totalDays={7} />
      </div>

      {/* Podcast Section */}
      <PodcastSectionDay2Week2 />

      {/* Goal of the Day Section */}
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0 w-full">
        <Heading />
        <GoalDay2Week2 />
      </div>

      {/* Main Content Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">

        <InfoSection 
          title="Why it matters?"
          content="Your body spends 7 to 8 hours without water while sleeping, so it's thirsty when you wake up. Drinking water first thing is like turning on the lights, it wakes up your metabolism, cleans out waste, and makes you feel sharp and ready"
        />

        <BenefitsCalloutDay2Week2 />

        <StatementStructure />
      </div>

      {/* Resources Section */}
      <AllResourcesDay2 />

      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 2 - Week 2" />
    </div>
  );
}
