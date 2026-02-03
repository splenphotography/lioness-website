import { Link } from 'react-router-dom';
import { Crown, ArrowLeft, MessageCircle, Calendar } from 'lucide-react';
import { useState } from 'react';
import { BookingModal } from '../components/BookingModal';
import { SocialLinks } from '../components/SocialLinks';

export function GroomingPage() {
  const [showBooking, setShowBooking] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/2482747214?text=Hello%20Lioness%20Pet%27s%20Grooming%21%20I%20would%20like%20to%20book%20a%20grooming%20appointment.', '_blank');
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
              facebookUrl="https://www.facebook.com/profile.php?id=61552088970070"
              instagramUrl="https://www.instagram.com/lioness_pets_grooming"
              tiktokUrl="https://www.tiktok.com"
            />
            <span className="text-amber-200 font-semibold">Pet's Grooming</span>
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
              Lioness <span className="text-amber-400">Pet's Grooming</span>
            </h1>
            
            {/* Hero Image */}
            <div className="mb-8 rounded-xl overflow-hidden border border-amber-900/50 h-96 w-full">
              <img 
                src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&q=90"
                alt="Professional Pet Grooming"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <p className="text-xl text-amber-200 mb-4">Luxury Care for Your Beloved Companions</p>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Professional grooming services tailored to every breed and coat type. We combine expertise, patience, and luxury care to ensure your pets feel pampered and look their absolute best.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowBooking(true)}
                className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
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
          <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">Our Care Gallery</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="rounded-lg overflow-hidden border border-amber-900/50 h-64 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&q=90"
                alt="Professional Bath & Grooming"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-amber-900/50 h-64 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1576754459f1-b4202c59c1df?w=600&q=90"
                alt="Spa Pampering Treatment"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-amber-900/50 h-64 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1611003228941-98852ba62227?w=600&q=90"
                alt="Specialized Pet Care"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">Our Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Bath & Grooming */}
            <div className="bg-gradient-to-br from-amber-950/50 to-slate-900/50 border border-amber-900/50 rounded-lg p-8 hover:border-amber-600/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">Bath & Grooming</h3>
              <p className="text-gray-300 mb-4">
                Complete grooming experience including luxurious bath, blow dry, brush out, and full styling with premium pet shampoos and conditioners.
              </p>
              <p className="text-amber-400 font-semibold">Small: 60 min | Large: 90 min</p>
            </div>

            {/* Spa Treatment */}
            <div className="bg-gradient-to-br from-amber-950/50 to-slate-900/50 border border-amber-900/50 rounded-lg p-8 hover:border-amber-600/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">Spa Pampering</h3>
              <p className="text-gray-300 mb-4">
                Our signature spa treatment featuring aromatherapy baths, deep conditioning, pawdicure, and relaxation massage. Ultimate luxury care.
              </p>
              <p className="text-amber-400 font-semibold">2 hours | Premium experience</p>
            </div>

            {/* Express Service */}
            <div className="bg-gradient-to-br from-amber-950/50 to-slate-900/50 border border-amber-900/50 rounded-lg p-8 hover:border-amber-600/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">Express Refresh</h3>
              <p className="text-gray-300 mb-4">
                Quick maintenance grooming perfect for regular clients. Includes bath, partial groom, and styling. Fast-tracked service.
              </p>
              <p className="text-amber-400 font-semibold">30-45 min | Quick refresh</p>
            </div>

            {/* Specialized Care */}
            <div className="bg-gradient-to-br from-amber-950/50 to-slate-900/50 border border-amber-900/50 rounded-lg p-8 hover:border-amber-600/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">Specialized Grooming</h3>
              <p className="text-gray-300 mb-4">
                Expert care for special needs, senior pets, anxious animals, and breed-specific requirements with tailored approach and patience.
              </p>
              <p className="text-amber-400 font-semibold">Custom duration</p>
            </div>

            {/* Nails & Details */}
            <div className="bg-gradient-to-br from-amber-950/50 to-slate-900/50 border border-amber-900/50 rounded-lg p-8 hover:border-amber-600/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">Nail & Detail Care</h3>
              <p className="text-gray-300 mb-4">
                Pawdicure service with nail trimming, filing, pad care. Also includes ear cleaning and teeth brushing for complete wellness.
              </p>
              <p className="text-amber-400 font-semibold">À la carte services</p>
            </div>

            {/* Home Visit */}
            <div className="bg-gradient-to-br from-amber-950/50 to-slate-900/50 border border-amber-900/50 rounded-lg p-8 hover:border-amber-600/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">Mobile Service</h3>
              <p className="text-gray-300 mb-4">
                We come to you! Convenient at-home grooming service perfect for pets who prefer their familiar environment.
              </p>
              <p className="text-amber-400 font-semibold">Available for select areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">Why Lioness Pet's Grooming</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-400 text-2xl font-bold">❤️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Pet-First Approach</h3>
              <p className="text-gray-400">Your pet's comfort and wellness are our priority in every session</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-400 text-2xl font-bold">✨</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Premium Products</h3>
              <p className="text-gray-400">Only luxury, hypoallergenic, and gentle products for sensitive skin</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-400 text-2xl font-bold">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-400">Certified, experienced groomers trained in all breeds and techniques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-amber-950/50 to-slate-900/50 border border-amber-900/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-amber-400 mb-6">Pricing & Packages</h2>
          <div className="space-y-4 text-gray-300">
            <p>Pricing varies based on pet size, coat condition, and service complexity.</p>
            <p>Contact us for a personalized quote. We offer package discounts for regular grooming clients.</p>
            <p className="text-amber-200 font-semibold mt-4">
              ✨ First-time clients: Complimentary consultation & 10% discount on first service
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-amber-950 to-slate-900 border border-amber-900/50 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-amber-400 mb-4">Book Your Pet's Pampering Session</h2>
          <p className="text-gray-300 mb-8">
            Your beloved companion deserves luxury care. Let's schedule their grooming appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowBooking(true)}
              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 rounded-lg font-semibold transition-all"
            >
              Book Appointment
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
          <p className="mb-2">Lioness Pet's Grooming | Professional Pet Care Services</p>
          <p>© 2024 Lioness. All rights reserved. | Seychelles</p>
          <p className="mt-4 text-xs text-gray-500">Available Tuesday - Sunday | Closed Mondays | Appointments subject to availability</p>
        </div>
      </footer>

      {/* Booking Modal */}
      {showBooking && <BookingModal onClose={() => setShowBooking(false)} business="grooming" />}
    </div>
  );
}
