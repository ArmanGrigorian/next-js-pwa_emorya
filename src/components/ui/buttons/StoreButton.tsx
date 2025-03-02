import { storeConfigs } from "@/constants/componentConfigs";
import { cn } from "@/utils";
import Image from "next/image";

interface StoreButtonProps {
  store: "apple" | "google";
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const StoreButton: React.FC<StoreButtonProps> = ({
  store,
  className,
  iconClassName,
  textClassName,
}) => {
  return (
    <a
      href={storeConfigs[store].href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "lg:bg-gradient-store-button flex w-fit select-none items-center gap-2 rounded-xl sm:px-4 px-3 py-2 sm:py-3 shadow-md transition hover:opacity-75 active:scale-95 lg:gap-5 lg:px-5 lg:py-4",
        className,
      )}
    >
      <Image
        src={storeConfigs[store].icon}
        width={50}
        height={58}
        alt="google play icon png"
        rel="noopener noreferrer"
        className={cn(
          "sm:h-8 sm:w-6 h-7 w-5 object-contain lg:h-10 lg:w-8 2xl:h-14 2xl:w-12",
          iconClassName,
        )}
      />
      <span
        className={cn(
          "w-24 sm:w-28 text-center text-xs sm:text-sm/4 font-medium text-white lg:w-32 lg:text-base/5",
          textClassName,
        )}
      >
        {storeConfigs[store].text}
      </span>
    </a>
  );
};

export default StoreButton;
