import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Sun, 
  Contrast, 
  Droplets, 
  Focus, 
  Wind, 
  Thermometer, 
  Sparkles, 
  Moon, 
  Eye, 
  Camera, 
  Eraser, 
  Maximize2, 
  Undo2, 
  Cloud, 
  User, 
  BoxSelect, 
  Share2, 
  Printer, 
  Globe,
  Zap
} from 'lucide-react';
import { ControlGroup } from '../ui/ControlGroup';
import { ExportButton } from '../ui/ExportButton';
import { HistoryItem } from '../ui/HistoryItem';
import { cn } from '../../lib/utils';
import { ToolCategory, ToolSettings } from '../../../types';

interface ControlsSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeCategory: ToolCategory;
  settings: ToolSettings;
  updateSetting: (key: keyof ToolSettings, value: any) => void;
  presets: { id: string; label: string; description: string }[];
}

export function ControlsSidebar({ 
  isOpen, 
  setIsOpen, 
  activeCategory, 
  settings, 
  updateSetting,
  presets 
}: ControlsSidebarProps) {
  
  const renderToolControls = () => {
    switch (activeCategory) {
      case 'CORE':
        return (
          <div className="space-y-6">
            <ControlGroup label="Exposure" value={settings.exposure} min={-100} max={100} onChange={(v) => updateSetting('exposure', v)} icon={Sun} />
            <ControlGroup label="Contrast" value={settings.contrast} min={-100} max={100} onChange={(v) => updateSetting('contrast', v)} icon={Contrast} />
            <ControlGroup label="Saturation" value={settings.saturation} min={-100} max={100} onChange={(v) => updateSetting('saturation', v)} icon={Droplets} />
            <ControlGroup label="Sharpen" value={settings.sharpen} min={0} max={100} onChange={(v) => updateSetting('sharpen', v)} icon={Focus} />
            <ControlGroup label="Noise Reduction" value={settings.noiseReduction} min={0} max={100} onChange={(v) => updateSetting('noiseReduction', v)} icon={Wind} />
            <ControlGroup label="White Balance" value={settings.whiteBalance} min={-100} max={100} onChange={(v) => updateSetting('whiteBalance', v)} icon={Thermometer} />
          </div>
        );
      case 'AUTOMOTIVE':
        return (
          <div className="space-y-6">
            <ControlGroup label="Paint Gloss Boost" value={settings.paintGloss} min={0} max={100} onChange={(v) => updateSetting('paintGloss', v)} icon={Sparkles} />
            <ControlGroup label="Wheel Detail" value={settings.wheelDetail} min={0} max={100} onChange={(v) => updateSetting('wheelDetail', v)} icon={Focus} />
            <ControlGroup label="Night Meet Enhance" value={settings.nightEnhance} min={0} max={100} onChange={(v) => updateSetting('nightEnhance', v)} icon={Moon} />
            <ControlGroup label="Reflection Clean" value={settings.reflectionClean} min={0} max={100} onChange={(v) => updateSetting('reflectionClean', v)} icon={Eye} />
            <ControlGroup label="Showroom Finish" value={settings.showroomFinish} min={0} max={100} onChange={(v) => updateSetting('showroomFinish', v)} icon={Camera} />
          </div>
        );
      case 'STYLE':
        return (
          <div className="space-y-3">
            {presets.map(preset => (
              <button
                key={preset.id}
                onClick={() => updateSetting('preset', preset.id)}
                className={cn(
                  "w-full text-left p-3 rounded-lg border transition-all duration-200",
                  settings.preset === preset.id 
                    ? "bg-accent text-bg border-accent" 
                    : "bg-surface-hover border-border hover:border-accent-muted"
                )}
              >
                <div className="font-medium text-sm">{preset.label}</div>
                <div className={cn("text-[10px] mt-1", settings.preset === preset.id ? "text-bg/70" : "text-accent-muted")}>
                  {preset.description}
                </div>
              </button>
            ))}
          </div>
        );
      case 'BACKGROUND':
        return (
          <div className="space-y-6">
            <ControlGroup label="Background Simplify" value={settings.bgSimplify} min={0} max={100} onChange={(v) => updateSetting('bgSimplify', v)} icon={Eraser} />
            <ControlGroup label="Subject Pop" value={settings.subjectPop} min={0} max={100} onChange={(v) => updateSetting('subjectPop', v)} icon={Maximize2} />
            <ControlGroup label="Bokeh Boost" value={settings.bokeh} min={0} max={100} onChange={(v) => updateSetting('bokeh', v)} icon={Focus} />
          </div>
        );
      case 'FRAMING':
        return (
          <div className="space-y-6">
            <ControlGroup label="Straighten" value={settings.straighten} min={-45} max={45} onChange={(v) => updateSetting('straighten', v)} icon={Undo2} />
            <ControlGroup label="Perspective" value={settings.perspective} min={-100} max={100} onChange={(v) => updateSetting('perspective', v)} icon={Maximize2} />
            <div className="pt-4 border-t border-border">
              <span className="prot0-label">Aspect Ratio</span>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {['Free', '1:1', '4:5', '16:9', '9:16'].map(ratio => (
                  <button
                    key={ratio}
                    onClick={() => updateSetting('crop', ratio === 'Free' ? null : ratio)}
                    className={cn(
                      "py-2 rounded border text-xs font-mono",
                      (ratio === 'Free' ? !settings.crop : settings.crop === ratio) ? "bg-accent text-bg border-accent" : "bg-surface-hover border-border"
                    )}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 'REPAIR':
        return (
          <div className="space-y-6">
            <ControlGroup label="Compression Cleanup" value={settings.compressionCleanup} min={0} max={100} onChange={(v) => updateSetting('compressionCleanup', v)} icon={Wind} />
            <ControlGroup label="Low Quality Restore" value={settings.lowQualityRestore} min={0} max={100} onChange={(v) => updateSetting('lowQualityRestore', v)} icon={Zap} />
            <ControlGroup label="Reflection Reduction" value={settings.reflectionReduction} min={0} max={100} onChange={(v) => updateSetting('reflectionReduction', v)} icon={Eye} />
            <ControlGroup label="Glare Reduction" value={settings.glareReduction} min={0} max={100} onChange={(v) => updateSetting('glareReduction', v)} icon={Sun} />
          </div>
        );
      case 'MASKING':
        return (
          <div className="space-y-6">
            <ControlGroup label="Selective Edit" value={settings.selectiveEdit} min={0} max={100} onChange={(v) => updateSetting('selectiveEdit', v)} icon={BoxSelect} />
            <ControlGroup label="Sky Replace" value={settings.skyReplace} min={0} max={100} onChange={(v) => updateSetting('skyReplace', v)} icon={Cloud} />
            <ControlGroup label="Skin Cleanup" value={settings.skinCleanup} min={0} max={100} onChange={(v) => updateSetting('skinCleanup', v)} icon={User} />
          </div>
        );
      case 'EXPORT':
        return (
          <div className="space-y-4">
            <ExportButton label="Social Ready" icon={Share2} description="Optimized for Instagram, TikTok, etc." />
            <ExportButton label="Print Ready" icon={Printer} description="High-resolution, CMYK profile." />
            <ExportButton label="Web Optimized" icon={Globe} description="Fast loading, small file size." />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          className="fixed md:relative right-0 top-0 bottom-0 w-72 md:w-80 border-l border-border bg-surface flex flex-col z-40 md:z-30 shadow-2xl md:shadow-none"
        >
          <div className="p-6 flex items-center justify-between border-b border-border">
            <h3 className="text-xs font-bold tracking-widest uppercase">{activeCategory}</h3>
            <button onClick={() => setIsOpen(false)} className="text-accent-muted hover:text-accent">
              <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            {renderToolControls()}
          </div>

          <div className="p-6 border-t border-border bg-bg/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-accent-muted uppercase tracking-widest">History</span>
              <span className="text-[10px] font-mono text-accent-muted">08 Steps</span>
            </div>
            <div className="space-y-2">
              <HistoryItem label="Import Original" active />
              <HistoryItem label="Neural Exposure" />
              <HistoryItem label="Gloss Boost" />
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
