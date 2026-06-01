type IndustryVisualProps = {
  activeTitle: string;
};

export function IndustryVisual({ activeTitle }: IndustryVisualProps) {
  return (
    <div className="relative min-h-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#121922] via-[#090e14] to-[#04070b] p-6 shadow-card">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,98,75,.32),transparent_28%),radial-gradient(circle_at_25%_70%,rgba(255,189,84,.16),transparent_26%)]" />
      <div className="absolute left-1/2 top-1/2 h-44 w-56 -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-[2rem] border border-lava/30 bg-lava/10 blur-sm" />
      <div className="relative mx-auto mt-8 max-w-[290px] rotate-[-13deg] rounded-[2rem] border border-white/10 bg-black/45 p-4 shadow-glow backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <span className="h-2 w-20 rounded-full bg-white/20" />
          <span className="h-8 w-8 rounded-2xl bg-lava/70" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 rounded-2xl bg-lava p-4">
            <span className="mb-8 block h-2 w-20 rounded-full bg-white/40" />
            <span className="block h-2 w-24 rounded-full bg-white/30" />
          </div>
          <div className="space-y-3">
            <span className="block h-12 rounded-2xl bg-white/10" />
            <span className="block h-12 rounded-2xl bg-gold/30" />
          </div>
        </div>
        <div className="mt-4 space-y-2 rounded-2xl bg-white/[0.04] p-3">
          {[70, 92, 58].map((width) => (
            <span key={width} className="block h-2 rounded-full bg-white/15" style={{ width }} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-panel/85 px-4 py-3 backdrop-blur">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lava">Industry</p>
        <p className="mt-1 text-lg font-black text-white">{activeTitle}</p>
      </div>
    </div>
  );
}
