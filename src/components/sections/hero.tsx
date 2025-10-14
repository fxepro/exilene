"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] max-h-[1080px] w-full overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 animated-gradient"></div>
      <div className="absolute inset-0 bg-background/10 dark:bg-background/20"></div>
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-foreground">
        <div className="animate-fade-in-up">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            The Future of Decentralized Tech
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Exilene provides secure, scalable, and high-speed infrastructure for the next generation of decentralized applications.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-300">
          <Button asChild size="lg">
            <Link href="#contact">Request a Demo</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#technology">Learn More</Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  )
}
