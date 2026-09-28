export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="ambient-background pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#F2F2F5]">
      {/* Subtle top ambient sheen */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,0,0,0.03),transparent)]" />
    </div>
  );
}
