import Image from 'next/image'
import Link from 'next/link'

// This would typically come from an API or database
const blogPosts = [
  { 
    id: '1', 
    title: 'The Chilling History of Ice Cream',
    description: 'Embark on a fascinating journey through time with ChillandBake as we explore the rich history of ice cream. From its ancient origins as a luxury for emperors to its modern-day popularity, discover how this frozen treat has evolved over centuries. Learn about key innovations in ice cream making and how different cultures have influenced the flavors we enjoy today at ChillandBake.', 
    image: '/images/ice-journy.jpg' 
  },
  { 
    id: '2', 
    title: 'ChillandBake\'s Top 10 Ice Cream Flavors', 
    description: 'Indulge your taste buds as we count down ChillandBake\'s most beloved ice cream flavors. From our classic vanilla bean to our exotic matcha swirl, we\'ll explore what makes each flavor special and why it has captured the hearts of our customers. Discover the ingredients that make these flavors shine and get inspired to try new combinations on your next visit to ChillandBake.', 
    image: '/images/flavors.jpg' 
  },
  { 
    id: '3', 
    title: 'How to Make Ice Cream at Home: ChillandBake\'s Secret Tips', 
    description: 'Bring the ChillandBake experience to your kitchen with our comprehensive guide to homemade ice cream. We\'ll walk you through the process step-by-step, from selecting the freshest ingredients to achieving that perfect creamy texture. Learn about different bases, how to infuse flavors, and tips for churning without an ice cream maker. While nothing beats a scoop from ChillandBake, these tips will help you create delicious treats at home!', 
    image: '/images/make.jpg' 
  },
  { 
    id: '4', 
    title: 'Cake Decorating Tips from ChillandBake\'s Master Bakers', 
    description: 'Elevate your cake game with professional decorating tips from ChillandBake\'s expert bakers. Whether you\'re a beginner or looking to refine your skills, this post covers everything from creating smooth buttercream surfaces to intricate piping techniques. We\'ll guide you through the essential tools, share secrets for working with fondant, and offer ideas for stunning edible decorations inspired by our most popular ChillandBake cakes.', 
    image: '/images/deco.jpg' 
  },
  { 
    id: '5', 
    title: 'Healthy Dessert Alternatives at ChillandBake', 
    description: 'Discover ChillandBake\'s range of delicious, healthier alternatives to traditional desserts. We\'ll introduce you to our selection of treats made with natural sweeteners, nutrient-rich ingredients, and clever substitutions that cut calories without compromising on taste. From our protein-packed ice creams to gluten-free cakes, learn about the options that cater to various dietary needs while still delivering that indulgent ChillandBake experience.', 
    image: '/images/diff.des.jpg' 
  },
  { 
    id: '6', 
    title: 'The Art of Ice Cream Making at ChillandBake', 
    description: 'Dive deep into the craft of artisanal ice cream making with ChillandBake\'s master ice cream makers. This post reveals the secrets behind creating the perfect scoop, from understanding the science of freezing to mastering the balance of flavors and textures. Discover how we at ChillandBake incorporate unique flavors and add-ins to create our signature ice cream experiences that keep you coming back for more.', 
    image: '/images/art.jpg' 
  },
  { 
    id: '7', 
    title: 'The Perfect Pairing: ChillandBake\'s Ice Cream and Cake Combos', 
    description: 'Experience the magic that happens when ChillandBake\'s two dessert favorites come together. This post is all about our carefully curated pairings of artisanal ice creams and gourmet cakes. We\'ll guide you through our most popular combinations, from classic duos to innovative flavor pairings that will tantalize your taste buds. Learn how we at ChillandBake create dessert synergies that turn a simple treat into an unforgettable experience.', 
    image: '/images/pair.jpg' 
  },
  { 
    id: '8', 
    title: 'Behind the Scenes: ChillandBake\'s Baking Process', 
    description: 'Take an exclusive tour of ChillandBake\'s kitchen and witness the passion and craftsmanship that goes into every cake and ice cream we create. This post pulls back the curtain on our baking and churning processes, from the selection of premium ingredients to our meticulous decorating techniques. You\'ll learn about our commitment to quality, our time-honored recipes, and the innovative touches that make ChillandBake treats so special.', 
    image: '/images/process.jpg' 
  },
]

export default function BlogPage() {
  return (
    <div className="container bg-pink-200 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ChillandBake Blog</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} className="block">
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={500}
                height={500}
                className="w-full sm:w-48 h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

