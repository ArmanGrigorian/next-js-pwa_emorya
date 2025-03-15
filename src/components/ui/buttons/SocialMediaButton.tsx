import { socialMediaConfigs } from "@/constants/componentConfigs";
import { cn } from "@/utils";
import Image from "next/image";

interface SocialMediaButtonProps {
  socialMedia:
    | "discord"
    | "x"
    | "telegram"
    | "instagram";
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  isLightIcon?: boolean;
  isMobile?: boolean;
  additionalText?: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  socialMedia,
  isLightIcon = false,
  isMobile = false,
  additionalText = "",
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
        isMobile
          ? "block transition hover:opacity-75 active:scale-95"
          : "flex items-center justify-center gap-4 rounded-xl bg-white px-3 py-2 font-medium shadow-md transition hover:opacity-75 active:scale-95 lg:gap-6 lg:rounded-2xl lg:py-3 2xl:py-4",
        className,
      )}
    >
      <Image
        src={
          socialMediaConfigs[socialMedia][
            isLightIcon ? "lightIcon" : "darkIcon"
          ]
        }
        width={51}
        height={40}
        alt={`${socialMediaConfigs[socialMedia].title} icon png`}
        className={cn("size-7 object-contain lg:size-8", iconClassName)}
      />

      {!isMobile && (
        <span
          className={cn("text-purple-text text-base lg:text-xl", textClassName)}
        >
          {`${additionalText} ${socialMediaConfigs[socialMedia].title}`}
        </span>
      )}
    </a>
  );
};

export default SocialMediaButton;
