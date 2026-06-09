import { useState } from 'react'
import { MapPin, Tag, ChevronLeft, ChevronRight } from 'lucide-react'

export default function DealCard({ deal, onClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // If deal is empty or undefined, use a fallback
  if (!deal) return null;

  const images = deal.images && deal.images.length > 0 
    ? deal.images 
    : [deal.image || "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"]

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div 
      onClick={onClick}
      className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 group/carousel">
        <img 
          src={images[currentImageIndex]} 
          alt={deal.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Carousel Controls */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/70 hover:bg-white backdrop-blur-sm rounded-full text-slate-800 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 shadow-sm z-10"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/70 hover:bg-white backdrop-blur-sm rounded-full text-slate-800 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 shadow-sm z-10"
            >
              <ChevronRight size={18} />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
        {/* Discount Badge */}
        {deal.originalPrice && deal.currentPrice && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-md">
            <Tag size={12} />
            Save £{deal.originalPrice - deal.currentPrice}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-slate-500 text-sm mb-2 gap-1.5 font-medium">
          <MapPin size={16} className="text-primary-500" />
          {deal.location || "Destination"}
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
          {deal.title || "Amazing Luxury Holiday"}
        </h3>
        
        <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
          {deal.description || "Experience the ultimate luxury getaway with our exclusive packages tailored just for you."}
        </p>

        {/* Footer/Action Section */}
        <div className="flex items-end justify-between mt-auto pt-4 border-t border-slate-100">
          <div>
            <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-0.5">From</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900">£{deal.currentPrice || "999"}</span>
              {deal.originalPrice && (
                <span className="text-sm font-medium text-slate-400 line-through">
                  £{deal.originalPrice}
                </span>
              )}
            </div>
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              // Add book now logic here
            }}
            className="bg-slate-900 hover:bg-primary-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 shadow-md hover:shadow-primary-500/25"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
