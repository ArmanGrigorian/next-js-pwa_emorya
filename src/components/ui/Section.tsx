import { cn } from "@/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "relative mx-auto max-w-full-hd select-none px-5 py-8 md:px-10 lg:py-16 xl:px-24 full-hd:px-52",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
