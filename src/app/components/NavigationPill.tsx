'use client';

import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface NavigationPillProps {
  className?: string;
}

export default function NavigationPill({ className = '' }: NavigationPillProps) {
  const [isQueryMode, setIsQueryMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  
  // Check if we're in an individual project view
  const isProjectView = pathname.match(/^\/projects\/[^\/]+$/);
  
  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the file upload here
      console.log('File selected:', file);
    }
  };

  const handleQueryToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsQueryMode(!isQueryMode);
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add submit logic here
    console.log('Submit clicked');
  };

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-1/2 max-w-xl ${className}`}>
      <div className="h-32 bg-[#f8f4e9] dark:bg-[#32302f] border-2 border-[#d7c4a1] dark:border-[#504945] rounded-3xl p-4 flex flex-col shadow-lg">
        <input 
          placeholder={isProjectView ? "ask anything about this project" : "ask anything (new project)"} 
          className="text-lg mb-4 bg-transparent border-none focus:outline-none text-[#3c3836] dark:text-[#ebdbb2] placeholder-[#7c6f64] dark:placeholder-[#a89984]" 
        />
        <div className="flex mt-auto items-center">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".csv,.json,.txt"
          />
          <button
            onClick={handleAddClick}
            className="w-10 h-10 border-2 border-[#d7c4a1] dark:border-[#504945] rounded-full flex items-center justify-center hover:bg-[#ebdbb2] dark:hover:bg-[#3c3836] transition-colors cursor-pointer"
          >
            <span className="text-2xl text-[#7c6f64] dark:text-[#a89984]">+</span>
          </button>
          <button
            onClick={handleQueryToggle}
            className={`ml-4 px-4 py-1 border-2 border-[#d7c4a1] dark:border-[#504945] rounded-lg transition-colors cursor-pointer ${
              isQueryMode 
                ? 'bg-[#ebdbb2] dark:bg-[#3c3836]' 
                : 'hover:bg-[#ebdbb2] dark:hover:bg-[#3c3836]'
            }`}
          >
            <span className="text-[#3c3836] dark:text-[#ebdbb2]">query</span>
          </button>
          <button 
            className="ml-auto w-10 h-10 border-2 border-[#d7c4a1] dark:border-[#504945] rounded-full flex items-center justify-center hover:bg-[#ebdbb2] dark:hover:bg-[#3c3836] transition-colors cursor-pointer"
            onClick={handleSubmit}
          >
            <span className="text-xl text-[#7c6f64] dark:text-[#a89984]">↑</span>
          </button>
        </div>
      </div>
    </div>
  );
} 