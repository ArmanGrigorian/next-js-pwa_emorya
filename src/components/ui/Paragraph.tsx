import { cn } from "@/utils";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-center text-sm text-white [text-shadow:_1px_1px_1px_#000] md:text-base lg:text-lg",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
