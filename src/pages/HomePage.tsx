import { Link } from 'react-router-dom';
import { Crown, Utensils, PawPrint } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-amber-900/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-8 h-8 text-amber-400" />
            <span className="text-2xl font-bold text-amber-400">Lioness</span>
          </div>
          <span className="text-sm text-amber-200">Seychelles</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 bg-clip-text text-transparent">
              Lioness
            </h1>
            <p className="text-xl text-amber-200 mb-2">Luxury Experiences in Seychelles</p>
            <p className="text-gray-400">Curated excellence across culinary and wellness</p>
          </div>

          {/* Business Selector Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Palette Card */}
            <Link to="/palette" className="group">
              <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-b from-amber-950 to-slate-900 border border-amber-900/50 hover:border-amber-600/80 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-amber-900/50">
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                      <Utensils className="w-7 h-7 text-amber-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Lioness Palette</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Artisan charcuterie and gourmet snack platters, meticulously curated for your most refined moments.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all">
                    <span className="text-sm font-semibold">Explore</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Grooming Card */}
            <Link to="/grooming" className="group">
              <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-b from-amber-950 to-slate-900 border border-amber-900/50 hover:border-amber-600/80 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-amber-900/50">
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                      <PawPrint className="w-7 h-7 text-amber-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Lioness Pet's Grooming</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Professional grooming services with luxury care, ensuring your beloved companions feel pampered.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all">
                    <span className="text-sm font-semibold">Explore</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Bottom accent */}
          <div className="text-center mt-16 border-t border-amber-900/30 pt-8">
            <p className="text-gray-400 text-sm">
              ✨ Luxury. Excellence. Seychelles. ✨
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-900/30 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2024 Lioness. All rights reserved. | Seychelles</p>
        </div>
      </footer>
    </div>
  );
}
