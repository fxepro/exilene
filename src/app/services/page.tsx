
import Link from "next/link";
import { ArrowRight, BarChart, Code, Globe, Lock, Server, ShieldCheck, UserCheck, CheckCircle2, Layers, Zap, LifeBuoy } from "lucide-react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";


const services = [
    {
        icon: Globe,
        title: "Nodes-as-a-Service",
        description: "Instant, managed access to multiple blockchain networks — without setting up or maintaining nodes. We handle synchronization, updates, and uptime, so you can focus on building and transacting.",
        useCase: "Ideal for developers and businesses that need fast, reliable blockchain connectivity."
    },
    {
        icon: Server,
        title: "Private Blockchain Hosting",
        description: "Launch your own secure blockchain network with customizable permissions, governance, and scalability. Hosted on our cloud infrastructure, ensuring enterprise-grade performance and compliance.",
        useCase: "Financial institutions, supply chains, or any organization requiring privacy and control."
    },
    {
        icon: Code,
        title: "Blockchain API Layer",
        description: "A universal API gateway connecting apps, wallets, and platforms to multiple blockchains through one interface.",
        useCase: "Developers can integrate blockchain functions without writing complex node code."
    },
    {
        icon: BarChart,
        title: "Blockchain Analytics-as-a-Service",
        description: "Gain visibility into transactions, smart contracts, and network health through visual dashboards and AI insights.",
        useCase: "Businesses seeking transparency, performance tracking, and regulatory reporting."
    },
    {
        icon: ShieldCheck,
        title: "Staking-as-a-Service",
        description: "Stake digital assets securely and earn passive income through EXILENE’s managed validator nodes.",
        useCase: "Crypto funds, institutions, and individual investors wanting safe, automated staking."
    },
    {
        icon: UserCheck,
        title: "Compliance & Identity Services",
        description: "Built-in KYC, AML, and digital identity verification ensure every blockchain action remains compliant and auditable.",
        useCase: "Regulated businesses entering blockchain without compliance risk."
    },
    {
        icon: Lock,
        title: "Custom Blockchain-as-a-Service (BaaS)",
        description: "Tailored blockchain solutions — from tokenization platforms to hybrid ledgers — designed, deployed, and maintained by EXILENE’s expert team.",
        useCase: "Startups or enterprises needing custom blockchain ecosystems."
    }
];

const features = [
  { text: "Unified dashboard for all blockchain interactions" },
  { text: "99.9% uptime SLA" },
  { text: "Secure API with granular key control" },
  { text: "Supports EVM, Polygon, Solana, and more" },
];

const pricingTiers = [
  { name: "Starter", features: ["1M API Calls/mo", "Community Support"] },
  { name: "Growth", features: ["10M API Calls/mo", "Email Support", "Analytics Dashboard"] },
  { name: "Enterprise", features: ["Unlimited API Calls", "Dedicated Support", "Custom Integrations"] },
];

const partners = [
  { name: "Ethereum", logoUrl: "https://picsum.photos/seed/eth-logo/150/50" },
  { name: "Polygon", logoUrl: "https://picsum.photos/seed/poly-logo/150/50" },
  { name: "Solana", logoUrl: "https://picsum.photos/seed/sol-logo/150/50" },
  { name: "Avalanche", logoUrl: "https://picsum.photos/seed/avax-logo/150/50" },
  { name: "BNB Chain", logoUrl: "https://picsum.photos/seed/bnb-logo/150/50" },
];

const featureImage = PlaceHolderImages.find(p => p.id === 'tech-diagram-1')!;


export const metadata = {
    title: "Services - Exilene",
    description: "A complete suite of blockchain infrastructure services, built to make blockchain as simple as any cloud platform.",
};

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-[#111827] to-[#0B0C10] text-foreground">
      <section className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-3xl font-semibold sm:text-4xl">
              Our Services — Powering Blockchain, Made Effortless
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              EXILENE offers a complete suite of blockchain infrastructure services — built to make blockchain as simple to use as any cloud platform. Each service is modular, scalable, and fully managed by EXILENE’s secure automation engine.
            </p>
            <p className="mt-2 text-gray-300">
              Explore below to see how each piece fits together.
            </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0">
            {services.map((service, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="group border-b-2 border-white/10 transition-shadow hover:shadow-[0_0_15px_rgba(38,167,201,0.3)]">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <service.icon className="h-6 w-6 shrink-0 text-[#26A7C9] transition-colors group-hover:text-[#CC7722]" />
                    <span className="font-headline">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6 text-base text-gray-300 space-y-4">
                  <p>{service.description}</p>
                  <p><span className="font-semibold text-white">Use Case:</span> {service.useCase}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Feature Highlight Section */}
        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-full min-h-[300px] flex items-center justify-center">
                <Image
                    src={featureImage.imageUrl}
                    alt="Illustration of connected chains and APIs"
                    fill
                    className="object-contain rounded-lg"
                    data-ai-hint="connected chains apis"
                />
            </div>
            <div>
                <h2 className="font-headline text-2xl font-bold mb-4">Why Developers Choose Us</h2>
                <ul className="space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span className="text-gray-300">{feature.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Pricing Preview Section */}
        <div className="mt-24 text-center">
            <h2 className="font-headline text-3xl font-semibold">Pricing Plans</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {pricingTiers.map(tier => (
                    <Card key={tier.name} className="bg-card/50 backdrop-blur-sm border-white/10 text-left flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{tier.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-3">
                            {tier.features.map(feature => (
                                <div key={feature} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span className="text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </CardContent>
                        <div className="p-6 pt-0">
                           <Button variant="outline" className="w-full">Choose Plan</Button>
                        </div>
                    </Card>
                ))}
            </div>
            <Button asChild variant="link" className="mt-8 text-primary">
                <Link href="#">
                    View Full Pricing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>

        {/* Integration Partners Section */}
        <div className="mt-24">
            <h2 className="text-center font-headline text-2xl font-semibold mb-8">Integration Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {partners.map(partner => (
                    <Image
                        key={partner.name}
                        src={partner.logoUrl}
                        alt={partner.name}
                        width={130}
                        height={40}
                        className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                        data-ai-hint="blockchain logo"
                    />
                ))}
            </div>
        </div>


         <div className="mt-24 text-center">
            <h3 className="font-headline text-2xl font-semibold max-w-2xl mx-auto">
               Ready to build on blockchain without the complexity?
            </h3>
            <Button asChild size="lg" className="mt-6 bg-[#26A7C9] hover:bg-[#CC7722]">
                <Link href="/contact">
                    Start with EXILENE <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
