import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { TabNavigation } from './components/TabNavigation';
import { BackNavigation } from './components/BackNavigation';
import { ArticleBottomSheet } from './components/ArticleBottomSheet';
import { StartWeek1 } from './components/pages/StartWeek1';
import { Day1 } from './components/pages/Day1';
import { Day2 } from './components/pages/Day2';
import { Day3 } from './components/pages/Day3';
import { Day4 } from './components/pages/Day4';
import { Day5 } from './components/pages/Day5';
import { Day6 } from './components/pages/Day6';
import { Day7 } from './components/pages/Day7';
import { Conclusion } from './components/pages/Conclusion';
import Week2App from './components/Week2App';

type TabId = 'start-week-1' | 'day-1' | 'day-2' | 'day-3' | 'day-4' | 'day-5' | 'day-6' | 'day-7' | 'conclusion';

interface Tab {
  id: TabId;
  label: string;
  isActive: boolean;
  isCompleted?: boolean;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<TabId>('start-week-1');
  const [completedActions, setCompletedActions] = useState<Set<string>>(new Set());
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<{ title: string; url: string } | null>(null);

  const tabs: Tab[] = [
    { id: 'start-week-1', label: 'Start Week 1', isActive: activeTab === 'start-week-1' },
    { id: 'day-1', label: 'Day 1', isActive: activeTab === 'day-1' },
    { id: 'day-2', label: 'Day 2', isActive: activeTab === 'day-2' },
    { id: 'day-3', label: 'Day 3', isActive: activeTab === 'day-3' },
    { id: 'day-4', label: 'Day 4', isActive: activeTab === 'day-4' },
    { id: 'day-5', label: 'Day 5', isActive: activeTab === 'day-5' },
    { id: 'day-6', label: 'Day 6', isActive: activeTab === 'day-6' },
    { id: 'day-7', label: 'Day 7', isActive: activeTab === 'day-7' },
    { id: 'conclusion', label: 'Conclusion', isActive: activeTab === 'conclusion' },
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

  const handleUnlockWeek2 = () => {
    console.log('Unlock Week 2 clicked');
    navigate('/week2');
  };

  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'start-week-1':
        return <StartWeek1 onNext={handleNext} />;
      case 'day-1':
        return (
          <Day1 
            onResourceClick={handleResourceClick}
            onProductClick={handleProductClick}
          />
        );
      case 'day-2':
        return (
          <Day2 
            onResourceClick={handleResourceClick}
          />
        );
      case 'day-3':
        return (
          <Day3 
            onResourceClick={handleResourceClick}
            onProductClick={handleProductClick}
          />
        );
      case 'day-4':
        return (
          <Day4 
            onResourceClick={handleResourceClick}
            onProductClick={handleProductClick}
          />
        );
      case 'day-5':
        return (
          <Day5 
            onResourceClick={handleResourceClick}
          />
        );
      case 'day-6':
        return (
          <Day6 
            onResourceClick={handleResourceClick}
          />
        );
      case 'day-7':
        return (
          <Day7 
            onResourceClick={handleResourceClick}
          />
        );
      case 'conclusion':
        return <Conclusion onUnlockWeek2={handleUnlockWeek2} />;
      default:
        return <StartWeek1 />;
    }
  };

  // If we're on the week2 route, render Week2App
  if (location.pathname === '/week2') {
    return <Week2App />;
  }

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

      {/* Navigation Buttons - Hidden on Start Week 1 and Conclusion pages - Always at bottom */}
      {activeTab !== 'start-week-1' && activeTab !== 'conclusion' && (
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