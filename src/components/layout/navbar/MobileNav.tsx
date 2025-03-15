"use client";

import { DownloadAppButton } from "@/components/ui";
import { navbarPaths } from "@/constants/navigationPaths";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex size-6 items-center justify-center lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
        className="z-10 transition hover:opacity-75 active:scale-95"
      >
        <Image
          src="/icons/burger_menu.png"
          width={24}
          height={24}
          alt="burger menu icon"
          className="size-6 object-contain"
        />
      </button>

      {isOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          "bg-gradient-aside fixed top-0 right-0 z-50 h-full w-full p-8 transition-transform duration-300 sm:w-72",
          isOpen ? "translate-x-0" : "translate-x-full shadow-2xl",
        )}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="absolute top-5 right-5 z-10 p-3 transition hover:opacity-75 active:scale-95"
        >
          <Image
            src="/icons/close_menu.png"
            width={24}
            height={24}
            alt="close icon"
          />
        </button>

        <ul className="flex flex-col gap-5">
          <li>
            <Link
              href="/"
              className="block text-base text-white transition hover:opacity-75 active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          {navbarPaths.map((path) => (
            <li key={path.id}>
              <Link
                href={path.href}
                target={path.newTab ? "_blank" : "_self"}
                className="block text-base text-white transition hover:opacity-75 active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                {path.title}
              </Link>
            </li>
          ))}
          <li>
            <DownloadAppButton className="w-full rounded-md" />
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default MobileNav;
