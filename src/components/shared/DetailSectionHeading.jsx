import { Separator } from "../ui/separator";

export default function DetailSectionHeading({ label, title, accent }) {
  return (
    <div className="mb-10 w-fit">
      {label && (
        <div className="border-primary/50 mb-3 flex items-center gap-3 border-x">
          <Separator className="bg-primary/50 shrink" />
          <span className="text-primary/75 shrink-0 text-[10px] tracking-widest uppercase">
            {label}
          </span>
          <Separator className="bg-primary/50 shrink" />
        </div>
      )}
      <h2 className="text-2xl leading-[1.1] font-bold tracking-[-0.5px]">
        {title}
        {accent && <span className="text-primary"> {accent}</span>}
      </h2>
    </div>
  );
}
