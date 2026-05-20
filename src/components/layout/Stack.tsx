import { type ElementType, type ReactNode, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

// ─────────────────────────────────────────────────────────────────────────────
// STACK
// A vertical flex container for consistent spacing between children.
// Use this instead of adding `space-y-*` or margin utilities manually.
//
// Example — evenly-spaced feature list:
//   <Stack gap="md">
//     <FeatureCard ... />
//     <FeatureCard ... />
//     <FeatureCard ... />
//   </Stack>
// ─────────────────────────────────────────────────────────────────────────────

type StackGap   = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type StackAlign = 'start' | 'center' | 'end' | 'stretch'

const gapMap: Record<StackGap, string> = {
  none: 'gap-0',
  xs:   'gap-2',
  sm:   'gap-4',
  md:   'gap-6',
  lg:   'gap-8',
  xl:   'gap-12',
}

const alignMap: Record<StackAlign, string> = {
  start:   'items-start',
  center:  'items-center',
  end:     'items-end',
  stretch: 'items-stretch',
}

interface StackProps extends HTMLAttributes<HTMLElement> {
  /** Gap between children. Defaults to 'md'. */
  gap?: StackGap
  /** Cross-axis alignment. Defaults to 'stretch'. */
  align?: StackAlign
  /** Render as a different HTML element. Defaults to 'div'. */
  as?: ElementType
  children: ReactNode
}

export function Stack({
  gap = 'md',
  align = 'stretch',
  as: Tag = 'div',
  className,
  children,
  ...rest
}: StackProps) {
  return (
    <Tag
      className={cn(
        'flex flex-col',
        gapMap[gap],
        alignMap[align],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
