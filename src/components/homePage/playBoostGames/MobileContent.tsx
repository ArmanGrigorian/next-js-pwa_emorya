import { H3, Hgroup, Paragraph } from "@/components/ui";
import Image from "next/image";

const MobileContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-5 pt-10 lg:hidden">
      <div className="flex flex-col items-center">
        <Paragraph className="text-center text-xl text-white lg:text-2xl">
          You can win up to
        </Paragraph>
        <strong className="text-center text-2xl text-purple-custom-20">
          100.000 EMRS
        </strong>
        <Paragraph className="text-center text-xl text-white lg:text-2xl">
          in a single spin!
        </Paragraph>
      </div>

      <article className="relative flex h-124 w-full max-w-124 flex-col items-center rounded-3xl bg-gradient-mobile-card shadow-xl">
        <Hgroup className="absolute top-7 items-center">
          <H3 className="text-2xl text-purple-custom-20 sm:text-3xl">
            Earn More Money!
          </H3>
          <Paragraph className="font-semibold">
            Stop sweating over intense workouts.
          </Paragraph>
        </Hgroup>

        <Image
          src="/images/roulette_and_2_phones.png"
          width={640}
          height={640}
          alt="roulette and 2 phones png"
          quality={100}
          className="h-full w-auto object-contain"
        />

        <div className="absolute bottom-7 flex w-[calc(100%-56px)] flex-col gap-3">
          <Paragraph>
            With Emorya&apos;s <strong>new Boost games</strong>
          </Paragraph>
          <Paragraph>
            Everyday movements become high-impact calorie burners without{" "}
            <strong>any extra effort.</strong>
          </Paragraph>
          <Paragraph>
            The more calories you burn, the more you earn up to{" "}
            <strong>10x to 100x more !</strong>
          </Paragraph>
        </div>
      </article>
    </div>
  );
};

export default MobileContent;
