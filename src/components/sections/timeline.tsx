"use client"

import { useEffect, useRef, useState } from "react"
import { Building, Milestone, Users, Network } from "lucide-react"

import { timelineEvents } from "@/lib/data"

function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
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
              setCount(Math.floor(end * progress))
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
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Timeline() {
  return (
    <section id="timeline" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From a bold idea to a global network, here is the story of Exilene.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-3 mt-16">
          <div className="lg:col-span-2">
            <div className="relative wrap overflow-hidden h-full">
              <div className="border-2-2 absolute border-opacity-20 border-primary h-full border" style={{left: '50%'}}></div>
              {timelineEvents.map((event, index) => (
                <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                    <Milestone className="mx-auto text-primary-foreground" />
                  </div>
                  <div className="order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <p className="mb-2 text-sm font-bold text-primary">{event.year}</p>
                    <h3 className="mb-3 font-headline font-bold text-foreground text-xl">{event.title}</h3>
                    <p className="text-sm leading-snug tracking-wide text-muted-foreground text-opacity-100">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
             <h3 className="font-headline text-2xl font-bold tracking-tight">Key Metrics</h3>
             <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                    <Network className="mx-auto h-10 w-10 text-primary mb-2" />
                    <p className="font-headline text-3xl font-bold">
                       <AnimatedCounter end={1} suffix="M+" />
                    </p>
                    <p className="text-muted-foreground">Active Nodes</p>
                </div>
                <div className="text-center">
                    <Users className="mx-auto h-10 w-10 text-primary mb-2" />
                    <p className="font-headline text-3xl font-bold">
                       <AnimatedCounter end={500} suffix="K+" />
                    </p>
                    <p className="text-muted-foreground">Community Members</p>
                </div>
                <div className="text-center">
                    <Building className="mx-auto h-10 w-10 text-primary mb-2" />
                    <p className="font-headline text-3xl font-bold">
                       <AnimatedCounter end={50} suffix="+" />
                    </p>
                    <p className="text-muted-foreground">Enterprise Partners</p>
                </div>
                 <div className="text-center">
                    <p className="font-headline text-3xl font-bold">
                       <AnimatedCounter end={99.99} duration={2500} suffix="%" />
                    </p>
                    <p className="text-muted-foreground">Network Uptime</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
