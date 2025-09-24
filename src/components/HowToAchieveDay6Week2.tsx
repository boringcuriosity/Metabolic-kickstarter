import React from 'react';

interface HowToAchieveDay6Week2Props {
  onItemComplete?: (itemId: string) => void;
}

interface ActionItem {
  id: string;
  title: string;
  description: string;
  subItems?: {
    category: string;
    items: string;
  }[];
}

export function HowToAchieveDay6Week2({ onItemComplete }: HowToAchieveDay6Week2Props) {
  const actionItems: ActionItem[] = [
    {
      id: "get-ready",
      title: "Get ready before you start",
      description: "",
      subItems: [
        {
          category: "",
          items: "Drink some water and do a quick warm-up with light jogging or dynamic stretches. This prepares your muscles and lowers injury risk."
        }
      ]
    },
    {
      id: "hiit-bursts",
      title: "Do your HIIT bursts",
      description: "",
      subItems: [
        {
          category: "",
          items: "Sprint or run fast for 20-30 seconds, then slow down to a walk or light jog for 60-90 seconds. Repeat this for 4-6 rounds, about 10-15 minutes total."
        }
      ]
    },
    {
      id: "stay-hydrated",
      title: "Stay hydrated during the session",
      description: "",
      subItems: [
        {
          category: "",
          items: "Keep a water bottle nearby and sip small amounts between rounds if you feel dry. Avoid gulping too much at once."
        }
      ]
    },
    {
      id: "cool-down",
      title: "Cool down after finishing",
      description: "",
      subItems: [
        {
          category: "",
          items: "End with 5 minutes of slow walking and gentle stretches. This helps your heart rate come down and aids recovery."
        }
      ]
    }
  ];

  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-start px-[16px] py-0 relative shrink-0 w-full">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#667085] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100", width: "min-content" }}>
        <p className="leading-[1.2]">How to achieve it?</p>
      </div>
      
      {actionItems.map((action) => (
        <div key={action.id} className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-start justify-start relative shrink-0 w-full">
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <circle cx="8" cy="8" fill="url(#paint0_linear_1_3609)" r="7" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3609" x1="8" x2="8" y1="1" y2="15">
                    <stop stopColor="#8098F9" />
                    <stop offset="1" stopColor="#3538CD" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#101828] text-[0px] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="mb-0">
                <span className="font-['Roboto:Bold',_sans-serif] font-bold tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {action.title}
                </span>{" "}
              </p>
              {action.description && <p>{action.description}</p>}
            </div>
          </div>

          {action.subItems?.map((subItem, index) => (
            <div key={index} className="box-border content-stretch flex gap-[8px] items-start justify-start pl-[24px] pr-0 py-0 relative shrink-0 w-full">
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <div className="absolute flex items-center justify-center left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div className="relative size-[16px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g>
                          <path fill="url(#paint0_linear_1_3615)" d="M14.1667 2.66667C14.4428 2.66667 14.6667 2.89052 14.6667 3.16667V7.5C14.6667 8.88071 13.5474 10 12.1667 10H3.05722L5.53678 12.4798C5.71429 12.6573 5.73043 12.9351 5.58519 13.1308L5.53678 13.1869C5.35927 13.3644 5.08149 13.3805 4.88575 13.2353L4.82967 13.1869L1.49634 9.85355C1.31883 9.67604 1.30269 9.39827 1.44792 9.20253L1.49634 9.14645L4.82967 5.81311C5.02493 5.61785 5.34152 5.61785 5.53678 5.81311C5.71429 5.99062 5.73043 6.2684 5.58519 6.46414L5.53678 6.52022L3.05722 9H12.1667C12.9606 9 13.6104 8.38323 13.6632 7.6027L13.6667 7.5V3.16667C13.6667 2.89052 13.8905 2.66667 14.1667 2.66667Z" />
                        </g>
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3615" x1="8.00828" x2="8.00828" y1="2.66667" y2="13.3333">
                            <stop stopColor="#CDA935" />
                            <stop offset="1" stopColor="#826E2D" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#101828] text-[0px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.5] text-[14px]">
                  {subItem.category && (
                    <span className="font-['Roboto:Bold',_sans-serif] font-bold tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {subItem.category}
                    </span>
                  )}
                  {subItem.category && ": "}{subItem.items}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}