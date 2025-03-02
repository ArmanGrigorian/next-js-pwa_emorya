import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";

interface EmoryaLogoProps {
  className?: string;
}

const EmoryaLogo: React.FC<EmoryaLogoProps> = ({ className }) => {
  return (
    <Link href="/">
      <Image
        src="/icons/logo.png"
        width={211}
        height={38}
        alt="Emorya logo png"
        quality={100}
        className={cn(
          "h-[28px] w-[201px] object-contain object-left transition select-none hover:opacity-75 lg:h-[38px] lg:w-[211px]",
          className,
        )}
        priority
      />
    </Link>
  );
};

export default EmoryaLogo;
