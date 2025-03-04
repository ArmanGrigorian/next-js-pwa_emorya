import { cn } from "@/utils";

interface DownloadAppButtonProps {
  className?: string;
}

const DownloadAppButton: React.FC<DownloadAppButtonProps> = ({ className }) => {
  return (
    <a
      href="https://app.emorya.com"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-purple-text hover:bg-gradient-navbar flex w-48 items-center justify-center rounded-xl bg-white py-2.5 text-center text-sm font-bold shadow-lg transition duration-300 hover:text-white hover:ring-1 hover:shadow-white/30 hover:ring-white/20 active:scale-95 lg:w-52 lg:py-3 lg:text-base",
        className,
      )}
    >
      DOWNLOAD THE APP
    </a>
  );
};

export default DownloadAppButton;
