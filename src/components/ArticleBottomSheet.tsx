import React, { useEffect, useState } from 'react';
import { CrossIcon } from './ui/CrossIcon';

interface ArticleBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

export function ArticleBottomSheet({ isOpen, onClose, title, url }: ArticleBottomSheetProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when sheet is open
      document.body.style.overflow = 'hidden';
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-500 ease-out ${
          isOpen 
            ? 'bg-black/50 backdrop-blur-sm' 
            : 'bg-black/0 backdrop-blur-none'
        }`}
        onClick={onClose}
      />
      
      {/* Bottom Sheet */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-[20px] shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen 
            ? 'translate-y-0 scale-100 opacity-100' 
            : 'translate-y-full scale-95 opacity-0'
        }`}
        style={{ 
          height: '90vh',
          transformOrigin: 'center bottom'
        }}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="font-['Roboto:Bold',_sans-serif] font-bold text-[18px] text-[#101828] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {title || 'Content'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close content"
          >
            <CrossIcon width={24} height={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={url}
            title={title}
            className="w-full border-0"
            style={{ height: 'calc(90vh - 72px)' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>
    </>
  );
}