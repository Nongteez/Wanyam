export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-12 xl:px-16 ${className}`}>
      {children}
    </div>
  )
}
