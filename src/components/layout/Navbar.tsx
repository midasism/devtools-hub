import React from 'react';
import { Terminal, Code2, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModeToggle } from "@/components/mode-toggle"

/**
 * Navbar Component
 * Author: midasgao
 * Date: 2026-02-13
 */

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              DevTools Hub
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/json"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              JSON Tools
            </Link>
            {/* Add more links here for Phase 2 */}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search placeholder */}
          </div>
          <nav className="flex items-center space-x-2">
             <Link
              to="https://github.com/midasgao/devtools-hub"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-accent hover:text-accent-foreground">
                 <Code2 className="h-5 w-5" />
                 <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
