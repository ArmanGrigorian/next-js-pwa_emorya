import { EmoryaLogo } from "@/components/ui";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-image-navbar-background sticky top-0 z-50 select-none bg-cover bg-left bg-no-repeat shadow-xl">
      <div className="mx-auto flex h-[88px] max-w-full-hd items-center justify-between gap-2 px-5 md:px-10 xl:px-24 full-hd:px-56">
        <EmoryaLogo />
        <DesktopNav />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
