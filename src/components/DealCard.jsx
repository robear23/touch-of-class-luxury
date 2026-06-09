import { MapPin, Tag } from 'lucide-react'

export default function DealCard({ deal }) {
  // If deal is empty or undefined, use a fallback
  if (!deal) return null;

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <img 
          src={deal.image || "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"} 
          alt={deal.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
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
          
          <button className="bg-slate-900 hover:bg-primary-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 shadow-md hover:shadow-primary-500/25">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
