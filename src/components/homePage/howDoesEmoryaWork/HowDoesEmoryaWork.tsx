import { H2, Paragraph, Section } from "@/components/ui";
import Image from "next/image";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";

const HowDoesEmoryaWork: React.FC = () => {
  return (
    <Section>
      {/* GRADIENT */}
      <Image
        src="/gradients/section_how_does_emorya_work.png"
        width={955}
        height={2452}
        alt="gradient"
        style={{ width: "auto", height: "auto" }}
        className="absolute right-0 top-0 -z-10 h-[1552px] w-[955px] 2xl:h-[2452px]"
      />

      <H2>How Does Emorya Work ?</H2>

      <DesktopContent />
      <MobileContent />

      <Paragraph>
        Emorya turns your <strong>activity</strong> into{" "}
        <strong>Real Money!</strong>
      </Paragraph>
    </Section>
  );
};

export default HowDoesEmoryaWork;
