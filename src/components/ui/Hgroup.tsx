import { cn } from "@/utils";

interface HgroupProps {
  children: React.ReactNode;
  className?: string;
}

const Hgroup: React.FC<HgroupProps> = ({ children, className }) => {
  return (
    <hgroup className={cn("flex flex-col gap-2 lg:gap-3", className)}>
      {children}
    </hgroup>
  );
};

export default Hgroup;
