import type { Project } from '../types/content';

type ProjectVisualProps = {
  project: Project;
};

const visualAccent = {
  orange: {
    glow: 'bg-lava/35',
    card: 'from-lava to-gold',
    line: 'bg-lava',
    text: 'text-lava',
  },
  green: {
    glow: 'bg-emerald-400/25',
    card: 'from-emerald-400 to-lime-300',
    line: 'bg-emerald-300',
    text: 'text-emerald-300',
  },
  purple: {
    glow: 'bg-violet-400/25',
    card: 'from-violet-400 to-fuchsia-300',
    line: 'bg-violet-300',
    text: 'text-violet-300',
  },
};

export function ProjectVisual({ project }: ProjectVisualProps) {
  const accent = visualAccent[project.accent];

  if (project.accent === 'orange') {
    return (
      <div className="relative h-52 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#091017] p-4">
        <div className={`absolute left-10 top-8 h-28 w-28 rounded-full ${accent.glow} blur-3xl`} />
        <div className="relative mx-auto max-w-[260px] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-card">
          <div className="bg-gradient-to-r from-[#45140f] to-[#150807] p-4 text-white">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">Welly Millionaire</p>
            <div className="mt-3 h-20 rounded-xl bg-black/30 p-3">
              <span className="block h-3 w-24 rounded-full bg-white" />
              <span className="mt-2 block h-2 w-32 rounded-full bg-white/35" />
              <span className="mt-5 block h-7 w-24 rounded-full bg-lava" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 p-3">
            <span className="h-14 rounded-xl bg-lava/20" />
            <span className="h-14 rounded-xl bg-zinc-200" />
            <span className="h-14 rounded-xl bg-gold/30" />
          </div>
        </div>
      </div>
    );
  }

  if (project.accent === 'green') {
    return (
      <div className="relative h-52 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#07100c] p-4">
        <div className={`absolute left-12 top-12 h-28 w-28 rounded-full ${accent.glow} blur-3xl`} />
        <div className="relative mx-auto mt-1 max-w-[270px] rounded-2xl border border-emerald-300/20 bg-black/45 p-4 shadow-card">
          <div className="mb-4 flex items-center justify-between">
            <span className="h-3 w-20 rounded-full bg-emerald-300" />
            <span className="h-8 w-8 rounded-xl bg-emerald-300/20" />
          </div>
          <div className="grid grid-cols-[1fr_0.7fr] gap-3">
            <div className="rounded-2xl bg-white/[0.05] p-3">
              <span className="mb-6 block h-2 w-16 rounded-full bg-white/15" />
              <div className="flex items-end gap-2">
                {[34, 54, 42, 70, 62].map((height) => (
                  <span key={height} className="w-5 rounded-t-lg bg-emerald-300/70" style={{ height }} />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <span className="block h-16 rounded-2xl bg-emerald-300/15" />
              <span className="block h-16 rounded-2xl bg-white/[0.06]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-52 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0c0917] p-4">
      <div className={`absolute right-10 top-10 h-28 w-28 rounded-full ${accent.glow} blur-3xl`} />
      <div className="relative mx-auto flex max-w-[285px] items-end justify-center gap-3 pt-4">
        <div className="h-36 w-24 rotate-[-8deg] rounded-[1.6rem] border border-white/10 bg-black/50 p-2 shadow-card">
          <div className="rounded-[1.2rem] bg-white/[0.05] p-2">
            <span className="mb-3 block h-2 w-12 rounded-full bg-violet-300" />
            <span className="mb-2 block h-14 rounded-xl bg-violet-300/20" />
            <span className="block h-8 rounded-xl bg-white/10" />
          </div>
        </div>
        <div className="h-44 w-28 rounded-[1.8rem] border border-violet-300/20 bg-black/60 p-2 shadow-card">
          <div className="rounded-[1.35rem] bg-white/[0.05] p-2">
            <span className="mb-3 block h-2 w-16 rounded-full bg-white/20" />
            <span className="mb-2 block h-16 rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-300" />
            <span className="mb-2 block h-3 rounded-full bg-white/20" />
            <span className="block h-8 rounded-xl bg-violet-300/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
