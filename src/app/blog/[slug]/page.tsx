
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft } from "lucide-react"

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) {
    return {}
  }
  return {
    title: `${post.title} - Exilene Blog`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-8">
            <Link href="/blog" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
            </Link>
        </div>

        <header className="mb-12">
          <Badge variant="secondary" className="mb-4">Insight</Badge>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-4">
            <Avatar>
              <AvatarImage src={post.authorImageUrl} alt={post.author} />
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </div>
          </div>
        </header>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-12">
          <Image
            src={post.imageUrl}
            alt={`Featured image for ${post.title}`}
            fill
            className="object-cover"
            priority
            data-ai-hint="technology article"
          />
        </div>

        <div className="prose dark:prose-invert prose-lg max-w-none mx-auto">
          <p className="lead">{post.description}</p>
          <Separator className="my-8" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
          </p>
          <h3 className="font-headline">A Deeper Dive</h3>
          <p>
            Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.
          </p>
          <pre className="font-code bg-muted p-4 rounded-md overflow-x-auto">
            <code>
{`const exilene = new ExileneNode({
  networkId: 'mainnet',
  bootstrapPeers: ['/ip4/1.2.3.4/tcp/4001/p2p/...']
});

async function start() {
  await exilene.start();
  console.log('Exilene node started:', exilene.peerId.toString());
}

start();`}
            </code>
          </pre>
          <h3 className="font-headline">Conclusion</h3>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. 
          </p>
        </div>
      </div>
    </article>
  )
}
