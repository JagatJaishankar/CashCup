import Link from "next/link";
import Image from "next/image";

export default function PlayerCard({ player }) {
  return (
    <Link href={`/players/${player.id}`}>
      <div className="bg-base-100 border border-base-300 hover:border-primary transition-all group">
        <div className="relative h-56 bg-base-200 overflow-hidden">
          {player.image ? (
            <Image
              src={player.image}
              alt={player.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-20 h-20 text-neutral/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          )}
          <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-white text-xs font-heading">
            {player.position}
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-heading text-lg text-secondary group-hover:text-primary transition-colors">{player.name}</h3>
          <p className="text-sm font-body text-neutral/50 mt-1">{player.team || "Free Agent"}</p>

          <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-base-300">
            <div className="text-center">
              <p className="text-xs text-neutral/40 font-body">Goals</p>
              <p className="font-heading text-lg text-secondary">{player.goals || 0}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-neutral/40 font-body">Assists</p>
              <p className="font-heading text-lg text-secondary">{player.assists || 0}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-neutral/40 font-body">Matches</p>
              <p className="font-heading text-lg text-secondary">{player.matches || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
