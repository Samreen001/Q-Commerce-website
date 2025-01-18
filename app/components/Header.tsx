'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, User, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-purple-500 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-600">
          ChillAndBake
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-700 hover:text-pink-600">Home</Link>
          <Link href="/products" className="text-gray-700 hover:text-pink-600">Products</Link>
          <Link href="/blog" className="text-gray-700 hover:text-pink-600">Blog</Link>
          <Link href="/contact" className="text-gray-700 hover:text-pink-600">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-gray-700 hover:text-pink-600">
            <ShoppingCart />
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-pink-600">
            <User />
          </Link>
          <button
            className="md:hidden text-gray-700 hover:text-pink-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-pink-50 py-2">
          <nav className="flex flex-col space-y-2 px-4">
            <Link href="/" className="text-gray-700 hover:text-pink-600">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-pink-600">Products</Link>
            <Link href="/blog" className="text-gray-700 hover:text-pink-600">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-600">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

