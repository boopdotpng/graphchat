'use client';

import NavigationPill from '../components/NavigationPill';
import ProfileButton from '../components/ProfileButton';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <ProfileButton />
      {children}
      <NavigationPill />
    </div>
  );
} 