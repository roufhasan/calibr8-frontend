import SectionCtaBtn from "./SectionCtaBtn";

export default function SectionHeader({
  label,
  watermark,
  title,
  sub,
  href,
  linkLabel,
}) {
  return (
    <div className="relative overflow-hidden">
      {watermark && (
        <span
          className="text-foreground pointer-events-none absolute top-0 right-0 font-sans text-[160px] leading-none font-extrabold tracking-[-4px] whitespace-nowrap opacity-[0.05] select-none"
          aria-hidden="true"
        >
          {watermark}
        </span>
      )}

      <div className="relative z-10 flex items-end justify-between gap-5">
        <div>
          {label && (
            <div className="text-muted-foreground text-[9px] tracking-[0.16em] uppercase">
              {label}
            </div>
          )}
          <h2 className="my-1.5 font-sans text-[26px] leading-[1.1] font-extrabold tracking-[-0.5px] md:text-[28px]">
            {title}
          </h2>
          {sub && (
            <p className="text-muted-foreground w-full max-w-xl text-[11px] leading-relaxed">
              {sub}
            </p>
          )}

          {href && (
            <SectionCtaBtn
              href={href}
              linkLabel={linkLabel}
              className="md:hidden"
            />
          )}
        </div>

        {href && (
          <SectionCtaBtn
            href={href}
            linkLabel={linkLabel}
            className="hidden md:block"
          />
        )}
      </div>
    </div>
  );
}
