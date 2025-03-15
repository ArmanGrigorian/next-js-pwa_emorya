import { SocialMediaButton } from "@/components/ui";
import { ourLinksData } from "@/constants/temporalData";

const OurLinks: React.FC = () => {
  return (
    <ul className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
      {ourLinksData.map((link, idx) => (
        <li key={idx} className="lg:w-[30%] w-52">
          <SocialMediaButton socialMedia={link} additionalText="Join"/>
        </li>
      ))}
    </ul>
  );
};

export default OurLinks;
