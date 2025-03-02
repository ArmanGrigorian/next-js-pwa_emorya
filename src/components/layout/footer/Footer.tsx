import LogoAndRights from "./LogoAndRights";
import NavigationLinks from "./NavigationLinks";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer: React.FC = () => {
  return (
    <footer className="max-w-full-hd full-hd:px-56 mx-auto flex flex-col items-center justify-between gap-8 border-t border-t-white px-5 py-8 lg:py-16 md:px-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-24 xl:px-24">
      <LogoAndRights />

      <div className="flex flex-1 flex-col items-end justify-end gap-8 lg:flex-row lg:gap-16 xl:gap-24">
        <NavigationLinks />
        <SocialMediaLinks />
      </div>
    </footer>
  );
};

export default Footer;
