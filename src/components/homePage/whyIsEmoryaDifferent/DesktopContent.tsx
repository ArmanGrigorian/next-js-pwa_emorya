import { whyIsEmoryaDifferentCardsData } from "@/constants/temporalData";
import DesktopCard from "./DesktopCard";

const DesktopContent: React.FC = () => {
  return (
    <div className="mt-24 hidden grid-cols-1 gap-8 md:grid-cols-2 lg:grid lg:grid-cols-3">
      {whyIsEmoryaDifferentCardsData.map((card) => (
        <DesktopCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default DesktopContent;
