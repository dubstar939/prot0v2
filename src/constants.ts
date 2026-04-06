import { 
  Sliders, 
  Car, 
  Palette, 
  Image as ImageIcon, 
  Crop, 
  Wrench, 
  BoxSelect, 
  Download 
} from 'lucide-react';
import { ToolCategory } from '../types';

export const TOOL_CATEGORIES: { id: ToolCategory; label: string; icon: any }[] = [
  { id: 'CORE', label: 'Core Tools', icon: Sliders },
  { id: 'AUTOMOTIVE', label: 'Automotive', icon: Car },
  { id: 'STYLE', label: 'Style Presets', icon: Palette },
  { id: 'BACKGROUND', label: 'Subject/BG', icon: ImageIcon },
  { id: 'FRAMING', label: 'Framing', icon: Crop },
  { id: 'REPAIR', label: 'Repair/Restore', icon: Wrench },
  { id: 'MASKING', label: 'Masking', icon: BoxSelect },
  { id: 'EXPORT', label: 'Export', icon: Download },
];

export const PRESETS = [
  { id: 'coastal_minimalist', label: 'Coastal Minimalist', description: 'Cool whites, soft blues, matte highlights.' },
  { id: 'high_contrast_street', label: 'High Contrast Street', description: 'Bold contrast and crisp micro-detail.' },
  { id: 'film_939', label: 'Film 939', description: 'Warm tones, subtle grain, soft halation.' },
  { id: 'matte_fade', label: 'Matte Fade', description: 'Soft matte finish with lifted shadows.' },
  { id: 'vivid_pop', label: 'Vivid Pop', description: 'Natural boost to vibrancy and clarity.' },
];
