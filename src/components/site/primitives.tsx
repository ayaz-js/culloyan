import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 md:px-8', className)} {...props} />
}

export function Section({ className, ...props }: ComponentProps<'section'>) {
  return <section className={cn('py-20 md:py-28', className)} {...props} />
}

export function Eyebrow({ className, ...props }: ComponentProps<'p'>) {
  return <p className={cn('eyebrow text-muted-foreground', className)} {...props} />
}

export function Pill({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border px-3.5 py-1.5 text-xs',
        className,
      )}
      {...props}
    />
  )
}

/** Место под настоящую фотографию. Подпись подсказывает, какой кадр сюда нужен. */
export function PhotoSlot({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children?: ReactNode
}) {
  return (
    <div
      className={cn(
        'relative flex items-end overflow-hidden rounded-[1.5rem] border border-border bg-[linear-gradient(160deg,#ebe4d8_0%,#d9cdbb_55%,#c4ad8e_100%)]',
        className,
      )}
      role="img"
      aria-label={label}
    >
      <span className="eyebrow m-5 rounded-full bg-background/70 px-3 py-1.5 text-foreground/70 backdrop-blur">
        {label}
      </span>
      {children}
    </div>
  )
}
