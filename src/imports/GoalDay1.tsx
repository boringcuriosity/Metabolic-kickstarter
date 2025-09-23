import svgPaths from "./svg-l876u7ggu9";

function Heading() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[17px] items-center justify-start px-[16px] py-0 relative shrink-0 w-[390px]" data-name="heading">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667085] text-[0px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Goals for the Day
        </p>
      </div>
    </div>
  );
}

function TrackerIcons() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="tracker icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tracker icons">
          <path d={svgPaths.p38446780} fill="url(#paint0_linear_1_3602)" id="Shape" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3602" x1="3.41658" x2="12.9057" y1="2.44637" y2="13.4106">
            <stop stopColor="#A4BCFD" />
            <stop offset="1" stopColor="#444CE7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconForGoal() {
  return (
    <div className="absolute bg-white left-0 overflow-clip rounded-[24px] size-[24px] top-0" data-name="icon for goal">
      <TrackerIcons />
    </div>
  );
}

function GoalOfTheDay() {
  return (
    <div className="h-[48px] relative shrink-0 w-[358px]" data-name="goal of the day">
      <IconForGoal />
      <div className="absolute font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] left-[32px] text-[18px] text-white top-0 tracking-[0.25px] w-[326px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Add a Source of Protein to any two meals</p>
      </div>
    </div>
  );
}

function MainGoal() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-start p-[16px] relative shrink-0 w-[390px]" data-name="main goal">
      <GoalOfTheDay />
    </div>
  );
}

export default function GoalDay1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative w-full" data-name="goal day 1">
      {/* Heading */}
      <div className="box-border content-stretch flex gap-[10px] h-[17px] items-center justify-start px-[16px] py-0 relative shrink-0 w-full" data-name="heading">
        <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667085] text-[0px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Goals for the Day
          </p>
        </div>
      </div>
      
      {/* Main Goal */}
      <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-start p-[16px] relative shrink-0 w-full" data-name="main goal">
        <div className="h-[48px] relative shrink-0 w-full max-w-[358px]" data-name="goal of the day">
          {/* Icon for Goal */}
          <div className="absolute bg-white left-0 overflow-clip rounded-[24px] size-[24px] top-0" data-name="icon for goal">
            <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="tracker icons">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="tracker icons">
                  <path d={svgPaths.p38446780} fill="url(#paint0_linear_1_3602)" id="Shape" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3602" x1="3.41658" x2="12.9057" y1="2.44637" y2="13.4106">
                    <stop stopColor="#A4BCFD" />
                    <stop offset="1" stopColor="#444CE7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          {/* Goal Text */}
          <div className="absolute font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] left-[32px] text-[18px] text-white top-0 tracking-[0.25px] w-[calc(100%-32px)] pr-4" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">Boost your meals with fibre</p>
          </div>
        </div>
      </div>
    </div>
  );
}