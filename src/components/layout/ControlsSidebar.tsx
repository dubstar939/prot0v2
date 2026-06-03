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
  Zap,
  Type,
  LayoutGrid,
  Scissors,
  Wand2,
  ImagePlus,
  Palette as PaletteIcon,
  Aperture,
  SunDim,
  Lightbulb,
  CircleDot,
  FishSymbol,
  Layers,
  CircleDashed
} from 'lucide-react';
import { ControlGroup } from '../ui/ControlGroup';
import { ExportButton } from '../ui/ExportButton';
import { HistoryItem } from '../ui/HistoryItem';
import { cn } from '../../lib/utils';
import { ToolCategory, ToolSettings } from '../../../types';
import { PRESETS, SOCIAL_PRESETS, OPEN_SOURCE_FONTS, COLLAGE_LAYOUTS, OVERLAY_OPTIONS } from '../../constants';

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
      case 'SOCIAL':
        return (
          <div className="space-y-3">
            <div className="text-[10px] font-mono text-accent-muted uppercase tracking-widest mb-2">Platform Presets</div>
            {SOCIAL_PRESETS.map(preset => (
              <button
                key={preset.id}
                onClick={() => updateSetting('crop', preset.aspectRatio)}
                className={cn(
                  "w-full text-left p-3 rounded-lg border transition-all duration-200",
                  settings.crop === preset.aspectRatio 
                    ? "bg-accent text-bg border-accent" 
                    : "bg-surface-hover border-border hover:border-accent-muted"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium text-sm">{preset.label}</div>
                  <div className="text-[10px] font-mono opacity-60">{preset.aspectRatio}</div>
                </div>
                <div className={cn("text-[10px] mt-1", settings.crop === preset.aspectRatio ? "text-bg/70" : "text-accent-muted")}>
                  {preset.platform} • {preset.description}
                </div>
              </button>
            ))}
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
      case 'FONTS':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="prot0-label text-xs font-mono uppercase tracking-widest">Font Family</label>
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto custom-scrollbar">
                {OPEN_SOURCE_FONTS.map(font => (
                  <button
                    key={font.id}
                    onClick={() => updateSetting('selectedFont', font.id)}
                    className={cn(
                      "p-2 rounded border text-left transition-all",
                      settings.selectedFont === font.id 
                        ? "bg-accent text-bg border-accent" 
                        : "bg-surface-hover border-border hover:border-accent-muted"
                    )}
                    style={{ fontFamily: font.family }}
                  >
                    <div className="text-xs font-medium truncate">{font.name}</div>
                    <div className="text-[10px] opacity-60 capitalize">{font.category}</div>
                  </button>
                ))}
              </div>
            </div>
            <ControlGroup label="Font Size" value={settings.fontSize} min={8} max={120} onChange={(v) => updateSetting('fontSize', v)} icon={Type} />
            <div className="space-y-2">
              <label className="prot0-label text-xs font-mono uppercase tracking-widest">Font Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={settings.fontColor}
                  onChange={(e) => updateSetting('fontColor', e.target.value)}
                  className="w-10 h-10 rounded border border-border cursor-pointer"
                />
                <span className="text-xs font-mono">{settings.fontColor}</span>
              </div>
            </div>
            <ControlGroup label="Opacity" value={settings.fontOpacity} min={0} max={100} onChange={(v) => updateSetting('fontOpacity', v)} icon={Layers} />
            <div className="space-y-2">
              <label className="prot0-label text-xs font-mono uppercase tracking-widest">Text Content</label>
              <textarea
                value={settings.textContent}
                onChange={(e) => updateSetting('textContent', e.target.value)}
                placeholder="Enter your text..."
                className="w-full bg-surface-hover border border-border rounded-lg p-3 text-sm resize-none focus:outline-none focus:border-accent"
                rows={3}
              />
            </div>
          </div>
        );
      case 'COLLAGE':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="prot0-label text-xs font-mono uppercase tracking-widest">Layout</label>
              <div className="grid grid-cols-2 gap-2">
                {COLLAGE_LAYOUTS.map(layout => (
                  <button
                    key={layout.id}
                    onClick={() => updateSetting('collageLayout', layout.id)}
                    className={cn(
                      "p-3 rounded border text-center transition-all",
                      settings.collageLayout === layout.id 
                        ? "bg-accent text-bg border-accent" 
                        : "bg-surface-hover border-border hover:border-accent-muted"
                    )}
                  >
                    <LayoutGrid size={16} className="mx-auto mb-1" />
                    <div className="text-xs font-medium">{layout.name}</div>
                  </button>
                ))}
              </div>
            </div>
            <ControlGroup label="Spacing" value={settings.collageSpacing} min={0} max={50} onChange={(v) => updateSetting('collageSpacing', v)} icon={LayoutGrid} />
            <div className="space-y-2">
              <label className="prot0-label text-xs font-mono uppercase tracking-widest">Background Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={settings.collageBgColor}
                  onChange={(e) => updateSetting('collageBgColor', e.target.value)}
                  className="w-10 h-10 rounded border border-border cursor-pointer"
                />
                <span className="text-xs font-mono">{settings.collageBgColor}</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="prot0-label text-xs font-mono uppercase tracking-widest">Add Images</label>
              <button className="w-full py-3 border-2 border-dashed border-border rounded-lg text-accent-muted hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2">
                <ImagePlus size={16} />
                <span className="text-sm">Drop or select images</span>
              </button>
              {settings.collageImages.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {settings.collageImages.map((img, idx) => (
                    <div key={idx} className="relative w-16 h-16 rounded overflow-hidden border border-border">
                      <img src={img} alt={`Collage ${idx}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      case 'CUTOUT':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <label className="prot0-label text-xs font-mono uppercase tracking-widest">Enable Cutout</label>
              <button
                onClick={() => updateSetting('cutoutEnabled', !settings.cutoutEnabled)}
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative",
                  settings.cutoutEnabled ? "bg-accent" : "bg-border"
                )}
              >
                <div className={cn(
                  "absolute top-1 w-4 h-4 rounded-full bg-bg transition-transform",
                  settings.cutoutEnabled ? "left-7" : "left-1"
                )} />
              </button>
            </div>
            {settings.cutoutEnabled && (
              <>
                <div className="space-y-2">
                  <label className="prot0-label text-xs font-mono uppercase tracking-widest">Background Color</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={settings.bgColor}
                      onChange={(e) => updateSetting('bgColor', e.target.value)}
                      className="w-10 h-10 rounded border border-border cursor-pointer"
                    />
                    <span className="text-xs font-mono">{settings.bgColor}</span>
                  </div>
                </div>
                <ControlGroup label="Background Blur" value={settings.bgBlur} min={0} max={100} onChange={(v) => updateSetting('bgBlur', v)} icon={CircleDashed} />
                <div className="space-y-2">
                  <label className="prot0-label text-xs font-mono uppercase tracking-widest">Custom Background Image</label>
                  <button className="w-full py-3 border-2 border-dashed border-border rounded-lg text-accent-muted hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2">
                    <ImagePlus size={16} />
                    <span className="text-sm">Select background image</span>
                  </button>
                </div>
              </>
            )}
            <div className="p-4 bg-surface-hover rounded-lg border border-border">
              <div className="text-xs font-mono text-accent-muted mb-2">Auto Cutout Info</div>
              <p className="text-[10px] text-accent-muted leading-relaxed">
                AI-powered subject detection will automatically isolate your subject. 
                Enable cutout mode and choose a custom background or color to replace the original background.
              </p>
            </div>
          </div>
        );
      case 'RESTORE':
        return (
          <div className="space-y-6">
            <div className="text-[10px] font-mono text-accent-muted uppercase tracking-widest mb-2">Image Restoration</div>
            <ControlGroup label="Deblur" value={settings.deblur} min={0} max={100} onChange={(v) => updateSetting('deblur', v)} icon={CircleDashed} />
            <ControlGroup label="Denoise" value={settings.denoise} min={0} max={100} onChange={(v) => updateSetting('denoise', v)} icon={Aperture} />
            <ControlGroup label="Dehaze" value={settings.dehaze} min={0} max={100} onChange={(v) => updateSetting('dehaze', v)} icon={SunDim} />
            <div className="pt-4 border-t border-border">
              <div className="p-4 bg-surface-hover rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={14} className="text-accent" />
                  <span className="text-xs font-medium">AI Enhancement</span>
                </div>
                <p className="text-[10px] text-accent-muted leading-relaxed">
                  Advanced neural networks analyze and restore image quality by reducing blur, removing noise, and clearing atmospheric haze.
                </p>
              </div>
            </div>
          </div>
        );
      case 'EFFECTS':
        return (
          <div className="space-y-6">
            <div className="text-[10px] font-mono text-accent-muted uppercase tracking-widest mb-2">Creative Effects</div>
            <ControlGroup label="Blur Tool" value={settings.blurTool} min={0} max={100} onChange={(v) => updateSetting('blurTool', v)} icon={CircleDashed} />
            <ControlGroup label="Vignette" value={settings.vignette} min={0} max={100} onChange={(v) => updateSetting('vignette', v)} icon={CircleDot} />
            <ControlGroup label="Light Hits" value={settings.lightHits} min={0} max={100} onChange={(v) => updateSetting('lightHits', v)} icon={Lightbulb} />
            <ControlGroup label="HDR" value={settings.hdr} min={0} max={100} onChange={(v) => updateSetting('hdr', v)} icon={Sun} />
            <ControlGroup label="Fisheye" value={settings.fisheye} min={0} max={100} onChange={(v) => updateSetting('fisheye', v)} icon={FishSymbol} />
            <div className="pt-4 border-t border-border">
              <label className="prot0-label text-xs font-mono uppercase tracking-widest mb-2 block">Overlay</label>
              <div className="grid grid-cols-3 gap-2">
                {OVERLAY_OPTIONS.map(overlay => (
                  <button
                    key={overlay.id}
                    onClick={() => updateSetting('overlay', overlay.id)}
                    className={cn(
                      "p-2 rounded border text-center transition-all",
                      settings.overlay === overlay.id 
                        ? "bg-accent text-bg border-accent" 
                        : "bg-surface-hover border-border hover:border-accent-muted"
                    )}
                  >
                    <Layers size={14} className="mx-auto mb-1" />
                    <div className="text-[10px] font-medium truncate">{overlay.name}</div>
                  </button>
                ))}
              </div>
              {settings.overlay && settings.overlay !== 'none' && (
                <ControlGroup label="Overlay Opacity" value={settings.overlayOpacity} min={0} max={100} onChange={(v) => updateSetting('overlayOpacity', v)} icon={Layers} />
              )}
            </div>
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
