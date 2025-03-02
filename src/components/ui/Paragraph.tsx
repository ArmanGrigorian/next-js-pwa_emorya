import { cn } from "@/utils";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-center [text-shadow:_1px_1px_1px_#000] text-sm text-white md:text-base lg:text-lg",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
