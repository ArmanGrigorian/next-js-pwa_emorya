import { H3 } from "@/components/ui";
import { cn } from "@/utils";
import Image from "next/image";

interface DesktopCardProps {
  card: {
    id: number;
    title: string;
    texts: string[];
    image: string;
  };
  idx: number;
}

const DesktopCard: React.FC<DesktopCardProps> = ({ card, idx }) => {
  return (
    <article
      className={cn(
        idx % 2 ? "flex-row-reverse" : "flex-row",
        "flex justify-between gap-10",
      )}
    >
      <div className="flex w-1/2 flex-1 justify-center">
        <div className="bg-gradient-mobile-card flex w-full max-w-[640px] flex-col gap-8 rounded-2xl p-10 shadow-xl lg:p-14">
          <H3 className="text-purple-custom-20">{card.title}</H3>

          <div className="flex flex-1 flex-col justify-around gap-3">
            {card.texts.map((text, index) => (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: text }}
                className="text-sm text-white lg:text-base"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-1/2 flex-1 justify-center">
        <Image
          src={card.image}
          width={684}
          height={600}
          alt={card.title}
          quality={100}
          className="size-full max-h-100 max-w-100 object-contain"
        />
      </div>
    </article>
  );
};

export default DesktopCard;
