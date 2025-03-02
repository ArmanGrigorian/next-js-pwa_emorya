import { H2, Section } from "@/components/ui";
import Image from "next/image";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";

const MostIngeniousEconomy: React.FC = () => {
  return (
    <Section>
      {/* GRADIENT */}
      <Image
        src="/gradients/section_most_ingenious_economy.png"
        width={1512}
        height={2713}
        alt="gradient"
        style={{ width: "auto", height: "auto" }}
        className="absolute -bottom-[960px] right-0 -z-10 h-[2713px] w-[1512px]"
      />

      <H2>The Most Ingenious Economy</H2>

      <DesktopContent />
      <MobileContent />
    </Section>
  );
};

export default MostIngeniousEconomy;
