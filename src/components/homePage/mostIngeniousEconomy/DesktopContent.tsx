import { mostIngeniousEconomyCardsData } from "@/constants/temporalData";
import DesktopCard from "./DesktopCard";


const DesktopContent: React.FC = () => {
  return (
    <div className="mt-24 lg:flex flex-col gap-16 hidden">
      {mostIngeniousEconomyCardsData.map((card, idx) => (
        <DesktopCard key={card.id} card={card} idx={idx} />
      ))}
    </div>
  );
};

export default DesktopContent;
