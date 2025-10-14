import { BlogPreview } from "@/components/sections/blog-preview";
import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { Services } from "@/components/sections/services";
import { Technology } from "@/components/sections/technology";
import { Timeline } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Technology />
      <Services />
      <Partners />
      <Timeline />
      <BlogPreview />
      <Contact />
    </>
  );
}
