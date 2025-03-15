import CustomLink from "@/components/ui/CustomLink";
import { footerNavigationPaths } from "@/constants/navigationPaths";

const NavigationLinks: React.FC = () => {
  return (
    <ul className="flex flex-col gap-3 lg:gap-4">
      {footerNavigationPaths.map((path) => (
        <li key={path.id}>
          <CustomLink
            href={path.href}
            target={path.newTab}
            className="block text-sm text-white transition hover:opacity-75 active:scale-95 lg:text-lg"
          >
            {path.title}
          </CustomLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;
