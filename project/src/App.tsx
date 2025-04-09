import React, { useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { Menu, X, Search, Facebook, Twitter, Instagram, Youtube, BookIcon as TiktokIcon } from 'lucide-react';

// Page components
const NewIn = () => (
  <div className="pt-16">
    <div className="max-w-screen-2xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="relative h-[600px] group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80"
            alt="Necklaces"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-4xl font-light tracking-wider mb-4">NECKLACES</h2>
              <Link to="#" className="text-white text-sm tracking-wider hover:underline">SHOP NOW</Link>
            </div>
          </div>
        </div>
        <div className="relative h-[600px] group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80"
            alt="Rings"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-4xl font-light tracking-wider mb-4">RINGS</h2>
              <Link to="#" className="text-white text-sm tracking-wider hover:underline">SHOP NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Collections = () => (
  <div className="pt-16">
    <div className="py-20 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wider">OUR COLLECTIONS</h2>
        {/* Collections content */}
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="pt-16">
    <div className="py-20">
      <div className="max-w-screen-2xl mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wider">ABOUT CASEY</h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-6">
          <p>
            My journey in art began with the body and the image: as a model and actress, I learned to inhabit the form, the gesture, the silence that also communicates.
          </p>
          <p>
            Over time, something more intimate began to awaken: a need to wear objects that were more than just ornament. I wanted pieces that spoke of me, that told my story, my inner universe.
          </p>
          <p>
            Thus, my first piece of jewelry was born, made with my own hands, as an act of search and affirmation. What started as a personal creation evolved into a deeper language. A language that unites the material with the symbolic, the beautiful with the emotional.
          </p>
          <p>
            While I was working on a mural in the street art circuit at Art Basel Miami, in Wynwood, a series of unexpected encounters opened a new door for me: I was invited to participate in Milan Jewelry Week, where I showcased my pieces, and my work was recognized as part of contemporary artistic jewelry, which now resides in Milan's memory.
          </p>
          <p>
            Since then, my jewelry has traveled—as talismans—across different parts of the world. Today, they are found in Argentina, the United States, Italy, and other places where art wants to touch the skin.
          </p>
          <p>
            Each creation is a bridge between the visible and the invisible. It is art you wear. It is message, presence, transformation.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Login = () => (
  <div className="pt-16">
    <div className="py-20">
      <div className="max-w-screen-sm mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wider">LOGIN</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white px-8 py-3 hover:bg-gray-800 transition duration-300"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  </div>
);

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80",
      title: "SPRING COLLECTION",
      subtitle: "2024"
    },
    {
      image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&q=80",
      title: "NEW ARRIVALS",
      subtitle: "Explore the Latest"
    },
    {
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80",
      title: "FINE JEWELRY",
      subtitle: "Timeless Elegance"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-white text-6xl md:text-8xl font-light tracking-wider mb-4">{slide.title}</h1>
                <p className="text-white text-xl md:text-2xl font-light tracking-widest mb-8">{slide.subtitle}</p>
                <Link to="/new-in" className="inline-block bg-white text-black px-12 py-4 text-sm tracking-wider hover:bg-black hover:text-white transition duration-300">
                  DISCOVER
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isHome ? 'bg-transparent' : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
      }`}>
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex justify-center items-center h-16 relative">
            <div className="absolute left-4 flex items-center space-x-6">
              <button 
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? 
                  <X size={24} className={isHome ? 'text-white' : 'text-black'} /> : 
                  <Menu size={24} className={isHome ? 'text-white' : 'text-black'} />
                }
              </button>
              <Search size={20} className={`cursor-pointer ${isHome ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-600'}`} />
            </div>

            <div className="hidden lg:flex items-center space-x-12">
              <Link 
                to="/new-in"
                className={`text-sm tracking-wider ${
                  isHome ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-600'
                }`}
              >
                NEW IN
              </Link>
              <Link 
                to="/collections"
                className={`text-sm tracking-wider ${
                  isHome ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-600'
                }`}
              >
                COLLECTIONS
              </Link>
              <Link 
                to="/"
                className={`text-2xl font-light tracking-[0.2em] mx-12 ${
                  isHome ? 'text-white' : 'text-black'
                }`}
              >
                CASEY
              </Link>
              <Link 
                to="/about"
                className={`text-sm tracking-wider ${
                  isHome ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-600'
                }`}
              >
                ABOUT
              </Link>
              <Link 
                to="/login"
                className={`text-sm tracking-wider ${
                  isHome ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-600'
                }`}
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden pt-16">
          <div className="p-8 space-y-6">
            <Link to="/new-in" className="block text-secondary hover:text-primary py-2 text-lg tracking-wider">NEW IN</Link>
            <Link to="/collections" className="block text-secondary hover:text-primary py-2 text-lg tracking-wider">COLLECTIONS</Link>
            <Link to="/about" className="block text-secondary hover:text-primary py-2 text-lg tracking-wider">ABOUT</Link>
            <Link to="/login" className="block text-secondary hover:text-primary py-2 text-lg tracking-wider">LOGIN</Link>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-in" element={<NewIn />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Client Service Links */}
      <div className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-4">CLIENT SERVICE</h3>
              <Link to="/contact" className="block text-sm text-gray-600 hover:text-black mb-2">EMAIL US</Link>
              <Link to="/cookie-settings" className="block text-sm text-gray-600 hover:text-black mb-2">COOKIE SETTINGS</Link>
              <Link to="/appointment" className="block text-sm text-gray-600 hover:text-black">BOOK AN APPOINTMENT</Link>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">LEGAL NOTICES</h3>
              <Link to="/legal" className="block text-sm text-gray-600 hover:text-black">LEGAL NOTICES</Link>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">ACCESSIBILITY</h3>
              <Link to="/accessibility" className="block text-sm text-gray-600 hover:text-black">ACCESSIBILITY</Link>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">CAREER</h3>
              <Link to="/careers" className="block text-sm text-gray-600 hover:text-black">CAREER</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-black py-20">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-sm font-semibold mb-6 tracking-wider">CUSTOMER SERVICE</h3>
              <div className="space-y-4">
                <Link to="#" className="block text-sm text-gray-600 hover:text-black">Contact Us</Link>
                <Link to="#" className="block text-sm text-gray-600 hover:text-black">Shipping & Returns</Link>
                <Link to="#" className="block text-sm text-gray-600 hover:text-black">Care Guide</Link>
                <Link to="#" className="block text-sm text-gray-600 hover:text-black">FAQ</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-6 tracking-wider">ABOUT CASEY</h3>
              <div className="space-y-4">
                <Link to="#" className="block text-sm text-gray-600 hover:text-black">Our Story</Link>
                <Link to="#" className="block text-sm text-gray-600 hover:text-black">Sustainability</Link>
                <Link to="#" className="block text-sm text-gray-600 hover:text-black">Careers</Link>
                <Link to="#" className="block text-sm text-gray-600 hover:text-black">Store Locator</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-6 tracking-wider">LEGAL</h3>
              <div className="space-y-4">
                <Link to="#" className="block text-sm text-gray-600 hover:text-black">Privacy Policy</Link>
                <Link to="#" className="block text-sm text-gray-600 hover:text-black">Terms of Service</Link>
                <Link to="#" className="block text-sm text-gray-600 hover:text-black">Cookie Policy</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-6 tracking-wider">FOLLOW US</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-black">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <TiktokIcon size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>&copy; 2024 Casey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;