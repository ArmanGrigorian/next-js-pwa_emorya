import { referralRewardsForLifeCardsData } from "@/constants/temporalData";
import DesktopCard from "./DesktopCard";


const DesktopContent: React.FC = () => {
  return (
    <div className="mt-24 flex-col gap-20 hidden lg:flex">
      {referralRewardsForLifeCardsData.map((card) => (
        <DesktopCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default DesktopContent;
