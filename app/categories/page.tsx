import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import { SiteLayout } from "@/components/site-layout"

export default function CategoriesPage() {
  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shop by Category</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Browse our collection by category to find exactly what you're looking for
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {categories.map((category) => (
              <Link key={category.id} href={`/products?category=${category.slug}`}>
                <Card className="overflow-hidden rounded-xl transition-all hover:shadow-lg">
                  <div className="relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={400}
                      height={300}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      <p className="text-sm text-white/80">{category.itemCount} items</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

const categories = [
  {
    id: "1",
    name: "T-Shirts",
    slug: "t-shirts",
    description: "Vintage and retro t-shirts with unique designs and graphics",
    itemCount: 24,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "2",
    name: "Outerwear",
    slug: "outerwear",
    description: "Jackets, coats, and other outerwear for all seasons",
    itemCount: 18,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "3",
    name: "Bottoms",
    slug: "bottoms",
    description: "Jeans, pants, shorts, and skirts in various styles",
    itemCount: 32,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "4",
    name: "Dresses",
    slug: "dresses",
    description: "Vintage dresses for any occasion",
    itemCount: 15,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "5",
    name: "Accessories",
    slug: "accessories",
    description: "Bags, jewelry, hats, and other accessories to complete your look",
    itemCount: 27,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "6",
    name: "Shoes",
    slug: "shoes",
    description: "Vintage and second-hand footwear for all styles",
    itemCount: 12,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "7",
    name: "Sweaters",
    slug: "sweaters",
    description: "Cozy knits and sweaters for cooler weather",
    itemCount: 20,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "8",
    name: "Shirts",
    slug: "shirts",
    description: "Button-ups, flannels, and other stylish shirts",
    itemCount: 22,
    image: "/placeholder.svg?height=300&width=400",
  },
]

