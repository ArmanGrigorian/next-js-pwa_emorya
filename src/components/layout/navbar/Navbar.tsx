import { EmoryaLogo } from "@/components/ui";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-navbar sticky top-0 z-50 shadow-xl select-none">
      <div className="max-w-full-hd full-hd:px-56 mx-auto flex h-[88px] items-center justify-between gap-2 px-5 md:px-10 xl:px-24">
        <EmoryaLogo />
        <DesktopNav />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
