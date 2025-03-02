import { H2, H3, Paragraph, Section, StoreButton } from "@/components/ui";
import Image from "next/image";

const DownloadTheApp: React.FC = () => {
  return (
    <Section>
      <H2>Download the app Emorya</H2>

      <article className="mx-auto mt-12 sm:mt-24 flex max-w-[640px] flex-col-reverse rounded-2xl bg-gradient-download-the-app shadow-xl sm:rounded-3xl lg:grid lg:max-w-[1024px] lg:grid-cols-3 lg:items-center lg:bg-image-download-the-app lg:bg-no-repeat lg:[background-size:_100%_100%]">
        <Image
          src="/images/iPhone_download_the_app_emorya.png"
          width={981}
          height={867}
          alt="iPhone download app png"
          quality={100}
          className="max-h-100 rounded-[74px] object-contain object-center pl-8 lg:pl-16 2xl:pl-20"
        />

        <div className="flex flex-col justify-end gap-5 p-6 pb-0 pt-8 sm:p-8 sm:pt-12 lg:col-span-2 lg:gap-10 lg:p-16 lg:pt-24 2xl:p-20 2xl:pt-28">
          <H3 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-left lg:text-5xl 2xl:text-6xl">
            Download and start now to earn money
          </H3>
          <Paragraph className="text-lg lg:text-left lg:text-xl 2xl:text-2xl">
            Use the referral code : <strong>ABCDEFG</strong>
          </Paragraph>

          <div className="flex justify-center gap-3 sm:gap-4 lg:justify-start">
            <StoreButton
              store="apple"
              className="max-lg:border max-lg:border-white max-lg:bg-transparent"
            />
            <StoreButton
              store="google"
              className="max-lg:border max-lg:border-white max-lg:bg-transparent"
            />
          </div>
        </div>
      </article>
    </Section>
  );
};

export default DownloadTheApp;
