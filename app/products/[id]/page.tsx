"use client"

import { use } from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteLayout } from "@/components/site-layout"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const resolvedParams = use(Promise.resolve(params))
  const [selectedSize, setSelectedSize] = useState("m")
  const [product, setProduct] = useState(() => {
    return products.find((p) => p.id === resolvedParams.id) || products[0]
  })

  const handleBuyNow = () => {
    // Format WhatsApp message with product details
    const message = `Hello! I'm interested in purchasing the ${product.name} (Size: ${selectedSize.toUpperCase()}) for $${product.price}. Is it available?`
    const encodedMessage = encodeURIComponent(message)

    // Replace with your actual WhatsApp number
    const whatsappNumber = "1234567890"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <SiteLayout>
      <div className="container px-4 py-6 md:py-10">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" size="sm" asChild className="rounded-full">
            <Link href="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={800}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="overflow-hidden rounded-lg border cursor-pointer">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    width={150}
                    height={200}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="rounded-full">
                  {product.category}
                </Badge>
                {product.isNew && <Badge className="rounded-full">New Arrival</Badge>}
              </div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < 4 ? "fill-primary text-primary" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(24 reviews)</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice > 0 && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <Badge variant="destructive" className="rounded-full">
                      {product.discount}% OFF
                    </Badge>
                  </>
                )}
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="size">Size</Label>
                <RadioGroup
                  id="size"
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="flex flex-wrap gap-2"
                >
                  {["xs", "s", "m", "l", "xl"].map((size) => (
                    <div key={size}>
                      <RadioGroupItem id={`size-${size}`} value={size} className="peer sr-only" />
                      <Label
                        htmlFor={`size-${size}`}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-muted bg-transparent peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                      >
                        {size.toUpperCase()}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button onClick={handleBuyNow} size="lg" className="rounded-full">
                  Buy Now
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Wishlist
                </Button>
              </div>
            </div>
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="space-y-4 pt-4">
                <p>
                  {product.description ||
                    `This ${product.name} is a unique thrift find that combines style, comfort, and sustainability. Perfect for any occasion, this piece adds character to your wardrobe while reducing fashion waste.`}
                </p>
                <p>
                  Each item in our collection is carefully selected and inspected to ensure quality. Due to the nature
                  of thrift clothing, this is a one-of-a-kind piece that won't be restocked once sold.
                </p>
              </TabsContent>
              <TabsContent value="details" className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">Condition</h4>
                    <p className="text-muted-foreground">Excellent</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Material</h4>
                    <p className="text-muted-foreground">Cotton Blend</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Brand</h4>
                    <p className="text-muted-foreground">Vintage</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Era</h4>
                    <p className="text-muted-foreground">90s</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="space-y-4 pt-4">
                <p>We offer the following shipping options:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Standard Shipping (3-5 business days): $4.99</li>
                  <li>Express Shipping (1-2 business days): $9.99</li>
                  <li>Free shipping on orders over $50</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Note: After purchasing through WhatsApp, we'll arrange shipping details and payment methods.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products
              .filter((p) => p.id !== params.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      width={300}
                      height={400}
                      className="aspect-[3/4] w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-medium">{relatedProduct.name}</h3>
                    <p className="text-sm text-muted-foreground">${relatedProduct.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
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
    description:
      "This authentic vintage denim jacket features classic styling with a comfortable fit. The washed blue denim has the perfect amount of fading for that lived-in look everyone loves. With functional pockets and adjustable button cuffs, this versatile piece works for any season.",
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
    description:
      "This retro graphic tee features a faded vintage print that gives it an authentic thrifted look. Made from soft, breathable cotton, it offers both comfort and style for everyday wear.",
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
    description:
      "These high-waisted jeans offer a flattering fit with a vintage-inspired silhouette. The classic denim has just the right amount of stretch for comfort while maintaining its shape throughout the day.",
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
    description:
      "Stay cozy in this oversized vintage sweater. The chunky knit provides warmth while the relaxed fit offers comfort and style. Perfect for layering during colder months.",
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
    description:
      "This classic plaid flannel shirt is a wardrobe essential. Made from soft cotton, it features a comfortable fit and timeless pattern that never goes out of style.",
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
    description:
      "This vintage leather crossbody bag combines style and functionality. The genuine leather has developed a beautiful patina over time, making each bag unique. Features multiple compartments for organization.",
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
    description:
      "This authentic vintage band tee is a rare find for music lovers. The distressed graphics and soft, worn-in fabric tell the story of its history while adding edge to any outfit.",
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
    description:
      "This corduroy button-up shirt offers texture and warmth with a vintage appeal. The rich fabric has a subtle pattern that adds interest to any outfit while remaining versatile.",
  },
]

