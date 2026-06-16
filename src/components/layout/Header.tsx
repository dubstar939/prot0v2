import React, { useState, useEffect } from 'react';
import { Download, Trash2, Smartphone } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Mode } from '../../../types';

interface HeaderProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
  onReset: () => void;
  onExport: () => void;
}

export function Header({ mode, setMode, onReset, onExport }: HeaderProps) {
  const [isIOS, setIsIOS] = useState(false);
  const [showInstallPrompt, setShowInstallPrompt] = useState(true);

  useEffect(() => {
    // Detect iOS devices
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // Check if user has dismissed the prompt before
    const hasDismissedPrompt = localStorage.getItem('novapix-install-dismissed');
    if (hasDismissedPrompt) {
      setShowInstallPrompt(false);
    }
  }, []);

  const handleInstallDismiss = () => {
    setShowInstallPrompt(false);
    localStorage.setItem('novapix-install-dismissed', 'true');
  };

  return (
    <header className="h-14 border-b border-border flex items-center justify-between px-4 md:px-6 bg-surface/80 backdrop-blur-md z-20">
      <div className="flex items-center gap-2 md:gap-4">
        <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-accent-muted truncate max-w-[120px] md:max-w-none">NOVAPIX v1.0</span>
        <div className="h-4 w-[1px] bg-border hidden sm:block" />
        <div className="flex items-center gap-1 bg-bg rounded-full p-0.5 md:p-1 border border-border">
          <button
            onClick={() => setMode('AUTO')}
            className={cn(
              "px-2 md:px-4 py-0.5 md:py-1 rounded-full text-[8px] md:text-[10px] font-bold tracking-widest transition-all",
              mode === 'AUTO' ? "bg-accent text-bg" : "text-accent-muted hover:text-accent"
            )}
          >
            AUTO
          </button>
          <button
            onClick={() => setMode('PRO')}
            className={cn(
              "px-2 md:px-4 py-0.5 md:py-1 rounded-full text-[8px] md:text-[10px] font-bold tracking-widest transition-all",
              mode === 'PRO' ? "bg-accent text-bg" : "text-accent-muted hover:text-accent"
            )}
          >
            PRO
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        {/* Mobile install prompt for iOS */}
        {isIOS && showInstallPrompt && (
          <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-surface border border-border rounded-lg p-4 shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Smartphone size={20} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-ink mb-1">Install NOVAPIX</p>
                  <p className="text-xs text-accent-muted leading-relaxed">
                    Tap <span className="inline-flex items-center justify-center w-5 h-5 bg-bg rounded mx-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg></span> then "Add to Home Screen" for quick access
                  </p>
                </div>
              </div>
              <button
                onClick={handleInstallDismiss}
                className="text-accent-muted hover:text-ink flex-shrink-0"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
        )}
        
        <button onClick={onReset} className="prot0-button prot0-button-secondary py-1 px-2 md:py-1.5 md:px-3 text-[10px] md:text-xs">
          <Trash2 size={12} className="md:w-3.5 md:h-3.5" /> <span className="hidden sm:inline">Reset</span>
        </button>
        <button onClick={onExport} className="prot0-button prot0-button-primary py-1 px-3 md:py-1.5 md:px-4 text-[10px] md:text-xs font-bold">
          <Download size={12} className="md:w-3.5 md:h-3.5" /> <span className="hidden sm:inline">Export</span>
        </button>
      </div>
    </header>
  );
}
