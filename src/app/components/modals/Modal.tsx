'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  maxWidth?: string;
}

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  maxWidth = 'max-w-md' 
}: ModalProps) {
  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={(e) => {
        // Close when clicking the backdrop
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`bg-[#f8f4e9] dark:bg-[#32302f] rounded-xl p-6 ${maxWidth} w-full shadow-xl border-2 border-[#d7c4a1] dark:border-[#504945]`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#3c3836] dark:text-[#ebdbb2]">{title}</h2>
          <button 
            onClick={onClose}
            className="text-[#7c6f64] dark:text-[#a89984] hover:text-[#3c3836] dark:hover:text-[#ebdbb2]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
} 