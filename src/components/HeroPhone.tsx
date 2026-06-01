import { Icon } from './Icon';

export function HeroPhone() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[300px] sm:h-[390px] sm:max-w-[380px] lg:max-w-[460px]" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lava/20 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute left-8 top-10 z-20 animate-float rounded-2xl border border-lava/30 bg-panel/85 p-3 text-lava shadow-glow backdrop-blur sm:left-12 sm:top-14">
        <Icon name="bolt" className="h-5 w-5" />
      </div>
      <div className="absolute right-8 top-20 z-20 animate-float-slow rounded-2xl border border-gold/30 bg-panel/85 p-3 text-gold shadow-glow backdrop-blur sm:right-12 sm:top-28">
        <Icon name="growth" className="h-5 w-5" />
      </div>
      <div className="absolute bottom-12 right-6 z-20 animate-float rounded-2xl border border-lava/30 bg-panel/85 p-3 text-lava shadow-glow backdrop-blur sm:bottom-16 sm:right-16">
        <Icon name="rocket" className="h-5 w-5" />
      </div>

      <div className="phone-tilt absolute left-1/2 top-9 w-[174px] -translate-x-1/2 rotate-[-18deg] rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-[#181f28] to-[#06090d] p-3 shadow-card sm:top-10 sm:w-[225px] sm:p-4 lg:w-[260px]">
        <div className="rounded-[1.75rem] border border-white/10 bg-[#0b1118] p-3 sm:p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-2 w-14 rounded-full bg-white/10" />
            <div className="h-5 w-5 rounded-full border border-lava/40 bg-lava/15" />
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl bg-lava p-3 text-white shadow-glow">
              <div className="mb-2 h-2 w-16 rounded-full bg-white/45" />
              <div className="h-2 w-24 rounded-full bg-white/25" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <div className="mb-6 h-2 w-9 rounded-full bg-gold/70" />
                <div className="h-2 w-12 rounded-full bg-white/15" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <div className="mb-6 h-2 w-9 rounded-full bg-lava/70" />
                <div className="h-2 w-12 rounded-full bg-white/15" />
              </div>
            </div>
            <div className="space-y-2 rounded-2xl border border-white/10 bg-white/[0.035] p-3">
              {[72, 92, 58].map((width) => (
                <div key={width} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-lava" />
                  <span className="h-2 rounded-full bg-white/12" style={{ width }} />
                </div>
              ))}
            </div>
            <div className="h-10 rounded-2xl bg-gradient-to-r from-lava/80 to-gold/70" />
          </div>
        </div>
      </div>
    </div>
  );
}
