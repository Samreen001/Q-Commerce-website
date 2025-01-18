import { NextResponse } from 'next/server'

export async function GET() {
  // Fetch products from your database or external API
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, description: 'Description for Product 1', image: '/product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, description: 'Description for Product 2', image: '/product2.jpg' },
    { id: 3, name: 'Product 3', price: 39.99, description: 'Description for Product 3', image: '/product3.jpg' },
  ]

  return NextResponse.json(products)
}

