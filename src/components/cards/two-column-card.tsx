interface TwoColumnProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}
export default function TwoColumnCards({
  title,
  description,
  children,
}: TwoColumnProps) {
  return (
    <div className="flex">
      <div>
        <h2>{title}</h2>
        <br />
        <p className="max-w-[50%]">{description}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
