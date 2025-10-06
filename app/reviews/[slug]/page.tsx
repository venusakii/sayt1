import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Star, ShoppingCart, Heart, Share2, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data - in a real app, this would come from a database
const products = {
  "1": {
    slug: "1",
    name: "Vitamin C Brightening Serum",
    category: "Skincare",
    price: "$45.99",
    originalPrice: "$59.99",
    rating: 4.8,
    reviews: 234,
    images: ["/vitamin-c-serum.png", "/vitamin-c-serum-2.jpg", "/vitamin-c-serum-3.jpg"],
    description:
      "This powerful antioxidant serum is formulated with 20% L-Ascorbic Acid to brighten and even skin tone while protecting against environmental damage.",
    ingredients: ["20% L-Ascorbic Acid", "Hyaluronic Acid", "Vitamin E", "Ferulic Acid", "Aloe Vera Extract"],
    pros: [
      "Visibly brightens skin in 2-3 weeks",
      "Lightweight, non-greasy formula",
      "Suitable for sensitive skin",
      "Excellent value for money",
      "Minimal packaging waste",
    ],
    cons: [
      "May cause initial tingling sensation",
      "Requires consistent use for best results",
      "Bottle could be larger for the price",
    ],
    amazonUrl: "https://amazon.com/dp/example1",
    overallScore: 4.8,
    effectiveness: 4.9,
    value: 4.7,
    packaging: 4.6,
    skinType: ["All skin types", "Sensitive skin friendly"],
    howToUse:
      "Apply 2-3 drops to clean, dry skin in the morning. Follow with moisturizer and SPF. Start with every other day and gradually increase to daily use.",
    reviewText: `After testing this Vitamin C serum for 6 weeks, I can confidently say it's one of the best affordable options on the market. The 20% L-Ascorbic Acid concentration is impressive for the price point, and the addition of hyaluronic acid helps prevent the dryness often associated with vitamin C products.

The texture is lightweight and absorbs quickly without leaving any sticky residue. I noticed a visible improvement in my skin's brightness and overall radiance within the first two weeks of use. Dark spots from previous breakouts have significantly faded, and my skin looks more even-toned.

The packaging is simple but effective, with a dark glass bottle that protects the vitamin C from light degradation. The dropper dispenser makes it easy to control the amount used, though I do wish the bottle was slightly larger given how quickly I go through it with daily use.

One thing to note is that this serum can cause a slight tingling sensation when first introduced to your routine, especially if you have sensitive skin. I recommend starting with every other day and gradually building up to daily use.

Overall, this is an excellent vitamin C serum that delivers on its promises without breaking the bank. It's become a staple in my morning routine, and I've already repurchased it twice.`,
  },
  "cerave-hydrating-cleanser": {
    slug: "cerave-hydrating-cleanser",
    name: "CeraVe Hydrating Facial Cleanser",
    category: "Skincare",
    price: "$12.99",
    originalPrice: "$15.99",
    rating: 4.6,
    reviews: 8247,
    images: ["/cerave-hydrating-cleanser.jpg", "/cerave-cleanser-back.jpg", "/cerave-cleanser-texture.jpg"],
    description:
      "A gentle, non-foaming cleanser that removes makeup and dirt while maintaining the skin's natural protective barrier with three essential ceramides and hyaluronic acid.",
    ingredients: ["Ceramides 1, 3, 6-II", "Hyaluronic Acid", "Niacinamide", "Vitamin B5", "MVE Technology"],
    pros: [
      "Gentle formula suitable for sensitive skin",
      "Effectively removes makeup without stripping",
      "Contains beneficial ceramides and hyaluronic acid",
      "Great value for money",
      "Dermatologist recommended",
    ],
    cons: [
      "May not remove waterproof makeup completely",
      "Some users prefer foaming cleansers",
      "Pump dispenser can be inconsistent",
    ],
    amazonUrl: "https://amazon.com/dp/B01MSSDEPK",
    overallScore: 4.6,
    effectiveness: 4.7,
    value: 4.8,
    packaging: 4.3,
    skinType: ["All skin types", "Sensitive skin", "Dry skin"],
    howToUse:
      "Apply to wet skin, massage gently, and rinse with lukewarm water. Use morning and evening as part of your skincare routine.",
    reviewText: `After using the CeraVe Hydrating Facial Cleanser for 8 weeks, I can understand why it's become such a cult favorite in the skincare community. This gentle, non-foaming cleanser has completely changed my cleansing routine for the better.

The texture is creamy and luxurious, feeling more like a moisturizing lotion than a traditional cleanser. It glides smoothly across the skin and doesn't create any foam, which initially felt strange but I quickly grew to love. The cleanser effectively removes daily makeup, sunscreen, and impurities without leaving my skin feeling tight or stripped.

What sets this cleanser apart is its impressive ingredient list. The inclusion of three essential ceramides (1, 3, and 6-II) helps restore and maintain the skin's natural barrier, while hyaluronic acid provides an extra boost of hydration. The MVE (MultiVesicular Emulsion) technology ensures these ingredients are released slowly throughout the day.

The 12 fl oz pump bottle is practical and hygienic, though I've noticed the pump can sometimes dispense inconsistent amounts. The price point is excellent for the quality and quantity you receive - this bottle has lasted me nearly 3 months with twice-daily use.

My skin feels noticeably softer and more hydrated since incorporating this cleanser. It's particularly excellent for those with sensitive or dry skin, as it cleanses without disruption to the skin barrier.`,
  },
  "the-ordinary-niacinamide": {
    slug: "the-ordinary-niacinamide",
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    category: "Skincare",
    price: "$7.90",
    originalPrice: null,
    rating: 4.3,
    reviews: 12456,
    images: ["/the-ordinary-niacinamide.jpg", "/ordinary-niacinamide-bottle.jpg", "/ordinary-niacinamide-texture.jpg"],
    description:
      "A high-strength vitamin and mineral blemish formula with 10% niacinamide and 1% zinc PCA to reduce the appearance of skin blemishes and congestion.",
    ingredients: ["10% Niacinamide", "1% Zinc PCA", "Aqua", "Pentylene Glycol", "Zinc PCA"],
    pros: [
      "Incredibly affordable price point",
      "High concentration of active ingredients",
      "Helps reduce oil production and pore appearance",
      "Suitable for acne-prone skin",
      "Minimalist, effective formulation",
    ],
    cons: [
      "Can cause purging in first few weeks",
      "May be too strong for sensitive skin",
      "Sticky texture that some find unpleasant",
      "Small bottle size",
    ],
    amazonUrl: "https://amazon.com/dp/B06Y2GGF9Q",
    overallScore: 4.3,
    effectiveness: 4.5,
    value: 4.9,
    packaging: 3.8,
    skinType: ["Oily skin", "Acne-prone skin", "Combination skin"],
    howToUse:
      "Apply a few drops to clean skin before heavier creams. Use once daily, preferably in the evening. Start with every other day if you have sensitive skin.",
    reviewText: `The Ordinary's Niacinamide 10% + Zinc 1% serum has been a game-changer in my skincare routine, though it definitely comes with a learning curve. At under $8, this serum delivers professional-grade results that rival products costing ten times more.

The 10% niacinamide concentration is quite high, which means this serum is serious business. I noticed a significant reduction in oil production within the first two weeks of use, and my pores appeared visibly smaller after about a month. The 1% zinc PCA helps with blemish control, and I've seen fewer breakouts since incorporating this into my routine.

However, the texture is where this product loses some points. It's quite sticky and can pill under certain moisturizers or makeup. I've learned to use it sparingly - just 2-3 drops for my entire face - and to wait a few minutes before applying other products. The stickiness does fade once fully absorbed.

I experienced some initial purging during the first three weeks, which is normal when introducing niacinamide at this concentration. My skin looked worse before it looked better, but persistence paid off. Those with sensitive skin should definitely start slowly - perhaps every other day initially.

The packaging is basic but functional, though the small 30ml bottle means frequent repurchasing. For the price point, this is still exceptional value. This serum has earned its place as a holy grail product for oily and acne-prone skin types.`,
  },
  "fenty-beauty-gloss-bomb": {
    slug: "fenty-beauty-gloss-bomb",
    name: "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    category: "Makeup",
    price: "$22.00",
    originalPrice: null,
    rating: 4.7,
    reviews: 3892,
    images: ["/fenty-beauty-gloss-bomb.jpg", "/fenty-gloss-bomb-open.jpg", "/fenty-gloss-bomb-lips.jpg"],
    description:
      "An explosive lip gloss that delivers universal sheer-to-medium buildable coverage with incredible shine that looks amazing on everyone.",
    ingredients: [
      "Polybutene",
      "Diisostearyl Malate",
      "Hydrogenated Polyisobutene",
      "Tridecyl Trimellitate",
      "Vanilla Extract",
    ],
    pros: [
      "Universal shade that flatters all skin tones",
      "Long-lasting shine without stickiness",
      "Comfortable, non-drying formula",
      "Beautiful packaging and applicator",
      "Subtle vanilla scent",
    ],
    cons: [
      "Higher price point for a lip gloss",
      "Can emphasize lip texture if not prepped",
      "May transfer onto cups/utensils",
      "Limited shade range in this formula",
    ],
    amazonUrl: "https://amazon.com/dp/B075R8QHPX",
    overallScore: 4.7,
    effectiveness: 4.8,
    value: 4.2,
    packaging: 4.9,
    skinType: ["All skin tones", "All lip types"],
    howToUse:
      "Apply directly to lips using the doe-foot applicator. Can be worn alone or over lipstick for added shine. Reapply as needed throughout the day.",
    reviewText: `Fenty Beauty's Gloss Bomb in Fu$$y has completely revolutionized my relationship with lip gloss. As someone who typically avoided glosses due to their sticky, uncomfortable feel, this product has converted me into a daily gloss wearer.

The formula is absolutely incredible - it provides a beautiful, mirror-like shine without any of the tackiness I associate with traditional lip glosses. The coverage is buildable, offering a sheer wash of color with one swipe or more intensity with additional layers. The "universal" claim is not marketing hype - this peachy-pink shade truly complements every skin tone I've seen it on.

What impressed me most is the longevity. Unlike other glosses that disappear after drinking water, Gloss Bomb maintains its shine for hours. Even after eating, there's still a subtle luminosity left behind. The vanilla scent is delicate and pleasant without being overwhelming.

The packaging deserves special mention - the clear tube with rose gold cap feels luxurious and substantial. The doe-foot applicator picks up the perfect amount of product and allows for precise application. It's definitely Instagram-worthy and looks beautiful on any vanity.

At $22, it's pricier than drugstore alternatives, but the quality justifies the cost. A little goes a long way, and I've been using mine daily for three months with plenty left. This has become my signature lip product and I've already repurchased in multiple shades.`,
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductReviewPage({ params }: PageProps) {
  const { slug } = await params
  const product = products[slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  const ratingDistribution = [
    { stars: 5, percentage: 68, count: 159 },
    { stars: 4, percentage: 22, count: 51 },
    { stars: 3, percentage: 7, count: 16 },
    { stars: 2, percentage: 2, count: 5 },
    { stars: 1, percentage: 1, count: 3 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <section className="py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/reviews" className="hover:text-primary">
              Reviews
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {product.category}
                </Badge>
                <h1 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-lg">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
                )}
                {product.originalPrice && <Badge variant="destructive">Save 23%</Badge>}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1" asChild>
                  <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Buy on Amazon
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </Button>
              </div>

              {/* Key Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Skin Type</span>
                      <p className="font-medium">{product.skinType.join(", ")}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Category</span>
                      <p className="font-medium">{product.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Review Scores */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Expert Review</h2>
            <p className="text-lg text-muted-foreground">Comprehensive analysis based on 6 weeks of testing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{product.overallScore}</div>
                <div className="text-sm text-muted-foreground mb-3">Overall Score</div>
                <Progress value={product.overallScore * 20} className="h-2" />
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{product.effectiveness}</div>
                <div className="text-sm text-muted-foreground mb-3">Effectiveness</div>
                <Progress value={product.effectiveness * 20} className="h-2" />
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{product.value}</div>
                <div className="text-sm text-muted-foreground mb-3">Value</div>
                <Progress value={product.value * 20} className="h-2" />
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{product.packaging}</div>
                <div className="text-sm text-muted-foreground mb-3">Packaging</div>
                <Progress value={product.packaging * 20} className="h-2" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Review */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">Detailed Review</h2>
                <div className="prose prose-lg max-w-none text-foreground">
                  {product.reviewText.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <Separator />

              {/* How to Use */}
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-4">How to Use</h3>
                <p className="text-muted-foreground leading-relaxed">{product.howToUse}</p>
              </div>

              <Separator />

              {/* Ingredients */}
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-4">Key Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <Badge key={index} variant="outline">
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pros & Cons */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Pros & Cons</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-green-600 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Pros
                      </h4>
                      <ul className="space-y-1">
                        {product.pros.map((pro, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium text-orange-600 mb-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Cons
                      </h4>
                      <ul className="space-y-1">
                        {product.cons.map((con, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rating Breakdown */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Rating Breakdown</h3>
                  <div className="space-y-3">
                    {ratingDistribution.map((rating) => (
                      <div key={rating.stars} className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1 w-12">
                          <span className="text-sm">{rating.stars}</span>
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        </div>
                        <Progress value={rating.percentage} className="flex-1 h-2" />
                        <span className="text-sm text-muted-foreground w-8">{rating.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Buy Now CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Ready to try it?</h3>
                  <p className="text-sm opacity-90 mb-4">Get the best price on Amazon</p>
                  <Button variant="secondary" size="lg" className="w-full" asChild>
                    <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Buy Now - {product.price}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-8 text-center">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["cerave-hydrating-cleanser", "the-ordinary-niacinamide", "fenty-beauty-gloss-bomb"].map((relatedId) => {
              const relatedProduct = products[relatedId as keyof typeof products]
              return (
                <Card key={relatedProduct.slug} className="group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProduct.images[0] || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">({relatedProduct.reviews})</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{relatedProduct.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xl">{relatedProduct.price}</span>
                      <Button size="sm" asChild>
                        <Link href={`/reviews/${relatedProduct.slug}`}>View Review</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
