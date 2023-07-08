interface SectionProps {
  dark?: boolean;
  children: React.ReactNode;
  height?: string;
  fullWidth?: boolean;
}

export default function Section({
  dark = false,
  children,
  height = "min-h-[25vh]",
  fullWidth = false,
}: SectionProps) {
  return (
    <div className={`${dark ? `dark-section ${height}` : `${height}`}`}>
      <div className={`${fullWidth ? "container-expand" : "container-main"}`}>
        {children}
      </div>
    </div>
  );
}
