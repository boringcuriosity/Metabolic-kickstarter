import React from 'react';
import { ProgressDots } from '../ProgressDots';
import { InfoSection } from '../InfoSection';
import PodcastSectionDay2 from '../PodcastSectionDay2';
import GoalDay2 from '../../imports/GoalDay2-3-2503';
import Heading from '../../imports/Heading';
import BenefitsCallout from '../../imports/BenefitsCallout-30-1347';
import StatementStructure from '../../imports/StatementStructure-3-2813';
import { ResourcesSection } from '../ResourcesSection';
import { resourcesData } from '../../constants/resourcesData';
import FeedbackComponent from '../FeedbackComponent';

interface Day2Props {
  onResourceClick?: (resourceId: string) => void;
}

export function Day2({ onResourceClick }: Day2Props) {

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px]">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start min-w-full pb-0 pt-[16px] px-[16px] to-[#ffffff] w-full">
        <ProgressDots currentDay={2} totalDays={7} />
      </div>

      {/* Podcast Section */}
      <PodcastSectionDay2 />

      {/* Goal of the Day Section */}
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0 w-full">
        <Heading />
        <GoalDay2 />
      </div>

      {/* Main Content Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full">

        <InfoSection 
          title="Why it matters?"
          content="Even mild dehydration can slow your metabolism, drain your energy, and make you feel hungrier than you actually are. Water is the simplest, most natural way to boost focus, support digestion, and help your body regulate temperature and burn energy efficiently."
        />

        <BenefitsCallout />

        <StatementStructure />
      </div>

      {/* Resources Section */}
      <ResourcesSection 
        resources={resourcesData['day2-week1']}
        onResourceClick={onResourceClick}
      />

      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 2" />
    </div>
  );
}