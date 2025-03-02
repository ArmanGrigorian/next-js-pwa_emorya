import { H3, Hgroup } from "@/components/ui";
import Image from "next/image";

interface CardProps {
  card: {
    id: number;
    title: string;
    text: string;
    image: string;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <article
      key={card.id}
      className="flex w-full max-w-[640px] flex-col-reverse items-center justify-start gap-1 rounded-3xl bg-gradient-move-rest-live px-1 pt-6 shadow-xl lg:flex-row lg:gap-4 lg:py-3 lg:pr-11"
    >
      <Image
        src={card.image}
        width={176}
        height={176}
        alt={card.title}
        className="size-36 object-contain lg:size-40 2xl:size-44"
      />

      <Hgroup className="text-center lg:text-left">
        <H3 className="font-semibold text-white text-2xl 2xl:text-3xl">
          {card.title}
        </H3>
        <div
          dangerouslySetInnerHTML={{ __html: card.text }}
          className="text-sm text-white lg:text-base"
        >
          {/* {card.text} */}
        </div>
      </Hgroup>
    </article>
  );
};

export default Card;
