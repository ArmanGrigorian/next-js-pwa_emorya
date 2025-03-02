import { H2, Hgroup, Section, Subtitle } from "@/components/ui";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";

const PlayBoostGames: React.FC = () => {
  return (
    <Section>
      <Hgroup className="">
        <H2>Play Boost Games</H2>
        <Subtitle>Effortlessly Boost 10x―100x</Subtitle>
      </Hgroup>

      <DesktopContent />
      <MobileContent />
    </Section>
  );
};

export default PlayBoostGames;
