import React from 'react';
import { Link } from 'react-router-dom';
import { FileJson, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Home Page
 * Author: midasgao
 * Date: 2026-02-13
 */

const Home: React.FC = () => {
  return (
    <div className="container py-12 space-y-12">
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Modern Developer Tools <br className="hidden sm:inline" />
          Hub for Efficiency
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          A collection of fast, beautiful, and powerful online tools designed for developers.
          Dark mode first, privacy-focused, and blazing fast.
        </p>
        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Link to="/json">
            <Button size="lg" className="font-bold">
              Try JSON Formatter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="https://github.com/midasgao/devtools-hub" target="_blank">
            <Button variant="outline" size="lg">
              GitHub
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link to="/json" className="group relative rounded-lg border p-6 hover:bg-accent transition-colors">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-md text-primary group-hover:bg-primary/20 transition-colors">
                <FileJson className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl">JSON Formatter</h3>
            </div>
            <p className="text-muted-foreground">
              Format, validate, and minify JSON data with syntax highlighting and error detection.
            </p>
          </div>
        </Link>
        {/* Placeholders for future tools */}
        <div className="rounded-lg border p-6 opacity-50 cursor-not-allowed border-dashed">
           <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl">Base64 Encoder</h3>
            <p className="text-muted-foreground">Coming Soon...</p>
           </div>
        </div>
        <div className="rounded-lg border p-6 opacity-50 cursor-not-allowed border-dashed">
           <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl">JWT Debugger</h3>
            <p className="text-muted-foreground">Coming Soon...</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
