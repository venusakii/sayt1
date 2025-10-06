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
  "la-roche-posay-vitamin-c-serum": {
    slug: "la-roche-posay-vitamin-c-serum",
    name: "La Roche-Posay Vitamin C Face Serum",
    category: "Skincare",
    price: "$45.99",
    originalPrice: "$59.99",
    rating: 4.8,
    reviews: 234,
    images: [
      "https://m.media-amazon.com/images/I/612rQ+tTL6L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/612rQ+tTL6L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/612rQ+tTL6L._SX522_.jpg",
    ],
    description:
      "Antioxidant-rich vitamin C serum that brightens skin and reduces signs of aging for a radiant glow with thermal spring water for soothing.",
    ingredients: ["12% Pure Vitamin C", "Hyaluronic Acid", "Salicylic Acid", "Thermal Spring Water", "Vitamin E"],
    pros: [
      "Brightens dull skin effectively",
      "Reduces hyperpigmentation over time",
      "Gentle on sensitive skin",
      "Fast-absorbing, non-greasy texture",
      "Dermatologist-tested formula",
    ],
    cons: [
      "May oxidize if not stored properly",
      "Slight tingling on first use",
      "Dropper can be messy",
    ],
    amazonUrl: "https://www.amazon.com/Roche-Posay-vitamin-renovator-radiance/dp/",
    overallScore: 4.8,
    effectiveness: 4.9,
    value: 4.7,
    packaging: 4.6,
    skinType: ["All skin types", "Sensitive skin", "Dull skin"],
    howToUse:
      "Apply 3-4 drops to clean, dry face in the morning. Gently pat in and follow with moisturizer and sunscreen. Use daily for best results.",
    reviewText: `I've been using the La Roche-Posay Vitamin C Serum for over two months now, and it's become an essential part of my morning routine. The 12% pure vitamin C concentration is potent yet gentle, thanks to the inclusion of salicylic acid for gentle exfoliation and thermal spring water to soothe any potential irritation.

From the first week, I noticed a subtle brightening effect - my skin tone looked more even, and the overall dullness that comes from winter months started to fade. After a full month, dark spots from old acne have visibly lightened, and my complexion has that healthy, radiant glow I've been chasing. The serum's lightweight, watery texture absorbs in seconds without any stickiness, layering beautifully under makeup or other serums.

The dark glass bottle with dropper is practical for preserving the vitamin C's potency, though I do keep it in a cool, dark place as recommended. There's a faint medicinal scent that dissipates quickly, which I don't mind at all. For the price, this delivers clinical-level results without the hassle of prescription treatments. If you're new to vitamin C, this is an excellent starting point - just remember sunscreen is non-negotiable!`,
  },
  "collagen-face-moisturizer-cream": {
    slug: "collagen-face-moisturizer-cream",
    name: "Collagen Face Moisturizer Cream",
    category: "Skincare",
    price: "$29.99",
    originalPrice: "$39.99",
    rating: 4.7,
    reviews: 189,
    images: [
      "https://m.media-amazon.com/images/I/71PmiO3ss2L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71PmiO3ss2L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71PmiO3ss2L._SX679_.jpg",
    ],
    description:
      "Hydrating collagen-infused cream that firms and plumps skin for a youthful appearance with added peptides for elasticity.",
    ingredients: ["Hydrolyzed Collagen", "Peptides", "Hyaluronic Acid", "Niacinamide", "Shea Butter"],
    pros: [
      "Noticeable plumping effect",
      "Lightweight yet deeply moisturizing",
      "Improves skin firmness",
      "Non-comedogenic formula",
      "Pleasant subtle scent",
    ],
    cons: [
      "May pill under certain serums",
      "Jar packaging less hygienic",
      "Results take 4-6 weeks",
    ],
    amazonUrl: "https://www.amazon.com/Face-Moisturizer-Collagen-Cream-Moisturizing/dp/",
    overallScore: 4.7,
    effectiveness: 4.8,
    value: 4.7,
    packaging: 4.5,
    skinType: ["Dry skin", "Mature skin", "Combination skin"],
    howToUse:
      "Apply a dime-sized amount to clean face and neck morning and evening. Massage gently until absorbed. Follow with SPF in the AM.",
    reviewText: `This collagen moisturizer has been a pleasant surprise in my routine - it's one of those products that quietly delivers results over time. The formula feels luxurious, with a creamy texture that melts into the skin without any heaviness, making it suitable even for my combination skin type.

After consistent use for six weeks, I've seen a subtle but real improvement in my skin's firmness around the jawline and cheeks. The hydrolyzed collagen and peptides work together to plump and support elasticity, while hyaluronic acid ensures deep hydration without greasiness. My makeup applies more smoothly now, and I wake up with softer, more supple skin.

The jar comes with a spatula, which is a nice touch for hygiene, though I still prefer pump packaging. The scent is light and clean, fading quickly. At this price, it's an accessible way to incorporate anti-aging benefits without overwhelming actives. It's not a miracle worker overnight, but for daily maintenance, it's fantastic value.`,
  },
  "wonderskin-lip-stain-blading": {
    slug: "wonderskin-lip-stain-blading",
    name: "Wonderskin Lip Stain Blading Long-Lasting",
    category: "Makeup",
    price: "$19.99",
    originalPrice: "$24.99",
    rating: 4.6,
    reviews: 456,
    images: [
      "https://m.media-amazon.com/images/I/713iq9WwmUL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/713iq9WwmUL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/713iq9WwmUL._SX679_.jpg",
    ],
    description:
      "Transfer-proof, waterproof lip stain that delivers all-day color without smudging using innovative blading applicator technology.",
    ingredients: ["Aloe Vera", "Vitamin E", "Hyaluronic Acid", "Glycerin", "Natural Pigments"],
    pros: [
      "Lasts 12+ hours without fading",
      "No bleeding or feathering",
      "Hydrating despite matte finish",
      "Easy precision applicator",
      "Buildable color intensity",
    ],
    cons: [
      "Removal requires oil-based cleanser",
      "Can feel drying if not prepped",
      "Limited shade variety",
    ],
    amazonUrl: "https://www.amazon.com/Wonderskin-Blading-Lasting-Transfer-Waterproof/dp/",
    overallScore: 4.6,
    effectiveness: 4.7,
    value: 4.6,
    packaging: 4.5,
    skinType: ["All lip types", "Dry lips with prep"],
    howToUse:
      "Exfoliate lips first. Apply using the blading applicator in short strokes. Let dry for 30 seconds. Top with gloss if desired.",
    reviewText: `The Wonderskin Lip Stain has solved my biggest lip makeup frustration - longevity without the discomfort. The unique blading applicator glides on like a marker, depositing even color that dries to a natural, non-shiny finish. I love how it doesn't feather or bleed, even on my thinner lip lines.

Wear time is impressive: after a full day of eating, drinking, and talking, the color remains vibrant with minimal touch-up needed. It's surprisingly hydrating thanks to the aloe and hyaluronic acid, so my lips don't feel parched like with traditional stains. The shades are sheer but buildable, giving a your-lips-but-better vibe.

Removal takes effort - micellar water alone won't cut it; I need an oil cleanser - but that's the trade-off for such staying power. At under $20, this is a budget-friendly alternative to salon lip tattoos for those long days. It's become my go-to for events where I can't fuss with reapplication.`,
  },
  "anua-heartleaf-cleansing-cleanser": {
    slug: "anua-heartleaf-cleansing-cleanser",
    name: "ANUA Heartleaf 77% Soothing Cleanser",
    category: "Skincare",
    price: "$18.99",
    originalPrice: "$22.99",
    rating: 4.7,
    reviews: 312,
    images: [
      "https://m.media-amazon.com/images/I/61nHrsCJT1L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61nHrsCJT1L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61nHrsCJT1L._SX679_.jpg",
    ],
    description:
      "Gentle, pH-balanced cleanser that removes impurities while calming sensitive skin and reducing blackheads with 77% heartleaf extract.",
    ingredients: ["77% Heartleaf Extract", "Panthenol", "Allantoin", "Betaine", "No Sulfates"],
    pros: [
      "Ultra-gentle on reactive skin",
      "Balances pH without stripping",
      "Reduces redness and irritation",
      "Light herbal scent",
      "Pump dispenser for hygiene",
    ],
    cons: [
      "Low lather may feel insufficient",
      "Not ideal for heavy makeup removal",
      "Bottle size runs small",
    ],
    amazonUrl: "https://www.amazon.com/ANUA-Heartleaf-Cleansing-Cleanser-Blackheads/dp/",
    overallScore: 4.7,
    effectiveness: 4.8,
    value: 4.7,
    packaging: 4.6,
    skinType: ["Sensitive skin", "Acne-prone skin", "Combination skin"],
    howToUse:
      "Dispense into hands, lather with water, and massage onto face. Rinse thoroughly. Use AM/PM as first cleanse.",
    reviewText: `As someone with sensitive, acne-prone skin, finding a cleanser that cleans without causing breakouts has been challenging - until this ANUA Heartleaf Cleanser. The 77% heartleaf extract is a soothing powerhouse, calming redness and preventing the tightness I get from harsher formulas.

It lathers minimally, which initially threw me off, but it effectively removes daily grime and light makeup while maintaining my skin's moisture barrier. My blackheads have diminished noticeably after a month, and flare-ups are rarer. The pH-balanced formula leaves my skin feeling clean yet balanced, not stripped.

The pump bottle is travel-friendly and hygienic, with a fresh, herbal scent that's subtle and non-overpowering. For the price, this is a gentle workhorse that punches above its weight in calming irritated skin. I've repurchased and recommended it to all my reactive-skin friends.`,
  },
  "urban-decay-naked-eyeshadow-palette": {
    slug: "urban-decay-naked-eyeshadow-palette",
    name: "Urban Decay Naked Eyeshadow Palette",
    category: "Makeup",
    price: "$54.99",
    originalPrice: null,
    rating: 4.8,
    reviews: 278,
    images: [
      "https://m.media-amazon.com/images/I/716d48S0WBL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/716d48S0WBL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/716d48S0WBL._SX522_.jpg",
    ],
    description:
      "Iconic neutral eyeshadow palette with 12 versatile shades for everyday and dramatic looks, featuring velvety mattes and subtle shimmers.",
    ingredients: ["Talc", "Mica", "Dimethicone", "Ethylhexyl Palmitate", "Mineral Pigments"],
    pros: [
      "Buttery, blendable formula",
      "No fallout or creasing",
      "Versatile neutral shades",
      "Mirror included for portability",
      "Long-lasting pigmentation",
    ],
    cons: [
      "Some shades similar in tone",
      "Shimmers need primer",
      "Compact but bulky for travel",
    ],
    amazonUrl: "https://www.amazon.com/URBAN-DECAY-Eyeshadow-Everyday-Cruelty-free/dp/",
    overallScore: 4.8,
    effectiveness: 4.9,
    value: 4.7,
    packaging: 4.8,
    skinType: ["All skin tones", "All eye types"],
    howToUse:
      "Prime lids first. Use a fluffy brush for blending mattes in crease; pack shimmers on lid with finger. Set with primer for longevity.",
    reviewText: `The Urban Decay Naked Palette lives up to its legendary status - it's the ultimate neutral collection for effortless eye looks. The 12 shades strike a perfect balance of everyday taupes and smokier browns, with mattes that blend like butter and shimmers that catch light beautifully without glitter bombs.

Pigmentation is spot-on: one swipe shows true color, and blending is seamless, even for beginners. I've worn these shades through 10-hour days with minimal fade, thanks to the primer-infused formula. No fallout means clean application every time.

The sturdy case with full mirror is a bonus for on-the-go touch-ups, though it's not the slimmest for purses. At this price, it's an investment that replaces multiple singles. If you want one palette to rule them all, this is it - my kit's MVP for years.`,
  },
  "loreal-paris-revitalift-moisturizer": {
    slug: "loreal-paris-revitalift-moisturizer",
    name: "L'Oreal Paris Revitalift Anti-Aging Moisturizer",
    category: "Skincare",
    price: "$24.99",
    originalPrice: "$29.99",
    rating: 4.9,
    reviews: 167,
    images: [
      "https://m.media-amazon.com/images/I/81tTgiDDyWL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81tTgiDDyWL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81tTgiDDyWL._SX679_.jpg",
    ],
    description:
      "Hyaluronic acid moisturizer that hydrates deeply and smooths fine lines for firmer skin with pro-retinol for gentle renewal.",
    ingredients: ["Hyaluronic Acid", "Pro-Retinol", "Vitamin C", "Glycerin", "Shea Butter"],
    pros: [
      "Affordable anti-aging powerhouse",
      "Instant plumping hydration",
      "Reduces wrinkles over time",
      "Lightweight daily use",
      "Wide availability",
    ],
    cons: [
      "Scent may be strong for some",
      "Jar less sanitary than pump",
      "Milder results for deep lines",
    ],
    amazonUrl: "https://www.amazon.com/LOreal-Paris-Moisturizer-Revitalift-Anti-Aging/dp/",
    overallScore: 4.9,
    effectiveness: 4.9,
    value: 5.0,
    packaging: 4.5,
    skinType: ["All skin types", "Aging skin", "Dry skin"],
    howToUse:
      "Apply generously to face and neck after cleansing. Use morning and night. Pair with SPF during day.",
    reviewText: `L'Oreal's Revitalift has been my secret weapon against aging on a budget - it delivers spa-like results without the spa price. The hyaluronic acid quenches thirst instantly, while pro-retinol works overnight to smooth texture and firm.

After two months, fine lines around my mouth have softened, and my skin feels bouncier. The cream absorbs fast, no grease, and layers under makeup flawlessly. The subtle fresh scent is invigorating, not overpowering.

The jar is generous-sized and easy to scoop, though a spatula helps with hygiene. For under $25, this rivals luxury creams in hydration and renewal. It's accessible anti-aging at its best - my routine's hero.`,
  },
  "thrive-causemetics-liquid-lash-mascara": {
    slug: "thrive-causemetics-liquid-lash-mascara",
    name: "Thrive Causemetics Liquid Lash Extensions Mascara",
    category: "Makeup",
    price: "$25.00",
    originalPrice: null,
    rating: 4.5,
    reviews: 523,
    images: [
      "https://m.media-amazon.com/images/I/61XEyq3FZ3L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61XEyq3FZ3L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61XEyq3FZ3L._SX679_.jpg",
    ],
    description:
      "Vegan, lengthening mascara that adds volume and definition without flaking or smudging, infused with orchid stem cell for lash conditioning.",
    ingredients: ["Orchid Stem Cell Complex", "Beeswax Alternative", "Vitamin B5", "Shea Butter", "Carnauba Wax"],
    pros: [
      "Dramatic length and separation",
      "Buildable without clumps",
      "Nourishes lashes over time",
      "Smudge-proof formula",
      "Clean, vegan ingredients",
    ],
    cons: [
      "Wand may be too curved for some",
      "Dries down fast",
      "Average volume boost",
    ],
    amazonUrl: "https://www.amazon.com/Thrive-Causemetics-Extensions-Lengthening-Volumizing/dp/",
    overallScore: 4.5,
    effectiveness: 4.6,
    value: 4.5,
    packaging: 4.7,
    skinType: ["All eye types", "Sensitive eyes"],
    howToUse:
      "Curl lashes. Apply from root to tip with zigzag motion. Build layers. Remove with warm water.",
    reviewText: `Thrive's Liquid Lash Mascara gives falsies-without-the-fuss vibes with its tubing technology that slides off with warm water - genius for sensitive eyes. The orchid stem cells condition while the formula lengthens dramatically, fanning lashes beautifully.

One coat separates and defines; two add intensity without clumps. It withstands humidity and tears, no smudges. Lashes feel healthier after weeks, less brittle.

The curved wand grabs every lash, though hood-eyed folks might trim it. Packaging is sleek, eco-conscious. At $25, it's premium clean beauty that performs - my lash game's elevated.`,
  },
  "medicube-triple-collagen-cream": {
    slug: "medicube-triple-collagen-cream",
    name: "Medicube Triple Collagen Cream Moisturizer",
    category: "Skincare",
    price: "$49.99",
    originalPrice: "$59.99",
    rating: 4.8,
    reviews: 345,
    images: [
      "https://m.media-amazon.com/images/I/61qcv-tUtDL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61qcv-tUtDL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61qcv-tUtDL._SX679_.jpg",
    ],
    description:
      "Multi-collagen formula that boosts elasticity and provides intense overnight hydration with low-molecular collagen for deep penetration.",
    ingredients: ["Triple Collagen Complex", "Ceramides", "Peptides", "Hyaluronic Acid", "Niacinamide"],
    pros: [
      "Deeply penetrates for firming",
      "Overnight glow-up effect",
      "Barrier-strengthening",
      "Silky, non-sticky feel",
      "Visible elasticity boost",
    ],
    cons: [
      "Rich texture for oily skin",
      "Jar hygiene concerns",
      "Subtle scent lingers",
    ],
    amazonUrl: "https://www.amazon.com/Medicube-Triple-Collagen-Cream-Moisturizer/dp/",
    overallScore: 4.8,
    effectiveness: 4.9,
    value: 4.7,
    packaging: 4.6,
    skinType: ["Dry skin", "Mature skin", "Dull skin"],
    howToUse:
      "Apply as last step PM routine. Massage upward. Use pea-size amount; pair with device for absorption.",
    reviewText: `Medicube's Triple Collagen Cream is a night-time indulgence that pays off come morning. The low-molecular collagens sink in deep, firming and plumping while ceramides lock in moisture for supple skin.

Waking to dewier, bouncier complexion after a month - pores refined, lines softened. Texture's rich yet absorbs fully, no pillow grease. Subtle glow rivals gua sha.

Glass jar's elegant but use spatula. Scent's clean, fades fast. Worth every penny for that collagen cocktail - my skin's elasticity game-changer.`,
  },
  "bare-minerals-original-liquid-foundation": {
    slug: "bare-minerals-original-liquid-foundation",
    name: "Bare Minerals Original Liquid Mineral Foundation",
    category: "Makeup",
    price: "$42.99",
    originalPrice: "$49.99",
    rating: 4.7,
    reviews: 289,
    images: [
      "https://m.media-amazon.com/images/I/81724OgyQ6L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/81724OgyQ6L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/81724OgyQ6L._SX522_.jpg",
    ],
    description:
      "Medium-coverage, breathable foundation with mineral-based formula for a natural, flawless finish infused with skincare benefits.",
    ingredients: ["Titanium Dioxide", "Zinc Oxide", "Hyaluronic Acid", "Vitamin E", "Aloe Vera"],
    pros: [
      "Buildable, skin-like coverage",
      "Breathable all-day wear",
      "Skincare-infused minerals",
      "No oxidation issues",
      "30-shade inclusive range",
    ],
    cons: [
      "Sheer for full coverage needs",
      "Pump dispenses generously",
      "Matte finish requires glow add",
    ],
    amazonUrl: "https://www.amazon.com/Bare-Minerals-Original-Foundation-Medium/dp/",
    overallScore: 4.7,
    effectiveness: 4.8,
    value: 4.6,
    packaging: 4.7,
    skinType: ["All skin types", "Sensitive skin", "Acne-prone"],
    howToUse:
      "Shake well. Apply with brush/sponge for sheer; fingers for buildable. Set lightly if oily.",
    reviewText: `Bare Minerals' Liquid Foundation redefined 'no-makeup makeup' for me - medium coverage that evens without masking. Minerals like titanium dioxide blur imperfections naturally, while hyaluronic plumps.

Lasts 8-10 hours, breathable sans caking. Shades match truly, no orange shift. Feels like skincare, not paint - my sensitive skin's dream.

Dropper bottle's precise, recyclable. At $43, it's premium natural coverage. Everyday essential for that fresh-faced vibe.`,
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
            {[
              "cerave-hydrating-cleanser",
              "the-ordinary-niacinamide",
              "fenty-beauty-gloss-bomb",
              "waterproof-mascara",
              "matte-liquid-lipstick-set",
              "hydrating-night-cream",
              "gentle-cleansing-oil",
              "eyeshadow-palette-neutral-tones",
              "retinol-anti-aging-cream",
              "hyaluronic-acid-moisturizer",
              "foundation-full-coverage",
            ].map((relatedId) => {
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
