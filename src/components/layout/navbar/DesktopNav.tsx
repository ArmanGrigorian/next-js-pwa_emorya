import { DownloadAppButton } from "@/components/ui";
import { navbarPaths } from "@/constants/navigationPaths";
import Link from "next/link";
import React from "react";

const DesktopNav: React.FC = () => {
  return (
    <ul className="hidden items-center gap-12 lg:flex">
      {navbarPaths.map((path) => (
        <li key={path.id}>
          <Link
            href={path.href}
            target={path.newTab ? "_blank" : "_self"}
            className="block text-base text-white transition hover:opacity-75 active:scale-95 2xl:text-xl"
          >
            {path.title}
          </Link>
        </li>
      ))}
      <li>
        <DownloadAppButton className="lg:py-2.5"/>
      </li>
    </ul>
  );
};

export default DesktopNav;
