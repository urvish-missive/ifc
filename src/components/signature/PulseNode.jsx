// A node on the thread. When `pulse`, it gently rings — used to mark the
// "when it matters" moments (hospitalisation, claim).
export default function PulseNode({ pulse = false, size = 'md', className = '' }) {
  const dims = size === 'lg' ? 'h-4 w-4' : size === 'sm' ? 'h-2.5 w-2.5' : 'h-3 w-3'
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <span
        className={`rounded-full ${dims} ${
          pulse ? 'bg-marigold pulse-node' : 'bg-sage-dim'
        }`}
      />
      {pulse && (
        <span className="absolute inset-0 rounded-full ring-1 ring-marigold/40" aria-hidden="true" />
      )}
    </span>
  )
}
