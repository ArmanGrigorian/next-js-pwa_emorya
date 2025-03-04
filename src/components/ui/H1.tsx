import { cn } from "@/utils";

interface H1Props {
  children: React.ReactNode;
  className?: string;
}

const H1: React.FC<H1Props> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        "text-2xl font-semibold text-white [text-shadow:_1px_1px_1px_#000] sm:text-2xl lg:text-4xl",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
