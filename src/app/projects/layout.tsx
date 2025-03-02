'use client';

import NavigationPill from '../components/NavigationPill';
import ProfileButton from '../components/ProfileButton';
import { useShortcuts } from '../components/KeyboardShortcutsProvider';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { openSettings, openKeyboardShortcuts } = useShortcuts();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ProfileButton 
        onOpenSettings={openSettings}
        onOpenKeyboardShortcuts={openKeyboardShortcuts}
      />
      <main className="h-full w-full">
        {children}
      </main>
      <NavigationPill />
    </div>
  );
} 