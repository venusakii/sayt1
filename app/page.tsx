import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Truck, Award, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                Premium Beauty Reviews
              </Badge>
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
                Discover your perfect beauty routine
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Expert reviews and curated selections of the finest skincare and makeup products. Transform your beauty
                routine with our trusted recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/reviews">Explore Reviews</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                <img
                  src="/luxury-premium-cosmetics-collection.jpg"
                  alt="Premium beauty collection"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why choose The Cosmo Store?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're dedicated to helping you find the perfect beauty products through honest reviews and expert
              curation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Trusted Reviews</h3>
                <p className="text-muted-foreground">
                  Honest, unbiased reviews from beauty experts and real customers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Only the finest skincare and makeup products make it to our recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Easy Shopping</h3>
                <p className="text-muted-foreground">Direct links to Amazon for convenient and secure purchasing.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Explore our categories
            </h2>
            <p className="text-xl text-muted-foreground">
              From skincare essentials to glamorous makeup, find everything you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group cursor-pointer overflow-hidden">
              <div className="relative">
                <img
                  src="/luxury-skincare-products-on-marble-surface.jpg"
                  alt="Skincare"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-playfair text-3xl font-bold text-white mb-2">Skincare</h3>
                  <p className="text-white/90">Nourish and protect your skin</p>
                </div>
              </div>
            </Card>

            <Card className="group cursor-pointer overflow-hidden">
              <div className="relative">
                <img
                  src="/elegant-makeup-products-and-brushes.jpg"
                  alt="Makeup"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-playfair text-3xl font-bold text-white mb-2">Makeup</h3>
                  <p className="text-white/90">Express your unique beauty</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">Featured products</h2>
            <p className="text-xl text-muted-foreground">Our top-rated beauty essentials this month.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src="/cerave-hydrating-cleanser.jpg"
                  alt="CeraVe Hydrating Facial Cleanser"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4">Best Seller</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">(24,567)</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">CeraVe Hydrating Facial Cleanser</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Gentle daily cleanser with ceramides and hyaluronic acid for normal to dry skin.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl">$12.99</span>
                  <Button size="sm" asChild>
                    <Link href="/reviews/cerave-hydrating-cleanser">View Review</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src="/the-ordinary-niacinamide.jpg"
                  alt="The Ordinary Niacinamide 10% + Zinc 1%"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4">Editor's Choice</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(4)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-4 w-4 text-gray-300" />
                  <span className="ml-2 text-sm text-muted-foreground">(18,432)</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">The Ordinary Niacinamide 10% + Zinc 1%</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  High-strength vitamin and mineral blemish formula for clearer skin.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl">$7.90</span>
                  <Button size="sm" asChild>
                    <Link href="/reviews/the-ordinary-niacinamide">View Review</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src="/fenty-beauty-gloss-bomb.jpg"
                  alt="Fenty Beauty Gloss Bomb Universal Lip Luminizer"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4">Trending</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">(9,876)</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Fenty Beauty Gloss Bomb Universal Lip Luminizer</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Explosive shine that feels as good as it looks in universal Fenty Glow.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl">$22.00</span>
                  <Button size="sm" asChild>
                    <Link href="/reviews/fenty-beauty-gloss-bomb">View Review</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What our customers say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real reviews from real people who trust our recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                review: "The Cosmo Store helped me find the perfect skincare routine. My skin has never looked better!",
                rating: 5,
              },
              {
                name: "Emily Chen",
                review: "Honest reviews and great product recommendations. I trust their expertise completely.",
                rating: 5,
              },
              {
                name: "Maria Rodriguez",
                review: "Finally found makeup products that work for my skin tone. Thank you for the detailed reviews!",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-semibold">{testimonial.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">Stay updated with beauty trends</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest product reviews, beauty tips, and exclusive recommendations delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border border-border"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to transform your beauty routine?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our comprehensive reviews and find your perfect products today.
          </p>
          <Button size="lg" asChild>
            <Link href="/reviews">Start Exploring</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
