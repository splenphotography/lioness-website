import { useState } from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  onClose: () => void;
  business: 'palette' | 'grooming';
}

export function BookingModal({ onClose, business }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '4',
    petName: '',
    petType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const businessName = business === 'palette' ? 'Lioness Palette' : "Lioness Pet's Grooming";
    let message = `Hello! I'd like to book with ${businessName}\n\n`;
    message += `Name: ${formData.name}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Phone: ${formData.phone}\n`;
    
    if (business === 'palette') {
      message += `Preferred Date: ${formData.date}\n`;
      message += `Preferred Time: ${formData.time}\n`;
      message += `Number of Guests: ${formData.guests}\n`;
    } else {
      message += `Pet Name: ${formData.petName}\n`;
      message += `Pet Type: ${formData.petType}\n`;
      message += `Preferred Date: ${formData.date}\n`;
      message += `Preferred Time: ${formData.time}\n`;
    }
    
    if (formData.message) {
      message += `\nAdditional Notes: ${formData.message}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2482747214?text=${encodedMessage}`, '_blank');
    
    setSubmitted(true);
    setTimeout(onClose, 1500);
  };

  const businessName = business === 'palette' ? 'Lioness Palette' : "Lioness Pet's Grooming";
  const isPalette = business === 'palette';

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 border border-amber-900/50 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 border-b border-amber-900/50 p-6 flex items-center justify-between bg-slate-900">
          <h2 className="text-2xl font-bold text-amber-400">Book with {businessName}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-amber-900/30 rounded-lg text-white placeholder-gray-500 focus:border-amber-600 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-amber-900/30 rounded-lg text-white placeholder-gray-500 focus:border-amber-600 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-amber-900/30 rounded-lg text-white placeholder-gray-500 focus:border-amber-600 focus:outline-none transition-colors"
                placeholder="+248 XXXX XXXX"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Preferred Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-amber-900/30 rounded-lg text-white focus:border-amber-600 focus:outline-none transition-colors"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Preferred Time *</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-amber-900/30 rounded-lg text-white focus:border-amber-600 focus:outline-none transition-colors"
              />
            </div>

            {/* Palette-specific fields */}
            {isPalette && (
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Number of Guests *</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-800 border border-amber-900/30 rounded-lg text-white focus:border-amber-600 focus:outline-none transition-colors"
                >
                  <option value="2">2 guests</option>
                  <option value="4">4 guests</option>
                  <option value="6">6 guests</option>
                  <option value="8">8 guests</option>
                  <option value="10">10 guests</option>
                  <option value="12">12+ guests</option>
                </select>
              </div>
            )}

            {/* Grooming-specific fields */}
            {!isPalette && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Pet Name *</label>
                  <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800 border border-amber-900/30 rounded-lg text-white placeholder-gray-500 focus:border-amber-600 focus:outline-none transition-colors"
                    placeholder="Your pet's name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Pet Type *</label>
                  <select
                    name="petType"
                    value={formData.petType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800 border border-amber-900/30 rounded-lg text-white focus:border-amber-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select pet type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="guinea-pig">Guinea Pig</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Additional Notes</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 bg-slate-800 border border-amber-900/30 rounded-lg text-white placeholder-gray-500 focus:border-amber-600 focus:outline-none transition-colors resize-none"
                placeholder="Any special requests or dietary requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold rounded-lg transition-all mt-6"
            >
              Send to WhatsApp
            </button>

            <p className="text-xs text-gray-500 text-center">
              Your information will be sent via WhatsApp for confirmation
            </p>
          </form>
        ) : (
          <div className="p-8 flex flex-col items-center justify-center min-h-[300px]">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-amber-400 mb-2 text-center">Thank You!</h3>
            <p className="text-gray-400 text-center">
              Your booking request has been sent to WhatsApp. We'll confirm your appointment shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
