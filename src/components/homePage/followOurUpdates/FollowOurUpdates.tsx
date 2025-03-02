import { H2, H3, Section } from "@/components/ui";
import OurLinks from "./OurLinks";

const FollowOurUpdates: React.FC = () => {
  return (
    <Section>
      <H2>Follow Our Updates</H2>

      <div className="sm:mt-6 md:mt-12 mb-5 lg:my-24 flex flex-col gap-4 rounded-2xl bg-follow-our-updates p-7 shadow-xl lg:gap-6 lg:rounded-[28px] lg:p-8 2xl:gap-8 2xl:p-11">
        <H3 className="text-center">
          Join our community and be the first to know about our new features
        </H3>

        <OurLinks />
      </div>
    </Section>
  );
};

export default FollowOurUpdates;
