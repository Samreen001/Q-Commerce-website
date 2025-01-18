import { createClient } from '@sanity/client'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-10-21',
})

async function getProduct(id: string) {
  return await client.fetch(`*[_type == "product" && _id == $id][0]`, { id })
}

const products = [
  { id: '1', name: 'Chocolate Delight', description: 'Rich chocolate ice cream with chocolate chips and a fudge swirl. Made with premium cocoa and fresh cream for an indulgent experience.', price: 4.99, image: '/images/choc-cake1.webp', type: 'ice cream' },
  { id: '2', name: 'Strawberry Dream', description: 'Fresh strawberry ice cream made with ripe, juicy strawberries. A perfect balance of sweetness and fruity flavor.', price: 4.99, image: '/images/str-cake1.jpg', type: 'ice cream' },
  { id: '3', name: 'Coconut Vanilla', description: 'Smooth vanilla ice cream with a tropical twist of coconut. Made with real vanilla beans and coconut cream.', price: 4.99, image: '/images/coco-vanila.jpg', type: 'ice cream' },
  { id: '4', name: 'Pista Ice Cream', description: 'Creamy pistachio ice cream made with roasted pistachios. A nutty and rich flavor that\'s both sophisticated and comforting.', price: 4.99, image: '/images/pista.jpg', type: 'ice cream' },
  { id: '5', name: 'Vanilla Bean', description: 'Classic vanilla ice cream made with real vanilla beans. Smooth, creamy, and timelessly delicious.', price: 4.99, image: '/images/vanila.png', type: 'ice cream' },
  { id: '6', name: 'TootiFruity', description: 'A colorful mix of fruit-flavored ice cream with chunks of real fruit. A fun and fruity adventure in every scoop.', price: 4.99, image: '/images/tot-fruit.jpg', type: 'ice cream' },
  { id: '7', name: 'Chocolate Cake', description: 'Decadent chocolate cake with rich frosting. Perfect for any celebration or indulgent treat.', price: 24.99, image: '/images/chocolate-cake.jpg', type: 'cake' },
  { id: '8', name: 'Strawberry Shortcake', description: 'Light and fluffy cake with fresh strawberries. A delightful balance of sweet and tangy flavors.', price: 22.99, image: '/images/strawberry-shortcake.jpg', type: 'cake' },
  { id: '9', name: 'Different delicious Cake', description: 'Assorted delicious and colorful homemade cakes with different type of filling,elegance in every bite.', price: 19.99, image: '/images/diff.cake.jpg', type: 'cake' },
]

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-pink-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-lg text-gray-700 mb-4 capitalize">{product.type}</p>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-pink-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

