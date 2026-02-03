import { Link } from 'react-router-dom';
import { Crown, ArrowLeft, MessageCircle, Calendar } from 'lucide-react';
import { useState } from 'react';
import { BookingModal } from '../components/BookingModal';
import { SocialLinks } from '../components/SocialLinks';

export function PalettePage() {
  const [showBooking, setShowBooking] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/2482747214?text=Hello%20Lioness%20Palette%21%20I%20would%20like%20to%20inquire%20about%20your%20charcuterie%20platters.', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-amber-900/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-amber-400" />
            <div className="flex items-center gap-2">
              <Crown className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold text-amber-400">Lioness</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <SocialLinks
              facebookUrl="https://www.facebook.com/lionesspalette"
              instagramUrl="https://www.instagram.com/lionesspalette101"
              tiktokUrl="https://www.tiktok.com"
            />
            <span className="text-amber-200 font-semibold">Palette</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Lioness <span className="text-amber-400">Palette</span>
            </h1>
            
            {/* Hero Image */}
            <div className="mb-8 rounded-xl overflow-hidden border border-amber-900/50 h-96 w-full">
              <img 
                src="https://images.unsplash.com/photo-1608198093002-ad4e003b8f6f?w=1200&q=90"
                alt="Premium Charcuterie Platter"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <p className="text-xl text-amber-200 mb-4">Artisan Charcuterie & Gourmet Platters</p>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Experience curated selections of premium charcuterie, artisanal cheeses, and exquisite accompaniments—handcrafted for your most refined celebrations and intimate gatherings.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowBooking(true)}
                className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5" />
                Book Your Platter
              </button>
              <button
                onClick={handleWhatsApp}
                className="px-8 py-3 border border-amber-500/50 hover:border-amber-400 text-amber-400 hover:bg-amber-500/10 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">Our Collections</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="rounded-lg overflow-hidden border border-amber-900/50 h-64 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1595587990068-8d3f3e5c6a7f?w=600&q=90"
                alt="Classic Elegance Platter"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-amber-900/50 h-64 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=90"
                alt="Luxury Collection Platter"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-amber-900/50 h-64 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=90"
                alt="Custom Bespoke Platter"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">Our Offerings</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Classic Platter */}
            <div className="bg-gradient-to-br from-amber-950/50 to-slate-900/50 border border-amber-900/50 rounded-lg p-8 hover:border-amber-600/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">Classic Elegance</h3>
              <p className="text-gray-300 mb-4">
                A timeless selection featuring premium imported cheeses, house-cured meats, organic crackers, and carefully selected accompaniments.
              </p>
              <p className="text-amber-400 font-semibold">Perfect for 4-6 guests</p>
            </div>

            {/* Luxury Platter */}
            <div className="bg-gradient-to-br from-amber-950/50 to-slate-900/50 border border-amber-900/50 rounded-lg p-8 hover:border-amber-600/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">Luxury Collection</h3>
              <p className="text-gray-300 mb-4">
                Our signature experience with rare delicacies, truffle selections, aged prosciutto, artisanal spreads, and premium pairings.
              </p>
              <p className="text-amber-400 font-semibold">Perfect for 8-12 guests</p>
            </div>

            {/* Custom Platter */}
            <div className="bg-gradient-to-br from-amber-950/50 to-slate-900/50 border border-amber-900/50 rounded-lg p-8 hover:border-amber-600/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">Bespoke Experience</h3>
              <p className="text-gray-300 mb-4">
                Completely personalized platters crafted to your preferences, dietary requirements, and occasion—no two are ever alike.
              </p>
              <p className="text-amber-400 font-semibold">Any guest count</p>
            </div>

            {/* Add-ons */}
            <div className="bg-gradient-to-br from-amber-950/50 to-slate-900/50 border border-amber-900/50 rounded-lg p-8 hover:border-amber-600/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">Premium Add-ons</h3>
              <p className="text-gray-300 mb-4">
                Elevate your platter with truffle oil, gourmet spreads, fine wines, fresh fruits, or our signature golden honey drizzle.
              </p>
              <p className="text-amber-400 font-semibold">À la carte available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">Why Lioness Palette</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-400 text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Premium Selection</h3>
              <p className="text-gray-400">Only the finest imported and local ingredients</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-400 text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Artisan Crafted</h3>
              <p className="text-gray-400">Every platter is handcrafted with care and attention</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-400 text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fresh & Timely</h3>
              <p className="text-gray-400">Prepared to order, delivered at peak freshness</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-amber-950 to-slate-900 border border-amber-900/50 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-amber-400 mb-4">Ready to Indulge?</h2>
          <p className="text-gray-300 mb-8">
            Let's create your perfect platter. Contact us today to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowBooking(true)}
              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 rounded-lg font-semibold transition-all"
            >
              Book Now
            </button>
            <button
              onClick={handleWhatsApp}
              className="px-8 py-3 border border-amber-500/50 hover:border-amber-400 text-amber-400 hover:bg-amber-500/10 rounded-lg font-semibold transition-all"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-900/30 py-12 px-6 mt-20">
        <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
          <p className="mb-2">Lioness Palette | Premium Charcuterie & Snacks</p>
          <p>© 2024 Lioness. All rights reserved. | Seychelles</p>
          <p className="mt-4 text-xs text-gray-500">Delivery available across Seychelles | Minimum orders apply</p>
        </div>
      </footer>

      {/* Booking Modal */}
      {showBooking && <BookingModal onClose={() => setShowBooking(false)} business="palette" />}
    </div>
  );
}
