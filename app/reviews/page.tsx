"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Heart, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const products = [
  {
    slug: "la-roche-posay-vitamin-c-serum",
    name: "La Roche-Posay Vitamin C Face Serum",
    category: "Skincare",
    price: "$45.99",
    rating: 4.8,
    reviews: 234,
    image: "https://m.media-amazon.com/images/I/612rQ+tTL6L._SX522_.jpg",
    description: "Antioxidant-rich vitamin C serum that brightens skin and reduces signs of aging for a radiant glow",
    featured: true,
  },
  {
    slug: "collagen-face-moisturizer-cream",
    name: "Collagen Face Moisturizer Cream",
    category: "Skincare",
    price: "$29.99",
    rating: 4.7,
    reviews: 189,
    image: "https://m.media-amazon.com/images/I/71PmiO3ss2L._SX679_.jpg",
    description: "Hydrating collagen-infused cream that firms and plumps skin for a youthful appearance",
    featured: false,
  },
  {
    slug: "wonderskin-lip-stain-blading",
    name: "Wonderskin Lip Stain Blading Long-Lasting",
    category: "Makeup",
    price: "$19.99",
    rating: 4.6,
    reviews: 456,
    image: "https://m.media-amazon.com/images/I/713iq9WwmUL._SX679_.jpg",
    description: "Transfer-proof, waterproof lip stain that delivers all-day color without smudging",
    featured: true,
  },
  {
    slug: "anua-heartleaf-cleansing-cleanser",
    name: "ANUA Heartleaf 77% Soothing Cleanser",
    category: "Skincare",
    price: "$18.99",
    rating: 4.7,
    reviews: 312,
    image: "https://m.media-amazon.com/images/I/61nHrsCJT1L._SX679_.jpg",
    description: "Gentle, pH-balanced cleanser that removes impurities while calming sensitive skin and reducing blackheads",
    featured: false,
  },
  {
    slug: "urban-decay-naked-eyeshadow-palette",
    name: "Urban Decay Naked Eyeshadow Palette",
    category: "Makeup",
    price: "$54.99",
    rating: 4.8,
    reviews: 278,
    image: "https://m.media-amazon.com/images/I/716d48S0WBL._SX522_.jpg",
    description: "Iconic neutral eyeshadow palette with 12 versatile shades for everyday and dramatic looks",
    featured: true,
  },
  {
    slug: "loreal-paris-revitalift-moisturizer",
    name: "L'Oreal Paris Revitalift Anti-Aging Moisturizer",
    category: "Skincare",
    price: "$24.99",
    rating: 4.9,
    reviews: 167,
    image: "https://m.media-amazon.com/images/I/81tTgiDDyWL._SX679_.jpg",
    description: "Hyaluronic acid moisturizer that hydrates deeply and smooths fine lines for firmer skin",
    featured: false,
  },
  {
    slug: "thrive-causemetics-liquid-lash-mascara",
    name: "Thrive Causemetics Liquid Lash Extensions Mascara",
    category: "Makeup",
    price: "$25.00",
    rating: 4.5,
    reviews: 523,
    image: "https://m.media-amazon.com/images/I/61XEyq3FZ3L._SX679_.jpg",
    description: "Vegan, lengthening mascara that adds volume and definition without flaking or smudging",
    featured: false,
  },
  {
    slug: "medicube-triple-collagen-cream",
    name: "Medicube Triple Collagen Cream Moisturizer",
    category: "Skincare",
    price: "$49.99",
    rating: 4.8,
    reviews: 345,
    image: "https://m.media-amazon.com/images/I/61qcv-tUtDL._SX679_.jpg",
    description: "Multi-collagen formula that boosts elasticity and provides intense overnight hydration",
    featured: true,
  },
  {
    slug: "bare-minerals-original-liquid-foundation",
    name: "Bare Minerals Original Liquid Mineral Foundation",
    category: "Makeup",
    price: "$42.99",
    rating: 4.7,
    reviews: 289,
    image: "https://m.media-amazon.com/images/I/81724OgyQ6L._SX522_.jpg",
    description: "Medium-coverage, breathable foundation with mineral-based formula for a natural, flawless finish",
    featured: false,
  },
]

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const filteredAndSortedProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedCategory === "all" || product.category.toLowerCase() === selectedCategory.toLowerCase()
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "price-low":
          return Number.parseFloat(a.price.replace("$", "")) - Number.parseFloat(b.price.replace("$", ""))
        case "price-high":
          return Number.parseFloat(b.price.replace("$", "")) - Number.parseFloat(a.price.replace("$", ""))
        case "popular":
          return b.reviews - a.reviews
        case "newest":
        default:
          return 0 // Keep original order for newest
      }
    })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-foreground mb-6">Product Reviews</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover honest, detailed reviews of the best beauty products. From skincare essentials to makeup
              must-haves, find your perfect match.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value || "all")}>
              <SelectTrigger className="w-full sm:w-48 bg-background">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="skincare">Skincare</SelectItem>
                <SelectItem value="makeup">Makeup</SelectItem>
                <SelectItem value="haircare">Hair Care</SelectItem>
                <SelectItem value="fragrance">Fragrance</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={(value) => setSortBy(value || "newest")}>
              <SelectTrigger className="w-full sm:w-48 bg-background">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredAndSortedProducts.length} of {products.length} products
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No products found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSortBy("newest")
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedProducts.map((product) => (
                <Card
                  key={product.slug}
                  className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.featured && <Badge className="absolute top-4 left-4">Featured</Badge>}
                    <Button variant="ghost" size="sm" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-muted-foreground ml-1">({product.reviews})</span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>

                    <div className="flex items-center justify-end">
                      <Button size="sm" asChild>
                        <Link href={`/reviews/${product.slug}`}>Read Review</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Showing 9 of 47 products</p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-4">Never miss a review</h2>
          <p className="text-lg mb-6 opacity-90">
            Get notified when we review new products in your favorite categories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border border-border"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
