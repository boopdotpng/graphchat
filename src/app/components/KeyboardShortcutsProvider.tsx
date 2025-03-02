'use client';

import { ReactNode, useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

interface KeyboardShortcutsProviderProps {
  children: ReactNode;
}

export default function KeyboardShortcutsProvider({ children }: KeyboardShortcutsProviderProps) {
  const router = useRouter();
  const [showShortcutsModal, setShowShortcutsModal] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Navigate to settings
  useHotkeys('cmd+,', (e) => {
    e.preventDefault();
    router.push('/profile');
  }, {
    enableOnFormTags: false,
    description: 'Open settings'
  });

  // Focus search bar
  useHotkeys('cmd+s', (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('input[placeholder*="ask anything"]') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
    }
  }, {
    enableOnFormTags: true,
    description: 'Focus on search bar'
  });

  // Show keyboard shortcuts
  useHotkeys('cmd+?', (e) => {
    e.preventDefault();
    setShowShortcutsModal(true);
  }, {
    enableOnFormTags: true,
    description: 'Show keyboard shortcuts'
  });

  // Navigate to projects page
  useHotkeys('cmd+p', (e) => {
    e.preventDefault();
    router.push('/projects');
  }, {
    enableOnFormTags: false,
    description: 'Go to projects page'
  });

  // Close modal with Escape key
  useHotkeys('esc', () => {
    if (showShortcutsModal) {
      setShowShortcutsModal(false);
    }
  }, {
    enableOnFormTags: true
  });

  // List of all shortcuts for the modal
  const shortcuts = [
    { key: '⌘ + ,', description: 'Open settings' },
    { key: '⌘ + S', description: 'Focus on search bar' },
    { key: '⌘ + ?', description: 'Show keyboard shortcuts' },
    { key: '⌘ + P', description: 'Go to projects page' },
    { key: 'ESC', description: 'Close modals' }
  ];

  return (
    <>
      {children}
      
      {/* Keyboard Shortcuts Modal */}
      {showShortcutsModal && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#f8f4e9] dark:bg-[#32302f] rounded-xl p-6 max-w-md w-full shadow-xl border-2 border-[#d7c4a1] dark:border-[#504945]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#3c3836] dark:text-[#ebdbb2]">Keyboard Shortcuts</h2>
              <button 
                onClick={() => setShowShortcutsModal(false)}
                className="text-[#7c6f64] dark:text-[#a89984] hover:text-[#3c3836] dark:hover:text-[#ebdbb2]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="divide-y divide-[#d7c4a1] dark:divide-[#504945]">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="py-3 flex justify-between">
                  <span className="text-[#3c3836] dark:text-[#ebdbb2]">{shortcut.description}</span>
                  <kbd className="px-2 py-1 bg-[#ebdbb2] dark:bg-[#3c3836] rounded text-[#3c3836] dark:text-[#ebdbb2] text-sm font-mono">
                    {shortcut.key}
                  </kbd>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
} 