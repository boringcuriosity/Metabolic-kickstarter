import React from 'react';
import { ResourceCard } from './ResourceCard';

interface Resource {
  id: string;
  image: string;
  title: string;
  type: string;
}

interface ResourcesSectionProps {
  resources: Resource[];
  onResourceClick?: (resourceId: string) => void;
}

export function ResourcesSection({ resources, onResourceClick }: ResourcesSectionProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-start px-[16px] py-0 relative w-full">
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667085] text-[0px] tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Resources for you
            </p>
          </div>
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              image={resource.image}
              title={resource.title}
              type={resource.type}
              onClick={() => onResourceClick?.(resource.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
