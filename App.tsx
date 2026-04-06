import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { ChevronLeft } from 'lucide-react';
import { useImageProcessor } from './src/hooks/useImageProcessor';
import { Sidebar } from './src/components/layout/Sidebar';
import { Header } from './src/components/layout/Header';
import { Viewport } from './src/components/layout/Viewport';
import { ControlsSidebar } from './src/components/layout/ControlsSidebar';
import { StatusBar } from './src/components/layout/StatusBar';
import { TOOL_CATEGORIES, PRESETS } from './src/constants';
import { ToolCategory } from './types';

export default function App() {
  const {
    image,
    settings,
    mode,
    setMode,
    isProcessing,
    setIsProcessing,
    handleImageUpload,
    updateSetting,
    resetSettings,
    cssFilters
  } = useImageProcessor();

  const [activeCategory, setActiveCategory] = useState<ToolCategory>('CORE');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const cleanup = handleImageUpload(file);
      return cleanup;
    }
  }, [handleImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
    noClick: !!image,
  } as any);

  const handleExport = () => {
    if (!image) return;
    
    setIsProcessing(true);
    
    const canvas = document.createElement('canvas');
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = image;
    
    img.onload = () => {
      // Calculate dimensions with rotation/perspective if needed
      // For simplicity, we'll use original dimensions
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        // Apply CSS filters to canvas context
        // Note: ctx.filter is supported in modern browsers
        ctx.filter = cssFilters;
        
        // Handle rotation
        if (settings.straighten !== 0) {
          ctx.translate(canvas.width / 2, canvas.height / 2);
          ctx.rotate((settings.straighten * Math.PI) / 180);
          ctx.translate(-canvas.width / 2, -canvas.height / 2);
        }
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Trigger download
        const link = document.createElement('a');
        link.download = `prot0-neural-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      }
      
      setIsProcessing(false);
    };

    img.onerror = () => {
      console.error("Failed to load image for export");
      setIsProcessing(false);
    };
  };

  return (
    <div className="flex h-screen bg-bg text-accent font-sans overflow-hidden flex-col md:flex-row">
      {/* Left Sidebar - Categories */}
      <Sidebar 
        categories={TOOL_CATEGORIES} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <Header 
          mode={mode} 
          setMode={setMode} 
          onReset={resetSettings} 
          onExport={handleExport} 
        />

        <Viewport 
          image={image}
          isProcessing={isProcessing}
          settings={settings}
          cssFilters={cssFilters}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          isDragActive={isDragActive}
          activeCategory={activeCategory}
          updateSetting={updateSetting}
        />

        <StatusBar 
          isProcessing={isProcessing} 
          mode={mode} 
          image={image} 
        />
      </main>

      {/* Right Sidebar - Controls */}
      <ControlsSidebar 
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        activeCategory={activeCategory}
        settings={settings}
        updateSetting={updateSetting}
        presets={PRESETS}
      />

      {!sidebarOpen && (
        <button 
          onClick={() => setSidebarOpen(true)}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-12 bg-surface border-l border-y border-border rounded-l-md flex items-center justify-center text-accent-muted hover:text-accent z-40"
        >
          <ChevronLeft size={16} />
        </button>
      )}
    </div>
  );
}

