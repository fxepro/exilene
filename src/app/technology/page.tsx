
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cog, Globe, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata = {
  title: "Technology - Exilene",
  description: "The core technology behind Exilene's simplicity, combining distributed ledgers, secure cloud orchestration, and intelligent automation.",
};

const techPillars = [
  {
    icon: Globe,
    title: "Distributed Infrastructure",
    description: "Global, redundant, self-healing.",
  },
  {
    icon: Lock,
    title: "Encryption Layer",
    description: "End-to-end data and transaction protection.",
  },
  {
    icon: Cog,
    title: "Automation Engine",
    description: "Intelligent scaling and orchestration.",
  },
];

const heroImage = PlaceHolderImages.find(p => p.id === 'tech-diagram-1')!;


export default function TechnologyPage() {
  return (
    <div className="bg-gradient-to-b from-[#111827] to-[#0B0C10] text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Technology — The Core Behind Simplicity
            </h1>
            <p className="text-lg text-muted-foreground">
              At EXILENE, we’ve built technology that hides complexity while preserving blockchain’s power. Our foundation combines distributed ledgers, secure cloud orchestration, and intelligent automation — all working together so users never need to think about nodes, consensus, or cryptography.
            </p>
            <p className="text-muted-foreground">
              We use multi-chain architecture, allowing different blockchains (like Ethereum, Polygon, and Solana) to connect through one seamless framework. Each transaction passes through our secure gateway, where encryption, smart caching, and compliance checks ensure speed and trust. Behind the scenes, containerized microservices manage scaling, load balancing, and fault recovery automatically — ensuring uptime even during network spikes.
            </p>
             <p className="text-lg font-medium">
              The result: blockchain power that feels instant, safe, and human-centered — not technical. EXILENE’s mission is to make blockchain as accessible as the web itself.
            </p>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px] flex items-center justify-center">
             <Image
                src={heroImage.imageUrl}
                alt="Abstract network mesh animation"
                fill
                className="object-cover rounded-lg"
                data-ai-hint="network mesh"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Tech Pillars Section */}
      <section className="container mx-auto px-4 pb-24 md:px-6 lg:pb-32">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Tech Pillars</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techPillars.map((pillar) => (
            <Card key={pillar.title} className="bg-card/50 backdrop-blur-sm border-white/10">
              <CardHeader className="flex flex-row items-center gap-4">
                <pillar.icon className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h3 className="font-headline text-2xl font-semibold max-w-2xl mx-auto">
               Learn how EXILENE technology keeps blockchain effortless.
            </h3>
            <Button asChild size="lg" className="mt-6">
                <Link href="#">
                    Explore the Platform <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
