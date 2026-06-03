import { 
  Sliders, 
  Car, 
  Palette, 
  Image as ImageIcon, 
  Crop, 
  Wrench, 
  BoxSelect, 
  Download,
  Share2,
  Type,
  LayoutGrid,
  Scissors,
  Sparkles,
  Wand2
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
  { id: 'FONTS', label: 'Fonts', icon: Type },
  { id: 'COLLAGE', label: 'Collage', icon: LayoutGrid },
  { id: 'CUTOUT', label: 'Cutout', icon: Scissors },
  { id: 'RESTORE', label: 'Restore', icon: Sparkles },
  { id: 'EFFECTS', label: 'Effects', icon: Wand2 },
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

export const OPEN_SOURCE_FONTS = [
  // Sans-serif fonts
  { id: 'roboto', name: 'Roboto', family: 'Roboto, sans-serif', category: 'sans-serif' as const },
  { id: 'open_sans', name: 'Open Sans', family: 'Open Sans, sans-serif', category: 'sans-serif' as const },
  { id: 'lato', name: 'Lato', family: 'Lato, sans-serif', category: 'sans-serif' as const },
  { id: 'montserrat', name: 'Montserrat', family: 'Montserrat, sans-serif', category: 'sans-serif' as const },
  { id: 'source_sans_pro', name: 'Source Sans Pro', family: 'Source Sans Pro, sans-serif', category: 'sans-serif' as const },
  { id: 'raleway', name: 'Raleway', family: 'Raleway, sans-serif', category: 'sans-serif' as const },
  { id: 'poppins', name: 'Poppins', family: 'Poppins, sans-serif', category: 'sans-serif' as const },
  { id: 'nunito', name: 'Nunito', family: 'Nunito, sans-serif', category: 'sans-serif' as const },
  
  // Serif fonts
  { id: 'merriweather', name: 'Merriweather', family: 'Merriweather, serif', category: 'serif' as const },
  { id: 'playfair_display', name: 'Playfair Display', family: 'Playfair Display, serif', category: 'serif' as const },
  { id: 'roboto_slab', name: 'Roboto Slab', family: 'Roboto Slab, serif', category: 'serif' as const },
  { id: 'source_serif_pro', name: 'Source Serif Pro', family: 'Source Serif Pro, serif', category: 'serif' as const },
  { id: 'pt_serif', name: 'PT Serif', family: 'PT Serif, serif', category: 'serif' as const },
  
  // Display fonts
  { id: 'oswald', name: 'Oswald', family: 'Oswald, sans-serif', category: 'display' as const },
  { id: 'bebas_neue', name: 'Bebas Neue', family: 'Bebas Neue, cursive', category: 'display' as const },
  { id: 'anton', name: 'Anton', family: 'Anton, sans-serif', category: 'display' as const },
  { id: 'righteous', name: 'Righteous', family: 'Righteous, cursive', category: 'display' as const },
  { id: 'bangers', name: 'Bangers', family: 'Bangers, cursive', category: 'display' as const },
  
  // Handwriting fonts
  { id: 'dancing_script', name: 'Dancing Script', family: 'Dancing Script, cursive', category: 'handwriting' as const },
  { id: 'pacifico', name: 'Pacifico', family: 'Pacifico, cursive', category: 'handwriting' as const },
  { id: 'permanent_marker', name: 'Permanent Marker', family: 'Permanent Marker, cursive', category: 'handwriting' as const },
  { id: 'caveat', name: 'Caveat', family: 'Caveat, cursive', category: 'handwriting' as const },
  { id: 'indie_flower', name: 'Indie Flower', family: 'Indie Flower, cursive', category: 'handwriting' as const },
  
  // Monospace fonts
  { id: 'roboto_mono', name: 'Roboto Mono', family: 'Roboto Mono, monospace', category: 'monospace' as const },
  { id: 'source_code_pro', name: 'Source Code Pro', family: 'Source Code Pro, monospace', category: 'monospace' as const },
  { id: 'fira_code', name: 'Fira Code', family: 'Fira Code, monospace', category: 'monospace' as const },
  { id: 'jetbrains_mono', name: 'JetBrains Mono', family: 'JetBrains Mono, monospace', category: 'monospace' as const },
];

export const COLLAGE_LAYOUTS = [
  { id: 'grid_2x2', name: '2x2 Grid', rows: 2, cols: 2, cells: [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 1, col: 0 }, { row: 1, col: 1 }] },
  { id: 'grid_3x3', name: '3x3 Grid', rows: 3, cols: 3, cells: [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }] },
  { id: 'grid_2x3', name: '2x3 Grid', rows: 2, cols: 3, cells: [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }] },
  { id: 'grid_3x2', name: '3x2 Grid', rows: 3, cols: 2, cells: [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 0 }, { row: 2, col: 1 }] },
  { id: 'featured_left', name: 'Featured Left', rows: 2, cols: 2, cells: [{ row: 0, col: 0, rowspan: 2 }, { row: 0, col: 1 }, { row: 1, col: 1 }] },
  { id: 'featured_top', name: 'Featured Top', rows: 2, cols: 2, cells: [{ row: 0, col: 0, colspan: 2 }, { row: 1, col: 0 }, { row: 1, col: 1 }] },
  { id: 'triptych', name: 'Triptych', rows: 1, cols: 3, cells: [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }] },
  { id: 'diagonal', name: 'Diagonal Split', rows: 2, cols: 2, cells: [{ row: 0, col: 0, colspan: 2 }, { row: 1, col: 0, colspan: 2 }] },
];

export const OVERLAY_OPTIONS = [
  { id: 'none', name: 'None', url: null },
  { id: 'grain', name: 'Film Grain', type: 'noise' },
  { id: 'light_leak_1', name: 'Warm Light Leak', type: 'gradient' },
  { id: 'light_leak_2', name: 'Cool Light Leak', type: 'gradient' },
  { id: 'vignette_heavy', name: 'Heavy Vignette', type: 'radial' },
  { id: 'bokeh', name: 'Bokeh Overlay', type: 'pattern' },
  { id: 'dust', name: 'Dust & Scratches', type: 'noise' },
];
