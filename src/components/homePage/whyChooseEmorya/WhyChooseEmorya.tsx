import { H2, Hgroup, Section, Subtitle } from "@/components/ui";
import Image from "next/image";
import React from "react";
import Blockquote from "./Blockquote";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";

const WhyChooseEmorya: React.FC = () => {
  return (
    <Section>
      {/* GRADIENT */}
      <Image
        src="/gradients/section_why_choose_emorya.png"
        width={1920}
        height={2548}
        alt="gradient"
        style={{ width: "auto", height: "auto" }}
        className="absolute -bottom-[800px] left-0 right-0 -z-10 h-[2548px] w-[1920px] lg:-bottom-[1120px] 2xl:-bottom-[1360px] 2xl:h-[2926px]"
      />

      <Hgroup>
        <H2>Why choose Emorya?</H2>
        <Subtitle className="text-base lg:text-xl 2xl:text-3xl">
          Emorya transforms your daily life into a rewarding journey, making
          every moment count.
        </Subtitle>
      </Hgroup>

      <DesktopContent />
      <MobileContent />

      <Blockquote />
    </Section>
  );
};

export default WhyChooseEmorya;
