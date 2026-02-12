import Link from "next/link";

export default function MatchCard({ match }) {
  const isLive = match.status === "live";
  const isCompleted = match.status === "completed";

  return (
    <div className="bg-base-100 border border-base-300 hover:border-primary transition-all">
      <div className="p-5">
        {/* Status Badge */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-body text-neutral/50 uppercase tracking-wide">{match.tournament}</span>
          {isLive && (
            <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-error/10 text-error text-xs font-heading">
              <span className="w-1.5 h-1.5 bg-error rounded-full animate-pulse"></span>
              Live
            </span>
          )}
          {isCompleted && (
            <span className="px-2 py-1 bg-base-200 text-neutral/60 text-xs font-body">
              Full Time
            </span>
          )}
        </div>

        {/* Teams and Score */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
          {/* Home Team */}
          <div className="text-right">
            <h3 className="font-heading text-base text-secondary">{match.homeTeam}</h3>
          </div>

          {/* Score */}
          <div className="bg-secondary text-white px-5 py-3 min-w-[90px] text-center">
            <div className="font-heading text-2xl tracking-wide">
              {match.homeScore !== undefined ? match.homeScore : "-"}
              <span className="text-white/40 mx-1">:</span>
              {match.awayScore !== undefined ? match.awayScore : "-"}
            </div>
          </div>

          {/* Away Team */}
          <div className="text-left">
            <h3 className="font-heading text-base text-secondary">{match.awayTeam}</h3>
          </div>
        </div>

        {/* Match Info */}
        <div className="text-center mt-4 font-body text-sm text-neutral/50">
          <p>{match.date} &middot; {match.time}</p>
          {match.venue && <p className="text-xs mt-1">{match.venue}</p>}
        </div>
      </div>
    </div>
  );
}
