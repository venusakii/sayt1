import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-6">
            Legal
          </Badge>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At The Cosmo Store ("we," "our," or "us"), we are committed to protecting your privacy and personal
                  information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website thecosmostore.com (the "Site") and use our services.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Personal Information</h3>
                    <p>We may collect personal information that you voluntarily provide to us, including:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Name and email address when you subscribe to our newsletter</li>
                      <li>Contact information when you reach out to us</li>
                      <li>Comments and feedback you provide on our reviews</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                    <p>We automatically collect certain information when you visit our Site:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>IP address and browser information</li>
                      <li>Pages visited and time spent on our Site</li>
                      <li>Referring website information</li>
                      <li>Device and operating system information</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Provide and maintain our services</li>
                  <li>Send you newsletters and updates (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Analyze website usage and improve our content</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies help
                  us understand how you use our Site and remember your preferences. You can control cookie settings
                  through your browser, but disabling cookies may affect Site functionality.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Third-Party Services</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Amazon Associates Program</h3>
                    <p>
                      We participate in the Amazon Associates Program and may earn commissions from qualifying purchases
                      made through our affiliate links. This does not affect the price you pay or influence our reviews.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Analytics</h3>
                    <p>
                      We use Google Analytics and other analytics services to understand how visitors interact with our
                      Site. These services may collect information about your visits to our Site and other websites.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Unsubscribe from our communications at any time</li>
                  <li>Object to processing of your personal information</li>
                </ul>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Site is not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If you believe we have collected information from a child under
                  13, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-foreground">
                    <strong>Email:</strong> privacy@thecosmostore.com
                    <br />
                    <strong>Website:</strong> thecosmostore.com/contact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
