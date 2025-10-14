
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { homePageServices as services } from "@/lib/data"

export function Services() {
  return (
    <section id="services" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a suite of services to help you build, deploy, and scale on the decentralized web.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0">
            {services.map((service, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-2">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  <div className="flex items-center gap-4">
                    <service.icon className="h-6 w-6 shrink-0 text-primary" />
                    <span className="font-headline">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-base text-muted-foreground">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
