import { useState } from 'react'
import { Sparkles, Send, LayoutTemplate, Smartphone } from 'lucide-react'
import toast from 'react-hot-toast'
import ImageUpload from '../components/ImageUpload'
import DealCard from '../components/DealCard'

export default function Admin() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    currentPrice: '',
    originalPrice: '',
    link: '',
    image: '',
    websiteDescription: '',
    socialCaption: ''
  })

  const [activePreviewTab, setActivePreviewTab] = useState('website')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (url) => {
    setFormData(prev => ({ ...prev, image: url }))
  }

  const generateSocialCaption = () => {
    if (!formData.websiteDescription) {
      toast.error("Please add a website description first!")
      return
    }
    
    // Simulate API generation using frontend logic
    const emojis = ['✨', '🌴', '☀️', '🍹', '✈️', '🏖️', '🌊']
    const randomEmojis = () => emojis.sort(() => 0.5 - Math.random()).slice(0, 3).join('')
    
    const formattedText = `🚨 EXCLUSIVE DEAL ALERT! 🚨\n\n${randomEmojis()}\n\n${formData.websiteDescription}\n\n📍 ${formData.location || 'Your Dream Destination'}\n💸 ONLY £${formData.currentPrice || '???'} (Was £${formData.originalPrice || '???'})\n\nDon't miss out on this luxury escape! Limited time only. ⏳\n\n👉 Link in bio to book your next adventure! ✈️🌍\n\n#LuxuryTravel #TravelDeals #Wanderlust #TouchOfClass`
    
    setFormData(prev => ({ ...prev, socialCaption: formattedText }))
    toast.success("Social caption generated!")
  }

  const handlePublish = () => {
    if (!formData.title || !formData.currentPrice) {
      toast.error("Please fill in the required fields (Title, Price)")
      return
    }
    toast.success("Deal published to website and queued for social media!", {
      duration: 4000,
      icon: '🚀'
    })
    
    // Reset form after simulated publish
    // setFormData({...})
  }

  // Create a mock deal object for the DealCard preview
  const previewDeal = {
    title: formData.title || 'Your Deal Title',
    location: formData.location || 'Destination',
    currentPrice: Number(formData.currentPrice) || 0,
    originalPrice: Number(formData.originalPrice) || null,
    image: formData.image || 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    description: formData.websiteDescription || 'Your beautifully crafted description will appear here on the live website.'
  }

  return (
    <div className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Create New Deal</h2>
        <p className="text-slate-500 mt-1">Add a new luxury package to your website and social channels.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* LEFT PANEL: Data Entry */}
        <div className="w-full lg:w-1/2 glass rounded-2xl p-6 sm:p-8">
          <div className="space-y-6">
            
            {/* Basic Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Deal Title *</label>
                <input 
                  type="text" 
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="e.g. 5-Star Maldives Overwater Villa"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="e.g. Malé, Maldives"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Booking Link</label>
                <input 
                  type="url" 
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Price (£) *</label>
                <input 
                  type="number" 
                  name="currentPrice"
                  value={formData.currentPrice}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Original Price (£)</label>
                <input 
                  type="number" 
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="1499"
                />
              </div>
            </div>

            {/* Image Upload */}
            <ImageUpload image={formData.image} onImageChange={handleImageChange} />

            {/* Descriptions */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Website Description</label>
              <textarea 
                name="websiteDescription"
                value={formData.websiteDescription}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                placeholder="Write a clean, professional description for the website feed..."
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-slate-700">Social Media Caption</label>
                <button 
                  onClick={generateSocialCaption}
                  className="text-xs font-medium bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg hover:bg-primary-200 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles size={14} /> Generate Caption
                </button>
              </div>
              <textarea 
                name="socialCaption"
                value={formData.socialCaption}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                placeholder="The Instagram/Facebook caption will appear here..."
              />
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-slate-100">
              <button 
                onClick={handlePublish}
                className="w-full bg-slate-900 hover:bg-primary-600 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary-500/30 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <Send size={20} /> Publish Deal
              </button>
            </div>
            
          </div>
        </div>

        {/* RIGHT PANEL: Live Previews */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-24">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-slate-200">
              <button 
                onClick={() => setActivePreviewTab('website')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors ${activePreviewTab === 'website' ? 'border-b-2 border-primary-500 text-primary-600 bg-primary-50/50' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
              >
                <LayoutTemplate size={18} /> Website View
              </button>
              <button 
                onClick={() => setActivePreviewTab('social')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors ${activePreviewTab === 'social' ? 'border-b-2 border-primary-500 text-primary-600 bg-primary-50/50' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
              >
                <Smartphone size={18} /> Social Media View
              </button>
            </div>

            {/* Preview Content */}
            <div className="p-8 bg-slate-50 min-h-[600px] flex items-center justify-center">
              
              {activePreviewTab === 'website' ? (
                <div className="w-full max-w-[400px]">
                  <DealCard deal={previewDeal} />
                </div>
              ) : (
                <div className="w-full max-w-[400px] bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  {/* Mock Instagram Header */}
                  <div className="p-4 flex items-center gap-3 border-b border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xs">
                      TC
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 leading-tight">TouchOfClass</div>
                      <div className="text-xs text-slate-500">{formData.location || 'Location'}</div>
                    </div>
                  </div>
                  
                  {/* Mock Instagram Image */}
                  <div className="aspect-square bg-slate-100 relative">
                     <img 
                      src={formData.image || 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800'} 
                      alt="Post" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Mock Instagram Actions */}
                  <div className="p-4 pb-2 flex gap-4 text-slate-800">
                     <svg aria-label="Like" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.543 1.117 1.543s.277-.368 1.117-1.543a4.21 4.21 0 0 1 3.675-1.941z"></path></svg>
                     <svg aria-label="Comment" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                     <svg aria-label="Share" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                  </div>
                  
                  {/* Mock Instagram Caption */}
                  <div className="p-4 pt-2 text-sm text-slate-900 whitespace-pre-wrap">
                    <span className="font-bold mr-2">TouchOfClass</span>
                    {formData.socialCaption || 'Your social media caption will appear here...'}
                  </div>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
