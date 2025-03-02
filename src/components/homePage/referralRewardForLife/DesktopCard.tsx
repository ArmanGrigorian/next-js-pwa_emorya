import { H3, Hgroup } from "@/components/ui";
import Image from "next/image";

interface DesktopCardProps {
  card: {
    id: number;
    pos: string;
    title: string;
    text: string;
    image: string;
  };
}

const DesktopCard: React.FC<DesktopCardProps> = ({ card }) => {
  return (
    <article className="flex items-center justify-between gap-10">
      <div className="flex w-1/2 flex-1 justify-center">
        <Image
          src={card.image}
          width={660}
          height={660}
          alt={card.title}
          className="h-auto w-1/2 max-w-100 flex-1 object-contain"
        />
      </div>
      <div className="flex w-1/2 flex-1 justify-center">
        <div className="bg-gradient-mobile-card flex aspect-video w-full max-w-[640px] flex-col justify-between gap-7 rounded-xl p-6 shadow-xl lg:gap-14 lg:p-10">
          <strong className="text-xl text-white lg:text-3xl 2xl:text-5xl">
            {card.pos}
          </strong>
          <Hgroup>
            <H3 className="text-purple-custom-20">{card.title}</H3>
            <div
              dangerouslySetInnerHTML={{ __html: card.text }}
              className="text-sm text-white lg:text-base"
            ></div>
          </Hgroup>
        </div>
      </div>
    </article>
  );
};

export default DesktopCard;
