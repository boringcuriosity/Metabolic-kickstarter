function ButtonMain() {
  return (
    <div className="bg-[#299d6b] relative rounded-[8px] shrink-0 w-full" data-name="button_main">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Next
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SButton() {
  return (
    <div className="absolute bg-[#2a805a] content-stretch flex flex-col gap-[10px] h-[48px] items-start justify-start left-1/2 rounded-[8px] top-[8px] translate-x-[-50%] w-[358px]" data-name="sButton">
      <ButtonMain />
    </div>
  );
}

export default function TabBarIPhone() {
  return (
    <div className="backdrop-blur-[25px] backdrop-filter bg-[rgba(255,255,255,0.75)] mix-blend-hard-light relative size-full" data-name="Tab Bar - iPhone">
      <SButton />
    </div>
  );
}