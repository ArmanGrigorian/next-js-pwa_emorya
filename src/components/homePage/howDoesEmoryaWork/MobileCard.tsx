import { H3 } from "@/components/ui";
import Image from "next/image";

interface MobileCardProps {
  card: {
    id: number;
    pos: string;
    title: string;
    text: string;
  };
}

const MobileCard: React.FC<MobileCardProps> = ({ card }) => {
  return (
    <article className="flex h-124 flex-col items-center gap-1 rounded-3xl bg-gradient-mobile-card p-4 shadow-xl">
      <strong className="text-center text-2xl font-bold text-purple-custom-15">
        {card.pos}
      </strong>
      <H3 className="min-h-14 text-center">{card.title}</H3>
      <div
        dangerouslySetInnerHTML={{ __html: card.text }}
        className="text-center text-sm text-white min-h-16"
      ></div>
      <Image
        src="/images/hand_phone_and_notifications.png"
        width={900}
        height={707}
        alt="phone and notifications png"
        quality={100}
        className="h-auto max-w-[160px] object-contain pt-4"
      />
    </article>
  );
};

export default MobileCard;
