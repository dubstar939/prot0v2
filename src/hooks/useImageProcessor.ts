import { useState, useCallback, useMemo, useEffect } from 'react';
import { ToolSettings, DEFAULT_SETTINGS, Mode } from '../../types';

export function useImageProcessor() {
  const [image, setImage] = useState<string | null>(null);
  const [settings, setSettings] = useState<ToolSettings>(DEFAULT_SETTINGS);
  const [mode, setMode] = useState<Mode>('AUTO');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageUpload = useCallback((file: File) => {
    const objectUrl = URL.createObjectURL(file);
    setImage(objectUrl);
    
    // Return cleanup function to be used by the component
    return () => URL.revokeObjectURL(objectUrl);
  }, []);

  const updateSetting = useCallback((key: keyof ToolSettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    // Simulate neural processing
    if (mode === 'AUTO') {
      setIsProcessing(true);
      const timer = setTimeout(() => setIsProcessing(false), 500);
      return () => clearTimeout(timer);
    }
  }, [mode]);

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
  }, []);

  const cssFilters = useMemo(() => {
    const { 
      exposure, contrast, saturation, sharpen, noiseReduction, whiteBalance, bokeh,
      paintGloss, wheelDetail, nightEnhance, reflectionClean, showroomFinish,
      bgSimplify, subjectPop, lowQualityRestore, reflectionReduction, glareReduction,
      selectiveEdit, skyReplace, skinCleanup, preset
    } = settings;
    
    let filters = [];
    
    // Core Adjustments
    if (exposure !== 0) filters.push(`brightness(${100 + exposure}%)`);
    if (contrast !== 0) filters.push(`contrast(${100 + contrast}%)`);
    if (saturation !== 0) filters.push(`saturate(${100 + saturation}%)`);
    if (bokeh !== 0) filters.push(`blur(${bokeh / 10}px)`);
    if (whiteBalance !== 0) filters.push(`hue-rotate(${whiteBalance}deg)`);
    
    // Automotive Enhancements (Simulated via CSS filters)
    if (paintGloss !== 0) {
      filters.push(`contrast(${100 + paintGloss / 2}%)`);
      filters.push(`brightness(${100 + paintGloss / 4}%)`);
    }
    if (wheelDetail !== 0) {
      filters.push(`contrast(${100 + wheelDetail}%)`);
    }
    if (nightEnhance !== 0) {
      filters.push(`brightness(${100 + nightEnhance}%)`);
      filters.push(`saturate(${100 + nightEnhance / 2}%)`);
    }
    if (reflectionClean !== 0) {
      filters.push(`contrast(${100 + reflectionClean / 2}%)`);
    }
    if (showroomFinish !== 0) {
      filters.push(`contrast(${100 + showroomFinish / 2}%)`);
      filters.push(`saturate(${100 + showroomFinish / 3}%)`);
      filters.push(`brightness(${100 + showroomFinish / 5}%)`);
    }

    // Other Enhancements
    if (bgSimplify !== 0) filters.push(`blur(${bgSimplify / 20}px)`);
    if (subjectPop !== 0) filters.push(`contrast(${100 + subjectPop / 2}%)`);
    if (lowQualityRestore !== 0) filters.push(`blur(${lowQualityRestore / 50}px)`); // Slight softening to hide artifacts
    if (reflectionReduction !== 0 || glareReduction !== 0) {
      const total = (reflectionReduction + glareReduction) / 2;
      filters.push(`contrast(${100 - total / 4}%)`);
    }

    // Masking (Simulated)
    if (selectiveEdit !== 0) filters.push(`contrast(${100 + selectiveEdit / 4}%)`);
    if (skyReplace !== 0) filters.push(`saturate(${100 + skyReplace / 4}%)`);
    if (skinCleanup !== 0) filters.push(`blur(${skinCleanup / 100}px)`);
    
    // Style Presets
    if (preset === 'cyberpunk') {
      filters.push('hue-rotate(300deg) saturate(200%) contrast(120%) brightness(110%)');
    } else if (preset === 'oil_painting') {
      filters.push('saturate(150%) contrast(110%) blur(0.5px)');
    } else if (preset === 'sketch') {
      filters.push('grayscale(100%) contrast(200%) brightness(120%)');
    } else if (preset === 'coastal_minimalist') {
      filters.push('saturate(80%) brightness(105%) sepia(10%)');
    } else if (preset === 'high_contrast_street') {
      filters.push('contrast(150%) saturate(120%)');
    } else if (preset === 'film_939') {
      filters.push('sepia(20%) saturate(110%) brightness(95%)');
    } else if (preset === 'matte_fade') {
      filters.push('contrast(90%) brightness(110%) saturate(90%)');
    } else if (preset === 'vivid_pop') {
      filters.push('saturate(130%) contrast(110%)');
    }
    
    // Simulation of sharpen/noise reduction via contrast/blur
    if (sharpen > 0) filters.push(`contrast(${100 + sharpen / 2}%)`);
    if (noiseReduction > 0) filters.push(`blur(${noiseReduction / 20}px)`);
    
    return filters.join(' ');
  }, [settings]);

  return {
    image,
    setImage,
    settings,
    setSettings,
    mode,
    setMode,
    isProcessing,
    setIsProcessing,
    handleImageUpload,
    updateSetting,
    resetSettings,
    cssFilters
  };
}
