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
        "text-purple-text flex w-48 items-center justify-center rounded-xl bg-white py-2.5 lg:py-3 text-center text-sm font-bold shadow-lg transition hover:opacity-75 active:scale-95 lg:w-52 lg:rounded-2xl lg:text-base",
        className,
      )}
    >
      DOWNLOAD THE APP
    </a>
  );
};

export default DownloadAppButton;

