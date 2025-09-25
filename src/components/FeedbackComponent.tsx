import React, { useState, useEffect, useRef } from 'react';
import { CrossIcon } from './ui/CrossIcon';

interface FeedbackComponentProps {
  pageName?: string;
  question?: string;
}

const FeedbackComponent = ({ pageName, question = "Was this helpful?" }: FeedbackComponentProps) => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [isLiked, setIsLiked] = useState<boolean | null>(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [dislikeReason, setDislikeReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Queue for background submissions
  const submissionQueue = useRef<Array<{id: string, data: any, retries: number}>>([]);
  const isProcessingQueue = useRef(false);

  // Utility function to get the current page name
  const getCurrentPageName = (): string => {
    if (pageName) {
      return pageName;
    }
    
    // Fallback to URL-based detection if pageName prop is not provided
    const url = window.location.href;
    if (url.includes('day-1') || url.includes('Day1')) return 'Day 1';
    if (url.includes('day-2') || url.includes('Day2')) return 'Day 2';
    if (url.includes('day-3') || url.includes('Day3')) return 'Day 3';
    if (url.includes('day-4') || url.includes('Day4')) return 'Day 4';
    if (url.includes('day-5') || url.includes('Day5')) return 'Day 5';
    if (url.includes('day-6') || url.includes('Day6')) return 'Day 6';
    if (url.includes('day-7') || url.includes('Day7')) return 'Day 7';
    if (url.includes('start-week-1') || url.includes('StartWeek1')) return 'Start Week 1';
    if (url.includes('conclusion') || url.includes('Conclusion')) return 'Conclusion';
    
    return 'Unknown Page';
  };

  const handleFeedback = (type: 'like' | 'dislike') => {
    const timestamp = new Date().toISOString();
    const page = getCurrentPageName();

    setIsLiked(type === 'like');
    setFeedbackSubmitted(true);

    if (type === 'dislike') {
      setShowBottomSheet(true);
    } else {
      // Queue the feedback for background submission
      queueFeedback({ type, timestamp, page });
    }
  };

  const handleSubmitDislike = () => {
    const timestamp = new Date().toISOString();
    const page = getCurrentPageName();

    // Show submitting state briefly for user feedback
    setIsSubmitting(true);
    setSubmitError(null);

    // Queue the feedback for background submission
    queueFeedback({ type: 'dislike', timestamp, page, comment: dislikeReason });
    
    // Close the bottom sheet immediately with optimistic UI
    setTimeout(() => {
      setShowBottomSheet(false);
      setIsSubmitting(false);
      setDislikeReason(''); // Reset form
    }, 200); // Small delay for visual feedback
  };

  const handleCloseBottomSheet = () => {
    const timestamp = new Date().toISOString();
    const page = getCurrentPageName();

    // Queue dislike data even when closed without reason
    queueFeedback({ type: 'dislike', timestamp, page, comment: '' });
    
    // Close immediately with optimistic UI
    setShowBottomSheet(false);
    setDislikeReason(''); // Reset form
    setSubmitError(null);
  };

  // Enhanced feedback submission with retry logic
  const sendFeedback = async (data: any, retries = 3): Promise<boolean> => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwsR6jbB_offblMmIRzPdJAgmHEUBvok7wRlcuEeEGCW2K2P91GfZqvjdv6XwfMeyAL8Q/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return true;
    } catch (err) {
      console.error(`Feedback failed (${4 - retries} attempts)`, err);
      if (retries > 0) {
        // Wait with exponential backoff before retry
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, 3 - retries) * 1000));
        return sendFeedback(data, retries - 1);
      }
      return false;
    }
  };

  // Background queue processor
  const processSubmissionQueue = async () => {
    if (isProcessingQueue.current || submissionQueue.current.length === 0) {
      return;
    }
    
    isProcessingQueue.current = true;
    
    while (submissionQueue.current.length > 0) {
      const item = submissionQueue.current[0];
      const success = await sendFeedback(item.data, item.retries);
      
      if (success) {
        submissionQueue.current.shift(); // Remove successful item
      } else {
        // If failed after all retries, remove from queue
        console.error('Failed to submit feedback after all retries:', item.data);
        submissionQueue.current.shift();
      }
    }
    
    isProcessingQueue.current = false;
  };

  // Add item to submission queue
  const queueFeedback = (data: any) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    submissionQueue.current.push({ id, data, retries: 3 });
    
    // Process queue in background
    setTimeout(() => processSubmissionQueue(), 100);
  };

  // Handle escape key to close bottom sheet
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showBottomSheet) {
        handleCloseBottomSheet();
      }
    };

    if (showBottomSheet) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when sheet is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showBottomSheet]);

  return (
    <div className="flex justify-center w-full">
      {!feedbackSubmitted ? (
        <div className="bg-[#f2f4f7] box-border flex gap-[16px] items-center justify-start px-[16px] py-[8px] relative rounded-[16px]">
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative text-[#667085] text-[12px] text-center text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2] whitespace-pre">{question}</p>
          </div>
          <div className="flex gap-[16px] items-center justify-start relative">
            <button 
              onClick={() => handleFeedback('like')} 
              className="relative shrink-0 size-[20px] hover:scale-110 transition-transform duration-200 cursor-pointer bg-none border-none p-0"
              aria-label="Like this content"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g>
                  <path fill="#667085" d="M18.2812 6.25938C18.1053 6.05994 17.8888 5.90023 17.6464 5.79086C17.4039 5.68148 17.141 5.62495 16.875 5.625H12.5V4.375C12.5 3.5462 12.1708 2.75134 11.5847 2.16529C10.9987 1.57924 10.2038 1.25 9.375 1.25C9.25889 1.24992 9.14505 1.28218 9.04625 1.34317C8.94744 1.40417 8.86758 1.49148 8.81562 1.59531L5.86406 7.5H2.5C2.16848 7.5 1.85054 7.6317 1.61612 7.86612C1.3817 8.10054 1.25 8.41848 1.25 8.75V15.625C1.25 15.9565 1.3817 16.2745 1.61612 16.5089C1.85054 16.7433 2.16848 16.875 2.5 16.875H15.9375C16.3943 16.8752 16.8354 16.7085 17.1781 16.4065C17.5208 16.1044 17.7413 15.6876 17.7984 15.2344L18.7359 7.73437C18.7692 7.47033 18.7458 7.20224 18.6674 6.94792C18.589 6.6936 18.4574 6.45888 18.2812 6.25938ZM2.5 8.75H5.625V15.625H2.5V8.75ZM17.4953 7.57812L16.5578 15.0781C16.5388 15.2292 16.4652 15.3681 16.351 15.4688C16.2368 15.5695 16.0898 15.6251 15.9375 15.625H6.875V8.27266L9.74297 2.53594C10.168 2.62101 10.5505 2.85075 10.8253 3.18605C11.1 3.52135 11.2501 3.9415 11.25 4.375V6.25C11.25 6.41576 11.3158 6.57473 11.4331 6.69194C11.5503 6.80915 11.7092 6.875 11.875 6.875H16.875C16.9637 6.87497 17.0514 6.89382 17.1322 6.93028C17.2131 6.96675 17.2852 7.02001 17.3439 7.08652C17.4026 7.15303 17.4464 7.23126 17.4725 7.31602C17.4986 7.40078 17.5064 7.49013 17.4953 7.57812Z" />
                </g>
              </svg>
            </button>
            <div className="flex h-[20px] items-center justify-center relative shrink-0 w-[0.984px]">
              <div className="flex-none rotate-[90deg]">
                <div className="bg-[#e4e7ec] h-px w-[20px]" />
              </div>
            </div>
            <button 
              onClick={() => handleFeedback('dislike')} 
              className="relative shrink-0 size-[20px] hover:scale-110 transition-transform duration-200 cursor-pointer bg-none border-none p-0"
              aria-label="Dislike this content"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g>
                  <path fill="#667085" d="M18.7359 12.2656L17.7984 4.76563C17.7413 4.31241 17.5208 3.89562 17.1781 3.59354C16.8354 3.29145 16.3943 3.12484 15.9375 3.125H2.5C2.16848 3.125 1.85054 3.2567 1.61612 3.49112C1.3817 3.72554 1.25 4.04348 1.25 4.375V11.25C1.25 11.5815 1.3817 11.8995 1.61612 12.1339C1.85054 12.3683 2.16848 12.5 2.5 12.5H5.86406L8.81563 18.4047C8.86759 18.5085 8.94744 18.5958 9.04625 18.6568C9.14505 18.7178 9.25889 18.7501 9.375 18.75C10.2038 18.75 10.9987 18.4208 11.5847 17.8347C12.1708 17.2487 12.5 16.4538 12.5 15.625V14.375H16.875C17.1411 14.3751 17.4041 14.3186 17.6467 14.2091C17.8892 14.0997 18.1057 13.94 18.2817 13.7404C18.4577 13.5409 18.5892 13.3062 18.6676 13.0519C18.7459 12.7976 18.7692 12.5296 18.7359 12.2656ZM5.625 11.25H2.5V4.375H5.625V11.25ZM17.3438 12.9133C17.2855 12.9803 17.2135 13.0339 17.1325 13.0704C17.0516 13.107 16.9638 13.1256 16.875 13.125H11.875C11.7092 13.125 11.5503 13.1908 11.4331 13.3081C11.3158 13.4253 11.25 13.5842 11.25 13.75V15.625C11.2501 16.0585 11.1 16.4787 10.8253 16.814C10.5505 17.1493 10.168 17.379 9.74297 17.4641L6.875 11.7273V4.375H15.9375C16.0898 4.37495 16.2368 4.43048 16.351 4.53118C16.4653 4.63187 16.5388 4.7708 16.5578 4.92188L17.4953 12.4219C17.507 12.5099 17.4995 12.5994 17.4734 12.6842C17.4472 12.769 17.403 12.8472 17.3438 12.9133Z" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-[#f2f4f7] box-border flex gap-[16px] items-center justify-start px-[16px] py-[8px] relative rounded-[16px]">
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative text-[#667085] text-[12px] text-center text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2] whitespace-pre">Feedback Submitted!</p>
          </div>
          <div className="flex gap-[16px] items-center justify-start relative">
            <div className="relative shrink-0 size-[20px]">
              {isLiked ? (
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g>
                    <path fill="#101828" d="M18.2812 6.25938C18.1053 6.05994 17.8888 5.90023 17.6464 5.79086C17.4039 5.68148 17.141 5.62495 16.875 5.625H12.5V4.375C12.5 3.5462 12.1708 2.75134 11.5847 2.16529C10.9987 1.57924 10.2038 1.25 9.375 1.25C9.25889 1.24992 9.14505 1.28218 9.04625 1.34317C8.94744 1.40417 8.86758 1.49148 8.81562 1.59531L5.86406 7.5H2.5C2.16848 7.5 1.85054 7.6317 1.61612 7.86612C1.3817 8.10054 1.25 8.41848 1.25 8.75V15.625C1.25 15.9565 1.3817 16.2745 1.61612 16.5089C1.85054 16.7433 2.16848 16.875 2.5 16.875H15.9375C16.3943 16.8752 16.8354 16.7085 17.1781 16.4065C17.5208 16.1044 17.7413 15.6876 17.7984 15.2344L18.7359 7.73438C18.7692 7.47033 18.7458 7.20224 18.6674 6.94792C18.589 6.6936 18.4574 6.45888 18.2812 6.25938ZM2.5 8.75H5.625V15.625H2.5V8.75Z" />
                  </g>
                </svg>
              ) : (
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g>
                    <path fill="#101828" d="M18.7359 12.2656L17.7984 4.76563C17.7413 4.31241 17.5208 3.89562 17.1781 3.59354C16.8354 3.29145 16.3943 3.12484 15.9375 3.125H2.5C2.16848 3.125 1.85054 3.2567 1.61612 3.49112C1.3817 3.72554 1.25 4.04348 1.25 4.375V11.25C1.25 11.5815 1.3817 11.8995 1.61612 12.1339C1.85054 12.3683 2.16848 12.5 2.5 12.5H5.86406L8.81563 18.4047C8.86759 18.5085 8.94744 18.5958 9.04625 18.6568C9.14505 18.7178 9.25889 18.7501 9.375 18.75C10.2038 18.75 10.9987 18.4208 11.5847 17.8347C12.1708 17.2487 12.5 16.4538 12.5 15.625V14.375H16.875C17.1411 14.3751 17.4041 14.3186 17.6467 14.2091C17.8892 14.0997 18.1057 13.94 18.2817 13.7404C18.4577 13.5409 18.5892 13.3062 18.6676 13.0519C18.7459 12.7976 18.7692 12.5296 18.7359 12.2656ZM5.625 11.25H2.5V4.375H5.625V11.25Z" />
                  </g>
                </svg>
              )}
            </div>
          </div>
        </div>
      )}

      {showBottomSheet && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-50 transition-all duration-500 ease-out bg-black/50 backdrop-blur-sm"
            onClick={handleCloseBottomSheet}
          />
          
          {/* Bottom Sheet */}
          <div
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-[20px] shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] translate-y-0 scale-100 opacity-100"
            style={{ 
              transformOrigin: 'center bottom'
            }}>
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="font-['Roboto:Bold',_sans-serif] font-bold text-[18px] text-[#101828] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Your Feedback
              </h2>
              <button
                onClick={handleCloseBottomSheet}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Close feedback form"
              >
                <CrossIcon width={24} height={24} />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-[24px] flex flex-col gap-[24px]">
              {/* Subtext */}
              <p className="text-[#667085] text-[14px] font-['Roboto:Regular',_sans-serif] leading-[1.4]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Didn't meet your expectations? Share your feedback — it truly guides how we improve
              </p>
              
              {/* Textarea */}
              <textarea
                value={dislikeReason}
                onChange={(e) => setDislikeReason(e.target.value)}
                placeholder="What would you like to say"
                rows={4}
                className="w-full p-4 rounded-md border border-[#D0D5DD] resize-none focus:outline-none focus:ring-2 focus:ring-[#299d6b] focus:border-transparent font-['Roboto:Regular',_sans-serif] text-[14px] placeholder-[#98A2B3]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
              
              {/* CTA Button */}
              <button 
                className="cta-button cta-button-primary"
                onClick={handleSubmitDislike}
                disabled={!dislikeReason.trim() || isSubmitting}
                style={{ 
                  pointerEvents: (!dislikeReason.trim() || isSubmitting) ? 'none' : 'auto',
                  opacity: (!dislikeReason.trim() || isSubmitting) ? 0.6 : 1,
                  cursor: (!dislikeReason.trim() || isSubmitting) ? 'not-allowed' : 'pointer',
                  background: (!dislikeReason.trim() || isSubmitting) ? '#E6FAF1' : undefined
                }}
              >
                <div 
                  className="cta-button-front py-[22px] px-[16px] mx-[0px] m-[0px]"
                  style={{
                    background: (!dislikeReason.trim() || isSubmitting) ? '#CBF0E0' : undefined,
                    color: (!dislikeReason.trim() || isSubmitting) ? '#ffffff' : undefined,
                    boxShadow: (!dislikeReason.trim() || isSubmitting) ? '0 4px 0 #E6FAF1, 0 8px 16px rgba(230, 250, 241, 0.1), 0 2px 4px rgba(230, 250, 241, 0.05)' : undefined,
                    transform: (!dislikeReason.trim() || isSubmitting) ? 'translateY(-8px)' : undefined
                  }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="font-['Roboto:Bold',_sans-serif] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Submitting...
                      </span>
                    </div>
                  ) : (
                    <span className="font-['Roboto:Bold',_sans-serif] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Submit Feedback
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};


export default FeedbackComponent;
