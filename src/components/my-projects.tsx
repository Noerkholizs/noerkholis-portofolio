  "use client";

  import * as React from "react"

  import Image from "next/image";
  import { useState } from "react";
  import { MyProjectsProps } from "@/types/mywork-types";
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
  } from "@/components/ui/carousel";
  import { cn } from "@/lib/utils";

  export const MyProjects = ({
    heading,
    images,
    link,
    paragraph,
  }: MyProjectsProps) => {
    const [api, setApi] = useState<CarouselApi>();
    const [activeIndex, setActiveIndex] = useState(0);

    React.useEffect(() => {
      if (!api) return;

      api.on("select", () => {
        setActiveIndex(api.selectedScrollSnap());
      });
    }, [api]);

    return (
      <div className="mb-96">

        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          className="w-full relative"
        >
        <h2 className="text-4xl font-bold text-left">{heading}</h2>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="relative basis-1/2">
                <div className={cn(
                  "shadow-lg transition-all duration-300",
                  activeIndex === index 
                    ? "opacity-100 scale-90 z-10"
                    : "opacity-40 scale-80 blur-xs z-0"
                )}>
                  <Image
                    src={image}
                    alt={heading}
                    width={900}
                    height={800}
                    className="object-cover rounded-3xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute top-0 right-2 flex gap-2">
            <CarouselPrevious className="hover:bg-neutral-400 static" size="lg" />
            <CarouselNext className="hover:bg-neutral-400 static" size="lg" />
          </div>
        </Carousel>
      </div>
    );
  };