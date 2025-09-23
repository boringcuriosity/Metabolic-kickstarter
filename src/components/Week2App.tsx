import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TabNavigation } from './TabNavigation';
import { BackNavigation } from './BackNavigation';
import { ArticleBottomSheet } from './ArticleBottomSheet';
import { StartWeek2 } from './pages/week2/StartWeek2';
import { Day1Week2 } from './pages/week2/Day1Week2';
import { Day2Week2 } from './pages/week2/Day2Week2';
import { Day3Week2 } from './pages/week2/Day3Week2';
import { Day4Week2 } from './pages/week2/Day4Week2';
import { Day5Week2 } from './pages/week2/Day5Week2';
import { Day6Week2 } from './pages/week2/Day6Week2';
import { Day7Week2 } from './pages/week2/Day7Week2';
import { ConclusionWeek2 } from './pages/week2/ConclusionWeek2';

type TabId = 'start-week-2' | 'day-1-week-2' | 'day-2-week-2' | 'day-3-week-2' | 'day-4-week-2' | 'day-5-week-2' | 'day-6-week-2' | 'day-7-week-2' | 'conclusion-week-2';

interface Tab {
  id: TabId;
  label: string;
  isActive: boolean;
  isCompleted?: boolean;
}

export default function Week2App() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>('start-week-2');
  const [completedActions, setCompletedActions] = useState<Set<string>>(new Set());
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<{ title: string; url: string } | null>(null);

  const tabs: Tab[] = [
    { id: 'start-week-2', label: 'Start Week 2', isActive: activeTab === 'start-week-2' },
    { id: 'day-1-week-2', label: 'Day 1', isActive: activeTab === 'day-1-week-2' },
    { id: 'day-2-week-2', label: 'Day 2', isActive: activeTab === 'day-2-week-2' },
    { id: 'day-3-week-2', label: 'Day 3', isActive: activeTab === 'day-3-week-2' },
    { id: 'day-4-week-2', label: 'Day 4', isActive: activeTab === 'day-4-week-2' },
    { id: 'day-5-week-2', label: 'Day 5', isActive: activeTab === 'day-5-week-2' },
    { id: 'day-6-week-2', label: 'Day 6', isActive: activeTab === 'day-6-week-2' },
    { id: 'day-7-week-2', label: 'Day 7', isActive: activeTab === 'day-7-week-2' },
    { id: 'conclusion-week-2', label: 'Conclusion', isActive: activeTab === 'conclusion-week-2' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId as TabId);
    // Scroll to top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
      // Scroll to top of the page smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If we're on the first tab, navigate back to Week 1
      navigate('/');
    }
  };

  const handleNext = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
      // Scroll to top of the page smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResourceClick = (resourceId: string) => {
    console.log('Resource clicked:', resourceId);
    
    // Handle specific article resources
    if (resourceId === 'protein-weight-loss') {
      setCurrentArticle({
        title: 'The Role of Protein in Weight Loss',
        url: 'https://www.healthline.com/nutrition/how-protein-can-help-you-lose-weight'
      });
      setIsArticleOpen(true);
    }
    // Add more article handlers here as needed
  };

  const handleCloseArticle = () => {
    setIsArticleOpen(false);
    setCurrentArticle(null);
  };

  const handleProductClick = () => {
    console.log('Product clicked');
    setCurrentArticle({
      title: 'GoodFlip Smart Body Composition Analyser',
      url: 'https://shop.goodflip.in/products/goodflip-smart-body-composition-analyser'
    });
    setIsArticleOpen(true);
  };

  const handleUnlockWeek3 = () => {
    console.log('Unlock Week 3 clicked');
    // Here you would navigate to Week 3 or show unlock modal
  };

  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'start-week-2':
        return <StartWeek2 onNext={handleNext} />;
      case 'day-1-week-2':
        return (
          <Day1Week2 
            onResourceClick={handleResourceClick}
            onProductClick={handleProductClick}
          />
        );
      case 'day-2-week-2':
        return (
          <Day2Week2 
            onResourceClick={handleResourceClick}
          />
        );
      case 'day-3-week-2':
        return (
          <Day3Week2 
            onResourceClick={handleResourceClick}
            onProductClick={handleProductClick}
          />
        );
      case 'day-4-week-2':
        return (
          <Day4Week2 
            onResourceClick={handleResourceClick}
            onProductClick={handleProductClick}
          />
        );
      case 'day-5-week-2':
        return (
          <Day5Week2 
            onResourceClick={handleResourceClick}
          />
        );
      case 'day-6-week-2':
        return (
          <Day6Week2 
            onResourceClick={handleResourceClick}
          />
        );
      case 'day-7-week-2':
        return (
          <Day7Week2 
            onResourceClick={handleResourceClick}
          />
        );
      case 'conclusion-week-2':
        return <ConclusionWeek2 onUnlockWeek3={handleUnlockWeek3} />;
      default:
        return <StartWeek2 />;
    }
  };

  return (
    <div className="bg-white relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Sticky Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <BackNavigation onBack={handleBack} />
        <TabNavigation tabs={tabs} onTabClick={handleTabClick} />
      </div>
      
      {/* Main Content Container - Add top padding to push content below sticky header */}
      <div className="flex-1 pt-[88px] pr-[0px] pb-[40px] pl-[0px]">
        {renderCurrentPage()}
      </div>

      {/* Navigation Buttons - Hidden on Start Week 2 and Conclusion pages - Always at bottom */}
      {activeTab !== 'start-week-2' && activeTab !== 'conclusion-week-2' && (
        <div className="box-border content-stretch flex gap-[8px] items-center justify-start px-[16px] py-[16px] w-full bg-white">
          {/* Secondary CTA - Previous Button */}
          <div className="basis-0 grow min-h-px min-w-px">
            <button 
              className="cta-button cta-button-secondary"
              onClick={handleBack}
            >
              <div className="cta-button-front">
                <span className="font-['Roboto:Bold',_sans-serif] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Previous
                </span>
              </div>
            </button>
          </div>
          
          {/* Primary CTA - Next Button */}
          <div className="basis-0 grow min-h-px min-w-px">
            <button 
              className="cta-button cta-button-primary"
              onClick={handleNext}
            >
              <div className="cta-button-front">
                <span className="font-['Roboto:Bold',_sans-serif] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Next
                </span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Article Bottom Sheet */}
      <ArticleBottomSheet
        isOpen={isArticleOpen}
        onClose={handleCloseArticle}
        title={currentArticle?.title || ''}
        url={currentArticle?.url || ''}
      />
    </div>
  );
}
