interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

function Tag({ children, className }: Props) {
  return <span className={`rounded-xl px-4 ${className}`}>{children}</span>;
}

export default Tag;
