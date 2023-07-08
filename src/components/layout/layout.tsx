interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutTailwind({ children }: LayoutProps) {
  return <main className="container-main">{children}</main>;
}
