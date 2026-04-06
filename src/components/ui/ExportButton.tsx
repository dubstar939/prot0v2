import React from 'react';

interface ExportButtonProps {
  label: string;
  icon: any;
  description: string;
  onClick?: () => void;
}

export function ExportButton({ label, icon: Icon, description, onClick }: ExportButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="w-full group text-left p-4 rounded-xl bg-surface-hover border border-border hover:border-accent-muted transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-1">
        <div className="p-2 rounded-lg bg-bg text-accent-muted group-hover:text-accent transition-colors">
          <Icon size={18} />
        </div>
        <span className="font-bold text-sm tracking-tight">{label}</span>
      </div>
      <p className="text-[10px] text-accent-muted ml-11">{description}</p>
    </button>
  );
}
