import Link from "next/link";
import Image from "next/image";

export default function TeamCard({ team }) {
  return (
    <Link href={`/teams/${team.id}`}>
      <div className="bg-base-100 border border-base-300 hover:border-primary transition-all group">
        <div className="relative h-44 bg-base-200 overflow-hidden flex items-center justify-center">
          {team.logo ? (
            <Image
              src={team.logo}
              alt={team.name}
              width={100}
              height={100}
              className="object-contain group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-20 h-20 bg-secondary flex items-center justify-center font-heading text-3xl text-white">
              {team.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-heading text-lg text-secondary group-hover:text-primary transition-colors">{team.name}</h3>
          <p className="text-sm font-body text-neutral/50 mt-1">{team.manager || "No Manager"}</p>

          <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-base-300">
            <div className="text-center">
              <p className="text-xs text-neutral/40 font-body">Players</p>
              <p className="font-heading text-lg text-secondary">{team.playerCount || 0}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-neutral/40 font-body">Wins</p>
              <p className="font-heading text-lg text-secondary">{team.wins || 0}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-neutral/40 font-body">Trophies</p>
              <p className="font-heading text-lg text-secondary">{team.trophies || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
