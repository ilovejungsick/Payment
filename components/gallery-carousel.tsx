"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    src: "/images/slider-2.jpg.png",
    alt: "초간편 헬스앱 - 메인 대시보드"
  },
  {
    src: "/images/slider-3.jpg.png",
    alt: "초간편 헬스앱 - 개인화 건강분석"
  },
  {
    src: "/images/slider-4.jpg.png",
    alt: "초간편 헬스앱 - 1초만에 카메라로"
  },
  {
    src: "/images/slider-5.jpg.png",
    alt: "초간편 헬스앱 - 정밀 건강추적"
  }
];

export function GalleryCarousel() {
  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain px-0"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 sm:left-4 bg-white/80 hover:bg-white" />
      <CarouselNext className="right-2 sm:right-4 bg-white/80 hover:bg-white" />
    </Carousel>
  );
} 