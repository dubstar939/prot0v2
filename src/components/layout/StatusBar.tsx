import React from 'react';
import { Mode } from '../../../types';

interface StatusBarProps {
  isProcessing: boolean;
  mode: Mode;
  image: string | null;
}

export function StatusBar({ isProcessing, mode, image }: StatusBarProps) {
  return (
    <footer className="h-8 border-t border-border bg-surface flex items-center justify-between px-4 text-[9px] font-mono text-accent-muted uppercase tracking-widest">
      <div className="flex items-center gap-4">
        <span>Status: {isProcessing ? 'Processing' : 'Ready'}</span>
        <span>Engine: NOVAPIX v1.0</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Mode: {mode}</span>
        <span>Resolution: {image ? '3840 x 2160' : 'N/A'}</span>
      </div>
    </footer>
  );
}
