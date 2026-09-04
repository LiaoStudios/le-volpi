/** The real Le Volpi logo inside a round cream badge — used across the site. */
export function LogoBadge({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden rounded-full bg-cream ${className}`}>
      <img src="/logo.webp" alt="Le Volpi" className="h-[88%] w-[88%] rounded-full object-contain" />
    </span>
  )
}
