import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import PricingSection from '@/components/PricingSection'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
        <main className="min-h-screen bg-[#E9E3DF]">
          <Navbar />
              <div className="pt-24">
                <HeroSection />
                <FeaturesSection />
                <PricingSection />
                <AboutSection />
              </div>
              {/* Separator line */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Footer />
        </main>
  )
}
