export default function TrustFeatureCard({ feature }) {
  const { icon: Icon, title, description } = feature;

  return (
    <div className="border-primary border-l-2 pl-5">
      <Icon className="text-primary size-5" />
      <h3 className="mt-3 text-base leading-snug font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
