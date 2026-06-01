import type { Metric } from '../types/content';

type MetricOrbProps = {
  metric: Metric;
};

export function MetricOrb({ metric }: MetricOrbProps) {
  return (
    <div className="group relative aspect-square rounded-full bg-gradient-to-b from-lava/80 via-panel to-panel p-[1px] shadow-card">
      <div className="absolute inset-2 rounded-full bg-lava/10 blur-xl transition group-hover:bg-lava/20" />
      <div className="relative flex h-full flex-col items-center justify-center rounded-full border border-white/10 bg-ink px-4 text-center">
        <span className="text-2xl font-black text-lava sm:text-3xl">{metric.value}</span>
        <span className="mt-2 max-w-[7rem] text-[11px] font-semibold leading-4 text-muted sm:text-xs">{metric.label}</span>
      </div>
    </div>
  );
}
