import type { ReactNode } from 'react'

type Variant = 'primary' | 'accent' | 'ghost' | 'outline'

const base =
  'inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full'

const variants: Record<Variant, string> = {
  primary: 'bg-red text-cream shadow-warm hover:bg-red-deep hover:-translate-y-0.5',
  accent: 'bg-red text-cream shadow-cta hover:bg-bordeaux hover:-translate-y-0.5',
  ghost: 'bg-cream/10 backdrop-blur-md border border-white/25 text-cream hover:bg-cream/20',
  outline: 'border border-red text-red hover:bg-red hover:text-cream',
}

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

interface LinkButton extends CommonProps {
  href: string
  onClick?: never
  type?: never
}
interface ClickButton extends CommonProps {
  href?: never
  onClick?: () => void
  type?: 'button' | 'submit'
}

export function Button(props: LinkButton | ClickButton) {
  const { variant = 'primary', children, className = '' } = props
  const cls = `${base} ${variants[variant]} ${className}`
  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} className={cls}>
      {children}
    </button>
  )
}
