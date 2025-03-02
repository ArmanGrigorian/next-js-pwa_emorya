import { H3, Paragraph } from "@/components/ui";
import { truncateText } from "@/utils";
import Image from "next/image";

interface DesktopCardProps {
  card: {
    id: number;
    title: string;
    text: string;
    image: string;
  };
}

const DesktopCard: React.FC<DesktopCardProps> = ({ card }) => {
  return (
    <article className="bg-gradient-mobile-card flex flex-col items-center gap-1 rounded-2xl p-8 shadow-xl xl:p-11">
      <H3 className="min-h-12">{card.title}</H3>

      <Paragraph className="min-h-32 overflow-hidden text-left xl:min-h-28 2xl:min-h-24">
        {truncateText(card.text, 88)}
      </Paragraph>

      <Image
        src={card.image}
        width={322}
        height={304}
        alt={card.title}
        quality={100}
        className="size-48 object-contain"
      />
    </article>
  );
};

export default DesktopCard;
