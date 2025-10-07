import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Star, ShoppingCart, CheckCircle, AlertCircle } from "lucide-react"
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
    cons: ["May oxidize if not stored properly", "Slight tingling on first use", "Dropper can be messy"],
    amazonUrl:
      "https://www.amazon.com/Roche-Posay-vitamin-renovator-radiance/dp/B07PM79MSC/ref=sr_1_1?crid=2PHD8ZUN2KMQO&dib=eyJ2IjoiMSJ9.Aabz5bLk7tsy2ezVq-1wmct0aJdboI0kh5lkeBb3VbyF5lWt2qODzDgZLCWKjYrLiQmy4TJX3jEeM7M_RR2RnbTEVFq6Qw2FGcPULbzO59nEJ_qItPfG4dxy6XxVa4p9Dy2nadwTtBXsgXGAP2aITvspKb1wquwZBCN2NrVveSaRXH98BZCBdC_eydQgRc44Mpi5Kpz0HaiyiKKjHEYlRWAwGE4TmMyKVi8kWYkktTbbL3iFqA-iXFwBNEuxAlSiAuyIPaIzL1nxBJgWScBJ9E6Er4QQ4hLt_jhT7Q_Qbaw.pTxNYcR_fecjLT1dhY_cWyjOgUVs0JmJv1j3JwHpcdw&dib_tag=se&keywords=La+Roche-Posay+Vitamin+C+Face+Serum&qid=1759825409&sprefix=la+roche-posay+vitamin+c+face+serum%2Caps%2C739&sr=8-1",
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
  "simplyvital-collagen-face-moisturizer": {
    slug: "simplyvital-collagen-face-moisturizer",
    name: "SimplyVital Collagen Face Moisturizer",
    category: "Skincare",
    price: "$29.99",
    originalPrice: "$43.85",
    rating: 4.7,
    reviews: 189,
    images: [
      "https://m.media-amazon.com/images/I/71dHs21sZaL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71dHs21sZaL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71dHs21sZaL._SX679_.jpg",
    ],
    description:
      "Hydrating collagen-infused cream that firms and plumps skin for a youthful appearance with retinol and hyaluronic acid for renewal.",
    ingredients: ["Hydrolyzed Marine Collagen", "Retinol", "Hyaluronic Acid", "Aloe Vera", "Vitamin E"],
    pros: [
      "Promotes firmer skin texture",
      "Deep hydration without greasiness",
      "Gentle retinol for beginners",
      "Made in USA with clean formula",
      "Suitable for face and neck",
    ],
    cons: ["May increase sun sensitivity", "Jar packaging requires clean hands", "Build-up time for results"],
    amazonUrl:
      "https://www.amazon.com/SimplyVital-Collagen-Face-Moisturizer-Anti-Aging/dp/B0DFD4N1Z4/ref=sr_1_1_sspa?crid=3HVB0NIUMTAKT&dib=eyJ2IjoiMSJ9.hU1aIbgX7QLtEDCdtVia2vSGxFS41I65IWTlLuBwKq5a3Lr8reZmLkFE_g1IrBRcY6cHPVwUtz4CZw53ou6QfkqedLcf3rLzAtWeg48HWBZ7GtrxHmSHiGAjK1CWpN14NQx8DxgMsGnqjf4glHgq2oV28wkf1pAjvlmQUt6Gty6M2MX3E7X3g-KnDyI3quI-h5GGuNIfuTcX1n73FPLZHIxilZUo4vnJwBHmWYAe8MGKikNMt-73n17HZvp6EMTCOi-UY8HMYnoZw8jqzVfMA8LapWJUniy4YRmfzZV3zRA.E5PPrOLzgbeUqYMWM1DAv9q75BweL5iwg4_6A5gbyBw&dib_tag=se&keywords=Collagen%2BFace%2BMoisturizer%2BCream&qid=1759825434&sprefix=collagen%2Bface%2Bmoisturizer%2Bcream%2Caps%2C268&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    overallScore: 4.7,
    effectiveness: 4.8,
    value: 4.7,
    packaging: 4.5,
    skinType: ["Dry skin", "Mature skin", "Combination skin"],
    howToUse:
      "Apply a small amount to clean face and neck morning and evening. Start 1-2 times weekly if sensitive. Follow with SPF in AM.",
    reviewText: `This SimplyVital Collagen Moisturizer has transformed my evening routine into a simple, effective anti-aging step. The blend of marine collagen and retinol works synergistically to firm and renew, while hyaluronic acid keeps everything hydrated without that heavy feel.

After consistent use for a month, my skin feels noticeably smoother around the jawline, with a subtle plumping that makes pores look refined. It's gentle enough for daily wear, and the unscented formula plays well with my other products. No breakouts, just gradual glow-up.

The jar is recyclable and substantial, though I use a spatula for hygiene. For the discounted price, it's a steal compared to department store creams. If you're easing into retinol, this is forgiving and rewarding - my skin's thanking me already.`,
  },
  "wonderskin-lip-stain-blading": {
    slug: "wonderskin-lip-stain-blading",
    name: "Wonderskin Wonder Blading All Day Lip Stain",
    category: "Makeup",
    price: "$19.99",
    originalPrice: "$22.00",
    rating: 4.6,
    reviews: 456,
    images: [
      "https://m.media-amazon.com/images/I/71UHmMTqHJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71UHmMTqHJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71UHmMTqHJL._SX679_.jpg",
    ],
    description:
      "Transfer-proof, waterproof lip stain that delivers all-day color without smudging using patented Wonderblading technology.",
    ingredients: ["Aloe Vera", "Vitamin E", "Hyaluronic Acid", "Glycerin", "Natural Pigments"],
    pros: [
      "Lasts 12+ hours without fading",
      "No bleeding or feathering",
      "Hydrating despite matte finish",
      "Easy precision applicator",
      "Buildable color intensity",
    ],
    cons: ["Removal requires oil-based cleanser", "Can feel drying if not prepped", "Limited shade variety"],
    amazonUrl:
      "https://www.amazon.com/Wonderskin-Blading-Lasting-Waterproof-Transfer/dp/B0BGSW6XBP/ref=sr_1_1_sspa?crid=3JEID0V5EI1LD&dib=eyJ2IjoiMSJ9.-g6-spG3QVd5OCkecFtgQwqHWO0ni0j5lmdgmb7vhegJqgk4GjnuyjT31AL_3swTYW5-EPpK6Q0KKcDQn9ezWbHTundiRVINuARnjkF9J_AzEjWNfZ6x6QksDJnb8tCcdurck0BN9qOOG7JXtIgFzHYbSCEidf4zKPW46aYhuRJ81XWRDmY6YDrqHBbeYXt6G1Mc99wuLKNN8dMbZjSGsSDanq8kmO4BNVjtIcprWoPD3W0MY89_vwgqAFcxnffd0wW14QcVNZIp-JP-JVN7HtMfIvEC3dveaRmzHzpb1CE.QuwRmBM_8EvZZ4AMOafQFowg1qtRYusWT-FMNU_FftU&dib_tag=se&keywords=Wonderskin+Lip+Stain+Blading+Long-Lasting&qid=1759825485&sprefix=wonderskin+lip+stain+blading+long-lasting%2Caps%2C264&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
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
    name: "ANUA Heartleaf Cleansing Cleanser",
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
    cons: ["Low lather may feel insufficient", "Not ideal for heavy makeup removal", "Bottle size runs small"],
    amazonUrl:
      "https://www.amazon.com/ANUA-Heartleaf-Cleansing-Cleanser-Blackheads/dp/B0BN2PX8V3/ref=sr_1_2_sspa?crid=3QDNYCSAGGR8I&dib=eyJ2IjoiMSJ9.aXhoyO0RXoxIS1m69IxMbMRWcgp6ONEeclLjmOY3e-1ujVRfGyHfG3GTPmEXChZF5mZHQDDGdELpuDlglobg3UXmZuMqpilsHd1LGflHPhAhMGDrPtpRKKozV4JiNCZHjJKrSePWrIgbRt3ygsbLTBN5Hk9Lt5M0qHMaLvrBs_0AxSw5jVRCrdZo-_jkEnmUBf9y1yUQS-X0yqglHVpBK4UNY4Xpd76DJU11LcgWeBV-Bmn42wNhyadLFsuTnpQgZJh22yLxnLquVl5Zb40KVGW_uu1jvLZ9GMRlHnWzuZ0.pmNX54oWDZu5ammcP2dFdwE-S0B2v9p6RUha7z6cjjQ&dib_tag=se&keywords=ANUA+Heartleaf+77%25+Soothing+Cleanser&qid=1759825535&sprefix=anua+heartleaf+77%25+soothing+cleanser%2Caps%2C236&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
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
    name: "URBAN DECAY Naked 3 Mini Eyeshadow Palette",
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
      "Iconic neutral eyeshadow palette with 6 versatile rosy shades for everyday and dramatic looks, featuring velvety mattes and shimmers.",
    ingredients: ["Talc", "Mica", "Dimethicone", "Ethylhexyl Palmitate", "Mineral Pigments"],
    pros: [
      "Buttery, blendable formula",
      "No fallout or creasing",
      "Versatile neutral shades",
      "Mirror included for portability",
      "Long-lasting pigmentation",
    ],
    cons: ["Some shades similar in tone", "Shimmers need primer", "Compact but bulky for travel"],
    amazonUrl:
      "https://www.amazon.com/URBAN-DECAY-Eyeshadow-Everyday-Cruelty-free/dp/B095PSJ7QV/ref=sr_1_2?crid=3KEFQDGQWQHK7&dib=eyJ2IjoiMSJ9.LIQw8sbp_zLXgBgXWkKVzL0PzaGaaQrvM_x-cBpFEE6zoDc79Vd9JjDwxXHqmP43D1wgvYpak-vuY_bbFOwePC9DX43zrIjdDxgiwFoytkTEWonGLKbdOUKz3aWygGqhT33zOTz_x1TgnCI7OjP6ZySvt0FyiGzrwdya6KGcV_StMqPwywBE2oblWW6lCe2viF1HAb7-xGI5RaxbhAavJceJRPUVG8l8qTPzFi1fIZywBXlUgM5AlEF_ROl3BcJLtrLiCJzxHj6P-9XW-bR1OJJF6wlZEGNlIjFjl-wzm0Y.xpmHETLLXEwyr_v8ptphISa5l_89_AzzJXWXANeXKqw&dib_tag=se&keywords=Urban+Decay+Naked+Eyeshadow+Palette&qid=1759825569&sprefix=urban+decay+naked+eyeshadow+palette%2Caps%2C249&sr=8-2",
    overallScore: 4.8,
    effectiveness: 4.9,
    value: 4.7,
    packaging: 4.8,
    skinType: ["All skin tones", "All eye types"],
    howToUse:
      "Prime lids first. Use a fluffy brush for blending mattes in crease; pack shimmers on lid with finger. Set with primer for longevity.",
    reviewText: `The Urban Decay Naked 3 Mini Palette lives up to its legendary status - it's the ultimate neutral collection for effortless eye looks. The 6 rosy shades strike a perfect balance of everyday pinks and mauves, with mattes that blend like butter and shimmers that catch light beautifully without glitter bombs.

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
      "https://m.media-amazon.com/images/I/71FNxwqISJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71FNxwqISJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71FNxwqISJL._SX679_.jpg",
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
    cons: ["Scent may be strong for some", "Jar less sanitary than pump", "Milder results for deep lines"],
    amazonUrl:
      "https://www.amazon.com/LOreal-Paris-Revitalift-Moisturizer-Hyaluronic/dp/B008EKY8VK/ref=sr_1_3?crid=T03CBLISI8O6&dib=eyJ2IjoiMSJ9.cByuxToRhbwnzqVB9sSEGHZwl0xJXFL8-F3ts1vFC21E2p9y9bf7N7qOokDkshpWsQKxBMLiv7KCbI8hwaJiGOZAEKpw_uuFU6v5h3nAGQfNn2gJVXomQc34GHJcWmzJXXXT8qgpKiiedBnyN4aN1KMkJL3UMPRuY3zwQLCjYmTkp81zbpUeQwOk8nvSK_8EQdKd_9gjEg7NGbBctYo2Z23w44Bn1MZLLAWfjSjaugKSDJLl4ST7xW4_Gn3abGjSeyTTINWCYwDPcwoGJxD4_ei8frFF62jSLqV0S0BW0Ww.bvhV-HxTpXhNKA9D__c5zc3tJRBRhVInUi7kY_9yhf0&dib_tag=se&keywords=L%27Oreal+Paris+Revitalift+Anti-Aging+Moisturizer&qid=1759825603&sprefix=l%27oreal+paris+revitalift+anti-aging+moisturizer%2Caps%2C260&sr=8-3",
    overallScore: 4.9,
    effectiveness: 4.9,
    value: 5.0,
    packaging: 4.5,
    skinType: ["All skin types", "Aging skin", "Dry skin"],
    howToUse: "Apply generously to face and neck after cleansing. Use morning and night. Pair with SPF during day.",
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
    cons: ["Wand may be too curved for some", "Dries down fast", "Average volume boost"],
    amazonUrl:
      "https://www.amazon.com/Thrive-Causemetics-Extensions-Lengthening-Volumizing/dp/B0F566TFJN/ref=sr_1_1_sspa?crid=K0VTVRC2QPZX&dib=eyJ2IjoiMSJ9.e9HUgQquiiTaGIONvpzru6CbRipdmyy4CiF971ckyyjMI89_UTwrUh2Nxyk5noTDSvMoS_-UZIEC8dYJPOj-kcLujAXGCYgD-K8ud2pUQ5njAYDr48YeICMi5obQ2FsCdBVq1QrlatYI8vaa8hsnzmt55tqgfdm3mCOZMsz1yXsEFCd5z2dl1SFitdn8pofpEgfTaPpf7RexDm-93CdDS90dBt36D_M6nL0-k-ptg5fzd3XYRMV1zMHsqQz6UBMhPoHTVDtwXCaECpxtdSRBM-4wEDygktk52e8R0wMRdW4.3C_Pcv1_V4svt7nb8CDgqMBTsuKVy5NQ0PW3alGB9S8&dib_tag=se&keywords=Thrive+Causemetics+Liquid+Lash+Extensions+Mascara&qid=1759825625&sprefix=thrive+causemetics+liquid+lash+extensions+mascara%2Caps%2C236&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    overallScore: 4.5,
    effectiveness: 4.6,
    value: 4.5,
    packaging: 4.7,
    skinType: ["All eye types", "Sensitive eyes"],
    howToUse: "Curl lashes. Apply from root to tip with zigzag motion. Build layers. Remove with warm water.",
    reviewText: `Thrive's Liquid Lash Mascara gives falsies-without-the-fuss vibes with its tubing technology that slides off with warm water - genius for sensitive eyes. The orchid stem cells condition while the formula lengthens dramatically, fanning lashes beautifully.

One coat separates and defines; two add intensity without clumps. It withstands humidity and tears, no smudges. Lashes feel healthier after weeks, less brittle.

The curved wand grabs every lash, though hood-eyed folks might trim it. Packaging is sleek, eco-conscious. At $25, it's premium clean beauty that performs - my lash game's elevated.`,
  },
  "medicube-triple-collagen-cream": {
    slug: "medicube-triple-collagen-cream",
    name: "Medicube Triple Collagen Cream",
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
    cons: ["Rich texture for oily skin", "Jar hygiene concerns", "Subtle scent lingers"],
    amazonUrl:
      "https://www.amazon.com/Medicube-Triple-Collagen-Cream-Moisturizer/dp/B0BPXT3GBN/ref=sr_1_1?crid=23SQPB4ECY08Z&dib=eyJ2IjoiMSJ9.Jcnc7h_akUanKNGRuNivK2cj1Dx1NuQUqFw7IpQnYowkNglNfyL8KqS3jGp9oWKGQjrEFYwMrph3Lblb20g1jQzbL9LtqDqcrGvr5EPD3om0ky-Gb5O_BWUlrdPbCL0nhbjVihjvZ8vSi0PpWyDZbRq6GgmwXnf3sGLCA5bdflkGI5PJuuwAsclEE1qNHzYt74uCqUmxMVBbj22tCSdrs1J_CNdWsNOUv_1rXke0qzkh0Q0y49tOFXrHFPAYNVffpqQ5P9bKqPyMdaDhsGZSNEBPuT-6YUQuijvUzPlAmDA.I4cOQi6Y4e6z8-2GMC-WrpTHbKL06UPaUhTWMph-mYM&dib_tag=se&keywords=Medicube+Triple+Collagen+Cream+Moisturizer&qid=1759825661&sprefix=medicube+triple+collagen+cream+moisturizer%2Caps%2C235&sr=8-1",
    overallScore: 4.8,
    effectiveness: 4.9,
    value: 4.7,
    packaging: 4.6,
    skinType: ["Dry skin", "Mature skin", "Dull skin"],
    howToUse: "Apply as last step PM routine. Massage upward. Use pea-size amount; pair with device for absorption.",
    reviewText: `Medicube's Triple Collagen Cream is a night-time indulgence that pays off come morning. The low-molecular collagens sink in deep, firming and plumping while ceramides lock in moisture for supple skin.

Waking to dewier, bouncier complexion after a month - pores refined, lines softened. Texture's rich yet absorbs fully, no pillow grease. Subtle glow rivals gua sha.

Glass jar's elegant but use spatula. Scent's clean, fades fast. Worth every penny for that collagen cocktail - my skin's elasticity game-changer.`,
  },
  "bare-minerals-original-liquid-foundation": {
    slug: "bare-minerals-original-liquid-foundation",
    name: "bareMinerals Original Mineral Foundation",
    category: "Makeup",
    price: "$42.99",
    originalPrice: "$49.99",
    rating: 4.7,
    reviews: 289,
    images: [
      "https://m.media-amazon.com/images/I/81BPcYQQA7L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/81BPcYQQA7L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/81BPcYQQA7L._SX522_.jpg",
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
    cons: ["Sheer for full coverage needs", "Pump dispenses generously", "Matte finish requires glow add"],
    amazonUrl:
      "https://www.amazon.com/bareMinerals-Original-Mineral-Foundation-Spectrum/dp/B007HTXER8/ref=sr_1_1?crid=1GV42ZQ4KP8EW&dib=eyJ2IjoiMSJ9.VgSNjV1xDnsYD7KSQ1aYRPKOD2v9l6AD1AvTIMAOe-3fXrlIJGah6SJ-KDKrKysUI9K-X38nj44SdLb6S0SX3_V4_NoCr0-NPEYXl4aJfFxixPj05Rrl1GRKPgUNDkcQtGmjqyPxL3JztMqbWGgVLpabMKCpLzOhMQHlGU6M6FWQ2hVCU_4BzYlz33xSMaAYUVxxZvD1aoC1IYUTKabs8Vda89wkE9-lJDGd6a0Z8hLkxZvIKJjdhoFJzswjwJwUq6pyW85IubdCQDleREJkWeqOgT_MRU3ALLfu4jz3pf0.rQPFcYkT8utZF3zX2jJMLnWKfJhOijPLa4U91uT_lTo&dib_tag=se&keywords=Bare+Minerals+Original+Liquid+Mineral+Foundation&qid=1759825687&sprefix=bare+minerals+original+liquid+mineral+foundation%2Caps%2C289&sr=8-1",
    overallScore: 4.7,
    effectiveness: 4.8,
    value: 4.6,
    packaging: 4.7,
    skinType: ["All skin types", "Sensitive skin", "Acne-prone"],
    howToUse: "Shake well. Apply with brush/sponge for sheer; fingers for buildable. Set lightly if oily.",
    reviewText: `Bare Minerals' Liquid Foundation redefined 'no-makeup makeup' for me - medium coverage that evens without masking. Minerals like titanium dioxide blur imperfections naturally, while hyaluronic plumps.

Lasts 8-10 hours, breathable sans caking. Shades match truly, no orange shift. Feels like skincare, not paint - my sensitive skin's dream.

Dropper bottle's precise, recyclable. At $43, it's premium natural coverage. Everyday essential for that fresh-faced vibe.`,
  },
  "cerave-hydrating-cleanser": {
    slug: "cerave-hydrating-cleanser",
    name: "CeraVe Hydrating Facial Cleanser",
    category: "Skincare",
    price: "$12.99",
    originalPrice: "$15.99",
    rating: 4.7,
    reviews: 1847,
    images: ["/cerave-hydrating-cleanser.jpg", "/cerave-cleanser-back.jpg", "/cerave-cleanser-texture.jpg"],
    description:
      "Gentle, non-foaming cleanser that hydrates and restores the skin's protective barrier with ceramides and hyaluronic acid.",
    ingredients: ["Ceramides", "Hyaluronic Acid", "Glycerin", "MVE Technology", "Non-comedogenic"],
    pros: [
      "Fragrance-free and gentle",
      "Maintains skin barrier",
      "Suitable for sensitive skin",
      "Affordable drugstore option",
      "Dermatologist recommended",
    ],
    cons: ["Minimal lather may feel unusual", "Not ideal for heavy makeup removal", "Pump bottle can clog"],
    amazonUrl:
      "https://www.amazon.com/CeraVe-Hydrating-Facial-Cleanser-Fragrance/dp/B01MSSDEPK/ref=sr_1_5?crid=1ZDFWW23SMX3O&dib=eyJ2IjoiMSJ9.APzV_En2JNWzK7v-DbDPDpnLCvTExeBlICcoyActPHjEA6ocCroSUy6g_og5vqCNoV2QIMpmgWObtEFqtBeWF5hYWegbZrD5n-pIeTypB-ooRMSo-NOuV7EMsy5019Zd9D4TF3rUgdZfIlpckVHegZDFdGb8dChLZrbCq9TCYeOpjXQ8CckJdpyNs8juE_EtY2U48yY-UGiztvLSA8IH8pfp2njcgwv2fGzDA-1rGOoa4vJNYDuEVFFwz8YWnY0FZJh22yLxnLquVl5Zb40KVFfefcWH5hQkza_qXtxlJk0.VYBNLT-RqcUFsqU2jVZdMdEz_VJwoUxMtqlve8L-LL0&dib_tag=se&keywords=CeraVe+Hydrating+Facial+Cleanser&qid=1759825131&sprefix=cerave+hydrating+facial+cleanser%2Caps%2C768&sr=8-5",
    overallScore: 4.7,
    effectiveness: 4.8,
    value: 5.0,
    packaging: 4.4,
    skinType: ["All skin types", "Dry skin", "Sensitive skin"],
    howToUse:
      "Wet face with lukewarm water. Massage cleanser onto skin in gentle circular motions. Rinse thoroughly and pat dry. Use morning and evening.",
    reviewText: `CeraVe Hydrating Facial Cleanser has earned its cult status for good reason - it's the gentle giant of cleansers that respects your skin barrier while effectively removing daily grime. The creamy, lotion-like texture feels soothing on contact, and the ceramide-rich formula works to restore and maintain your skin's natural protective barrier.

What sets this apart is the MVE (MultiVesicular Emulsion) technology that releases ceramides and hyaluronic acid gradually throughout the day, providing continuous hydration long after cleansing. After two weeks of use, my skin felt noticeably softer and less tight, with none of the squeaky-clean stripping sensation that harsh cleansers leave behind.

The fragrance-free formula is a blessing for sensitive skin, and it's non-comedogenic, so no breakout worries. While it doesn't lather much - which can feel odd at first - it cleanses thoroughly without disrupting your skin's pH balance. For heavy makeup, I recommend a first cleanse with micellar water, then follow with this.

At under $13, this is an absolute steal that rivals luxury cleansers. The pump bottle is convenient, though it can occasionally clog. Dermatologists recommend it for a reason - it's simple, effective, and kind to your skin. My morning and evening essential.`,
  },
  "the-ordinary-niacinamide": {
    slug: "the-ordinary-niacinamide",
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    category: "Skincare",
    price: "$7.90",
    originalPrice: null,
    rating: 4.6,
    reviews: 2847,
    images: ["/the-ordinary-niacinamide.jpg", "/ordinary-niacinamide-bottle.jpg", "/ordinary-niacinamide-texture.jpg"],
    description:
      "High-strength vitamin and mineral blemish formula that reduces the appearance of blemishes and congestion with visible skin-brightening effects.",
    ingredients: ["10% Niacinamide", "1% Zinc PCA", "Hyaluronic Acid", "Tasmanian Pepperberry", "Water-based serum"],
    pros: [
      "Affordable and effective",
      "Reduces pore appearance",
      "Controls oil production",
      "Brightens skin tone",
      "Minimal ingredient list",
    ],
    cons: [
      "Can pill under makeup if not absorbed",
      "May cause purging initially",
      "Strong concentration for beginners",
    ],
    amazonUrl:
      "https://www.amazon.com/Ordinary-Serum-Favorites-Set-Pore-Minimizing/dp/B07QFHZZZL/ref=sr_1_2?crid=1JI808B6P26Y2&dib=eyJ2IjoiMSJ9.zXjMkd-rCnWy8M76PlpKfz5MD0QDHcDXCSitBXtOQ_PZHZLM0eTXQkK_uzgx8ngXvjd09OsayzSAtpTGv-HtAJitnuEOd68eV_eaOePUJVY.vx7aa_F2gK7_npSRb1ubcvvgq3S3shgAqoXepnp61Mc&dib_tag=se&keywords=The+Ordinary+Niacinamide+10%25+%2B+Zinc+1%25&qid=1759855353&sprefix=the+ordinary+niacinamide+10%25+%2B+zinc+1%25%2Caps%2C721&sr=8-2",
    overallScore: 4.6,
    effectiveness: 4.7,
    value: 5.0,
    packaging: 4.3,
    skinType: ["Oily skin", "Acne-prone skin", "Combination skin"],
    howToUse:
      "Apply to entire face morning and evening before heavier creams. A tingling sensation is normal. Avoid use with pure Vitamin C or direct acids.",
    reviewText: `The Ordinary Niacinamide 10% + Zinc 1% has earned its cult status as the ultimate budget-friendly blemish fighter. At under $8, this water-based serum delivers clinical-strength niacinamide that visibly reduces pore size, regulates sebum production, and brightens uneven skin tone - all without breaking the bank.

The lightweight, slightly viscous texture absorbs quickly, though I've learned to use a light hand and let it fully dry before layering other products to avoid pilling. Within two weeks of consistent use, my T-zone oil production noticeably decreased, and my pores looked refined. After a month, old acne marks faded significantly, and new breakouts were less frequent and less severe.

The 1% zinc PCA works synergistically with niacinamide to calm inflammation and control excess oil, making this ideal for oily and acne-prone skin types. The formula is fragrance-free and contains minimal ingredients, which my sensitive skin appreciates. Some users experience an initial purging phase as the serum brings congestion to the surface - this is normal and temporary.

The dropper bottle is functional but basic, and the serum can oxidize if exposed to light for extended periods, so I keep mine in a drawer. For the price point, this is hands-down the best niacinamide serum on the market. It's become a non-negotiable step in my routine, and I've repurchased it countless times. If you're dealing with enlarged pores, oiliness, or post-acne marks, this is your solution.`,
  },
  "fenty-beauty-gloss-bomb": {
    slug: "fenty-beauty-gloss-bomb",
    name: "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    category: "Makeup",
    price: "$22.00",
    originalPrice: null,
    rating: 4.7,
    reviews: 1523,
    images: ["/fenty-beauty-gloss-bomb.jpg", "/fenty-gloss-bomb-open.jpg", "/fenty-gloss-bomb-lips.jpg"],
    description:
      "Universal lip luminizer that delivers explosive shine with a non-sticky formula, infused with shea butter for comfort.",
    ingredients: ["Shea Butter", "Vitamin E", "Peach Extract", "Vanilla Extract", "Light-reflecting pearls"],
    pros: [
      "Universal shade flatters all skin tones",
      "Non-sticky, comfortable formula",
      "Explosive shine without grittiness",
      "Subtle peach-vanilla scent",
      "Can be worn alone or over lipstick",
    ],
    cons: ["Needs frequent reapplication", "Scent may be too sweet for some", "Pricey for a lip gloss"],
    amazonUrl:
      "https://www.amazon.com/FENTY-BEAUTY-RIHANNA-Universal-Luminizer/dp/B098CG8NVN/ref=sr_1_4?crid=2MHA7NTWPRW76&dib=eyJ2IjoiMSJ9.TTLHmSaFHePidMRsnyK_JLfzeqU1OjBiJWqYHsAy-1WKFf7E5pY7_BFHod3U67ZooNfP2xUTL0bCeFVRHbS_4JrYh6qYUHN_4LZRu9D48unGJRBfPkl_UKNDmVxj43tzUnHntw1VEqFG9x7nrz_Y0A6QsR7tl5OCg0MCN3b-4T3Q_18R_Vg-3N2QDQKbzYlvwGrd3EjMoSpUcLYo86Tk8Xu1ciIhlzvlc6BEcDn64fJxrawZoZPWFm7vQrFEGeiGSMyfZgAOeH_VhtJ75dzNyA2RroqOtO9p-5dIAVqhOjw.bnlQYDO0iuUxnHJfdxZBdvde8T38U9q6n1_kgj_Nhfg&dib_tag=se&keywords=Fenty+Beauty+Gloss+Bomb+Universal+Lip+Luminizer&qid=1759855543&sprefix=fenty+beauty+gloss+bomb+universal+lip+luminizer%2Caps%2C1099&sr=8-4",
    overallScore: 4.7,
    effectiveness: 4.8,
    value: 4.5,
    packaging: 4.9,
    skinType: ["All skin tones", "All lip types"],
    howToUse:
      "Apply directly to lips using the doe-foot applicator. Wear alone for a glossy look or layer over lipstick for added dimension. Reapply as desired throughout the day.",
    reviewText: `Fenty Beauty's Gloss Bomb has earned its cult status as the ultimate universal lip gloss that truly works for everyone. The "Fu$$y" shade is a sheer peach with gold pearl that adapts beautifully to all skin tones, creating a customized glow that enhances your natural lip color rather than masking it.

The formula is where this gloss truly shines - literally. It delivers an explosive, glass-like shine that catches light from every angle, thanks to the light-reflecting pearls suspended in the formula. Unlike many high-shine glosses, this one isn't sticky or tacky. The texture is smooth and cushiony, gliding on effortlessly and feeling comfortable for hours. The shea butter and vitamin E keep lips hydrated and soft, so you're not just getting shine - you're getting nourishment too.

The scent is a delicious peach-vanilla blend that's sweet but not overpowering, and it fades quickly after application. The oversized doe-foot applicator makes precise application easy, coating lips evenly in one swipe. The sleek, weighty packaging feels luxurious and the clear tube lets you see exactly how much product remains.

While the gloss does require reapplication after eating or drinking, the wear time is decent for a non-sticky formula - about 2-3 hours of comfortable wear. At $22, it's on the pricier side for a lip gloss, but the quality, versatility, and universal appeal make it worth the investment. This is the gloss that launched a thousand dupes, and for good reason - it's simply that good. Whether you're a gloss minimalist or maximalist, this belongs in your collection.`,
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
              "la-roche-posay-vitamin-c-serum",
              "simplyvital-collagen-face-moisturizer",
              "wonderskin-lip-stain-blading",
              "anua-heartleaf-cleansing-cleanser",
              "the-ordinary-niacinamide",
              "fenty-beauty-gloss-bomb",
            ]
              .filter((relatedSlug) => relatedSlug !== slug)
              .slice(0, 3)
              .map((relatedSlug) => {
                const relatedProduct = products[relatedSlug as keyof typeof products]
                if (!relatedProduct) return null
                return (
                  <Link key={relatedProduct.slug} href={`/reviews/${relatedProduct.slug}`} className="block">
                    <Card className="group cursor-pointer hover:shadow-lg transition-shadow h-full">
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
                            <Star
                              key={j}
                              className={`h-4 w-4 ${j < Math.floor(relatedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-muted-foreground">({relatedProduct.reviews})</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{relatedProduct.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
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
