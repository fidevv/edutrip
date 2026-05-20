import { type ElementType, type ReactNode, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

// ─────────────────────────────────────────────────────────────────────────────
// GRID
// Responsive CSS Grid with explicit breakpoint column control.
// Covers the most common responsive patterns (1 → 2 → 3 → 4 cols).
//
// Example — responsive card grid:
//   <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap="md">
//     <Card ... />
//     <Card ... />
//     <Card ... />
//   </Grid>
// ─────────────────────────────────────────────────────────────────────────────

type ColCount = 1 | 2 | 3 | 4 | 5 | 6
type GridGap  = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface GridCols {
  /** Mobile-first base column count. */
  base?: ColCount
  sm?:   ColCount
  md?:   ColCount
  lg?:   ColCount
  xl?:   ColCount
}

const colBaseMap: Record<ColCount, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
}
const colSmMap:   Record<ColCount, string> = { 1: 'sm:grid-cols-1', 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-4', 5: 'sm:grid-cols-5', 6: 'sm:grid-cols-6' }
const colMdMap:   Record<ColCount, string> = { 1: 'md:grid-cols-1', 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4', 5: 'md:grid-cols-5', 6: 'md:grid-cols-6' }
const colLgMap:   Record<ColCount, string> = { 1: 'lg:grid-cols-1', 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4', 5: 'lg:grid-cols-5', 6: 'lg:grid-cols-6' }
const colXlMap:   Record<ColCount, string> = { 1: 'xl:grid-cols-1', 2: 'xl:grid-cols-2', 3: 'xl:grid-cols-3', 4: 'xl:grid-cols-4', 5: 'xl:grid-cols-5', 6: 'xl:grid-cols-6' }

const gapMap: Record<GridGap, string> = {
  none: 'gap-0',
  xs:   'gap-2',
  sm:   'gap-4',
  md:   'gap-6',
  lg:   'gap-8',
  xl:   'gap-12',
}

interface GridProps extends HTMLAttributes<HTMLElement> {
  /** Column layout per breakpoint. Mobile-first. Defaults to { base: 1, md: 2, lg: 3 }. */
  cols?: GridCols
  /** Gap between cells. Defaults to 'md'. */
  gap?: GridGap
  /** Render as a different HTML element. Defaults to 'div'. */
  as?: ElementType
  children: ReactNode
}

export function Grid({
  cols = { base: 1, md: 2, lg: 3 },
  gap = 'md',
  as: Tag = 'div',
  className,
  children,
  ...rest
}: GridProps) {
  const colClasses = [
    cols.base !== undefined ? colBaseMap[cols.base] : 'grid-cols-1',
    cols.sm   !== undefined ? colSmMap[cols.sm]     : '',
    cols.md   !== undefined ? colMdMap[cols.md]     : '',
    cols.lg   !== undefined ? colLgMap[cols.lg]     : '',
    cols.xl   !== undefined ? colXlMap[cols.xl]     : '',
  ].filter(Boolean)

  return (
    <Tag
      className={cn('grid', ...colClasses, gapMap[gap], className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
