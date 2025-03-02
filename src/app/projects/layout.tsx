'use client';

import NavigationPill from '../components/NavigationPill';
import ProfileButton from '../components/ProfileButton';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ProfileButton />
      <main className="h-full w-full">
        {children}
      </main>
      <NavigationPill />
    </div>
  );
} 