const variants = {
  primary:
    'bg-gradient-to-b from-[#4a0808] to-[#2a0404] text-[#e8e0e0] border border-[#3a0606]/80 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] hover:from-[#5c0a0a] hover:to-[#3a0606] hover:shadow-[0_6px_28px_rgba(0,0,0,0.55),0_0_24px_rgba(92,10,10,0.25)] hover:-translate-y-px',
  ghost:
    'bg-[#0a0a0a]/60 text-[#ccc8c8] border border-white/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:border-[#6b0f0f]/40 hover:bg-[#6b0f0f]/12 hover:shadow-[0_4px_24px_rgba(0,0,0,0.45),0_0_20px_rgba(92,10,10,0.12)] hover:-translate-y-px',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  as: Component = 'button',
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2.5 rounded-md px-7 py-3.5 font-['Cinzel'] text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-500 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
