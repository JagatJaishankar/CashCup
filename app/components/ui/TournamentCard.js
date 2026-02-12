import Link from "next/link";

export default function TournamentCard({ tournament }) {
  const statusStyles = {
    upcoming: "bg-info/10 text-info",
    registration: "bg-success/10 text-success",
    ongoing: "bg-warning/10 text-warning",
    completed: "bg-base-200 text-neutral/60"
  };

  return (
    <Link href={`/events/${tournament.id}`}>
      <div className="bg-base-100 border border-base-300 hover:border-primary transition-all group">
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-heading text-lg text-secondary group-hover:text-primary transition-colors">
              {tournament.name}
            </h3>
            <span className={`px-2 py-1 text-xs font-heading uppercase tracking-wide ${statusStyles[tournament.status]}`}>
              {tournament.status}
            </span>
          </div>

          <p className="font-body text-sm text-neutral/60 mb-5 leading-relaxed">{tournament.description}</p>

          <div className="border-t border-base-300 pt-5">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <p className="text-xs text-neutral/40 font-body mb-1">Start Date</p>
                <p className="font-heading text-sm text-secondary">{tournament.startDate}</p>
              </div>
              <div>
                <p className="text-xs text-neutral/40 font-body mb-1">Prize Pool</p>
                <p className="font-heading text-sm text-primary">{tournament.prizePool}</p>
              </div>
              <div>
                <p className="text-xs text-neutral/40 font-body mb-1">Teams</p>
                <p className="font-heading text-sm text-secondary">{tournament.teamsRegistered}/{tournament.maxTeams}</p>
              </div>
              <div>
                <p className="text-xs text-neutral/40 font-body mb-1">Entry Fee</p>
                <p className="font-heading text-sm text-secondary">{tournament.entryFee}</p>
              </div>
            </div>
          </div>

          {tournament.status === "registration" && (
            <button className="btn btn-primary btn-sm mt-5 w-full font-heading text-xs tracking-wider">
              Register Now
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
