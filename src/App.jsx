import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Touch of Class <span className="text-primary-600 font-light">Luxury</span>
            </h1>
            <nav className="flex space-x-4">
              <a href="/" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Deals</a>
              <a href="/admin" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Admin</a>
            </nav>
          </div>
        </header>
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
