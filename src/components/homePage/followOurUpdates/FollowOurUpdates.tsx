import { H2, H3, Section } from "@/components/ui";
import OurLinks from "./OurLinks";

const FollowOurUpdates: React.FC = () => {
  return (
    <Section>
      <H2>Follow Our Updates</H2>

      <div className="bg-gradient-follow-our-updates flex flex-col gap-5 rounded-2xl p-6 shadow-xl my-5 md:my-12 lg:my-24 lg:gap-6 2xl:rounded-[28px] lg:rounded-3xl lg:p-8 2xl:gap-8 2xl:p-11">
        <H3 className="text-center">
          Join our community and be the first to know about our new features
        </H3>

        <OurLinks />
      </div>
    </Section>
  );
};

export default FollowOurUpdates;
