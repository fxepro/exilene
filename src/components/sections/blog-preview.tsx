
import Link from "next/link"
import Image from "next/image"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { blogPosts } from "@/lib/data"
import { ArrowRight } from "lucide-react"

const featuredPosts = blogPosts.slice(0, 3)

export function BlogPreview() {
  return (
    <section id="blog" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Insights & Updates</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Stay informed with our latest research, company news, and thoughts on the future of technology.
            </p>
          </div>
          <Button asChild variant="link" className="mt-4 md:mt-0">
            <Link href="/blog">View All Posts <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.imageUrl}
                    alt={`Cover image for ${post.title}`}
                    fill
                    className="object-cover"
                    data-ai-hint="technology article"
                  />
                </div>
              </Link>
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={post.authorImageUrl} alt={post.author} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
