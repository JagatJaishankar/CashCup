import Link from "next/link";

export default function MatchCard({ match }) {
  const isLive = match.status === "live";
  const isCompleted = match.status === "completed";

  return (
    <div className="card bg-base-200 shadow-lg border-2 border-base-300 hover:border-primary transition-all">
      <div className="card-body p-4">
        {/* Status Badge */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-helvetica text-gray-400">{match.tournament}</span>
          {isLive && (
            <span className="badge badge-error text-white font-righteous animate-pulse">
              LIVE
            </span>
          )}
          {isCompleted && (
            <span className="badge badge-neutral font-helvetica text-xs">
              Full Time
            </span>
          )}
        </div>

        {/* Teams and Score */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
          {/* Home Team */}
          <div className="text-right">
            <h3 className="font-righteous text-lg text-white">{match.homeTeam}</h3>
          </div>

          {/* Score */}
          <div className="bg-black text-primary px-6 py-3 rounded-lg min-w-[100px] text-center border-2 border-primary">
            <div className="font-righteous text-3xl">
              {match.homeScore !== undefined ? match.homeScore : "-"}
              {" : "}
              {match.awayScore !== undefined ? match.awayScore : "-"}
            </div>
          </div>

          {/* Away Team */}
          <div className="text-left">
            <h3 className="font-righteous text-lg text-white">{match.awayTeam}</h3>
          </div>
        </div>

        {/* Match Info */}
        <div className="text-center mt-2 font-helvetica text-sm text-gray-400">
          <p>{match.date} • {match.time}</p>
          {match.venue && <p className="text-xs text-gray-500">{match.venue}</p>}
        </div>
      </div>
    </div>
  );
}
