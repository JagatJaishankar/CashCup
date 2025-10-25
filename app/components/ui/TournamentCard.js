import Link from "next/link";

export default function TournamentCard({ tournament }) {
  const statusColors = {
    upcoming: "badge-info",
    registration: "badge-success",
    ongoing: "badge-warning",
    completed: "badge-neutral"
  };

  return (
    <Link href={`/events/${tournament.id}`}>
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-base-300 hover:border-primary group">
        <div className="card-body">
          <div className="flex justify-between items-start">
            <h3 className="card-title font-righteous text-xl text-white group-hover:text-primary transition-colors">
              {tournament.name}
            </h3>
            <span className={`badge ${statusColors[tournament.status]} font-helvetica text-xs uppercase`}>
              {tournament.status}
            </span>
          </div>

          <p className="font-helvetica text-gray-400">{tournament.description}</p>

          <div className="divider my-2"></div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 font-helvetica">Start Date</p>
              <p className="font-righteous text-primary">{tournament.startDate}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-helvetica">Prize Pool</p>
              <p className="font-righteous text-primary">{tournament.prizePool}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-helvetica">Teams</p>
              <p className="font-righteous text-white">{tournament.teamsRegistered}/{tournament.maxTeams}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-helvetica">Entry Fee</p>
              <p className="font-righteous text-white">{tournament.entryFee}</p>
            </div>
          </div>

          {tournament.status === "registration" && (
            <button className="btn btn-primary btn-sm mt-4 font-righteous">
              Register Now
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
