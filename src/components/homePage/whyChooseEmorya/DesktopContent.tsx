import { whyChooseEmoryaCardsData } from "@/constants/temporalData";
import DesktopCard from "./DesktopCard";

const DesktopContent: React.FC = () => {
  return (
    <div className="hidden grid-cols-1 gap-8 my-24 lg:grid lg:grid-cols-2">
      {whyChooseEmoryaCardsData.map((card) => (
        <DesktopCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default DesktopContent;
