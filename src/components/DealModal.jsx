import { useState } from 'react'
import { X, MapPin, Tag, Calendar, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'

export default function DealModal({ deal, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!deal) return null;

  const images = deal.images && deal.images.length > 0 
    ? deal.images 
    : [deal.image || "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1200"]

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm">
      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto">
          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 w-full bg-slate-200 group/modal-carousel">
            <img 
              src={images[currentImageIndex]} 
              alt={deal.title} 
              className="w-full h-full object-cover"
            />

            {/* Carousel Controls */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover/modal-carousel:opacity-100 transition-all duration-300 shadow-md z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover/modal-carousel:opacity-100 transition-all duration-300 shadow-md z-10"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Dots */}
                <div className="absolute bottom-28 left-0 right-0 flex justify-center gap-2 z-10">
                  {images.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-2 rounded-full transition-all duration-300 shadow-sm cursor-pointer ${
                        idx === currentImageIndex ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentImageIndex(idx)
                      }}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
              <div className="flex items-center gap-1.5 text-slate-200 text-sm font-medium mb-2">
                <MapPin size={16} />
                {deal.location || "Destination"}
              </div>
              <h2 className="text-3xl font-bold leading-tight">{deal.title || "Amazing Luxury Holiday"}</h2>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-8">
              
              {/* Left Column: Description */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4">About this deal</h3>
                <p className="text-slate-600 leading-relaxed mb-6 whitespace-pre-wrap">
                  {deal.description || "Experience the ultimate luxury getaway with our exclusive packages tailored just for you."}
                </p>

                <h4 className="text-lg font-semibold text-slate-900 mb-3">Highlights</h4>
                <ul className="space-y-2 mb-6">
                  {['Premium accommodation', 'Exclusive access and amenities', 'Unforgettable experiences', '24/7 dedicated concierge'].map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 size={18} className="text-primary-500 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Pricing & Action */}
              <div className="w-full sm:w-72">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sticky top-6">
                  <div className="mb-4">
                    {deal.originalPrice && (
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span className="line-through">£{deal.originalPrice}</span>
                        <span className="bg-primary-100 text-primary-700 font-bold px-2 py-0.5 rounded text-xs flex items-center gap-1">
                          <Tag size={12} />
                          Save £{deal.originalPrice - deal.currentPrice}
                        </span>
                      </div>
                    )}
                    <div className="text-3xl font-bold text-slate-900">
                      £{deal.currentPrice || "999"}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">per person</div>
                  </div>

                  <button className="w-full bg-slate-900 hover:bg-primary-600 text-white py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-primary-500/25 mb-3">
                    Book Now
                  </button>
                  <button className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 py-3.5 rounded-xl font-semibold transition-all">
                    Enquire
                  </button>

                  <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2 justify-center">
                    <Calendar size={14} />
                    Flexible dates available
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
