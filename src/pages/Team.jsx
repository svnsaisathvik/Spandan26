import { Mail, Phone } from 'lucide-react';
import { teamData } from '../data/teamData';

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Team</h1>
          <p className="text-xl md:text-2xl">
            Meet the people making SPANDAN 2026 possible
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Core Committee
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.coreCommittee.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
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
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-center text-orange-600 font-semibold mb-4">
                  {member.role}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-500" />
                    <span>{member.contact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-orange-500" />
                    <span className="break-all">{member.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Sports Coordinators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.sportsCoordinators.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-orange-300 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
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
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-center text-orange-600 font-semibold mb-1">
                  {member.role}
                </p>
                <p className="text-center text-gray-500 text-sm">
                  {member.sport}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Web & Design Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {teamData.webTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
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
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-center text-orange-600 font-semibold mb-4">
                  {member.role}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span>{member.contact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to Get Involved?
          </h2>
          <p className="text-lg">
            Contact any team member for questions, suggestions, or support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
