import React from 'react';

interface GoalSectionProps {
  title: string;
  icon?: React.ReactNode;
  previousHabits?: string[];
}

export function GoalSection({ title, icon, previousHabits = [] }: GoalSectionProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0">
      {/* Heading */}
      <div className="box-border content-stretch flex gap-[10px] h-[17px] items-center justify-start px-[16px] py-0 relative shrink-0 w-full">
        <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667085] text-[0px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Goals for the Day
          </p>
        </div>
      </div>

      {/* Previous Habits */}
      {previousHabits.length > 0 && (
        <div className="box-border content-stretch flex flex-wrap gap-[8px] items-center justify-start px-[16px] py-0 relative shrink-0 w-full">
          {previousHabits.map((habit, index) => (
            <div 
              key={index}
              className="bg-[#e6faf1] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[16px] shrink-0"
            >
              <div className="w-2 h-2 bg-[#299d6b] rounded-full" />
              <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#1d4d38] text-[12px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.2]">{habit}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Main Goal */}
      <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-start p-[16px] relative shrink-0 w-full">
        <div className="h-[48px] relative shrink-0 w-full">
          <div className="absolute bg-white left-0 overflow-clip rounded-[24px] size-[24px] top-0">
            <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
              {icon || (
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g>
                    <path fill="url(#paint0_linear_1_3602)" d="M12.2857 2C12.652 2 12.9539 2.26808 12.9952 2.61346L13 2.69444V13.8056C13 14.1891 12.6802 14.5 12.2857 14.5C11.9194 14.5 11.6175 14.2319 11.5762 13.8865L11.5714 13.8056V10.3333H10.8571C10.4908 10.3333 10.1889 10.0652 10.1477 9.71988L10.1429 9.63889V5.47222C10.1429 3.9381 11.2143 2 12.2857 2ZM8 2C8.36631 2 8.66822 2.26808 8.70948 2.61346L8.71429 2.69444V6.16667C8.71429 7.46081 7.804 8.54825 6.57197 8.8568L6.57143 13.8056C6.57143 14.1891 6.25163 14.5 5.85714 14.5C5.49083 14.5 5.18892 14.2319 5.14766 13.8865L5.14286 13.8056L5.14303 8.85698C3.95628 8.56009 3.0679 7.54055 3.00372 6.30961L3 6.16667V2.69444C3 2.31091 3.3198 2 3.71429 2C4.0806 2 4.38251 2.26808 4.42377 2.61346L4.42857 2.69444V6.16667C4.42857 6.68073 4.71583 7.12956 5.14281 7.36972L5.14286 2.69444C5.14286 2.31091 5.46265 2 5.85714 2C6.22345 2 6.52536 2.26808 6.56662 2.61346L6.57143 2.69444L6.5722 7.36931C6.96596 7.14754 7.24074 6.74823 7.28069 6.28401L7.28571 6.16667V2.69444C7.28571 2.31091 7.60551 2 8 2Z" />
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3602" x1="3.41658" x2="12.9057" y1="2.44637" y2="13.4106">
                      <stop stopColor="#A4BCFD" />
                      <stop offset="1" stopColor="#444CE7" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </div>
          </div>
          <div className="absolute font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] left-[32px] text-[18px] text-white top-0 tracking-[0.25px] w-[calc(100%-32px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}