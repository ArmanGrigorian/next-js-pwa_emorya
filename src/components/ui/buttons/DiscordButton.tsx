import { cn } from "@/utils";
import Image from "next/image";

interface DiscordButtonProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const DiscordButton: React.FC<DiscordButtonProps> = ({
  className,
  iconClassName,
  textClassName,
}) => {
  return (
    <a
      href="https://discord.com/invite/9Jrj7U9Y9R"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "bg-purple-custom-10/30 absolute right-0 hidden items-center justify-between gap-3 rounded-2xl px-4 py-2 shadow-md transition hover:opacity-75 active:scale-95 lg:flex lg:rounded-[18px]",
        className,
      )}
    >
      <Image
        src="/icons/discord_logo.png"
        width={28}
        height={22}
        alt="Discord logo png"
        style={{ width: "auto", height: "auto" }}
        className={cn("h-5 w-7 object-contain", iconClassName)}
      />
      <div className="flex flex-col justify-between gap-[1px]">
        <span className="text-[9px] text-white">Confused ?</span>
        <p
          className={cn(
            "text-[10px]/[13px] tracking-[0.5px] text-white",
            textClassName,
          )}
        >
          MEET THE <br /> COMMUNITY
        </p>
      </div>
    </a>
  );
};

export default DiscordButton;
