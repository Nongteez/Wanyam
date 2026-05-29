export default function Section({ id, children, className = '', innerClassName = '' }) {
  return (
    <section id={id} className={`relative py-16 sm:py-20 md:py-28 lg:py-40 ${className}`}>
      <div className={innerClassName}>{children}</div>
    </section>
  )
}
