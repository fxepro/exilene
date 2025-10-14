
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const techDiagram1 = PlaceHolderImages.find(p => p.id === 'tech-diagram-1')!;
const techDiagram2 = PlaceHolderImages.find(p => p.id === 'tech-diagram-2')!;

export function Technology() {
  return (
    <section id="technology" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Core Technology</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform is built on a foundation of cutting-edge research and engineering, designed for performance and security.
          </p>
        </div>

        <Tabs defaultValue="network" className="mt-12">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
            <TabsTrigger value="network">Decentralized Network</TabsTrigger>
            <TabsTrigger value="processing">Data Processing</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          <TabsContent value="network">
            <Card className="mt-6 overflow-hidden">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-6 flex flex-col justify-center">
                  <CardHeader className="p-0">
                    <CardTitle className="font-headline">Peer-to-Peer Mesh</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-muted-foreground">
                      Exilene utilizes a dynamic mesh network, ensuring no single point of failure and optimal data routing. Each node communicates directly with its peers, creating a resilient and self-healing infrastructure. This architecture provides superior uptime and censorship resistance compared to traditional client-server models.
                    </p>
                  </CardContent>
                </div>
                <div className="relative min-h-[250px] md:min-h-full">
                  <Image
                    src={techDiagram1.imageUrl}
                    alt={techDiagram1.description}
                    data-ai-hint={techDiagram1.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="processing">
             <Card className="mt-6">
               <CardHeader>
                 <CardTitle className="font-headline">High-Throughput Protocol</CardTitle>
                 <CardDescription>
                   Our custom-built protocol, EXI-Link, is optimized for low-latency and high-throughput data transfer, capable of handling millions of transactions per second.
                 </CardDescription>
               </CardHeader>
               <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Concurrent transaction processing.</li>
                    <li>Lossless data compression algorithms.</li>
                    <li>Predictive resource allocation for nodes.</li>
                  </ul>
               </CardContent>
             </Card>
          </TabsContent>
          <TabsContent value="security">
            <Card className="mt-6 overflow-hidden">
                <div className="grid gap-4 md:grid-cols-2">
                     <div className="p-6 flex flex-col justify-center">
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline">Quantum-Resistant Encryption</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 pt-4">
                            <p className="text-muted-foreground">
                            We implement post-quantum cryptographic algorithms to safeguard data against threats from both classical and quantum computers. Our multi-layered security approach includes end-to-end encryption, regular security audits, and a decentralized identity system to ensure data integrity and confidentiality.
                            </p>
                        </CardContent>
                    </div>
                    <div className="relative min-h-[250px] md:min-h-full">
                        <Image
                            src={techDiagram2.imageUrl}
                            alt={techDiagram2.description}
                            data-ai-hint={techDiagram2.imageHint}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
