import React from 'react';
import { Download, Trash2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Mode } from '../../../types';

interface HeaderProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
  onReset: () => void;
  onExport: () => void;
}

export function Header({ mode, setMode, onReset, onExport }: HeaderProps) {
  return (
    <header className="h-14 md:h-16 border-b border-border flex items-center justify-between px-3 md:px-6 bg-surface/80 backdrop-blur-md z-20 flex-shrink-0">
      <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
        <span className="text-[9px] md:text-xs font-mono tracking-widest uppercase text-accent-muted truncate max-w-[100px] md:max-w-none flex-shrink-0">Prot0 Neural v1.0</span>
        <div className="h-4 w-[1px] bg-border hidden sm:block flex-shrink-0" />
        <div className="flex items-center gap-1 bg-bg rounded-full p-0.5 md:p-1 border border-border flex-shrink-0 overflow-x-auto">
          <button
            onClick={() => setMode('AUTO')}
            className={cn(
              "px-2 md:px-4 py-1 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest transition-all whitespace-nowrap flex-shrink-0",
              mode === 'AUTO' ? "bg-accent text-bg" : "text-accent-muted hover:text-accent"
            )}
          >
            AUTO
          </button>
          <button
            onClick={() => setMode('PRO')}
            className={cn(
              "px-2 md:px-4 py-1 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest transition-all whitespace-nowrap flex-shrink-0",
              mode === 'PRO' ? "bg-accent text-bg" : "text-accent-muted hover:text-accent"
            )}
          >
            PRO
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 ml-2 md:ml-4">
        <button onClick={onReset} className="prot0-button prot0-button-secondary py-1.5 px-2 md:py-1.5 md:px-3 text-[10px] md:text-xs flex-shrink-0">
          <Trash2 size={14} className="md:w-3.5 md:h-3.5 w-4 h-4" /> <span className="hidden sm:inline">Reset</span>
        </button>
        <button onClick={onExport} className="prot0-button prot0-button-primary py-1.5 px-3 md:py-1.5 md:px-4 text-[10px] md:text-xs font-bold flex-shrink-0">
          <Download size={14} className="md:w-3.5 md:h-3.5 w-4 h-4" /> <span className="hidden sm:inline">Export</span>
        </button>
      </div>
    </header>
  );
}
