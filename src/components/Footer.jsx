import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Information & Socials */}
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-6">
              Touch of Class <span className="font-light text-primary-400">Luxury</span>
            </h3>
            <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
              Experience the pinnacle of luxury travel. We curate exclusive, breathtaking getaways designed for the modern discerning traveler.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span>info@touchofclassluxury.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span>+44 20 1234 5678</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/touchofclassluxuryholidays/" 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a 
                href="https://www.instagram.com/touchofclassluxuryholidays?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700/50">
            <h4 className="text-xl font-semibold text-white mb-6">Send us a message</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you plan your next escape?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 shadow-lg shadow-primary-500/20"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Touch of Class Luxury Holidays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
