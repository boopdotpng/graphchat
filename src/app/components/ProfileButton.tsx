'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ProfileButtonProps {
  className?: string;
}

export default function ProfileButton({ className = '' }: ProfileButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed top-6 right-6 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-[#f8f4e9] dark:bg-[#32302f] border border-[#d7c4a1] dark:border-[#504945] shadow-lg flex items-center justify-center hover:bg-[#ebdbb2] dark:hover:bg-[#3c3836] transition-colors"
      >
        <svg className="w-6 h-6 text-[#7c6f64] dark:text-[#a89984]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 rounded-lg bg-[#f8f4e9] dark:bg-[#32302f] border border-[#d7c4a1] dark:border-[#504945] shadow-lg py-1">
          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-[#3c3836] dark:text-[#ebdbb2] hover:bg-[#ebdbb2] dark:hover:bg-[#3c3836]"
          >
            Profile Settings
          </Link>
          <button
            className="block w-full text-left px-4 py-2 text-sm text-[#3c3836] dark:text-[#ebdbb2] hover:bg-[#ebdbb2] dark:hover:bg-[#3c3836]"
            onClick={() => {/* Add logout logic */}}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
} 