
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { blogPosts } from "@/lib/data"

export const metadata = {
  title: "Blog - Exilene",
  description: "Insights, research, and updates from the Exilene team.",
}

export default function BlogPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Insights & Updates</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Our latest research, company news, and thoughts on the future of technology.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
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
    </div>
  )
}
