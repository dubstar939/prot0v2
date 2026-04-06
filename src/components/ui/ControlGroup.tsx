import React from 'react';

interface ControlGroupProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  icon: any;
}

export function ControlGroup({ label, value, min, max, onChange, icon: Icon }: ControlGroupProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon size={14} className="text-accent-muted" />
          <span className="prot0-label mb-0">{label}</span>
        </div>
        <span className="text-[10px] font-mono text-accent">{value > 0 ? `+${value}` : value}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value} 
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="prot0-slider"
      />
    </div>
  );
}
