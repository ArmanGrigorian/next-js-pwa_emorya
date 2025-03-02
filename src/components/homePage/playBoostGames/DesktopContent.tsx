import { H3, Paragraph } from "@/components/ui";

const DesktopContent: React.FC = () => {
  return (
    <div className="bg-image-roulette-and-2-phones hidden bg-right bg-no-repeat pt-24 lg:flex lg:[background-size:60%_100%] xl:[background-size:55%_100%] 2xl:[background-size:50%_100%] full-hd:[background-size:45%_100%]">
      <div className="flex w-1/2 justify-center">
        <div className="flex w-full max-w-100 flex-col items-center gap-4">
          <article className="bg-gradient-mobile-card flex w-full flex-col gap-10 rounded-2xl p-12 shadow-xl">
            <div className="flex flex-col gap-1">
              <H3 className="text-purple-custom-20 lg:text-3xl">
                Earn More Money!
              </H3>
              <Paragraph className="text-left">
                Stop sweating over intense workouts.
              </Paragraph>
            </div>

            <div>
              <p className="text-xl text-white lg:text-2xl">
                You can win up to
              </p>
              <strong className="text-purple-custom-20 text-xl font-normal lg:text-2xl">
                100.000 EMRS
              </strong>
              <p className="text-xl text-white lg:text-2xl">
                in a single spin!
              </p>
            </div>
          </article>

          <div className="mx-auto flex flex-col gap-4 p-10">
            <Paragraph className="text-left">
              With Emorya&apos;s <strong>new Boost games</strong>
            </Paragraph>
            <Paragraph className="text-left">
              Everyday movements become high-impact calorie burners without{" "}
              <strong>any extra effort.</strong>
            </Paragraph>
            <Paragraph className="text-left">
              The more calories you burn, the more you earn up to{" "}
              <strong>10x to 100x more !</strong>
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopContent;
