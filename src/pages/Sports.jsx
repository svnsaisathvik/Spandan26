import { useState } from 'react';
import { ExternalLink, Users, Trophy, Medal, Flame, Star, Target, ChevronRight, Search } from 'lucide-react';
import { sportsData } from '../data/sportsData';

const Sports = () => {
  const [selectedCategory, setSelectedCategory] = useState('major');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'major', name: 'Major Sports', icon: Trophy },
    { id: 'minor', name: 'Minor Sports', icon: Medal },
    { id: 'esports', name: 'Esports', icon: Star }
  ];

  const medalColors = [
    'from-yellow-400 to-yellow-600',
    'from-gray-300 to-gray-500',
    'from-orange-400 to-orange-600',
    'from-blue-400 to-blue-600',
    'from-green-400 to-green-600',
    'from-red-400 to-red-600',
    'from-purple-400 to-purple-600',
    'from-cyan-400 to-cyan-600',
  ];

  const filteredSports = sportsData.filter(sport => {
    const matchesCategory = sport.category === selectedCategory;
    const matchesSearch = sport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sport.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full opacity-10 blur-3xl animate-float"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center gap-4 mb-8 mt-12">
            <Medal className="w-16 h-16 text-yellow-400 animate-bounce-slow" />
            <Flame className="w-16 h-16 text-orange-500 animate-float" />
            <Star
              className="w-16 h-16 text-blue-400 animate-bounce-slow"
              style={{ animationDelay: '1s' }}
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
            CHAMPIONSHIP EVENTS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl font-bold">
            Choose your discipline and claim your victory
          </p>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-96 xl:w-[28rem] flex-shrink-0">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-8 lg:sticky lg:top-24 border-2 border-cyan-500/30 shadow-2xl">
              <h2 className="text-3xl font-black text-cyan-400 mb-8 flex items-center gap-3">
                <Trophy className="w-6 h-6" />
                Categories
              </h2>
              
              <nav className="space-y-3">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.id;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between gap-4 px-6 py-5 rounded-2xl font-black text-lg transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6" />
                        <span>{category.name}</span>
                      </div>
                      {isActive && <ChevronRight className="w-5 h-5" />}
                    </button>
                  );
                })}
              </nav>

              {/* Premium Search Bar */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400 z-10" />
                    <input
                      type="text"
                      placeholder="Search events..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-14 pr-12 py-4 bg-gray-900/90 backdrop-blur-sm text-white text-base rounded-2xl border-2 border-cyan-500/50 focus:border-cyan-400 focus:outline-none transition-all placeholder-gray-400 font-semibold shadow-lg"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all font-bold text-sm"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-base text-gray-400 text-center">
                  Total Events: <span className="text-cyan-400 font-black text-lg">{filteredSports.length}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Sports Cards */}
          <div className="flex-1 w-full">
            <div className="mb-8">
              <h2 className="text-4xl font-black text-white mb-2">
                {categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
            </div>

            <div className="space-y-12">
              {filteredSports.map((sport, index) => (
                <div
                  key={sport.id}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden card-3d-hover border-2 border-gray-700 hover:border-yellow-400 transition-all animate-slide-up relative"
                >
                  <div className="absolute top-0 right-0 p-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${medalColors[index % medalColors.length]} flex items-center justify-center shadow-xl`}>
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="md:flex">
                    <div className={`md:w-1/3 bg-gradient-to-br ${medalColors[index % medalColors.length]} flex items-center justify-center p-12 relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                      </div>
                      <img
                        src={sport.image}
                        alt={sport.name}
                        className="object-contain h-48 w-48 rounded-2xl shadow-2xl bg-white p-4 animate-float relative z-10"
                      />
                    </div>

                    <div className="md:w-2/3 p-8 md:p-12">
                      <h2 className="text-4xl md:text-5xl font-black text-white mb-4 flex items-center gap-4">
                        {sport.name.toUpperCase()}
                        <Star className="w-8 h-8 text-yellow-400" />
                      </h2>
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        {sport.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-700/30 rounded-xl p-6 border-2 border-blue-500/30 hover:border-blue-500 transition-all">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-500 rounded-lg">
                              <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-black text-xl text-blue-400">TEAM SIZE</h3>
                          </div>
                          <p className="text-white text-lg font-bold">{sport.teamSize}</p>
                        </div>

                        <div className="bg-gray-700/30 rounded-xl p-6 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-yellow-500 rounded-lg">
                              <Trophy className="w-6 h-6 text-gray-900" />
                            </div>
                            <h3 className="font-black text-xl text-yellow-400">SPOC DETAILS</h3>
                          </div>
                          <p className="text-white text-lg font-bold">{sport.spocDetails || 'To be announced'}</p>
                        </div>
                      </div>

                      <div className="mb-8 bg-gray-700/30 rounded-xl p-6 border-2 border-gray-600">
                        <h3 className="font-black text-white mb-4 text-2xl flex items-center gap-2">
                          <Target className="w-6 h-6 text-orange-500" />
                          COMPETITION RULES
                        </h3>
                        <ul className="space-y-3">
                          {sport.rules.map((rule, ruleIndex) => (
                            <li
                              key={ruleIndex}
                              className="flex items-start gap-3 text-gray-300"
                            >
                              <span className="text-yellow-400 font-black text-xl mt-1">▸</span>
                              <span className="leading-relaxed">{rule}</span>
                            </li>
                          ))}
                        </ul>
                        {sport.rulesLink && (
                          <a
                            href={sport.rulesLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-black rounded-full shadow-lg hover:bg-yellow-500 transition-all"
                          >
                            Click Here for <span className="font-extrabold">COMPLETE RULES</span>
                          </a>
                        )}
                      </div>

                      <a
                        href={sport.registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all transform shadow-2xl"
                      >
                        <Trophy className="w-6 h-6" />
                        REGISTER FOR GLORY
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        {/* <div className="mt-20 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-yellow-600 to-red-600 opacity-90"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
          </div>
          <div className="relative z-10 p-12 text-white text-center">
            <Trophy className="w-20 h-20 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ARE YOU READY TO BECOME A CHAMPION?
            </h2>
            <p className="text-2xl mb-8 font-bold">
              Register for your discipline and write your legacy at SPANDAN 2026
            </p>
            <p className="text-lg opacity-90 font-semibold">
              Questions? Contact the Sports Secretary at sports@iiitb.ac.in
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sports;