import { socialMediaPaths } from "@/constants/navigationPaths";
import Image from "next/image";

const SocialMediaLinks: React.FC = () => {
  return (
    <ul className="flex gap-5 lg:gap-10">
      {socialMediaPaths.map((socialMedia) => (
        <li key={socialMedia.id}>
          <a
            href={socialMedia.href}
            target={socialMedia.newTab ? "_blank" : "_self"}
            rel="noreferrer noopener"
            className="block transition hover:opacity-75 active:scale-95"
          >
            <Image
              src={socialMedia.icon}
              width={41}
              height={41}
              alt={`${socialMedia.title} logo png`}
              className="h-6 w-6 object-contain lg:h-8 lg:w-8"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaLinks;
