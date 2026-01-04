import { ExternalLink, Users, Trophy } from 'lucide-react';
import { sportsData } from '../data/sportsData';

const Sports = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Sports Events</h1>
          <p className="text-xl md:text-2xl">
            Choose your sport and register now for SPANDAN 2026
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {sportsData.map((sport) => (
            <div
              key={sport.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/4 bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center p-8">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="object-contain h-32 w-32 rounded-xl shadow-lg bg-white"
                  />
                </div>

                <div className="md:w-3/4 p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {sport.name}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {sport.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-5 h-5 text-orange-500" />
                        <h3 className="font-bold text-gray-800">Team Size</h3>
                      </div>
                      <p className="text-gray-700">{sport.teamSize}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Trophy className="w-5 h-5 text-orange-500" />
                        <h3 className="font-bold text-gray-800">Format</h3>
                      </div>
                      <p className="text-gray-700">{sport.format}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">
                      Rules & Guidelines
                    </h3>
                    <ul className="space-y-2">
                      {sport.rules.map((rule, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className="text-orange-500 font-bold mt-1">•</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={sport.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Register Now
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Compete?
          </h2>
          <p className="text-lg mb-6">
            Register for your favorite sports and be part of SPANDAN 2026
          </p>
          <p className="text-sm opacity-90">
            For any queries, contact the Sports Secretary at sports@iiitb.ac.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sports;
