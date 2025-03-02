import { H3 } from "@/components/ui";

interface DesktopCardProps {
  card: {
    id: number;
    pos: string;
    title: string;
    text: string;
  };
}

const DesktopCard: React.FC<DesktopCardProps> = ({ card }) => {
  return (
    <article className="flex w-full max-w-[640px] flex-col gap-3 lg:gap-4">
      <strong className="text-purple-custom-15 border-b border-b-white pb-4 text-xl lg:text-3xl 2xl:text-5xl">
        {card.pos}
      </strong>
      <H3 className="text-xl font-semibold text-white lg:text-2xl">
        {card.title}
      </H3>
      <div
        dangerouslySetInnerHTML={{ __html: card.text }}
        className="text-sm text-white lg:text-base"
      ></div>
    </article>
  );
};

export default DesktopCard;
