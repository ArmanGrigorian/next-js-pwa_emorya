import {
  DownloadTheApp,
  FollowOurUpdates,
  Header,
  HowDoesEmoryaWork,
  MostIngeniousEconomy,
  MoveRestLive,
  PlayBoostGames,
  ReferralRewardsForLife,
  WhyChooseEmorya,
  WhyIsEmoryaDifferent,
} from "@/components/homePage";

export default function HomePage() {
  return (
    <main>
      <Header />
      <MoveRestLive />
      <HowDoesEmoryaWork />
      <ReferralRewardsForLife />
      <PlayBoostGames />
      <MostIngeniousEconomy />
      <WhyChooseEmorya />
      <WhyIsEmoryaDifferent />
      <DownloadTheApp />
      <FollowOurUpdates />
    </main>
  );
}
