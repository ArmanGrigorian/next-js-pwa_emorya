import { EmoryaLogo } from "@/components/ui";

const LogoAndRights: React.FC = () => {
  return (
    <div className="flex w-full justify-between lg:justify-start flex-1 select-none items-center gap-8 xl:gap-24 lg:gap-16">
      <EmoryaLogo />
      <p className="text-sm text-white lg:text-lg">
        <small>Copyright © {new Date().getFullYear()} Emorya</small>
      </p>
    </div>
  );
};

export default LogoAndRights;
