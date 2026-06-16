import React, { useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Undo2, Redo2, Maximize2, Crop } from 'lucide-react';
import { ViewportTool } from '../ui/ViewportTool';
import { cn } from '../../lib/utils';
import { ToolSettings, ToolCategory, CropRect } from '../../../types';
import { CropOverlay } from '../CropOverlay';

interface ViewportProps {
  image: string | null;
  isProcessing: boolean;
  settings: ToolSettings;
  cssFilters: string;
  getRootProps: any;
  getInputProps: any;
  isDragActive: boolean;
  activeCategory: ToolCategory;
  updateSetting: (key: keyof ToolSettings, value: any) => void;
}

export function Viewport({ 
  image, 
  isProcessing, 
  settings, 
  cssFilters, 
  getRootProps, 
  getInputProps, 
  isDragActive,
  activeCategory,
  updateSetting
}: ViewportProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  const numericAspectRatio = useMemo(() => {
    if (!settings.crop) return null;
    const [w, h] = settings.crop.split(':').map(Number);
    if (!w || !h) return null;
    return w / h;
  }, [settings.crop]);

  const handleCropChange = (rect: CropRect) => {
    updateSetting('cropRect', rect);
  };

  // Auto-adjust crop rect when aspect ratio changes
  React.useEffect(() => {
    if (numericAspectRatio && imageRef.current) {
      const bounds = imageRef.current.getBoundingClientRect();
      if (bounds.width === 0 || bounds.height === 0) return;

      const imageAspect = bounds.width / bounds.height;
      const targetRatio = numericAspectRatio / imageAspect;
      
      const { x, y, width, height } = settings.cropRect;
      const currentRatio = width / height;

      if (Math.abs(currentRatio - targetRatio) > 0.001) {
        let newWidth = width;
        let newHeight = height;

        if (currentRatio > targetRatio) {
          newWidth = height * targetRatio;
        } else {
          newHeight = width / targetRatio;
        }

        // Ensure it doesn't exceed bounds
        if (newWidth > 100) {
          newWidth = 100;
          newHeight = newWidth / targetRatio;
        }
        if (newHeight > 100) {
          newHeight = 100;
          newWidth = newHeight * targetRatio;
        }

        const newX = Math.max(0, Math.min(100 - newWidth, x + (width - newWidth) / 2));
        const newY = Math.max(0, Math.min(100 - newHeight, y + (height - newHeight) / 2));

        updateSetting('cropRect', { x: newX, y: newY, width: newWidth, height: newHeight });
      }
    }
  }, [numericAspectRatio, updateSetting]);

  return (
    <div 
      {...getRootProps()} 
      className={cn(
        "flex-1 flex items-center justify-center p-4 md:p-8 transition-colors duration-300 relative min-h-0",
        isDragActive ? "bg-accent/5" : "bg-bg"
      )}
    >
      {/* Neural Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }} 
      />
      
      <input {...getInputProps()} />
      
      {!image ? (
        <div className="text-center space-y-4 max-w-md px-4">
          <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-dashed border-border rounded-3xl flex items-center justify-center mx-auto text-accent-muted group-hover:border-accent transition-colors">
            <ImageIcon size={28} className="md:w-8 md:h-8" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-bold tracking-tight">Drop your masterpiece</h2>
            <p className="text-accent-muted text-xs md:text-sm mt-1">RAW, JPEG, PNG supported. Neural engine ready.</p>
          </div>
          <button className="prot0-button prot0-button-primary mx-auto mt-4 px-6 md:px-8 py-2 md:py-2.5">
            Select File
          </button>
        </div>
      ) : (
        <div className="relative group max-w-full max-h-full w-full h-full flex items-center justify-center">
          <motion.div 
            layoutId="image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative shadow-2xl rounded-sm overflow-hidden border border-border bg-surface max-w-full max-h-full"
          >
            <img 
              ref={imageRef}
              src={image} 
              alt="Preview" 
              className="max-w-full max-h-[60vh] md:max-h-[75vh] object-contain transition-all duration-500"
              style={{ 
                filter: cssFilters,
                transform: `rotate(${settings.straighten}deg) scale(${1 + Math.abs(settings.perspective) / 500})`
              }}
            />
            
            {/* Crop Overlay */}
            {(activeCategory === 'FRAMING' || activeCategory === 'SOCIAL') && (
              <CropOverlay 
                rect={settings.cropRect} 
                onChange={handleCropChange} 
                imageRef={imageRef}
                aspectRatio={numericAspectRatio}
              />
            )}
            
            {/* Neural Processing Overlay */}
            <AnimatePresence>
              {isProcessing && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-bg/20 backdrop-blur-[2px] flex items-center justify-center z-10"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                    <span className="text-[8px] md:text-[10px] font-mono tracking-[0.3em] uppercase animate-pulse">Neural Processing</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Viewport Toolbar - Hidden on mobile, shown on desktop hover */}
          <div className="hidden md:block absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-surface/90 backdrop-blur-md border border-border p-1.5 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ViewportTool icon={Undo2} label="Undo" />
            <ViewportTool icon={Redo2} label="Redo" />
            <div className="w-[1px] h-4 bg-border mx-1" />
            <ViewportTool icon={Maximize2} label="Full Screen" />
            <ViewportTool icon={Crop} label="Crop" />
          </div>
        </div>
      )}
    </div>
  );
}
