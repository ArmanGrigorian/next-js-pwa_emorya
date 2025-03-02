import { H2, Section } from "@/components/ui";
import Image from "next/image";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";

const WhyIsEmoryaDifferent: React.FC = () => {
  return (
    <Section>
      {/* GRADIENT */}
      <Image
        src="/gradients/section_why_is_emorya_different.png"
        width={1920}
        height={2548}
        alt="gradient"
        style={{ width: "auto", height: "auto" }}
        className="absolute -bottom-[720px] left-0 right-0 -z-10 h-[2548px] w-[1920px] lg:-bottom-[1040px] 2xl:-bottom-[1280px] 2xl:h-[2926px]"
      />

      <H2>Why is Emorya Different?</H2>

      <DesktopContent />
      <MobileContent />
    </Section>
  );
};

export default WhyIsEmoryaDifferent;
