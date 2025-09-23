import React, { useRef, useEffect } from 'react';

interface Tab {
  id: string;
  label: string;
  isActive: boolean;
  isCompleted?: boolean;
}

interface TabNavigationProps {
  tabs: Tab[];
  onTabClick: (tabId: string) => void;
}

export function TabNavigation({ tabs, onTabClick }: TabNavigationProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLDivElement>(null);

  // Scroll to center the active tab
  useEffect(() => {
    if (scrollContainerRef.current && activeTabRef.current) {
      const container = scrollContainerRef.current;
      const activeTab = activeTabRef.current;
      
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      
      // Calculate the scroll position to center the tab
      const scrollLeft = activeTab.offsetLeft - (container.clientWidth / 2) + (tabRect.width / 2);
      
      // Smooth scroll to the calculated position
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [tabs]); // Re-run when tabs change (including active state)

  return (
    <div 
      ref={scrollContainerRef}
      className="bg-white box-border content-stretch flex gap-[24px] items-center justify-start overflow-x-auto overflow-y-clip pb-0 pt-[12px] px-[16px] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.1),0px_2px_4px_-2px_rgba(16,24,40,0.06)] w-full z-10 scroll-smooth"
    >
      {tabs.map((tab) => (
        <div
          key={tab.id}
          ref={tab.isActive ? activeTabRef : null}
          className="content-stretch flex flex-col h-[44px] items-start justify-between relative shrink-0 cursor-pointer transition-all duration-500 ease-out"
          onClick={() => onTabClick(tab.id)}
        >
          <div className={`box-border content-stretch flex gap-[4px] items-center justify-start px-[12px] py-[4px] relative rounded-[24px] shrink-0 transition-all duration-500 ease-out ${
            tab.isActive 
              ? 'bg-[#e6faf1]' 
              : ''
          }`}>
            <div className={`font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] text-nowrap tracking-[0.25px] transition-all duration-500 ease-out ${
              tab.isActive 
                ? 'text-[#1d4d38] font-bold' 
                : 'text-[#101828]'
            }`} style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[1.5] whitespace-pre">{tab.label}</p>
            </div>
          </div>
          <div className={`h-[5px] overflow-clip relative shrink-0 w-full transition-all duration-500 ease-out ${
            tab.isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}>
            <div className="absolute bottom-0 left-[26.23%] right-[26.23%] top-0 transition-all duration-500 ease-out">
              <svg className="block size-full transition-all duration-500 ease-out" fill="none" preserveAspectRatio="none" viewBox="0 0 32 5">
                <path 
                  fill="#299D6B" 
                  d="M0 5C0 2.23858 2.23858 0 5 0H26.377C29.1385 0 31.377 2.23858 31.377 5V5H0V5Z"
                  className="transition-all duration-500 ease-out"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}