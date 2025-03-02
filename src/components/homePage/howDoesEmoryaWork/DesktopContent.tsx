import Image from "next/image";
import { howDoesEmoryaWorkCardsData } from "@/constants/temporalData";
import DesktopCard from "./DesktopCard";

const DesktopContent: React.FC = () => {
  return (
    <div className="my-24 hidden items-center justify-between gap-10 lg:flex">
      <div className="w-1/2 flex-1 flex justify-center">
        <Image
          src="/images/hand_phone_and_notifications.png"
          width={900}
          height={707}
          alt="phone and notifications png"
          quality={100}
          className="h-auto max-w-[360px] object-contain xl:max-w-100"
        />
      </div>

      <div className="flex w-1/2 items-center flex-1 flex-col gap-8 lg:gap-12 2xl:gap-16">
        {howDoesEmoryaWorkCardsData.map((card) => (
          <DesktopCard key={card.id} card={card} />
        ))} 
      </div>
    </div>
  );
};

export default DesktopContent;
