'use client';

import Modal from './Modal';

interface ShortcutItem {
  key: string;
  description: string;
}

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
  shortcuts: ShortcutItem[];
}

export default function KeyboardShortcutsModal({ isOpen, onClose, shortcuts }: KeyboardShortcutsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Keyboard Shortcuts">
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
    </Modal>
  );
} 