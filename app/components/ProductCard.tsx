import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image 
        src={image} 
        alt={name} 
        width={300} 
        height={200} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-pink-600 font-bold">${price.toFixed(2)}</span>
          <Link
            href={`/products/${id}`}
            className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

