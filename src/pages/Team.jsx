import { useState } from 'react';
import { Mail, Phone, Trophy, Star, Award, Crown } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { teamData } from '../data/teamData';

const Team = () => {
  const [selectedSection, setSelectedSection] = useState('organizing');

  const handleInstagramClick = (instagram) => {
    window.open(instagram, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20">
      <div className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full opacity-10 blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Crown className="w-20 h-20 mx-auto mb-6 text-yellow-400 animate-bounce-slow" />
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
            THE CHAMPIONS BEHIND THE GAMES
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl font-bold">
            Meet the elite organizing committee of SPANDAN 2026
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LEFT SIDEBAR */}
          <aside className="lg:w-96 flex-shrink-0">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-10 lg:sticky lg:top-24 border-2 border-yellow-400/40 shadow-2xl">
              <h3 className="text-3xl font-black text-yellow-400 mb-8 flex items-center gap-3">
                <Trophy className="w-6 h-6" />
                Teams
              </h3>

              <div className="space-y-4">
                <button
                  onClick={() => setSelectedSection('organizing')}
                  className={`w-full px-8 py-5 rounded-2xl font-black text-lg text-left transition-all ${
                    selectedSection === 'organizing'
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900'
                      : 'bg-gray-700/40 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Organizing Committee
                </button>

                <button
                  onClick={() => setSelectedSection('web')}
                  className={`w-full px-8 py-5 rounded-2xl font-black text-lg text-left transition-all ${
                    selectedSection === 'web'
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-gray-900'
                      : 'bg-gray-700/40 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Website Team
                </button>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="flex-1">
            {selectedSection === 'organizing' && (
              <section>
                <div className="text-center mb-16">
                  <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-bounce-slow" />
                  <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    ORGANIZING COMMITTEE
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
                </div>

                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-12 perspective-1000 overflow-visible">
                  {teamData.coreCommittee.map((member) => (
                    <div
                      key={member.id}
                      className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-10 min-h-[460px] border-2 border-yellow-400/50 hover:border-yellow-400 transition-transform duration-500 hover:scale-[1.04] hover:-translate-y-2 relative"
                    >
                      <div className="absolute top-0 right-0 p-3">
                        <Star className="w-6 h-6 text-yellow-400 animate-olympic-pulse" />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-orange-500/0 group-hover:from-yellow-400/10 group-hover:to-orange-500/10 transition-all duration-300"></div>

                      <div className="relative z-10">
                        <div className="relative w-40 h-40 mx-auto mb-8 overflow-hidden rounded-full">
                          <div className="w-40 h-40 olympic-gold rounded-full flex items-center justify-center text-gray-900 text-4xl font-black overflow-hidden shadow-2xl border-4 border-white">
                            {member.photo ? (
                              <img
                                src={member.photo}
                                alt={member.name}
                                className="object-cover w-full h-full rounded-full"
                              />
                            ) : (
                              member.name.charAt(0)
                            )}
                          </div>
                          {member.instagram && (
                            <button
                              onClick={() => handleInstagramClick(member.instagram)}
                              className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                              aria-label="View Instagram profile"
                            >
                              <Instagram className="w-12 h-12 text-pink-500 animate-float" />
                            </button>
                          )}
                        </div>

                        <h3 className="text-3xl font-black text-center text-white mb-4">
                          {member.name.toUpperCase()}
                        </h3>

                        <div className="space-y-3 text-sm">
                          <div className="glass-morphism rounded-xl p-4 flex items-center gap-4">
                            <div className="p-2 bg-blue-500 rounded-lg">
                              <Phone className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-300 font-semibold">{member.contact}</span>
                          </div>
                          <div className="glass-morphism rounded-lg p-4 flex items-center gap-4">
                            <div className="p-2 bg-orange-500 rounded-lg">
                              <Mail className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-300 font-semibold break-all">{member.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {selectedSection === 'web' && (
              <section>
                <div className="text-center mb-16">
                  <Star className="w-16 h-16 mx-auto mb-6 text-green-400 animate-bounce-slow" />
                  <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    DIGITAL ARCHITECTS
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
                  {teamData.webTeam.map((member) => (
                    <div
                      key={member.id}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 border-2 border-green-400/50 hover:border-green-400 transition-all relative"
                    >
                      <div className="absolute top-0 right-0 p-3">
                        <Star className="w-6 h-6 text-green-400 animate-olympic-pulse" />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-emerald-500/0 hover:from-green-400/10 hover:to-emerald-500/10 transition-all"></div>

                      <div className="relative z-10">
                        <div className="relative w-32 h-32 mx-auto mb-6 group">
                          <div className="w-32 h-32 olympic-bronze rounded-full flex items-center justify-center text-gray-900 text-4xl font-black overflow-hidden shadow-2xl border-4 border-white">
                            {member.photo ? (
                              <img
                                src={member.photo}
                                alt={member.name}
                                className="object-cover w-full h-full rounded-full"
                              />
                            ) : (
                              member.name.charAt(0)
                            )}
                          </div>
                          {member.instagram && (
                            <button
                              onClick={() => handleInstagramClick(member.instagram)}
                              className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                              aria-label="View Instagram profile"
                            >
                              <Instagram className="w-12 h-12 text-pink-500 animate-float" />
                            </button>
                          )}
                        </div>

                        <h3 className="text-2xl font-black text-center text-white mb-3">
                          {member.name.toUpperCase()}
                        </h3>

                        {member.contact && (
                          <div className="glass-morphism rounded-lg p-3 flex items-center justify-center gap-3">
                            <div className="p-2 bg-green-500 rounded-lg">
                              <Mail className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-300 font-semibold">{member.contact}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        <div className="mt-20 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 opacity-90"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="relative z-10 p-12 text-white text-center">
            <Crown className="w-20 h-20 mx-auto mb-6 text-yellow-300 animate-bounce-slow" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              JOIN THE WINNING TEAM
            </h2>
            <p className="text-2xl font-bold">
              Contact any member for questions, suggestions, or support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;