import { H3, Hgroup, Paragraph } from "@/components/ui";
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
    <article className="flex min-h-[240px] items-center justify-between gap-3 rounded-2xl bg-image-why-choose-emorya bg-no-repeat p-6 [background-size:_100%_100%] lg:p-10">
      <Hgroup className="max-w-120 grow">
        <H3>{card.title}</H3>
        <Paragraph className="text-left">{card.text}</Paragraph>
      </Hgroup>
      <Image
        src={card.image}
        width={246}
        height={232}
        alt={card.title}
        quality={100}
        className="size-32 shrink object-contain 2xl:size-40"
      />
    </article>
  );
};

export default DesktopCard;
