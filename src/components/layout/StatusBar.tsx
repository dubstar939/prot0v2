import React from 'react';
import { Mode } from '../../../types';

interface StatusBarProps {
  isProcessing: boolean;
  mode: Mode;
  image: string | null;
}

export function StatusBar({ isProcessing, mode, image }: StatusBarProps) {
  return (
    <footer className="h-8 md:h-10 border-t border-border bg-surface flex items-center justify-between px-3 md:px-4 text-[8px] md:text-[9px] font-mono text-accent-muted uppercase tracking-widest flex-shrink-0 overflow-hidden">
      <div className="flex items-center gap-2 md:gap-4 min-w-0">
        <span className="truncate">Status: {isProcessing ? 'Processing' : 'Ready'}</span>
        <span className="hidden sm:inline truncate">Engine: Prot0 Neural v1.0</span>
      </div>
      <div className="flex items-center gap-2 md:gap-4 min-w-0 justify-end">
        <span className="truncate">Mode: {mode}</span>
        <span className="hidden xs:inline truncate">Resolution: {image ? '3840 x 2160' : 'N/A'}</span>
      </div>
    </footer>
  );
}
