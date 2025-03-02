import { H3, Paragraph } from "@/components/ui";
import Image from "next/image";

interface MobileCardProps {
  card: {
    id: number;
    title: string;
    text: string;
    image: string;
  };
}

const MobileCard: React.FC<MobileCardProps> = ({ card }) => {
  return (
    <article className="bg-gradient-mobile-card flex h-96 flex-col items-center justify-between gap-3 rounded-3xl p-6 shadow-xl">
      <H3 className="h-16 text-center">{card.title}</H3>
      <Image
        src={card.image}
        width={900}
        height={707}
        alt={`${card.title} png`}
        quality={100}
        className="size-28 object-contain"
      />
      <Paragraph className="h-20 max-w-[240px] overflow-hidden">
        {card.text}
      </Paragraph>
    </article>
  );
};

export default MobileCard;
