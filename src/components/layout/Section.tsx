import { type ElementType, type ReactNode, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

// ─────────────────────────────────────────────────────────────────────────────
// SECTION
// The bread-and-butter of every page.
// Wraps semantic <section> (or any tag) with:
//   • spacing  → vertical padding variants (none → hero)
//   • bg       → themed background surface
//   • border   → optional top/bottom dividers
// ─────────────────────────────────────────────────────────────────────────────

type SectionSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero'
type SectionBg      = 'default' | 'muted' | 'subtle' | 'inverted' | 'accent'
type SectionBorder  = 'none' | 'top' | 'bottom' | 'both'

const spacingMap: Record<SectionSpacing, string> = {
  none: 'py-0',
  xs:   'py-6',
  sm:   'py-10',
  md:   'py-16',
  lg:   'py-20 md:py-24',
  xl:   'py-24 md:py-32',
  hero: 'py-28 md:py-40',
}

const bgMap: Record<SectionBg, string> = {
  default:  'bg-background',
  muted:    'bg-muted/40',
  subtle:   'bg-muted/20',
  inverted: 'bg-foreground text-background',
  accent:   'bg-primary/5',
}

const borderMap: Record<SectionBorder, string> = {
  none:   '',
  top:    'border-t border-border',
  bottom: 'border-b border-border',
  both:   'border-y border-border',
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Controls vertical padding. Defaults to 'lg'. */
  spacing?: SectionSpacing
  /** Background surface. Defaults to 'default'. */
  bg?: SectionBg
  /** Optional divider lines. Defaults to 'none'. */
  border?: SectionBorder
  /** Render as a different HTML element. Defaults to 'section'. */
  as?: ElementType
  children: ReactNode
}

export function Section({
  spacing = 'lg',
  bg = 'default',
  border = 'none',
  as: Tag = 'section',
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag
      className={cn(
        spacingMap[spacing],
        bgMap[bg],
        borderMap[border],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
