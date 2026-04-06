import React from 'react';
import { cn } from '../../lib/utils';

interface HistoryItemProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function HistoryItem({ label, active = false, onClick }: HistoryItemProps) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-[10px] font-medium transition-colors cursor-pointer",
        active ? "bg-accent/10 text-accent border-l-2 border-accent" : "text-accent-muted hover:bg-surface-hover"
      )}
    >
      <div className={cn("w-1 h-1 rounded-full", active ? "bg-accent" : "bg-border")} />
      {label}
    </div>
  );
}
