import React from 'react';
import { Settings2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ToolCategory } from '../../../types';

interface SidebarProps {
  categories: { id: ToolCategory; label: string; icon: any }[];
  activeCategory: ToolCategory;
  setActiveCategory: (cat: ToolCategory) => void;
}

export function Sidebar({ categories, activeCategory, setActiveCategory }: SidebarProps) {
  return (
    <aside className="w-full md:w-16 h-16 md:h-full border-t md:border-t-0 md:border-r border-border flex flex-row md:flex-col items-center justify-around md:justify-start py-0 md:py-6 gap-0 md:gap-6 bg-surface z-30 order-last md:order-first fixed md:relative bottom-0 md:bottom-auto left-0 md:left-auto right-0 md:right-auto">
      <div className="hidden md:flex w-10 h-10 bg-accent text-bg rounded-xl items-center justify-center font-black text-xl mb-4">
        P0
      </div>
      <div className="flex md:flex-col items-center justify-around md:justify-start w-full md:w-auto gap-0 md:gap-6 px-2 md:px-0 overflow-x-auto md:overflow-visible">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "p-3 rounded-xl transition-all duration-200 group relative flex-shrink-0",
              activeCategory === cat.id ? "bg-accent text-bg" : "text-accent-muted hover:text-accent hover:bg-surface-hover"
            )}
          >
            <cat.icon size={20} />
            <div className="hidden md:block absolute left-full ml-4 px-2 py-1 bg-surface border border-border rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              {cat.label}
            </div>
          </button>
        ))}
      </div>
      <div className="hidden md:flex mt-auto flex-col gap-4">
        <button className="p-3 text-accent-muted hover:text-accent"><Settings2 size={20} /></button>
      </div>
    </aside>
  );
}
