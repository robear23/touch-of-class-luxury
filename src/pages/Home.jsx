import { useState } from 'react'
import DealCard from '../components/DealCard'
import DealModal from '../components/DealModal'

const MOCK_DEALS = [
  {
    id: 1,
    title: '5-Star Maldives Overwater Villa',
    location: 'Malé, Maldives',
    description: 'Experience unparalleled luxury in a private overwater villa. Includes daily breakfast, a couples massage, and seaplane transfers. Perfect for honeymooners or a romantic retreat.',
    currentPrice: 2499,
    originalPrice: 3800,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 2,
    title: 'Santorini Cliffside Boutique Hotel',
    location: 'Santorini, Greece',
    description: 'Breathtaking sunset views from your private infinity plunge pool. 5 nights accommodation with daily champagne breakfast and a private caldera sunset cruise.',
    currentPrice: 1299,
    originalPrice: 1950,
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1569661159041-0e78864700d8?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 3,
    title: 'Bali Jungle Wellness Retreat',
    location: 'Ubud, Bali',
    description: 'Reconnect with nature in a luxury eco-resort. Includes daily yoga sessions, organic meals, holistic spa treatments, and a guided temple tour.',
    currentPrice: 899,
    originalPrice: 1400,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 4,
    title: 'Swiss Alps Luxury Chalet',
    location: 'Zermatt, Switzerland',
    description: 'Ski-in, ski-out access with panoramic Matterhorn views. Enjoy your own private chef, heated indoor pool, and VIP ski passes for 7 days.',
    currentPrice: 4500,
    originalPrice: 5500,
    image: 'https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1521268307236-1e6fbfa10702?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1483728642387-6c3ab6cceebf?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 5,
    title: 'Amalfi Coast Historic Villa',
    location: 'Positano, Italy',
    description: 'Live la dolce vita in a restored 18th-century villa. Includes a private boat tour to Capri, cooking class with a local nonna, and wine tasting.',
    currentPrice: 1850,
    originalPrice: 2400,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1516483638261-f4dafaf00bc2?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 6,
    title: 'Dubai Desert Conservation Resort',
    location: 'Dubai, UAE',
    description: 'Luxury Bedouin-style tent with a private pool. Includes camel trekking, falconry experiences, and a romantic dune dinner under the stars.',
    currentPrice: 1650,
    originalPrice: 2100,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1582667302008-01140026e9de?auto=format&fit=crop&q=80&w=1000'
    ]
  }
]

export default function Home() {
  const [selectedDeal, setSelectedDeal] = useState(null)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Curated Luxury Escapes
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Discover exclusive hand-picked travel deals to the world's most breathtaking destinations. 
          Uncompromising luxury at unrepeatable prices.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_DEALS.map(deal => (
          <DealCard 
            key={deal.id} 
            deal={deal} 
            onClick={() => setSelectedDeal(deal)} 
          />
        ))}
      </div>

      {/* Deal Modal */}
      {selectedDeal && (
        <DealModal deal={selectedDeal} onClose={() => setSelectedDeal(null)} />
      )}
    </div>
  )
}
