import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Left: SPANDAN 2026 - Larger text */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-4xl font-extrabold text-orange-600">SPANDAN</span>
            <span className="text-xl font-semibold text-gray-600">2026</span>
          </Link>

          {/* Center: Navigation (unchanged) */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-lg text-gray-700 hover:text-orange-600 font-semibold transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className="text-lg text-gray-700 hover:text-orange-600 font-semibold transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Right: IIITB Logo - Larger and ratio maintained */}
          <div className="flex items-center">
            <img
              src="/images/IIITB_Logo.png"
              alt="IIITB Logo"
              className="h-16 w-auto ml-4"
              style={{ maxHeight: '64px', aspectRatio: 'auto 4/3' }}
            />
            <button
              className="md:hidden text-gray-700 ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className="block w-full text-left text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
