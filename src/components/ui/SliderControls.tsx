import { cn } from "@/utils";

interface SliderControlsProps {
  className?: string;
}

const SliderControls: React.FC<SliderControlsProps> = ({ className }) => {
  return (
    <>
      <button
        type="button"
        className={cn(
          "swiper-button-next transition after:text-white hover:opacity-75 active:scale-95",
          className,
        )}
      ></button>
      <button
        type="button"
        className={cn(
          "swiper-button-prev transition after:text-white hover:opacity-75 active:scale-95",
          className,
        )}
      ></button>
    </>
  );
};

export default SliderControls;
