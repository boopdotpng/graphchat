'use client';

import { ReactNode, useRef, useState, createContext, useContext } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useRouter } from 'next/navigation';
import KeyboardShortcutsModal from './modals/KeyboardShortcutsModal';
import SettingsModal from './modals/SettingsModal';

interface KeyboardShortcutsProviderProps {
  children: ReactNode;
}

interface ShortcutsContextType {
  openSettings: () => void;
  openKeyboardShortcuts: () => void;
  shortcuts: Array<{ key: string; description: string }>;
}

// Create context with default values
export const ShortcutsContext = createContext<ShortcutsContextType>({
  openSettings: () => {},
  openKeyboardShortcuts: () => {},
  shortcuts: []
});

// Hook to use the shortcuts context
export const useShortcuts = () => useContext(ShortcutsContext);

export default function KeyboardShortcutsProvider({ children }: KeyboardShortcutsProviderProps) {
  const router = useRouter();
  const [showShortcutsModal, setShowShortcutsModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Function to open settings modal
  const openSettings = () => {
    setShowSettingsModal(true);
    
  };

  // Function to open keyboard shortcuts modal
  const openKeyboardShortcuts = () => {
    setShowShortcutsModal(true);
  };

  // Navigate to settings - using Alt+, instead of Cmd+,
  useHotkeys('alt+,', (e) => {
    e.preventDefault();
    console.log("open settings")
    openSettings();
  }, {
    enableOnFormTags: false,
    description: 'Open settings'
  });

  // Focus search bar - using Alt+S instead of Cmd+S
  useHotkeys('alt+s', (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('input[placeholder*="ask anything"]') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
    }
  }, {
    enableOnFormTags: true,
    description: 'Focus on search bar'
  });

  // Show keyboard shortcuts - using Alt+/ instead of Cmd+?
  useHotkeys('alt+/', (e) => {
    e.preventDefault();
    openKeyboardShortcuts();
  }, {
    enableOnFormTags: true,
    description: 'Show keyboard shortcuts'
  });

  // Navigate to projects page - using Alt+P instead of Cmd+P
  useHotkeys('alt+p', (e) => {
    e.preventDefault();
    router.push('/projects');
  }, {
    enableOnFormTags: false,
    description: 'Go to projects page'
  });

  // Close modals with Escape key
  useHotkeys('esc', () => {
    if (showShortcutsModal) {
      setShowShortcutsModal(false);
    }
    if (showSettingsModal) {
      setShowSettingsModal(false);
    }
  }, {
    enableOnFormTags: true
  });

  // List of all shortcuts for the modal
  const shortcuts = [
    { key: 'Alt + ,', description: 'Open settings' },
    { key: 'Alt + S', description: 'Focus on search bar' },
    { key: 'Alt + /', description: 'Show keyboard shortcuts' },
    { key: 'Alt + P', description: 'Go to projects page' },
    { key: 'ESC', description: 'Close modals' }
  ];

  // Context value
  const contextValue = {
    openSettings,
    openKeyboardShortcuts,
    shortcuts
  };

  return (
    <ShortcutsContext.Provider value={contextValue}>
      {children}
      
      {/* Modals */}
      <KeyboardShortcutsModal 
        isOpen={showShortcutsModal} 
        onClose={() => setShowShortcutsModal(false)} 
        shortcuts={shortcuts} 
      />
      
      <SettingsModal 
        isOpen={showSettingsModal} 
        onClose={() => setShowSettingsModal(false)} 
      />
    </ShortcutsContext.Provider>
  );
} 