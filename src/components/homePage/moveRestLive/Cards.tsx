import { moveRestLiveCardsData } from "@/constants/temporalData";
import Card from "./Card";

const Cards: React.FC = () => {
  return (
    <div className="flex w-1/2 flex-1 flex-col items-center gap-8 my-24">
      {moveRestLiveCardsData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
