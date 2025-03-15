import Link from "next/link";

interface CustomLinkProps {
  children: React.ReactNode;
  href: string;
  target?: boolean;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  href,
  target = false,
  className,
}) => {
  if (target) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default CustomLink;
