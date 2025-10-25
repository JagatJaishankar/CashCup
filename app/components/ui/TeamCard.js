import Link from "next/link";
import Image from "next/image";

export default function TeamCard({ team }) {
  return (
    <Link href={`/teams/${team.id}`}>
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-base-300 hover:border-primary group">
        <figure className="relative h-48 bg-black overflow-hidden">
          {team.logo ? (
            <Image
              src={team.logo}
              alt={team.name}
              width={120}
              height={120}
              className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center font-righteous text-4xl text-black">
                {team.name.charAt(0)}
              </div>
            </div>
          )}
        </figure>
        <div className="card-body p-4">
          <h3 className="card-title font-righteous text-lg text-white">{team.name}</h3>
          <p className="text-sm font-helvetica text-gray-400">{team.manager || "No Manager"}</p>

          <div className="grid grid-cols-3 gap-2 mt-2 text-center">
            <div>
              <p className="text-xs text-gray-500 font-helvetica">Players</p>
              <p className="font-righteous text-primary">{team.playerCount || 0}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-helvetica">Wins</p>
              <p className="font-righteous text-primary">{team.wins || 0}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-helvetica">Trophies</p>
              <p className="font-righteous text-primary">{team.trophies || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
