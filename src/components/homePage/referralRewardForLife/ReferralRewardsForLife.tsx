import { H2, Hgroup, Section, Subtitle } from "@/components/ui";
import Image from "next/image";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";

const ReferralRewardsForLife: React.FC = () => {
  return (
    <Section>
      {/* GRADIENT */}
      <Image
        src="/gradients/section_referral_rewards_for_life.png"
        width={1920}
        height={2926}
        alt="gradient"
        className="absolute right-0 top-0 -z-10 h-[1926px] w-[1920px] 2xl:h-[2926px]"
      />

      <Hgroup>
        <H2>Referral Rewards For Life</H2>
        <Subtitle className="text-base lg:text-xl 2xl:text-3xl">
          Become ambassador and Earn Up to 20% for Life by Sharing with
          unlimited Friends
        </Subtitle>
      </Hgroup>

      <DesktopContent />
      <MobileContent />
    </Section>
  );
};

export default ReferralRewardsForLife;
