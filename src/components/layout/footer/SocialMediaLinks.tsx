import { SocialMediaButton } from "@/components/ui";

const SocialMediaLinks: React.FC = () => {
  return (
    <ul className="flex gap-5 lg:gap-10">
      <li>
        <SocialMediaButton socialMedia={"instagram"} isMobile isLightIcon />
      </li>
      <li>
        <SocialMediaButton socialMedia={"discord"} isMobile isLightIcon />
      </li>
      <li>
        <SocialMediaButton socialMedia={"x"} isMobile isLightIcon />
      </li>
      <li>
        <SocialMediaButton socialMedia={"telegram"} isMobile isLightIcon />
      </li>
    </ul>
  );
};

export default SocialMediaLinks;
