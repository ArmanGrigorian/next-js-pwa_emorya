import Image from "next/image";
import { DiscordButton, DownloadAppButton, H1, Hgroup, Paragraph } from "../ui";

const Header: React.FC = () => {
  return (
    <header className="bg-image-earth-and-sun relative bg-cover bg-top bg-no-repeat pb-10 lg:pb-24">
      <div className="bg-gradient-header-bottom absolute right-0 -bottom-1 left-0 h-16 w-full"></div>
      <div className="max-w-full-hd full-hd:px-56 mx-auto flex flex-col items-center px-5 md:px-10 xl:px-24">
        <Hgroup className="items-center justify-center gap-5 pt-40 text-center lg:min-h-120 lg:gap-14 2xl:min-h-[560px]">
          <H1>JUST LIVE TO EARN.</H1>
          <Paragraph>
            MOVE, REST, LIVE...turn your life into a game where calories are
            coins and rewards are endless !
          </Paragraph>
        </Hgroup>

        <Image
          src="/images/phone_and_coins.png"
          width={900}
          height={900}
          alt="phone and tokens png"
          quality={100}
          priority
          className="flex max-h-120 w-1/2 flex-1 object-contain lg:hidden"
        />

        <div className="relative flex w-full items-center justify-center">
          <DownloadAppButton />
          <DiscordButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
