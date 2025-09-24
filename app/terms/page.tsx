import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-6">
            Legal
          </Badge>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using The Cosmo Store website (thecosmostore.com), you accept and agree to be bound
                  by the terms and provision of this agreement. If you do not agree to abide by the above, please do not
                  use this service.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Use License</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Permission is granted to temporarily download one copy of the materials on The Cosmo Store's website
                    for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
                    of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>modify or copy the materials</li>
                    <li>
                      use the materials for any commercial purpose or for any public display (commercial or
                      non-commercial)
                    </li>
                    <li>attempt to decompile or reverse engineer any software contained on the website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Content and Reviews</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Our Content</h3>
                    <p>
                      All reviews, articles, and content on The Cosmo Store are based on our honest opinions and
                      experiences. We strive to provide accurate and helpful information, but individual results may
                      vary.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">User-Generated Content</h3>
                    <p>
                      By submitting comments, reviews, or other content to our website, you grant us a non-exclusive,
                      royalty-free license to use, modify, and display such content. You are responsible for ensuring
                      your content does not violate any laws or third-party rights.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Affiliate Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Cosmo Store participates in the Amazon Associates Program and other affiliate programs. We may
                  earn commissions from qualifying purchases made through our affiliate links. This does not affect the
                  price you pay or influence our reviews and recommendations.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Disclaimer</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The materials on The Cosmo Store's website are provided on an 'as is' basis. The Cosmo Store makes
                    no warranties, expressed or implied, and hereby disclaims and negates all other warranties
                    including, without limitation, implied warranties or conditions of merchantability, fitness for a
                    particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                  <p>
                    Further, The Cosmo Store does not warrant or make any representations concerning the accuracy,
                    likely results, or reliability of the use of the materials on its website or otherwise relating to
                    such materials or on any sites linked to this site.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Limitations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall The Cosmo Store or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on The Cosmo Store's website, even if The Cosmo Store or its
                  authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Accuracy of Materials</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials appearing on The Cosmo Store's website could include technical, typographical, or
                  photographic errors. The Cosmo Store does not warrant that any of the materials on its website are
                  accurate, complete, or current. The Cosmo Store may make changes to the materials contained on its
                  website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Cosmo Store has not reviewed all of the sites linked to our website and is not responsible for the
                  contents of any such linked site. The inclusion of any link does not imply endorsement by The Cosmo
                  Store of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Cosmo Store may revise these terms of service for its website at any time without notice. By using
                  this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the United
                  States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or
                  location.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-foreground">
                    <strong>Email:</strong> legal@thecosmostore.com
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
