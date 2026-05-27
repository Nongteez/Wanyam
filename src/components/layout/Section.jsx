export default function Section({ id, children, className = '', innerClassName = '' }) {
  return (
    <section id={id} className={`relative py-28 md:py-40 ${className}`}>
      <div className={innerClassName}>{children}</div>
    </section>
  )
}
