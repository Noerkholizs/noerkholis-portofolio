  "use client";

  import * as React from "react"

  import Image from "next/image";
  import { useState } from "react";
  import { MyProjectsProps } from "@/types/mywork-types";
  import { Button } from "./ui/button";
  import Link from "next/link";
  import { ChevronUp, ChevronDown } from "lucide-react";
  import { Card, CardContent } from "@/components/ui/card";
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
      <div className="mx-auto">

        <div className="flex justify-center lg:mr-62 mt-3">
          <ChevronUp 
            size={65} 
            onClick={showPrev ? onPrev : undefined}
            className={cn(showPrev 
              ? "mb-30 cursor-pointer hover:text-neutral-400"
              : "mb-30 opacity-20"
            )}
          />
        </div>

        <h2 className={cn("text-3xl font-bold text-center mr-60")}>{heading}</h2>
        <div className="lg:ml-72">
          <Carousel
            setApi={setApi}
            opts={{ align: "start"}}
          >
            <CarouselContent >
              {images.map((image, index) => (
                <CarouselItem key={index} className="lg:basis-[55%] flex items-center justify-center pt-6">
                  <Card className={cn(
                    "shadow transition-all duration-300 border-none",
                    activeIndex === index 
                    ? "opacity-100 scale-100"
                    : "opacity-40 scale-80 blur-[2px] z-0"
                  )}>
                    <Image
                      src={image}
                      alt={heading}
                      width={2500}
                      height={1250}
                      className="object-cover rounded-3xl"
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute top-5 right-2 flex gap-2">
              <CarouselPrevious className="hover:bg-neutral-800 static hover:cursor-pointer" size="lg" />
              <CarouselNext className="hover:bg-neutral-800 static hover:cursor-pointer" size="lg" />
            </div>
          </Carousel>
        </div>
        
        <div className="flex justify-center lg:mr-62 mt-3">
          <Button 
            className="w-2xs hover:cursor-pointer hover:font-bold hover:bg-neutral-800"
            variant="outline" 
            asChild
            >
              <Link href={link}>Let&apos;s see</Link>
          </Button>
        </div>

        <div className="flex justify-center lg:mr-62 mt-3">
          <ChevronDown 
          size={65} 
          onClick={showNext ? onNext : undefined}
          className={cn(showNext 
            ? "mt-30 cursor-pointer hover:text-neutral-400"
            : "mt-30 opacity-20"
          )}
          />
        </div>

      </div>
    );
  };
