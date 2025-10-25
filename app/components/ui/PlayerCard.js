import Link from "next/link";
import Image from "next/image";

export default function PlayerCard({ player }) {
  return (
    <Link href={`/players/${player.id}`}>
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-base-300 hover:border-primary group">
        <figure className="relative h-64 bg-black overflow-hidden">
          {player.image ? (
            <Image
              src={player.image}
              alt={player.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-black">
              <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          )}
          <div className="absolute top-2 right-2 badge badge-primary font-righteous text-black">
            {player.position}
          </div>
        </figure>
        <div className="card-body p-4">
          <h3 className="card-title font-righteous text-lg text-white">{player.name}</h3>
          <p className="text-sm font-helvetica text-gray-400">{player.team || "Free Agent"}</p>

          <div className="grid grid-cols-3 gap-2 mt-2 text-center">
            <div>
              <p className="text-xs text-gray-500 font-helvetica">Goals</p>
              <p className="font-righteous text-primary">{player.goals || 0}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-helvetica">Assists</p>
              <p className="font-righteous text-primary">{player.assists || 0}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-helvetica">Matches</p>
              <p className="font-righteous text-primary">{player.matches || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
