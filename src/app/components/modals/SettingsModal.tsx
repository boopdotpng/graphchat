'use client';

import { useState } from 'react';
import Modal from './Modal';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [fontSize, setFontSize] = useState('medium');

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Settings" maxWidth="max-w-lg">
      <div className="space-y-6">
        {/* Theme Settings */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-[#3c3836] dark:text-[#ebdbb2]">Appearance</h3>
          <div className="flex items-center justify-between">
            <span className="text-[#504945] dark:text-[#d5c4a1]">Dark Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className="w-11 h-6 bg-[#d7c4a1] dark:bg-[#504945] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#504945] dark:text-[#d5c4a1]">Font Size</span>
            <select 
              className="bg-[#ebdbb2] dark:bg-[#3c3836] text-[#3c3836] dark:text-[#ebdbb2] rounded px-3 py-1 border border-[#d7c4a1] dark:border-[#504945]"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-[#3c3836] dark:text-[#ebdbb2]">Notifications</h3>
          <div className="flex items-center justify-between">
            <span className="text-[#504945] dark:text-[#d5c4a1]">Enable Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              <div className="w-11 h-6 bg-[#d7c4a1] dark:bg-[#504945] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4 flex justify-end">
          <button 
            className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            onClick={onClose}
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
} 