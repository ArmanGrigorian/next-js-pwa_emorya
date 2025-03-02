import { cn } from "@/utils";

interface H2Props {
  children: React.ReactNode;
  className?: string;
}

const H2: React.FC<H2Props> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "text-center text-2xl font-semibold text-white [text-shadow:_1px_1px_1px_#000] sm:text-3xl lg:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
