import { cn } from "@/utils";

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-center text-sm text-white [text-shadow:_1px_1px_1px_#000] lg:text-lg",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Subtitle;
