export default function FogOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[45] overflow-hidden" aria-hidden="true">
      <div className="fog-layer opacity-60" />
      <div className="fog-layer fog-layer-2 opacity-40" />
    </div>
  )
}
