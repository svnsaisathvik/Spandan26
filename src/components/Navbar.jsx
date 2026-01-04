import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Sports', path: '/sports' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism backdrop-blur-xl border-b-2 border-gray-700 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-3 group">
            <Trophy className="w-10 h-10 text-yellow-400 animate-olympic-pulse" />
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                SPANDAN
              </span>
              <span className="text-2xl font-black text-gray-300">2026</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-black transition-all transform hover:scale-110 ${
                  location.pathname === item.path
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className="text-lg font-black text-white hover:text-yellow-400 transition-all transform hover:scale-110"
            >
              CONTACT
            </button>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="/images/IIITB_Logo.png"
              alt="IIITB Logo"
              className="h-16 w-auto transition-transform hover:scale-110"
              style={{ maxHeight: '64px', aspectRatio: 'auto 4/3' }}
            />
            <button
              className="md:hidden text-white hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass-morphism backdrop-blur-xl border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block font-bold transition-colors ${
                  location.pathname === item.path
                    ? 'text-yellow-400'
                    : 'text-white hover:text-yellow-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className="block w-full text-left text-white hover:text-yellow-400 font-bold transition-colors"
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
