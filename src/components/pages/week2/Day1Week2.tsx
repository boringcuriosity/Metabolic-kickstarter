import React, { useState } from 'react';
import { ProgressDots } from '../../ProgressDots';
import { ThemeCard } from '../../ThemeCard';
import { GoalSection } from '../../GoalSection';
import { InfoSection } from '../../InfoSection';
import { BenefitCards } from '../../BenefitCards';
import { ActionChecklist } from '../../ActionChecklist';

import { ResourceCard } from '../../ResourceCard';
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

  const actionItems = [
    {
      id: "cooking",
      title: "Already cooking or ordering?",
      description: "Swap or add one ingredient for a protein source.",
      subItems: [
        {
          category: "Veg",
          items: "paneer, tofu, tempeh, sprouted moong, quinoa, amaranth"
        },
        {
          category: "Non-veg",
          items: "grilled chicken, boiled eggs, fish, prawns, turkey, lean mutton"
        }
      ]
    },
    {
      id: "no-time",
      title: "No time?",
      description: "Keep quick grab-and-go protein options ready.",
      subItems: [
        {
          category: "Veg",
          items: "Roasted chana, Greek yogurt cups, paneer sandwich, hummus with whole-grain crackers"
        },
        {
          category: "Non-veg",
          items: "Boiled eggs, smoked salmon, canned tuna."
        }
      ]
    }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start w-full p-[0px] mx-[0px] my-[8px] m-[0px]">
      {/* Progress Dots */}
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#eef4ff] gap-[8px] items-center justify-start min-w-full pb-[0px] pt-[8px] px-[16px] to-[#ffffff] w-full pr-[16px] pl-[16px]">
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

        <ActionChecklist 
          title="How to achieve it?"
          actions={actionItems}
        />
      </div>

      {/* Resources Section */}
      <div className="relative shrink-0 w-full">
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-start px-[16px] py-0 relative w-full">
            <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667085] text-[0px] tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Resources for you
              </p>
            </div>
            <ResourceCard 
              image="https://images.unsplash.com/photo-1684160244466-b89ef03b7638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBhcnRpY2xlJTIwaGVhbHRoeSUyMGVhdGluZyUyMGJsb2d8ZW58MXx8fHwxNzU4MDA5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              title="The Role of Protein in Weight Loss"
              type="Article"
              onClick={() => onResourceClick?.('protein-weight-loss')}
            />
            <ResourceCard 
              image="https://images.unsplash.com/photo-1684160244466-b89ef03b7638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBhcnRpY2xlJTIwaGVhbHRoeSUyMGVhdGluZyUyMGJsb2d8ZW58MXx8fHwxNzU4MDA5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              title="10 Easy Protein Sources for Every Meal"
              type="Article"
              onClick={() => onResourceClick?.('protein-sources')}
            />
          </div>
        </div>
      </div>

      {/* Recommended Product */}
      <RecommendedProduct onClick={onProductClick} />

      {/* Feedback Section */}
      <FeedbackComponent pageName="Day 1 - Week 2" />
    </div>
  );
}
