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
  "vitamin-c-brightening-serum": {
    slug: "vitamin-c-brightening-serum",
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
  "waterproof-mascara": {
    slug: "waterproof-mascara",
    name: "Waterproof Mascara - Volume & Length",
    category: "Makeup",
    price: "$24.99",
    originalPrice: "$32.99",
    rating: 4.5,
    reviews: 523,
    images: ["/waterproof-mascara-tube.jpg", "/mascara-wand-closeup.jpg", "/mascara-application-on-lashes.jpg"],
    description:
      "A high-performance waterproof mascara that delivers dramatic volume and length while staying smudge-proof and flake-free all day long.",
    ingredients: ["Beeswax", "Carnauba Wax", "Panthenol (Pro-Vitamin B5)", "Vitamin E", "Nylon Fibers"],
    pros: [
      "Truly waterproof - survives swimming and tears",
      "Dramatic volume and length without clumping",
      "Stays put for 12+ hours",
      "Easy to remove with oil-based cleanser",
      "Curved brush reaches every lash",
    ],
    cons: [
      "Requires oil-based makeup remover",
      "Can be slightly difficult to build up layers",
      "Wand may be too large for short lashes",
      "Dries quickly in the tube",
    ],
    amazonUrl: "https://amazon.com/dp/B08EXAMPLE",
    overallScore: 4.5,
    effectiveness: 4.7,
    value: 4.6,
    packaging: 4.2,
    skinType: ["All eye types", "Sensitive eyes", "Contact lens wearers"],
    howToUse:
      "Start at the base of lashes and wiggle the wand upward in a zigzag motion. Apply 2-3 coats for maximum volume. Remove with an oil-based makeup remover or cleansing balm.",
    reviewText: `After putting this waterproof mascara through rigorous testing - including a beach vacation, multiple workouts, and even a few emotional movie nights - I can confidently say it lives up to its waterproof claims. This mascara truly doesn't budge once it sets.

The formula is buildable and creates impressive volume and length without the dreaded spider lashes effect. The curved brush design is excellent for reaching corner lashes and lower lashes, though those with very short lashes might find it slightly oversized. The bristles are densely packed, which helps separate lashes while depositing plenty of product.

What impressed me most is how this mascara maintains its integrity throughout the day. After 12 hours of wear, including a sweaty gym session, my lashes still looked freshly applied with no flaking, smudging, or raccoon eyes. The waterproof formula is seriously impressive - I tested it in the pool and it didn't budge at all.

The removal process does require an oil-based cleanser or makeup remover, which is standard for waterproof formulas. I found that a cleansing balm works best, melting the mascara away without excessive rubbing. Regular water-based cleansers won't cut it, so be prepared to invest in a good makeup remover.

One minor drawback is that the formula can dry out faster than regular mascaras, so make sure to close the tube tightly after each use. I've been using mine for two months and it's still performing well, but I've noticed it's slightly less wet than when I first opened it.

At $24.99, this is reasonably priced for a high-quality waterproof mascara. It's perfect for anyone who needs their makeup to last through challenging conditions - whether that's humidity, exercise, or emotional moments. This has become my go-to mascara for special occasions and active days.`,
  },
  "matte-liquid-lipstick-set": {
    slug: "matte-liquid-lipstick-set",
    name: "Matte Liquid Lipstick Set",
    category: "Makeup",
    price: "$29.99",
    originalPrice: "$39.99",
    rating: 4.6,
    reviews: 456,
    images: ["/matte- lipstick-set.jpg", "/placeholder.svg?key= lipstick2", "/placeholder.svg?key= lipstick3"],
    description:
      "A collection of 6 highly pigmented, long-lasting liquid lipsticks in stunning matte shades that stay put all day without drying out your lips.",
    ingredients: ["Vitamin E", "Jojoba Oil", "Shea Butter", "Mineral Pigments", "Beeswax"],
    pros: [
      "Excellent color payoff with one swipe",
      "Comfortable matte finish that doesn't crack",
      "Long-lasting formula (8+ hours)",
      "Great shade variety in one set",
      "Affordable price for 6 lipsticks",
    ],
    cons: [
      "Can be slightly drying after extended wear",
      "Requires lip liner for precise application",
      "Some shades may settle into lip lines",
    ],
    amazonUrl: "https://amazon.com/dp/B08LIPSTICK",
    overallScore: 4.6,
    effectiveness: 4.7,
    value: 4.8,
    packaging: 4.3,
    skinType: ["All lip types", "Best with lip prep"],
    howToUse:
      "Exfoliate and moisturize lips before application. Apply from the center of lips outward using the precision applicator. Allow to dry for 30 seconds for best results.",
    reviewText: `This matte liquid lipstick set has become my go-to for everyday wear and special occasions alike. The set includes 6 versatile shades ranging from nude to bold red, making it perfect for any look or mood.

The formula is impressively pigmented - one swipe delivers full, opaque color that looks professional and polished. Unlike many matte lipsticks that feel like they're sucking the life out of your lips, this formula contains moisturizing ingredients like jojoba oil and shea butter that keep lips comfortable throughout the day.

I've tested the wear time extensively, and these lipsticks truly last 8+ hours with minimal fading. They survive coffee, meals, and even light snacking without completely disappearing. There is some transfer onto cups, but the color remains vibrant on the lips.

The applicator is precise and makes application easy, though I do recommend using a lip liner for the boldest shades to prevent any feathering. The packaging is sleek and compact, making it easy to carry multiple shades in your makeup bag.

At $29.99 for 6 full-sized lipsticks, this set offers incredible value. Each shade is wearable and flattering, with no duds in the collection.`,
  },
  "hydrating-night-cream": {
    slug: "hydrating-night-cream",
    name: "Hydrating Night Cream",
    category: "Skincare",
    price: "$62.99",
    originalPrice: "$79.99",
    rating: 4.9,
    reviews: 189,
    images: ["/luxury-night-cream-jar.jpg", "/placeholder.svg?key=cream2", "/placeholder.svg?key=cream3"],
    description:
      "A rich, luxurious night cream that works while you sleep to deeply hydrate, repair, and rejuvenate your skin with powerful anti-aging ingredients.",
    ingredients: ["Retinol", "Peptides", "Hyaluronic Acid", "Squalane", "Niacinamide", "Ceramides"],
    pros: [
      "Deeply hydrating without feeling heavy",
      "Visible improvement in skin texture",
      "Reduces fine lines and wrinkles",
      "Luxurious texture and scent",
      "Wake up with plump, glowing skin",
    ],
    cons: [
      "Higher price point",
      "May be too rich for oily skin types",
      "Contains retinol (not suitable for pregnancy)",
    ],
    amazonUrl: "https://amazon.com/dp/B08NIGHTCREAM",
    overallScore: 4.9,
    effectiveness: 4.9,
    value: 4.5,
    packaging: 4.8,
    skinType: ["Dry skin", "Mature skin", "Normal skin"],
    howToUse:
      "Apply to clean, dry skin every evening. Gently massage into face and neck using upward motions. Allow to absorb fully before sleeping. Use SPF during the day as this product contains retinol.",
    reviewText: `This hydrating night cream has transformed my nighttime skincare routine into a luxurious self-care ritual. The texture is rich and creamy, yet it absorbs beautifully without leaving a greasy residue on my pillowcase.

The ingredient list reads like a skincare dream team - retinol for cell turnover, peptides for firmness, hyaluronic acid for hydration, and ceramides for barrier repair. After 8 weeks of consistent use, I've noticed a significant improvement in my skin's texture and tone. Fine lines around my eyes have softened, and my skin looks noticeably more radiant.

What I love most is waking up with plump, hydrated skin that looks refreshed and glowing. The cream has a subtle, sophisticated scent that makes the application experience feel spa-like. The jar packaging is elegant and substantial, though I do wish it came with a spatula for more hygienic application.

At $62.99, this is definitely an investment piece in your skincare routine, but the results justify the price. A little goes a long way, and the jar has lasted me nearly 3 months with nightly use.`,
  },
  "gentle-cleansing-oil": {
    slug: "gentle-cleansing-oil",
    name: "Gentle Cleansing Oil",
    category: "Skincare",
    price: "$38.99",
    originalPrice: null,
    rating: 4.7,
    reviews: 312,
    images: ["/cleansing-oil-bottle.jpg", "/placeholder.svg?key=oil2", "/placeholder.svg?key=oil3"],
    description:
      "A lightweight cleansing oil that effortlessly melts away makeup, sunscreen, and impurities while nourishing your skin with botanical oils.",
    ingredients: ["Jojoba Oil", "Grapeseed Oil", "Vitamin E", "Chamomile Extract", "Green Tea Extract"],
    pros: [
      "Removes waterproof makeup effortlessly",
      "Doesn't leave oily residue",
      "Gentle on sensitive skin",
      "Emulsifies beautifully with water",
      "Pleasant natural scent",
    ],
    cons: [
      "May require double cleansing for very oily skin",
      "Bottle design makes it hard to control amount",
      "Can be slippery to handle in shower",
    ],
    amazonUrl: "https://amazon.com/dp/B08CLEANSINGOIL",
    overallScore: 4.7,
    effectiveness: 4.8,
    value: 4.6,
    packaging: 4.4,
    skinType: ["All skin types", "Dry skin", "Sensitive skin"],
    howToUse:
      "Apply 2-3 pumps to dry skin and massage gently. Add water to emulsify, then rinse thoroughly. Follow with a water-based cleanser if desired.",
    reviewText: `This cleansing oil has revolutionized my makeup removal routine. It effortlessly dissolves even the most stubborn waterproof mascara and long-wear foundation without any harsh rubbing or tugging on the delicate eye area.

The formula is lightweight and doesn't feel heavy or greasy on the skin. When you add water, it emulsifies into a milky texture that rinses away cleanly, leaving no oily residue behind. My skin feels soft, clean, and nourished - never stripped or tight.

I appreciate that this cleansing oil is formulated with nourishing botanical oils rather than mineral oil. The natural ingredients make it suitable for sensitive skin, and I haven't experienced any irritation or breakouts since incorporating it into my routine.`,
  },
  "eyeshadow-palette-neutral-tones": {
    slug: "eyeshadow-palette-neutral-tones",
    name: "Eyeshadow Palette - Neutral Tones",
    category: "Makeup",
    price: "$54.99",
    originalPrice: null,
    rating: 4.8,
    reviews: 278,
    images: ["/neutral-eyeshadow-palette.jpg", "/placeholder.svg?key=palette2", "/placeholder.svg?key=palette3"],
    description:
      "A versatile 12-shade eyeshadow palette featuring buttery mattes and shimmering metallics in universally flattering neutral tones.",
    ingredients: ["Mica", "Talc", "Vitamin E", "Jojoba Oil", "Mineral Pigments"],
    pros: [
      "Highly pigmented and blendable",
      "Mix of matte and shimmer finishes",
      "Minimal fallout",
      "Long-lasting wear",
      "Suitable for all skin tones",
    ],
    cons: ["Mirror could be larger", "No brush included", "Some shimmers need primer for best results"],
    amazonUrl: "https://amazon.com/dp/B08EYESHADOW",
    overallScore: 4.8,
    effectiveness: 4.9,
    value: 4.7,
    packaging: 4.6,
    skinType: ["All skin tones", "All eye types"],
    howToUse:
      "Apply with eyeshadow brushes. Use mattes for crease and transition shades, shimmers on the lid. Can be used wet for more intense color payoff.",
    reviewText: `This neutral eyeshadow palette has become my daily go-to for creating everything from natural daytime looks to dramatic evening eyes. The 12 shades are thoughtfully curated, ranging from light creams to deep browns, with a perfect balance of matte and shimmer finishes.

The formula is buttery smooth and incredibly pigmented. The shadows blend effortlessly without patchiness or muddiness, making it easy to create seamless transitions. I'm particularly impressed by the shimmer shades - they're reflective and dimensional without being chunky or glittery.

Wear time is excellent, lasting 10+ hours without creasing when used with an eyeshadow primer. There's minimal fallout during application, which is a huge plus. The palette's compact size makes it perfect for travel, though I wish the mirror was slightly larger for easier application on the go.`,
  },
  "retinol-anti-aging-cream": {
    slug: "retinol-anti-aging-cream",
    name: "Retinol Anti-Aging Cream",
    category: "Skincare",
    price: "$78.99",
    originalPrice: null,
    rating: 4.9,
    reviews: 167,
    images: ["/retinol-cream-jar.jpg", "/placeholder.svg?key=retinol2", "/placeholder.svg?key=retinol3"],
    description:
      "An advanced anti-aging cream with encapsulated retinol that minimizes fine lines, improves skin texture, and promotes a youthful, radiant complexion.",
    ingredients: ["Encapsulated Retinol", "Peptides", "Hyaluronic Acid", "Vitamin C", "Niacinamide"],
    pros: [
      "Visible reduction in fine lines",
      "Gentle encapsulated retinol formula",
      "Improves skin texture and tone",
      "Minimal irritation",
      "Luxurious, non-greasy texture",
    ],
    cons: ["Premium price point", "Requires consistent use for results", "Must use SPF during the day"],
    amazonUrl: "https://amazon.com/dp/B08RETINOL",
    overallScore: 4.9,
    effectiveness: 5.0,
    value: 4.5,
    packaging: 4.8,
    skinType: ["All skin types", "Mature skin", "Anti-aging concerns"],
    howToUse:
      "Apply a pea-sized amount to clean, dry skin in the evening. Start with 2-3 times per week and gradually increase frequency. Always use SPF during the day.",
    reviewText: `This retinol cream has exceeded all my expectations for an anti-aging product. The encapsulated retinol technology delivers powerful results without the irritation typically associated with retinol products.

After 12 weeks of consistent use, I've seen a dramatic improvement in my skin. Fine lines around my eyes and forehead have noticeably diminished, my skin texture is smoother, and my complexion looks more even and radiant. The cream has a luxurious, silky texture that absorbs quickly without any greasiness.

What sets this apart from other retinol products is how gentle it is. I experienced no peeling, redness, or sensitivity, even when I increased to nightly use. The addition of hyaluronic acid and peptides provides extra hydration and anti-aging benefits.`,
  },
  "hyaluronic-acid-moisturizer": {
    slug: "hyaluronic-acid-moisturizer",
    name: "Hyaluronic Acid Moisturizer",
    category: "Skincare",
    price: "$49.99",
    originalPrice: null,
    rating: 4.8,
    reviews: 345,
    images: ["/hyaluronic-acid-moisturizer.jpg", "/placeholder.svg?key=ha2", "/placeholder.svg?key=ha3"],
    description:
      "An ultra-hydrating moisturizer with multiple molecular weights of hyaluronic acid that plumps, smooths, and deeply hydrates all skin layers.",
    ingredients: ["Multi-Weight Hyaluronic Acid", "Ceramides", "Vitamin B5", "Glycerin", "Squalane"],
    pros: [
      "Intense hydration without heaviness",
      "Plumps fine lines immediately",
      "Suitable for all skin types",
      "Layers well under makeup",
      "Fragrance-free formula",
    ],
    cons: [
      "May need additional moisturizer in very dry climates",
      "Pump dispenser can be finicky",
      "Price is moderate for the size",
    ],
    amazonUrl: "https://amazon.com/dp/B08HYALURONIC",
    overallScore: 4.8,
    effectiveness: 4.9,
    value: 4.7,
    packaging: 4.6,
    skinType: ["All skin types", "Dehydrated skin", "Combination skin"],
    howToUse:
      "Apply to damp skin morning and evening after cleansing. Follow with a facial oil or occlusive moisturizer to seal in hydration.",
    reviewText: `This hyaluronic acid moisturizer has become an essential step in my skincare routine. The formula contains multiple molecular weights of HA, which means it hydrates at different skin depths for comprehensive moisture.

The texture is gel-like and incredibly lightweight, yet it provides serious hydration. I love that it absorbs instantly without any sticky residue, making it perfect for layering under makeup or other skincare products. My skin feels plump, smooth, and bouncy after application.

I've noticed a visible improvement in my skin's hydration levels and overall appearance. Fine lines look less pronounced, and my skin has a healthy, dewy glow. The fragrance-free formula is gentle enough for my sensitive skin and hasn't caused any irritation.`,
  },
  "foundation-full-coverage": {
    slug: "foundation-full-coverage",
    name: "Foundation - Full Coverage",
    category: "Makeup",
    price: "$42.99",
    originalPrice: null,
    rating: 4.7,
    reviews: 289,
    images: [
      "/full-coverage-foundation-bottle.jpg",
      "/placeholder.svg?key=foundation2",
      "/placeholder.svg?key=foundation3",
    ],
    description:
      "A buildable, full-coverage foundation available in 20 inclusive shades that provides a flawless, natural-looking finish for up to 16 hours.",
    ingredients: ["Hyaluronic Acid", "Vitamin E", "SPF 15", "Mineral Pigments", "Silica"],
    pros: [
      "Excellent coverage that's buildable",
      "Long-lasting 16-hour wear",
      "20 inclusive shade range",
      "Natural, skin-like finish",
      "Contains skincare ingredients",
    ],
    cons: [
      "May oxidize slightly on oily skin",
      "Requires setting powder for very oily skin",
      "Pump dispenser can dispense too much product",
    ],
    amazonUrl: "https://amazon.com/dp/B08FOUNDATION",
    overallScore: 4.7,
    effectiveness: 4.8,
    value: 4.6,
    packaging: 4.5,
    skinType: ["All skin types", "All skin tones"],
    howToUse:
      "Shake well before use. Apply with a brush, sponge, or fingers, building coverage as needed. Set with powder for extended wear.",
    reviewText: `This full-coverage foundation has become my holy grail for achieving a flawless complexion. The formula is incredibly versatile - you can sheer it out for a natural look or build it up for full coverage that still looks like skin.

The shade range is impressive with 20 options that cater to a wide variety of undertones. I appreciate that the foundation contains skincare ingredients like hyaluronic acid and vitamin E, so it doesn't feel drying throughout the day. The finish is natural and skin-like, never cakey or mask-like.

Wear time is outstanding - this foundation truly lasts 16 hours without significant fading or breaking down. It photographs beautifully with no flashback, making it perfect for special events. The formula works well on my combination skin, though those with very oily skin may want to use a mattifying primer and setting powder.`,
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
