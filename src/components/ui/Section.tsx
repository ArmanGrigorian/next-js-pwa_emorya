import { cn } from "@/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "max-w-full-hd full-hd:px-52 relative mx-auto px-5 py-8 select-none md:px-10 lg:py-16 xl:px-24",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
