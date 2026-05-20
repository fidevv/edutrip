import { type ElementType, type ReactNode, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

// ─────────────────────────────────────────────────────────────────────────────
// CONTAINER
// Horizontal centering + max-width management.
// Use inside <Section> to constrain content width.
// ─────────────────────────────────────────────────────────────────────────────

type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

const sizeMap: Record<ContainerSize, string> = {
  xs:   'max-w-xl',      // ~672px  — prose, modals
  sm:   'max-w-2xl',     // ~672px  — narrow forms, blog posts
  md:   'max-w-4xl',     // ~896px  — article + sidebar
  lg:   'max-w-6xl',     // ~1152px — most pages (default)
  xl:   'max-w-7xl',     // ~1280px — dashboards, wide layouts
  full: 'max-w-none',    // stretch edge-to-edge
}

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** Constrains the content width. Defaults to 'lg'. */
  size?: ContainerSize
  /** Render as a different HTML element. Defaults to 'div'. */
  as?: ElementType
  children: ReactNode
}

export function Container({
  size = 'lg',
  as: Tag = 'div',
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeMap[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
