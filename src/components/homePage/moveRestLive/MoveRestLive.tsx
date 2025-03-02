import { H2, Hgroup, Paragraph, Section, Subtitle } from "@/components/ui";
import Image from "next/image";
import Cards from "./Cards";

const MoveRestLive: React.FC = () => {
  return (
    <Section>
      {/* GRADIENT */}
      <Image
        src="/gradients/section_move_rest_live.png"
        alt="gradient"
        fill
        className="absolute bottom-0 right-0 -z-10"
      />

      <Hgroup>
        <H2>Move, Rest, Live</H2>
        <Subtitle>Earn Real Money Effortlessly !</Subtitle>
      </Hgroup>

      <div className="flex items-center justify-between gap-10 py-5">
        <Cards />

        <div className="hidden w-1/2 flex-1 justify-center lg:flex">
          <Image
            src="/images/phone_and_coins.png"
            width={900}
            height={900}
            alt="phone and tokens png"
            quality={100}
            className="max-w-100 object-contain"
          />
        </div>
      </div>

      <div>
        <Paragraph>Make Emorya your full-time job :</Paragraph>
        <Paragraph>
          Burn calories, earn real money, and actions are now your biggest
          investment !
        </Paragraph>
      </div>
    </Section>
  );
};

export default MoveRestLive;
