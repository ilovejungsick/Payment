"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useCallback } from 'react';
import Image from 'next/image';

const slides = [
  {
    url: "/gallery-1.jpg",
    alt: "운동 프로그램 화면"
  },
  {
    url: "/gallery-2.jpg",
    alt: "자세 분석 화면"
  },
  {
    url: "/gallery-3.jpg",
    alt: "식단 관리 화면"
  },
  {
    url: "/gallery-4.jpg",
    alt: "운동 통계 화면"
  },
  {
    url: "/gallery-5.jpg",
    alt: "커뮤니티 화면"
  }
];

export function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_90%] min-w-0 pl-4 md:flex-[0_0_45%] lg:flex-[0_0_30%]"
            >
              <div className="aspect-[9/16] relative">
                <Image
                  src={slide.url}
                  alt={slide.alt}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full shadow-lg"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full shadow-lg"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
} 