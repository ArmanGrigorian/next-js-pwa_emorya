import { socialMediaConfigs } from "@/constants/componentConfigs";
import { cn } from "@/utils";
import Image from "next/image";

interface SocialMediaButtonProps {
  socialMedia: "discord" | "x" | "telegram";
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  socialMedia,
  className,
  iconClassName,
  textClassName,
}) => {
  return (
    <a
      href={socialMediaConfigs[socialMedia].href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center gap-4 rounded-xl bg-white px-3 py-2 shadow-md transition hover:opacity-75 active:scale-95 lg:gap-6 lg:rounded-2xl lg:py-3 2xl:py-4",
        className,
      )}
    >
      <Image
        src={socialMediaConfigs[socialMedia].icon}
        width={51}
        height={40}
        alt={`${socialMediaConfigs[socialMedia].title} icon png`}
        className={cn("size-7 object-contain lg:size-8", iconClassName)}
      />
      <span
        className={cn("text-base text-purple-text lg:text-xl", textClassName)}
      >
        {socialMediaConfigs[socialMedia].title}
      </span>
    </a>
  );
};

export default SocialMediaButton;
