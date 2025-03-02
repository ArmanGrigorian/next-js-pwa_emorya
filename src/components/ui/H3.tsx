import { cn } from "@/utils";

interface H3Props {
  children: React.ReactNode;
  className?: string;
}

const H3: React.FC<H3Props> = ({ children, className }) => {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-white [text-shadow:_1px_1px_1px_#000] lg:text-2xl 2xl:text-3xl",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default H3;
