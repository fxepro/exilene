
"use client"

import { useEffect, useRef, useState } from "react"
import { Building, Milestone, Users, Cpu, Briefcase, Target, Lightbulb, Shield, Globe, Rocket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { timelineEvents, teamMembers } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ end, duration = 2000, suffix = "", decimals = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const startTime = performance.now()
          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime
            if (elapsedTime < duration) {
              const progress = elapsedTime / duration
              const currentVal = start + (end - start) * progress
              setCount(currentVal)
              requestAnimationFrame(animate)
            } else {
              setCount(end)
            }
          }
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

const missionPillars = [
    { icon: Lightbulb, title: "Simplicity", description: "Making complex technology intuitive and accessible for everyone."},
    { icon: Shield, title: "Security", description: "Providing robust, multi-layered security to protect data and transactions."},
    { icon: Globe, title: "Global Access", description: "Ensuring our infrastructure is decentralized, resilient, and available worldwide."},
]

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-[#111827] to-[#0B0C10] text-foreground">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                    Democratizing Blockchain for Everyone
                </h1>
                <p className="text-lg text-muted-foreground">
                    Founded in 2020, EXILENE was born from a vision: to make blockchain technology accessible, secure, and powerful for businesses and developers worldwide. From the first node we deployed to our current multi-chain infrastructure platform, our journey has always been guided by simplicity, innovation, and trust. Today, EXILENE empowers companies to leverage blockchain without technical friction — enabling them to focus on ideas, products, and growth.
                </p>
                <div className="flex gap-4">
                <Button asChild size="lg">
                    <Link href="#team">
                        Meet the Team
                    </Link>
                </Button>
                </div>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] flex items-center justify-center">
                <Image
                    src="https://picsum.photos/seed/connected-nodes/600/400"
                    alt="Abstract animation of connected nodes"
                    fill
                    className="object-cover rounded-lg"
                    data-ai-hint="connected nodes blockchain mesh"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent rounded-lg"></div>
            </div>
            </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 sm:py-32 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                         <h2 className="font-headline text-3xl font-bold tracking-tight">Our Mission & Vision</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our mission is to remove the complexity from blockchain adoption and create a seamless, secure, and human-centered platform for developers, enterprises, and enthusiasts alike. We envision a world where blockchain technology is as intuitive as browsing the web, enabling transparency, efficiency, and innovation across industries.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {missionPillars.map(pillar => (
                            <div key={pillar.title} className="text-center">
                                <pillar.icon className="mx-auto h-10 w-10 text-primary mb-4" />
                                <h3 className="font-headline text-xl font-bold">{pillar.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Journey Timeline Section */}
        <section id="timeline" className="py-24 sm:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Journey</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    From a bold idea to a global network, here is the story of Exilene.
                </p>
                </div>
                <div className="mt-16 relative wrap overflow-hidden h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-primary h-full border" style={{left: '50%'}}></div>
                    {timelineEvents.map((event, index) => {
                        let Icon: any = Milestone;
                        if(event.icon === "Building") Icon = Building;
                        if(event.icon === "Cpu") Icon = Cpu;
                        if(event.icon === "Briefcase") Icon = Briefcase;
                        if(event.icon === "Globe") Icon = Globe;
                        if(event.icon === "Rocket") Icon = Rocket;

                        return (
                            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                                    <Icon className="mx-auto text-primary-foreground" />
                                </div>
                                <div className="order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <p className="mb-2 text-sm font-bold text-primary">{event.year}</p>
                                    <h3 className="mb-3 font-headline font-bold text-foreground text-xl">{event.title}</h3>
                                    <p className="text-sm leading-snug tracking-wide text-muted-foreground text-opacity-100">{event.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 sm:py-32 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight">Team & Expertise</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        EXILENE’s team combines blockchain engineers, software developers, compliance officers, and business strategists. Our core values are collaboration, transparency, and technical excellence, ensuring every solution we provide is secure, scalable, and reliable.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembers.map(member => (
                        <Card key={member.name} className="group bg-card/50 text-center p-6 transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2">
                             <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-transparent group-hover:border-primary transition-colors">
                                <AvatarImage src={member.imageUrl} alt={member.name} />
                                <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                            </Avatar>
                            <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                            <p className="text-primary">{member.role}</p>
                            <p className="text-sm text-muted-foreground mt-2">{member.funFact}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Impact Section */}
         <section className="py-24 sm:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight">Impact & Achievements</h2>
                </div>
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <Cpu className="mx-auto h-10 w-10 text-primary mb-4" />
                        <p className="font-headline text-4xl font-bold">
                        <AnimatedCounter end={500} suffix="+" />
                        </p>
                        <p className="text-muted-foreground">Deployed Nodes</p>
                    </div>
                    <div className="text-center">
                        <Globe className="mx-auto h-10 w-10 text-primary mb-4" />
                        <p className="font-headline text-4xl font-bold">
                        <AnimatedCounter end={20} suffix="+" />
                        </p>
                        <p className="text-muted-foreground">Blockchain Networks Supported</p>
                    </div>
                    <div className="text-center">
                        <Users className="mx-auto h-10 w-10 text-primary mb-4" />
                        <p className="font-headline text-4xl font-bold">
                        <AnimatedCounter end={100} suffix="+" />
                        </p>
                        <p className="text-muted-foreground">Enterprise & Startup Clients</p>
                    </div>
                    <div className="text-center">
                        <Target className="mx-auto h-10 w-10 text-primary mb-4" />
                        <p className="font-headline text-4xl font-bold">
                        <AnimatedCounter end={99.9} decimals={1} suffix="%" />
                        </p>
                        <p className="text-muted-foreground">Uptime SLA</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary/30 py-24">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight max-w-2xl mx-auto">
                    Join Us on the Blockchain Journey
                </h2>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/services">
                            Explore Services
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary/10">
                        <Link href="/contact">
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    </div>
  )
}
