
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake, Cpu, Building } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Partners - Exilene",
  description: "Collaborating with leading blockchain networks, technology providers, and enterprise clients to build the future of decentralized technology.",
};

const networkPartners = [
  { name: "Ethereum", logoUrl: "https://picsum.photos/seed/eth-logo/150/50" },
  { name: "Polygon", logoUrl: "https://picsum.photos/seed/poly-logo/150/50" },
  { name: "Solana", logoUrl: "https://picsum.photos/seed/sol-logo/150/50" },
  { name: "Avalanche", logoUrl: "https://picsum.photos/seed/avax-logo/150/50" },
  { name: "BNB Chain", logoUrl: "https://picsum.photos/seed/bnb-logo/150/50" },
  { name: "Cardano", logoUrl: "https://picsum.photos/seed/ada-logo/150/50" },
];

const techPartners = [
  { name: "AWS", logoUrl: "https://picsum.photos/seed/aws-logo/150/50" },
  { name: "Google Cloud", logoUrl: "https://picsum.photos/seed/gcp-logo/150/50" },
  { name: "Microsoft Azure", logoUrl: "https://picsum.photos/seed/azure-logo/150/50" },
  { name: "Chainalysis", logoUrl: "https://picsum.photos/seed/chainalysis-logo/150/50" },
  { name: "CertiK", logoUrl: "https://picsum.photos/seed/certik-logo/150/50" },
];

const enterprisePartners = [
    { name: "Innovate Finance", logoUrl: "https://picsum.photos/seed/efinance-logo/150/50", category: "Finance"},
    { name: "Global Cargo Trust", logoUrl: "https://picsum.photos/seed/esupply-logo/150/50", category: "Supply Chain"},
    { name: "VeriHealth", logoUrl: "https://picsum.photos/seed/ehealth-logo/150/50", category: "Healthcare"},
    { name: "QuantumLeap", logoUrl: "https://picsum.photos/seed/etech-logo/150/50", category: "Technology"},
];

export default function PartnersPage() {
  return (
    <div className="bg-gradient-to-b from-[#111827] to-[#0B0C10] text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Building Blockchain Together
            </h1>
            <p className="text-lg text-muted-foreground">
              EXILENE thrives through collaboration. We partner with leading blockchain networks, technology providers, cloud infrastructure firms, and enterprise clients to bring secure, scalable, and accessible blockchain solutions to everyone. By combining our expertise with trusted partners, we accelerate innovation, expand reach, and provide seamless experiences for developers and businesses alike.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                  <Link href="/contact">
                    Become a Partner <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                  <Link href="/services">
                    Explore Integrations
                  </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px] flex items-center justify-center">
            <Image
                src="https://picsum.photos/seed/globe-anim/600/400"
                alt="Animated globe of connected nodes"
                fill
                className="object-cover rounded-lg"
                data-ai-hint="globe animation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent rounded-lg"></div>
          </div>
        </div>
      </section>
      
      <Separator className="my-16 bg-white/10" />

      {/* Section 1: Blockchain Network Partners */}
      <section className="container mx-auto px-4 pb-24 md:px-6 lg:pb-32">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Blockchain Network Partners</h2>
            <p className="mt-4 text-muted-foreground">
                We collaborate with top blockchain networks to ensure compatibility, reliability, and innovation. Our partners include established chains like Ethereum, Polygon, Solana, Avalanche, and BNB Chain, giving EXILENE users instant access to multi-chain infrastructure without complex setup. By integrating directly with these networks, we provide low-latency node access, multi-chain transaction support, and seamless updates as protocols evolve.
            </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {networkPartners.map(partner => (
                <Image
                    key={partner.name}
                    src={partner.logoUrl}
                    alt={partner.name}
                    width={140}
                    height={50}
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                    data-ai-hint="blockchain logo"
                />
            ))}
        </div>
      </section>

      {/* Section 2: Technology & Cloud Partners */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="font-headline text-3xl font-bold tracking-tight">Technology & Cloud Partners</h2>
                <p className="mt-4 text-muted-foreground">
                   To ensure enterprise-grade performance and security, EXILENE works with leading cloud and infrastructure providers, including AWS, Azure, and Google Cloud, as well as specialized blockchain tech vendors for analytics, security, and API management. This partnership ecosystem allows us to offer redundant infrastructure, scalable computing, and advanced analytics tools.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {techPartners.map(partner => (
                    <Card key={partner.name} className="bg-card/50 backdrop-blur-sm border-white/10 text-center flex flex-col items-center justify-center p-6 transition-all hover:bg-muted/50">
                        <Image
                            src={partner.logoUrl}
                            alt={partner.name}
                            width={130}
                            height={40}
                            className="grayscale opacity-80"
                            data-ai-hint="company logo"
                        />
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Section 3: Enterprise & Industry Partners */}
      <section className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Enterprise & Industry Partners</h2>
            <p className="mt-4 text-muted-foreground">
              EXILENE collaborates with forward-thinking enterprises across finance, supply chain, logistics, and healthcare, integrating blockchain into real-world applications. These partnerships demonstrate blockchain’s practical value and enable us to provide ready-to-deploy solutions tailored to industry needs.
            </p>
        </div>
        {/* Note: Filtering UI is omitted for brevity but can be added here */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {enterprisePartners.map((partner) => (
            <Card key={partner.name} className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden group">
              <CardHeader>
                <div className="relative w-full h-20 mb-4">
                  <Image
                      src={partner.logoUrl}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain grayscale opacity-70 group-hover:opacity-100 transition-opacity"
                      data-ai-hint="company logo"
                  />
                </div>
                <CardTitle className="font-headline text-lg text-center">{partner.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">{partner.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight max-w-2xl mx-auto">
               Ready to Join the Network?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              EXILENE is actively seeking strategic collaborators — whether you’re a blockchain project, technology provider, or enterprise looking to innovate. Joining our partner network unlocks co-marketing opportunities, early access to new features, and priority support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-[#26A7C9] hover:bg-[#26A7C9]/90">
                    <Link href="/contact">
                        Join the Network <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                 <Button asChild size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary/10">
                    <Link href="/contact">
                        Contact for Collaboration
                    </Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
