'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface NavigationPillProps {
  className?: string;
}

interface SlashCommand {
  command: string;
  description: string;
  action: () => void;
}

export default function NavigationPill({ className = '' }: NavigationPillProps) {
  const [isQueryMode, setIsQueryMode] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [showCommands, setShowCommands] = useState(false);
  const [selectedCommandIndex, setSelectedCommandIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  
  // Check if we're in an individual project view
  const isProjectView = pathname.match(/^\/projects\/[^\/]+$/);

  // Get the last word being typed
  const getLastWord = () => {
    const words = inputValue.split(/\s/);
    return words[words.length - 1];
  };

  // Define available slash commands
  const slashCommands: SlashCommand[] = [
    {
      command: '/query',
      description: 'Toggle query mode',
      action: () => {
        setIsQueryMode(true);
        setInputValue(inputValue.slice(0, -getLastWord().length).trim());
      }
    },
    {
      command: '/file',
      description: 'Upload a file',
      action: () => {
        fileInputRef.current?.click();
        setInputValue(inputValue.slice(0, -getLastWord().length).trim());
      }
    }
  ];

  // Filter commands based on input
  const filteredCommands = slashCommands.filter(cmd => 
    cmd.command.toLowerCase().startsWith(getLastWord().toLowerCase())
  );

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setUploadedFiles(prev => [...prev, ...Array.from(files)]);
    }
  };

  const handleQueryToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsQueryMode(!isQueryMode);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    const lastWord = value.split(/\s/).pop() || '';
    if (lastWord.startsWith('/')) {
      setShowCommands(true);
      setSelectedCommandIndex(0);
    } else {
      setShowCommands(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!showCommands) return;

    if (e.key === 'Tab' || e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands.length > 0) {
        filteredCommands[selectedCommandIndex].action();
        setShowCommands(false);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedCommandIndex(prev => 
        prev < filteredCommands.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedCommandIndex(prev => prev > 0 ? prev - 1 : prev);
    } else if (e.key === 'Escape') {
      setShowCommands(false);
    }
  };

  const handleCommandClick = (command: SlashCommand) => {
    command.action();
    setShowCommands(false);
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add submit logic here
    console.log('Submit clicked', { inputValue, isQueryMode, uploadedFiles });
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  // Close commands menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showCommands && !(e.target as HTMLElement).closest('.navigation-pill')) {
        setShowCommands(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCommands]);

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-1/2 max-w-xl navigation-pill ${className}`}>
      <div className="bg-[#f8f4e9] dark:bg-[#32302f] border-2 border-[#d7c4a1] dark:border-[#504945] rounded-3xl p-4 flex flex-col shadow-lg relative">
        {/* Slash Commands Menu */}
        {showCommands && filteredCommands.length > 0 && (
          <div className="absolute bottom-full mb-2 w-64 bg-[#f8f4e9] dark:bg-[#32302f] border-2 border-[#d7c4a1] dark:border-[#504945] rounded-lg shadow-lg overflow-hidden">
            {filteredCommands.map((cmd, index) => (
              <button
                key={cmd.command}
                className={`w-full px-4 py-2 text-left flex items-center justify-between hover:bg-[#ebdbb2] dark:hover:bg-[#3c3836] ${
                  index === selectedCommandIndex ? 'bg-[#ebdbb2] dark:bg-[#3c3836]' : ''
                }`}
                onClick={() => handleCommandClick(cmd)}
              >
                <span className="text-[#3c3836] dark:text-[#ebdbb2] font-mono">
                  {cmd.command}
                </span>
                <span className="text-[#7c6f64] dark:text-[#a89984] text-sm">
                  {cmd.description}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* File Upload Preview */}
        {uploadedFiles.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {uploadedFiles.map((file, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-[#ebdbb2] dark:bg-[#3c3836] px-3 py-1 rounded-full text-sm"
              >
                <span className="text-[#3c3836] dark:text-[#ebdbb2] truncate max-w-[150px]">
                  {file.name}
                </span>
                <button
                  onClick={() => removeFile(index)}
                  className="text-[#7c6f64] dark:text-[#a89984] hover:text-[#3c3836] dark:hover:text-[#ebdbb2]"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        
        {/* Multi-line Input */}
        <textarea 
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={
            isQueryMode 
              ? "write a natural language query to search through your data..."
              : isProjectView 
                ? "ask anything about this project" 
                : "ask anything (new project)"
          } 
          className="text-lg mb-4 bg-transparent border-none focus:outline-none text-[#3c3836] dark:text-[#ebdbb2] placeholder-[#7c6f64] dark:placeholder-[#a89984] resize-none min-h-[24px] max-h-[144px] overflow-y-auto"
          rows={Math.min(6, Math.max(1, inputValue.split('\n').length))}
        />
        
        <div className="flex mt-auto items-center">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".csv,.json,.txt"
            multiple
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