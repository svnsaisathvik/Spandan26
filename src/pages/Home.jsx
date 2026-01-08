import { useEffect, useState } from 'react';
import { Mail, Phone, Calendar, Trophy, Users, Target, Award, Flame, Star } from 'lucide-react';
import { sportsData } from '../data/sportsData';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const [particles, setParticles] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const eventDate = new Date('2026-01-23T00:00:00');
  const navigate = useNavigate();
  const featuredSports = sportsData.slice(0, 6);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const glimpseImages = [
    '/images/spandan/glimpse-1.jpg',
    '/images/spandan/glimpse-2.jpg',
    '/images/spandan/glimpse-3.jpg',
    '/images/spandan/glimpse-4.jpg',
    '/images/spandan/glimpse-5.jpg',
    '/images/spandan/glimpse-6.jpg',
    '/images/spandan/glimpse-7.jpg',
    '/images/spandan/glimpse-8.jpg',
    '/images/spandan/glimpse-9.jpg',
    '/images/spandan/glimpse-10.jpg',
    '/images/spandan/glimpse-11.jpg',
    '/images/spandan/glimpse-12.jpg',
    '/images/spandan/glimpse-13.jpg',
    '/images/spandan/glimpse-14.jpg',
    '/images/spandan/glimpse-15.jpg',
    '/images/spandan/glimpse-16.jpg',
    '/images/spandan/glimpse-17.jpg',
    '/images/spandan/glimpse-18.jpg',
    '/images/spandan/glimpse-19.jpg',
    '/images/spandan/glimpse-20.jpg',
  ];

  useEffect(() => {
    const particleCount = 30;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      size: Math.random() * 4 + 2,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % glimpseImages.length);
    }, 4000);

    return () => clearInterval(slideTimer);
  }, []);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white min-h-screen flex items-center justify-center overflow-hidden pb-24 sm:pb-32 md:pb-0">
        <div className="particle-bg">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.left}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-yellow-500 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-red-500 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-44 h-44 bg-green-500 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 w-full px-4 max-w-7xl mx-auto pt-24 sm:pt-28 md:pt-0">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center md:order-2 mt-6 sm:mt-10 md:mt-0">
              <div className="animate-float">
                <img
                  src="/images/Spandan_logo.svg"
                  alt="Spandan Logo"
                  className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="text-center md:text-left md:order-1">
              <div className="mb-6 md:mb-8 flex justify-center md:justify-start gap-3 md:gap-4">
                <Trophy className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-yellow-400 animate-bounce-slow" />
                <Flame className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-orange-500 animate-float" />
                <Star className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-400 animate-bounce-slow" style={{ animationDelay: '1s' }} />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-4 md:mb-6 animate-zoom-in bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
                SPANDAN 2026
              </h1>

              <div className="glass-morphism inline-block px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full mb-4 md:mb-6 animate-slide-up">
                <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  OLYMPIC SPIRIT • ELITE COMPETITION
                </p>
              </div>

              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 flex items-center justify-center md:justify-start gap-2 md:gap-3 animate-slide-up flex-wrap">
                <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-400" />
                <span className="font-bold">January 23, 2026 • 12:00 AM</span>
              </p>

              <div className="flex justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 mt-4 md:mt-6 animate-slide-up flex-wrap">
                {[
                  { label: 'DAYS', value: timeLeft.days },
                  { label: 'HOURS', value: timeLeft.hours },
                  { label: 'MIN', value: timeLeft.minutes },
                  { label: 'SEC', value: timeLeft.seconds },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="glass-morphism px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-xl md:rounded-2xl text-center shadow-xl"
                  >
                    <p className="text-xl sm:text-2xl md:text-3xl font-black text-yellow-400">
                      {String(item.value).padStart(2, '0')}
                    </p>
                    <p className="text-xs font-bold tracking-widest text-gray-200">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed animate-slide-up mt-6 md:mt-8 px-2 sm:px-0">
                Experience the pinnacle of collegiate sports excellence. Where champions rise, legends are born, and glory awaits.
              </p>

              <button
                onClick={() => navigate('/sports')}
                className="olympic-gold text-gray-900 px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-black hover:scale-110 transition-all transform shadow-2xl neon-glow animate-olympic-pulse"
              >
                ENTER THE ARENA
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent px-2">
              ABOUT SPANDAN
            </h2>
            <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 mx-auto"></div>
          </div>

          <div className="glass-morphism rounded-2xl md:rounded-3xl p-8 md:p-12 backdrop-blur-xl border-2 border-white/30 shadow-2xl mb-16 md:mb-20">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 text-center max-w-5xl mx-auto leading-relaxed font-semibold mb-6">
              SPANDAN is IIIT Bangalore's premier annual sports championship, where the spirit of competition meets excellence.
              A celebration of athletic prowess, teamwork, and sportsmanship that brings together the brightest minds and finest athletes.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              Since its inception, SPANDAN has been the ultimate platform for showcasing talent across diverse sporting disciplines.
              From thrilling football matches to intense badminton rallies, from strategic chess battles to energetic dance performances,
              SPANDAN embodies the complete sporting experience. It's where future leaders forge unbreakable bonds,
              where champions are born, and where every moment becomes a memory worth cherishing.
            </p>
          </div>

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-4 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent px-2">
              GLIMPSES OF SPANDAN
            </h2>
            <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto mb-4"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              Relive the unforgettable moments and legendary victories
            </p>
          </div>

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[32rem] w-full overflow-hidden bg-gray-900">
              {glimpseImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Spandan Glimpse ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {glimpseImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-yellow-400 w-8'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goToSlide((currentImageIndex - 1 + glimpseImages.length) % glimpseImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => goToSlide((currentImageIndex + 1) % glimpseImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-600 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <Award className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-bounce-slow" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              CHAMPIONSHIP DISCIPLINES
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mb-4"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Select your battlefield and claim your victory
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 mb-12">
            {featuredSports.map((sport) => (
              <div
                key={sport.id}
                onClick={() => navigate('/sports')}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 md:p-6 border-2 border-gray-700 hover:border-yellow-400 transition-all shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-orange-500/0 group-hover:from-yellow-400/10 group-hover:to-orange-500/10 transition-all"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                      <img
                        src={sport.gif_image}
                        alt={sport.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-sm sm:text-base md:text-lg font-black text-center text-white group-hover:text-yellow-400 transition-colors">
                      {sport.name.toUpperCase()}
                    </h3>
                  </div>

                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/sports')}
              className="olympic-gold text-gray-900 px-8 md:px-12 py-4 rounded-full text-lg md:text-xl font-black hover:scale-110 transition-all shadow-2xl inline-flex items-center gap-3"
            >
              <Trophy className="w-6 h-6" />
              VIEW ALL CHAMPIONSHIPS
              <Trophy className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>


      <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-gray-900 via-blue-950 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 sm:left-20 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 bg-blue-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 sm:right-20 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 bg-yellow-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent px-2">
              JOIN THE CHAMPIONS
            </h2>
            <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="glass-morphism rounded-xl md:rounded-2xl p-6 md:p-8 card-3d-hover backdrop-blur-xl border-2 border-white/20 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 md:mb-6 text-yellow-400">GET IN TOUCH</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg text-white">Prabhas</p>
                    <p className="text-sm md:text-base text-gray-300">+91 9494676848</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg text-white">Bharat</p>
                    <p className="text-sm md:text-base text-gray-300">+91 8824119467</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg text-white">Tarun</p>
                    <p className="text-sm md:text-base text-gray-300">+91 8147691596</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg text-white">Email</p>
                    <p className="text-sm md:text-base text-gray-300 break-all">sportscomm@iiitb.ac.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-morphism rounded-xl md:rounded-2xl p-6 md:p-8 card-3d-hover backdrop-blur-xl border-2 border-white/20 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 md:mb-6 text-yellow-400">EVENT DETAILS</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="group">
                  <p className="font-black text-base md:text-lg text-blue-400 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    DATES
                  </p>
                  <p className="text-white text-lg sm:text-xl font-bold">January 23-25, 2026</p>
                </div>
                <div className="group">
                  <p className="font-black text-base md:text-lg text-blue-400 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 md:w-5 md:h-5" />
                    VENUE
                  </p>
                  <p className="text-white text-lg sm:text-xl font-bold">IIIT Bangalore Campus</p>
                </div>
                <div className="group">
                  <p className="font-black text-base md:text-lg text-blue-400 mb-2 flex items-center gap-2">
                    <Trophy className="w-4 h-4 md:w-5 md:h-5" />
                    REGISTRATION
                  </p>
                  <p className="text-white text-sm md:text-base">Open to all IIITB students</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="olympic-rings rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-2xl">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black">
                FASTER • HIGHER • STRONGER • TOGETHER
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
