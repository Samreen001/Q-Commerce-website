import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

// This would typically come from an API or CMS
const featuredProducts = [
  { id: '1', name: 'Chocolate Delight', description: 'Rich chocolate ice cream', price: 4.99, image: '/images/choc-cake1.webp' },
  { id: '2', name: 'Strawberry Dream', description: 'Fresh strawberry ice cream', price: 4.99, image: '/images/str-cake1.jpg' },
  { id: '3', name: 'Coconut Vanilla', description: 'Fresh Coconut Vanilla', price: 4.99, image: '/images/coco-vanila.jpg' },
  { id: '4', name: 'Pista Ice Cream', description: 'Pista ice cream', price: 4.99, image: '/images/pista.jpg' },
  { id: '5', name: 'Vanilla Bean', description: 'Classic vanilla ice cream', price: 4.99, image: '/images/vanila.png' },
  { id: '6', name: 'TootiFruity', description: 'Tooty Fruity ice cream', price: 4.99, image: '/images/tot-fruit.jpg' },
]

export default function Home() {
  return (
    <div className="container mx-auto bg-pink-300 px-4 py-8">
      <section className="mb-12">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/images/home.jpg"
            alt="Delicious ice cream and cakes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to ChillAndBake</h1>
              <p className="text-xl text-white mb-8">"Discover our delicious ice creams and irresistible cakes, crafted to satisfy your sweetest cravings!"</p>
              <Link
                href="/products"
                className="bg-pink-800 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-pink-700 transition duration-300"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <section className="mb-12 relative">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/why.jpg')" }}></div>
        <div className="relative z-10  bg-opacity-90 p-6 rounded-lg"> 
          <h2 className="text-3xl text-white font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Premium Ingredients</h3>
              <p className="text-white italic">Indulge in perfection crafted from the finest, handpicked ingredients to deliver a taste that lingers.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Handcrafted with Love</h3>
              <p className="text-white italic">Every creation is a masterpiece, made with passion, care, and attention to every little detail.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Wide Variety</h3>
              <p className="text-white italic">From timeless classics to bold new flavors, we offer a selection to satisfy every craving.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

