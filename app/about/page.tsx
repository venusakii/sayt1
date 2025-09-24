import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Heart, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            About Us
          </Badge>
          <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Your trusted beauty experts
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At The Cosmo Store, we're passionate about helping you discover the perfect beauty products through honest
            reviews, expert insights, and carefully curated recommendations.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2023, The Cosmo Store began as a passion project by beauty enthusiasts who were frustrated
                  with biased product reviews and misleading marketing claims.
                </p>
                <p>
                  We believe that everyone deserves access to honest, comprehensive reviews that help them make informed
                  decisions about their beauty routine. Our team of experts tests every product for weeks before writing
                  detailed, unbiased reviews.
                </p>
                <p>
                  Today, we're proud to be a trusted resource for thousands of beauty lovers worldwide, helping them
                  discover products that truly work for their unique needs and preferences.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/diverse-team-of-beauty-experts-working-together.jpg" alt="Our team" className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">What drives us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide everything we do, from product testing to content creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Honesty</h3>
                <p className="text-muted-foreground text-sm">
                  We provide unbiased reviews based on thorough testing and real experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Expertise</h3>
                <p className="text-muted-foreground text-sm">
                  Our team includes certified beauty professionals and skincare specialists.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Community</h3>
                <p className="text-muted-foreground text-sm">
                  We listen to our readers and value their feedback and experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Passion</h3>
                <p className="text-muted-foreground text-sm">
                  We're genuinely passionate about helping you look and feel your best.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">Our review process</h2>
            <p className="text-xl text-muted-foreground">
              Every product goes through our rigorous 6-week testing protocol.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Product Selection",
                description: "We carefully select products based on popularity, innovation, and reader requests.",
              },
              {
                step: "02",
                title: "Initial Testing",
                description: "Our experts conduct patch tests and initial assessments for safety and compatibility.",
              },
              {
                step: "03",
                title: "Extended Use",
                description: "We use each product for 4-6 weeks to evaluate long-term effects and performance.",
              },
              {
                step: "04",
                title: "Comprehensive Review",
                description:
                  "We write detailed reviews covering effectiveness, value, packaging, and overall experience.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
