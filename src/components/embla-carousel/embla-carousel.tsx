"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import "@/styles/embla.css";
import {
  usePrevNextButtons,
  PrevButton,
  NextButton,
} from "./embla-carousel-arrow-buttons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./embla-carousel-selected-snap-display";

type PropType = {
  slides: string[];
};

export function EmblaCarousel(props: PropType) {
  const { slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((imageUrl, index) => (
            <div className="embla__slide" key={index}>
              <Image
                className="embla__slide__img"
                src={imageUrl}
                alt="Your alt text"
                width={500}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </div>
  );
}
