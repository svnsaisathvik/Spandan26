import { useNavigate } from 'react-router-dom';
import { Mail, Phone, Calendar, Trophy, Users, Target } from 'lucide-react';
import { sportsData } from '../data/sportsData';

const Home = () => {
  const navigate = useNavigate();

  const featuredSports = sportsData.slice(0, 6);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            SPANDAN 2026
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold">
            Intra-College Sports Fest
          </p>
          <p className="text-xl md:text-2xl mb-8 flex items-center justify-center gap-2">
            <Calendar className="w-6 h-6" />
            March 15-20, 2026
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Unleash your sporting spirit at IIIT Bangalore's premier sports festival
          </p>
          <button
            onClick={() => navigate('/sports')}
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            View Sports
          </button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            About SPANDAN
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Trophy className="w-16 h-16 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Compete at the highest level and showcase your athletic prowess
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Users className="w-16 h-16 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Teamwork</h3>
              <p className="text-gray-600">
                Build lasting friendships and strengthen bonds through sports
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Target className="w-16 h-16 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Spirit</h3>
              <p className="text-gray-600">
                Celebrate sportsmanship, fair play, and the joy of competition
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            SPANDAN is IIIT Bangalore's flagship intra-college sports festival, bringing together
            students from all programs to compete, collaborate, and celebrate the spirit of sports.
            With multiple sports categories and exciting competitions, SPANDAN is where champions
            are made and memories are created.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Sports Highlights
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Click any sport to view complete details and register
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredSports.map((sport) => (
              <div
                key={sport.id}
                onClick={() => navigate('/sports')}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 flex flex-col items-center justify-center"
              >
                <div className="text-5xl mb-3">{sport.image}</div>
                <h3 className="font-bold text-center text-gray-800">
                  {sport.name}
                </h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/sports')}
              className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-orange-600 transition-all transform hover:scale-105"
            >
              View All Sports
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <p className="font-semibold">Sports Secretary</p>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">sports@iiitb.ac.in</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Event Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-orange-500">Dates</p>
                  <p className="text-gray-300">March 15-20, 2026</p>
                </div>
                <div>
                  <p className="font-semibold text-orange-500">Venue</p>
                  <p className="text-gray-300">IIIT Bangalore Campus</p>
                </div>
                <div>
                  <p className="font-semibold text-orange-500">Registration</p>
                  <p className="text-gray-300">Visit the Sports page to register</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
