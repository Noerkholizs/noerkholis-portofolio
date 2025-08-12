"use client";

import * as React from "react"
import Image from "next/image";
import { useState } from "react";
import { MyProjectsProps } from "@/types/mywork-types";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface MyProjectsWithNav extends MyProjectsProps {
  onNext: () => void;
  onPrev: () => void;
  showNext: boolean;
  showPrev: boolean
}

export const MyProjects = ({
  heading,
  images,
  link,
  paragraph,
  onNext,
  onPrev,
  showNext,
  showPrev,
}: MyProjectsWithNav) => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Project Navigation - Desktop */}
      <div className="hidden lg:flex justify-center mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={showPrev ? onPrev : undefined}
          disabled={!showPrev}
          className={cn(
            "w-16 h-16 rounded-full transition-all duration-200",
            showPrev 
              ? "hover:bg-white/10 cursor-pointer"
              : "opacity-30 cursor-not-allowed"
          )}
          aria-label="Previous project"
        >
          <ChevronUp size={32} />
        </Button>
      </div>

      {/* Project Title */}
      <h2 className="text-responsive-lg font-bold text-center mb-8 lg:mb-12">
        {heading}
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full">
        <Carousel
          setApi={setApi}
          opts={{ 
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/2"
              >
                <div className="flex items-center justify-center p-2">
                  <Card className={cn(
                    "w-full max-w-lg shadow-lg transition-all duration-300 border-none overflow-hidden",
                    activeIndex === index 
                      ? "opacity-100 scale-100"
                      : "opacity-60 scale-95"
                  )}>
                    <Image
                      src={image}
                      alt={`${heading} screenshot ${index + 1}`}
                      width={2500}
                      height={1250}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Carousel Navigation */}
          <div className="absolute top-1 left right-25 flex justify-between pointer-events-none">
            <CarouselPrevious 
              className="pointer-events-auto hover:bg-neutral-800/80" 
              size="lg" 
            />
            <CarouselNext 
              className="pointer-events-auto hover:bg-neutral-800/80" 
              size="lg" 
            />
          </div>

        </Carousel>
      </div>

      {/* Project Link Button */}
      <div className="flex justify-center mt-8 lg:mt-12">
        <Button 
          className="px-8 py-3 w2xs hover:bg-neutral-800 hover:text-white transition-all duration-200"
          variant="outline" 
          asChild
        >
          <Link href={link} target="_blank" rel="noopener noreferrer">
            Let&apos;s see
          </Link>
        </Button>
      </div>

      {/* Project Navigation - Mobile */}
      <div className="lg:hidden flex justify-center items-center gap-8 mt-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={showPrev ? onPrev : undefined}
          disabled={!showPrev}
          className={cn(
            "w-12 h-12 rounded-full transition-all duration-200",
            showPrev 
              ? "hover:bg-white/10 cursor-pointer"
              : "opacity-30 cursor-not-allowed"
          )}
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </Button>

        <div className="flex gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                index === 0 
                  ? "bg-primary" 
                  : "bg-white/30"
              )}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={showNext ? onNext : undefined}
          disabled={!showNext}
          className={cn(
            "w-12 h-12 rounded-full transition-all duration-200",
            showNext 
              ? "hover:bg-white/10 cursor-pointer"
              : "opacity-30 cursor-not-allowed"
          )}
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </Button>
      </div>

      {/* Project Navigation - Desktop Bottom */}
      <div className="hidden lg:flex justify-center mt-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={showNext ? onNext : undefined}
          disabled={!showNext}
          className={cn(
            "w-16 h-16 rounded-full transition-all duration-200",
            showNext 
              ? "hover:bg-white/10 cursor-pointer"
              : "opacity-30 cursor-not-allowed"
          )}
          aria-label="Next project"
        >
          <ChevronDown size={32} />
        </Button>
      </div>
    </div>
  );
};
