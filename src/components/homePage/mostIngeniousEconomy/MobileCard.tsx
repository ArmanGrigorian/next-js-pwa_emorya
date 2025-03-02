import { H3 } from "@/components/ui";
import Image from "next/image";

interface MobileCardProps {
  card: {
    id: number;
    title: string;
    texts: string[];
    image: string;
  };
}

const MobileCard: React.FC<MobileCardProps> = ({ card }) => {
  return (
    <article className="bg-gradient-mobile-card relative flex h-124 flex-col items-center gap-1 justify-between rounded-3xl p-6 shadow-xl">
      <div className="flex flex-col gap-3">
        <H3 className="text-purple-custom-15 text-center text-xl sm:text-2xl">
          {card.title}
        </H3>

        <div className="mx-auto flex w-[calc(100%-48px)] flex-col gap-3">
          {card.texts.map((text, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: text }}
              className="text-center text-sm text-white [text-shadow:1px_1px_2px_#000]"
            ></div>
          ))}
        </div>
      </div>

      <div className="flex h-44 w-[72%] flex-col items-center justify-end">
        <Image
          src={card.image}
          width={900}
          height={707}
          alt={`${card.title} png`}
          quality={100}
          className="size-full object-contain"
        />
      </div>
    </article>
  );
};

export default MobileCard;
