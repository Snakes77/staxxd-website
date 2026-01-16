export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`font-bold ${className}`}>
      Sta<span className="text-brand-accent">x</span><span className="text-brand-accent">x</span>d
    </span>
  )
}
