import { H3 } from "@/components/ui";
import Image from "next/image";

interface MobileCardProps {
  card: {
    id: number;
    pos: string;
    title: string;
    text: string;
    image: string;
  };
}

const MobileCard: React.FC<MobileCardProps> = ({ card }) => {
  return (
    <article className="flex h-124 flex-col items-center gap-1 rounded-3xl bg-gradient-mobile-card p-6 shadow-xl">
      <strong className="text-center text-2xl font-bold text-white">
        {card.pos}
      </strong>
      <H3 className="text-center text-purple-custom-15">{card.title}</H3>
      <div
        dangerouslySetInnerHTML={{ __html: card.text }}
        className="text-center text-sm text-white"
      ></div>
      <div className="flex w-[72%] grow flex-col justify-end">
        <Image
          src={card.image}
          width={900}
          height={707}
          alt={`${card.title} png`}
          quality={100}
          className="h-auto w-full object-contain pt-4"
        />
      </div>
    </article>
  );
};

export default MobileCard;
