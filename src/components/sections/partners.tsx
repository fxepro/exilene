"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { partners } from "@/lib/data"
import Autoplay from "embla-carousel-autoplay"

export function Partners() {
  return (
    <section id="partners" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Partners & Collaborators</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to work with industry leaders to push the boundaries of decentralized technology.
          </p>
        </div>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="p-1">
                    <Card className="bg-secondary hover:bg-muted transition-colors">
                      <CardContent className="flex aspect-video items-center justify-center p-6">
                        <Image
                          src={partner.logoUrl}
                          alt={`${partner.name} logo`}
                          width={150}
                          height={75}
                          className="opacity-80 hover:opacity-100 transition-all"
                          data-ai-hint="company logo"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
