import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names to apply to the main layout container.
   */
  className?: string;
}

/**
 * A layout component that centers its content on the page.
 * It provides a full-screen, flex-centered container with a primary background color.
 * This layout is typically used for authentication pages like login or sign-up.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex flex-col items-center justify-center min-h-screen bg-primary',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
