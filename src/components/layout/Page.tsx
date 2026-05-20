import { type ReactNode, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// The outermost wrapper for every page.tsx.
// Renders a semantic <main> with min-h-screen so the footer always
// stays at the bottom even when content is short.
//
// Usage in page.tsx:
//   export default function MyPage() {
//     return (
//       <Page>
//         <Section ...>...</Section>
//       </Page>
//     )
//   }
// ─────────────────────────────────────────────────────────────────────────────

interface PageProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function Page({ className, children, ...rest }: PageProps) {
  return (
    <main
      className={cn(
        'flex min-h-screen flex-col bg-background text-foreground',
        'antialiased',
        className,
      )}
      {...rest}
    >
      {children}
    </main>
  )
}
