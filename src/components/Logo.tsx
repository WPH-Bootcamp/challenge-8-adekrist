type LogoProps = {
  className?: string;
};

export function Logo({ className = '' }: LogoProps) {
  return (
    <a href="#home" className={`group inline-flex items-center gap-2 ${className}`} aria-label="TigerLay home">
      <span className="relative grid h-5 w-5 place-items-center rounded-md bg-lava shadow-glow sm:h-6 sm:w-6">
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-gold" />
        <span className="text-[10px] font-black leading-none text-white sm:text-xs">T</span>
      </span>
      <span className="text-xs font-bold tracking-tight text-white sm:text-sm">
        Tiger<span className="text-lava">Lay</span>
      </span>
    </a>
  );
}
