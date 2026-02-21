export default function TrustFeatureCard({ feature }) {
  const { icon: Icon, title, description } = feature;

  return (
    <div>
      <Icon className="text-primary size-6" />
      <h3 className="mt-4 text-base leading-snug font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
