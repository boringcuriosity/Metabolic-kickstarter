import React from 'react';
import { CompletedStep, CurrentStep, UpcomingStepWithLine, UpcomingStepWithoutLine } from './ProgressSteps';

interface ProgressDotsProps {
  currentDay: number;
  totalDays: number;
}

export function ProgressDots({ currentDay, totalDays }: ProgressDotsProps) {
  const renderSteps = () => {
    const steps = [];
    
    for (let i = 1; i <= totalDays; i++) {
      const isCompleted = i < currentDay;
      const isCurrent = i === currentDay;
      const isUpcoming = i > currentDay;
      
      if (isCompleted) {
        steps.push(<CompletedStep key={i} />);
      } else if (isCurrent) {
        steps.push(<CurrentStep key={i} />);
      } else if (isUpcoming) {
        // For upcoming steps, use line version for all except the last 1-2 steps
        const isLastFewSteps = i >= totalDays - 1;
        if (isLastFewSteps) {
          steps.push(<UpcomingStepWithoutLine key={i} />);
        } else {
          steps.push(<UpcomingStepWithLine key={i} />);
        }
      }
    }
    
    return steps;
  };

  return (
    <div className="content-stretch flex items-end justify-start relative shrink-0" data-name="user journey">
      {renderSteps()}
    </div>
  );
}