import { Paragraph } from "@/components/ui";

const Blockquote: React.FC = () => {
  return (
    <blockquote className="max-w-(--breakpoint-xl) lg:border-l lg:border-l-white lg:p-6 lg:pb-10">
      <Paragraph className="lg:text-left">
        Whether you&apos;re sweating in the gym, relaxing at home, or sleeping
        soundly, Emorya ensures you earn real rewards effortlessly.
      </Paragraph>
    </blockquote>
  );
}

export default Blockquote