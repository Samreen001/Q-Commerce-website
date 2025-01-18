import Image from 'next/image'
import { notFound } from 'next/navigation'

// This would typically come from an API or database
const blogPosts = [
  { id: '1', title: 'The History of Ice Cream', content: 'Ice cream has a rich history dating back to ancient civilizations...', image: '/images/ice-cream-history.jpg' },
  { id: '2', title: 'Top 10 Ice Cream Flavors', content: 'Discover the most popular ice cream flavors around the world...', image: '/images/top-flavors.jpg' },
  { id: '3', title: 'How to Make Ice Cream at Home', content: 'Learn how to make delicious homemade ice cream with these simple steps...', image: '/images/homemade-ice-cream.jpg' },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="rounded-lg mb-8"
      />
      <div className="prose lg:prose-xl">
        <p>{post.content}</p>
      </div>
    </div>
  )
}

