import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-pink-600">Home</Link></li>
              <li><Link href="/products" className="hover:text-pink-600">Products</Link></li>
              <li><Link href="/blog" className="hover:text-pink-600">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-pink-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Ice Cream Lane</p>
            <p>Frosty City, FC 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@chillandbake.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-2">Subscribe to our newsletter for updates and special offers!</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
              <button
                type="submit"
                className="bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 ChillAndBake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

