type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-lava/25 bg-lava/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-lava">
          <span className="h-1.5 w-1.5 rounded-full bg-lava" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}{' '}
        {highlight ? <span className="text-lava">{highlight}</span> : null}
      </h2>
      {description ? (
        <p className={`mt-4 text-sm leading-7 text-muted sm:text-base ${isCenter ? 'mx-auto' : ''}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
