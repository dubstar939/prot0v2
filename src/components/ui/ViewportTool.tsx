import React from 'react';

interface ViewportToolProps {
  icon: any;
  label: string;
  onClick?: () => void;
}

export function ViewportTool({ icon: Icon, label, onClick }: ViewportToolProps) {
  return (
    <button 
      onClick={onClick}
      className="p-2 text-accent-muted hover:text-accent hover:bg-white/10 rounded-full transition-all group relative"
    >
      <Icon size={18} />
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-surface border border-border rounded text-[9px] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
        {label}
      </div>
    </button>
  );
}
