import { 
  Sliders, 
  Car, 
  Palette, 
  Image as ImageIcon, 
  Crop, 
  Wrench, 
  BoxSelect, 
  Download,
  Share2
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
  { id: 'SOCIAL', label: 'Social Resize', icon: Share2 },
  { id: 'EXPORT', label: 'Export', icon: Download },
];

export const PRESETS = [
  { id: 'coastal_minimalist', label: 'Coastal Minimalist', description: 'Cool whites, soft blues, matte highlights.' },
  { id: 'high_contrast_street', label: 'High Contrast Street', description: 'Bold contrast and crisp micro-detail.' },
  { id: 'film_939', label: 'Film 939', description: 'Warm tones, subtle grain, soft halation.' },
  { id: 'matte_fade', label: 'Matte Fade', description: 'Soft matte finish with lifted shadows.' },
  { id: 'vivid_pop', label: 'Vivid Pop', description: 'Natural boost to vibrancy and clarity.' },
  { id: 'cyberpunk', label: 'Cyberpunk', description: 'Neon pinks, electric blues, and deep shadows.' },
  { id: 'oil_painting', label: 'Oil Painting', description: 'Rich textures, vibrant colors, and brushstroke simulation.' },
  { id: 'sketch', label: 'Sketch', description: 'Hand-drawn pencil effect with high-contrast edges.' },
];

export const SOCIAL_PRESETS = [
  { id: 'ig_post', platform: 'Instagram', label: 'IG Post', aspectRatio: '1:1', description: 'Standard square post.' },
  { id: 'ig_portrait', platform: 'Instagram', label: 'IG Portrait', aspectRatio: '4:5', description: 'Vertical portrait post.' },
  { id: 'ig_story', platform: 'Instagram', label: 'IG Story', aspectRatio: '9:16', description: 'Full-screen vertical story.' },
  { id: 'tiktok', platform: 'TikTok', label: 'TikTok', aspectRatio: '9:16', description: 'Standard vertical video format.' },
  { id: 'yt_thumbnail', platform: 'YouTube', label: 'YT Thumbnail', aspectRatio: '16:9', description: 'Standard widescreen thumbnail.' },
  { id: 'yt_shorts', platform: 'YouTube', label: 'YT Shorts', aspectRatio: '9:16', description: 'Vertical shorts format.' },
];
