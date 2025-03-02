import { footerNavigationPaths } from "@/constants/navigationPaths";
import Link from "next/link";

const NavigationLinks: React.FC = () => {
  return (
    <ul className="flex flex-col gap-3 lg:gap-4">
      {footerNavigationPaths.map((path) => (
        <li key={path.id}>
          {path.newTab ? (
            <a
              href={path.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-white transition hover:opacity-75 active:scale-95 lg:text-lg"
            >
              {path.title}
            </a>
          ) : (
            <Link
              href={path.href}
              className="block text-sm text-white transition hover:opacity-75 active:scale-95 lg:text-lg"
            >
              {path.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;
