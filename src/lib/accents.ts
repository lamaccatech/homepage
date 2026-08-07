export type Accent = 'brand' | 'amber' | 'lilac' | 'mint';

/**
 * Tailwind only sees class strings it can statically find, so accent variants
 * are spelled out here rather than interpolated at call sites.
 */
export const accent: Record<
  Accent,
  {
    text: string;
    solid: string;
    soft: string;
    ring: string;
    glow: string;
    /** Lightened text + wash for use on the ink-coloured sections. */
    textOnDark: string;
    softOnDark: string;
  }
> = {
  brand: {
    text: 'text-brand-600',
    solid: 'bg-brand-600',
    soft: 'bg-brand-600/10',
    ring: 'ring-brand-600/20',
    glow: 'group-hover:shadow-[0_28px_60px_-30px_rgba(197,4,3,0.55)]',
    textOnDark: 'text-brand-300',
    softOnDark: 'bg-brand-600/25',
  },
  amber: {
    text: 'text-amber',
    solid: 'bg-amber',
    soft: 'bg-amber/15',
    ring: 'ring-amber/25',
    glow: 'group-hover:shadow-[0_28px_60px_-30px_rgba(242,169,62,0.6)]',
    textOnDark: 'text-amber',
    softOnDark: 'bg-amber/15',
  },
  lilac: {
    text: 'text-lilac',
    solid: 'bg-lilac',
    soft: 'bg-lilac/12',
    ring: 'ring-lilac/25',
    glow: 'group-hover:shadow-[0_28px_60px_-30px_rgba(142,134,239,0.6)]',
    textOnDark: 'text-lilac',
    softOnDark: 'bg-lilac/18',
  },
  mint: {
    text: 'text-mint',
    solid: 'bg-mint',
    soft: 'bg-mint/12',
    ring: 'ring-mint/25',
    glow: 'group-hover:shadow-[0_28px_60px_-30px_rgba(63,184,148,0.6)]',
    textOnDark: 'text-mint',
    softOnDark: 'bg-mint/15',
  },
};
