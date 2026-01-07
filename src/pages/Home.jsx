import { useNavigate } from 'react-router-dom';
import { Mail, Phone, Calendar, Trophy, Users, Target, Award, Flame, Star } from 'lucide-react';
import { sportsData } from '../data/sportsData';
import { useEffect, useState } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [particles, setParticles] = useState([]);
  const eventDate = new Date('2026-01-23T00:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const featuredSports = sportsData.slice(0, 6);

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

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white min-h-screen flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 w-full px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Logo - Shows on top for mobile, right for desktop */}
            <div className="flex items-center justify-center md:order-2">
              <div className="animate-float">
                <img 
                  src="/images/Spandan_logo.svg" 
                  alt="Spandan Logo" 
                  className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Main Content - Shows below logo on mobile, left on desktop */}
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
              THE OLYMPIC VALUES
            </h2>
            <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 perspective-1000">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl md:rounded-3xl p-6 md:p-8 card-3d-hover shadow-xl border-2 border-yellow-200">
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="olympic-gold p-4 md:p-6 rounded-full shadow-2xl animate-float">
                  <Trophy className="w-12 h-12 md:w-16 md:h-16 text-gray-900" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-center text-gray-800">EXCELLENCE</h3>
              <p className="text-sm md:text-base text-gray-700 text-center leading-relaxed">
                Strive for greatness and push beyond limits. Showcase your elite athletic prowess on the grand stage.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 card-3d-hover shadow-xl border-2 border-gray-300">
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="olympic-silver p-4 md:p-6 rounded-full shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                  <Users className="w-12 h-12 md:w-16 md:h-16 text-gray-800" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-center text-gray-800">TEAMWORK</h3>
              <p className="text-sm md:text-base text-gray-700 text-center leading-relaxed">
                Unite as one force. Build unbreakable bonds and forge legendary partnerships through sport.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl md:rounded-3xl p-6 md:p-8 card-3d-hover shadow-xl border-2 border-orange-200 sm:col-span-2 md:col-span-1">
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="olympic-bronze p-4 md:p-6 rounded-full shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                  <Target className="w-12 h-12 md:w-16 md:h-16 text-gray-900" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-center text-gray-800">SPIRIT</h3>
              <p className="text-sm md:text-base text-gray-700 text-center leading-relaxed">
                Honor the game with integrity. Celebrate fair play, respect, and the pure joy of competition.
              </p>
            </div>
          </div>

          <div className="glass-morphism rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-xl border-2 border-white/30 shadow-2xl">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 text-center max-w-4xl mx-auto leading-relaxed font-semibold">
              SPANDAN is IIIT Bangalore's premier championship where future legends emerge.
              Experience world-class competition across elite sporting disciplines.
              This is where champions are forged and history is written.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-blue-600 rounded-full opacity-10 blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-yellow-600 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <Award className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 text-yellow-400 animate-bounce-slow" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent px-2">
              CHAMPIONSHIP DISCIPLINES
            </h2>
            <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 px-4">
              Select your battlefield and claim your victory
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6 perspective-1000 mb-12 md:mb-16">
            {featuredSports.map((sport, index) => (
              <div
                key={sport.id}
                onClick={() => navigate('/sports')}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 card-3d-hover border-2 border-gray-700 hover:border-yellow-400 transition-all flex flex-col items-center justify-center h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-orange-500/0 group-hover:from-yellow-400/10 group-hover:to-orange-500/10 transition-all"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mb-3 md:mb-4 mx-auto rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                      <img
                        src={sport.gif_image}
                        alt={sport.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-black text-center text-white text-sm sm:text-base md:text-lg group-hover:text-yellow-400 transition-colors">
                      {sport.name.toUpperCase()}
                    </h3>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/sports')}
              className="olympic-gold text-gray-900 px-6 sm:px-8 md:px-12 py-3 md:py-4 rounded-full text-base sm:text-lg md:text-xl font-black hover:scale-110 transition-all transform shadow-2xl neon-glow inline-flex items-center gap-2 md:gap-3"
            >
              <Trophy className="w-5 h-5 md:w-6 md:h-6" />
              <span className="hidden sm:inline">VIEW ALL CHAMPIONSHIPS</span>
              <span className="sm:hidden">VIEW ALL</span>
              <Trophy className="w-5 h-5 md:w-6 md:h-6" />
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
                    <p className="font-bold text-base md:text-lg text-white">Sports Secretary</p>
                    <p className="text-sm md:text-base text-gray-300">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg text-white">Email</p>
                    <p className="text-sm md:text-base text-gray-300 break-all">sports@iiitb.ac.in</p>
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
                  <p className="text-white text-lg sm:text-xl font-bold">March 15-20, 2026</p>
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

export default Home;