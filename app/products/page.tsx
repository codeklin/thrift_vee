import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteLayout } from "@/components/site-layout"

export default function ProductsPage() {
  return (
    <SiteLayout>
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
              <p className="text-muted-foreground">Browse our collection of unique thrift clothing</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="w-full sm:w-[260px]">
                <Input placeholder="Search products..." className="rounded-full" />
              </div>
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-[180px] rounded-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <Card className="overflow-hidden rounded-xl">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={500}
                      className="aspect-[3/4] w-full object-cover transition-transform group-hover:scale-105"
                    />
                    {product.isNew && <Badge className="absolute left-2 top-2 rounded-full">New</Badge>}
                    {product.discount > 0 && (
                      <Badge variant="destructive" className="absolute right-2 top-2 rounded-full">
                        {product.discount}% OFF
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">${product.price.toFixed(2)}</span>
                      {product.originalPrice > 0 && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <Button size="sm" className="rounded-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-2 py-10">
            <Button variant="outline" size="icon" className="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="sr-only">Previous page</span>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              1
            </Button>
            <Button variant="outline" size="sm" className="rounded-full bg-muted">
              2
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              3
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              4
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              5
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

const products = [
  {
    id: "1",
    name: "Vintage Denim Jacket",
    category: "Outerwear",
    price: 49.99,
    originalPrice: 69.99,
    discount: 28,
    image: "/placeholder.svg?height=500&width=400",
    isNew: true,
  },
  {
    id: "2",
    name: "Retro Graphic Tee",
    category: "T-Shirts",
    price: 24.99,
    originalPrice: 0,
    discount: 0,
    image: "/placeholder.svg?height=500&width=400",
    isNew: false,
  },
  {
    id: "3",
    name: "High-Waisted Jeans",
    category: "Bottoms",
    price: 39.99,
    originalPrice: 0,
    discount: 0,
    image: "/placeholder.svg?height=500&width=400",
    isNew: true,
  },
  {
    id: "4",
    name: "Oversized Sweater",
    category: "Sweaters",
    price: 34.99,
    originalPrice: 44.99,
    discount: 22,
    image: "/placeholder.svg?height=500&width=400",
    isNew: false,
  },
  {
    id: "5",
    name: "Plaid Flannel Shirt",
    category: "Shirts",
    price: 29.99,
    originalPrice: 0,
    discount: 0,
    image: "/placeholder.svg?height=500&width=400",
    isNew: false,
  },
  {
    id: "6",
    name: "Leather Crossbody Bag",
    category: "Accessories",
    price: 45.99,
    originalPrice: 59.99,
    discount: 23,
    image: "/placeholder.svg?height=500&width=400",
    isNew: true,
  },
  {
    id: "7",
    name: "Vintage Band T-Shirt",
    category: "T-Shirts",
    price: 27.99,
    originalPrice: 0,
    discount: 0,
    image: "/placeholder.svg?height=500&width=400",
    isNew: false,
  },
  {
    id: "8",
    name: "Corduroy Button-Up Shirt",
    category: "Shirts",
    price: 32.99,
    originalPrice: 42.99,
    discount: 23,
    image: "/placeholder.svg?height=500&width=400",
    isNew: false,
  },
]

