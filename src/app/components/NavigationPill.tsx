'use client';

import Link from 'next/link';

interface NavigationPillProps {
  className?: string;
}

export default function NavigationPill({ className = '' }: NavigationPillProps) {
  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 ${className}`}>
      <div className="bg-[#f8f4e9] dark:bg-[#32302f] rounded-full px-4 py-2 shadow-lg border border-[#d7c4a1] dark:border-[#504945] flex items-center gap-6">
        <Link 
          href="/new"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#ebdbb2] dark:hover:bg-[#3c3836] transition-colors"
        >
          <svg className="w-5 h-5 text-[#7c6f64] dark:text-[#a89984]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </Link>
        <Link 
          href="/query"
          className="px-4 py-1.5 rounded-full bg-[#ebdbb2] dark:bg-[#3c3836] text-[#3c3836] dark:text-[#ebdbb2] font-medium text-sm hover:bg-[#d5c4a1] dark:hover:bg-[#504945] transition-colors"
        >
          query
        </Link>
      </div>
    </div>
  );
} 