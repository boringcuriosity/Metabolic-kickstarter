import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
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
import { StartWeek2 } from './components/pages/week2/StartWeek2';
import { Day1Week2 } from './components/pages/week2/Day1Week2';
import { Day2Week2 } from './components/pages/week2/Day2Week2';
import { Day3Week2 } from './components/pages/week2/Day3Week2';
import { Day4Week2 } from './components/pages/week2/Day4Week2';
import { Day5Week2 } from './components/pages/week2/Day5Week2';
import { Day6Week2 } from './components/pages/week2/Day6Week2';
import { Day7Week2 } from './components/pages/week2/Day7Week2';
import { ConclusionWeek2 } from './components/pages/week2/ConclusionWeek2';

// Week 1 Tab Types
type Week1TabId = 'start-week-1' | 'day-1' | 'day-2' | 'day-3' | 'day-4' | 'day-5' | 'day-6' | 'day-7' | 'conclusion';
type Week2TabId = 'start-week-2' | 'day-1-week-2' | 'day-2-week-2' | 'day-3-week-2' | 'day-4-week-2' | 'day-5-week-2' | 'day-6-week-2' | 'day-7-week-2' | 'conclusion-week-2';

interface Tab {
  id: Week1TabId | Week2TabId;
  label: string;
  isActive: boolean;
  isCompleted?: boolean;
}

// Week 1 Layout Component
function Week1Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [completedActions, setCompletedActions] = useState<Set<string>>(new Set());
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<{ title: string; url: string } | null>(null);

  // Get current tab from URL
  const getCurrentTab = (): Week1TabId => {
    const path = location.pathname;
    if (path === '/week1') return 'start-week-1';
    if (path === '/week1/day1') return 'day-1';
    if (path === '/week1/day2') return 'day-2';
    if (path === '/week1/day3') return 'day-3';
    if (path === '/week1/day4') return 'day-4';
    if (path === '/week1/day5') return 'day-5';
    if (path === '/week1/day6') return 'day-6';
    if (path === '/week1/day7') return 'day-7';
    if (path === '/week1/conclusion') return 'conclusion';
    return 'start-week-1';
  };

  const activeTab = getCurrentTab();

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
    // Navigate to appropriate URL based on tab
    switch (tabId) {
      case 'start-week-1':
        navigate('/week1');
        break;
      case 'day-1':
        navigate('/week1/day1');
        break;
      case 'day-2':
        navigate('/week1/day2');
        break;
      case 'day-3':
        navigate('/week1/day3');
        break;
      case 'day-4':
        navigate('/week1/day4');
        break;
      case 'day-5':
        navigate('/week1/day5');
        break;
      case 'day-6':
        navigate('/week1/day6');
        break;
      case 'day-7':
        navigate('/week1/day7');
        break;
      case 'conclusion':
        navigate('/week1/conclusion');
        break;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex > 0) {
      const prevTab = tabs[currentIndex - 1];
      handleTabClick(prevTab.id);
    }
  };

  const handleNext = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      const nextTab = tabs[currentIndex + 1];
      handleTabClick(nextTab.id);
    }
  };

  const handleResourceClick = (resourceId: string) => {
    console.log('Resource clicked:', resourceId);
    
    if (resourceId === 'protein-weight-loss') {
      setCurrentArticle({
        title: 'The Role of Protein in Weight Loss',
        url: 'https://www.healthline.com/nutrition/how-protein-can-help-you-lose-weight'
      });
      setIsArticleOpen(true);
    }
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
        return <StartWeek1 onNext={handleNext} />;
    }
  };

  return (
    <div className="bg-white relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Sticky Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <BackNavigation onBack={handleBack} />
        <TabNavigation tabs={tabs} onTabClick={handleTabClick} />
      </div>
      
      {/* Main Content Container */}
      <div className="flex-1 pt-[88px] pr-[0px] pb-[40px] pl-[0px]">
        {renderCurrentPage()}
      </div>

      {/* Navigation Buttons */}
      {activeTab !== 'start-week-1' && activeTab !== 'conclusion' && (
        <div className="box-border content-stretch flex gap-[8px] items-center justify-start px-[16px] pt-[16px] pb-[24px] w-full bg-white">
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

// Week 2 Layout Component
function Week2Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [completedActions, setCompletedActions] = useState<Set<string>>(new Set());
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<{ title: string; url: string } | null>(null);

  // Get current tab from URL
  const getCurrentTab = (): Week2TabId => {
    const path = location.pathname;
    if (path === '/week2') return 'start-week-2';
    if (path === '/week2/day1') return 'day-1-week-2';
    if (path === '/week2/day2') return 'day-2-week-2';
    if (path === '/week2/day3') return 'day-3-week-2';
    if (path === '/week2/day4') return 'day-4-week-2';
    if (path === '/week2/day5') return 'day-5-week-2';
    if (path === '/week2/day6') return 'day-6-week-2';
    if (path === '/week2/day7') return 'day-7-week-2';
    if (path === '/week2/conclusion') return 'conclusion-week-2';
    return 'start-week-2';
  };

  const activeTab = getCurrentTab();

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
    // Navigate to appropriate URL based on tab
    switch (tabId) {
      case 'start-week-2':
        navigate('/week2');
        break;
      case 'day-1-week-2':
        navigate('/week2/day1');
        break;
      case 'day-2-week-2':
        navigate('/week2/day2');
        break;
      case 'day-3-week-2':
        navigate('/week2/day3');
        break;
      case 'day-4-week-2':
        navigate('/week2/day4');
        break;
      case 'day-5-week-2':
        navigate('/week2/day5');
        break;
      case 'day-6-week-2':
        navigate('/week2/day6');
        break;
      case 'day-7-week-2':
        navigate('/week2/day7');
        break;
      case 'conclusion-week-2':
        navigate('/week2/conclusion');
        break;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex > 0) {
      const prevTab = tabs[currentIndex - 1];
      handleTabClick(prevTab.id);
    } else {
      // If we're on the first tab, navigate back to Week 1
      navigate('/week1');
    }
  };

  const handleNext = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      const nextTab = tabs[currentIndex + 1];
      handleTabClick(nextTab.id);
    }
  };

  const handleResourceClick = (resourceId: string) => {
    console.log('Resource clicked:', resourceId);
    
    if (resourceId === 'protein-weight-loss') {
      setCurrentArticle({
        title: 'The Role of Protein in Weight Loss',
        url: 'https://www.healthline.com/nutrition/how-protein-can-help-you-lose-weight'
      });
      setIsArticleOpen(true);
    }
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
        return <StartWeek2 onNext={handleNext} />;
    }
  };

  return (
    <div className="bg-white relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Sticky Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <BackNavigation onBack={handleBack} />
        <TabNavigation tabs={tabs} onTabClick={handleTabClick} />
      </div>
      
      {/* Main Content Container */}
      <div className="flex-1 pt-[88px] pr-[0px] pb-[40px] pl-[0px]">
        {renderCurrentPage()}
      </div>

      {/* Navigation Buttons */}
      {activeTab !== 'start-week-2' && activeTab !== 'conclusion-week-2' && (
        <div className="box-border content-stretch flex gap-[8px] items-center justify-start px-[16px] pt-[16px] pb-[24px] w-full bg-white">
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

// Main App Component with Routing
export default function App() {
  return (
    <Routes>
      {/* Default redirect to /week1 */}
      <Route path="/" element={<Navigate to="/week1" replace />} />
      
      {/* Week 1 Routes */}
      <Route path="/week1" element={<Week1Layout />} />
      <Route path="/week1/day1" element={<Week1Layout />} />
      <Route path="/week1/day2" element={<Week1Layout />} />
      <Route path="/week1/day3" element={<Week1Layout />} />
      <Route path="/week1/day4" element={<Week1Layout />} />
      <Route path="/week1/day5" element={<Week1Layout />} />
      <Route path="/week1/day6" element={<Week1Layout />} />
      <Route path="/week1/day7" element={<Week1Layout />} />
      <Route path="/week1/conclusion" element={<Week1Layout />} />
      
      {/* Week 2 Routes */}
      <Route path="/week2" element={<Week2Layout />} />
      <Route path="/week2/day1" element={<Week2Layout />} />
      <Route path="/week2/day2" element={<Week2Layout />} />
      <Route path="/week2/day3" element={<Week2Layout />} />
      <Route path="/week2/day4" element={<Week2Layout />} />
      <Route path="/week2/day5" element={<Week2Layout />} />
      <Route path="/week2/day6" element={<Week2Layout />} />
      <Route path="/week2/day7" element={<Week2Layout />} />
      <Route path="/week2/conclusion" element={<Week2Layout />} />
    </Routes>
  );
}