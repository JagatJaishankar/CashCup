"use client";

import Link from "next/link";

export default function ContractsPage() {
  const contracts = [
    {
      id: 1,
      team: "Strike Force",
      startDate: "Jan 1, 2024",
      endDate: "Dec 31, 2024",
      status: "active",
      salary: "5,000 SAR/month",
      signed: true,
      signedDate: "Dec 28, 2023"
    },
    {
      id: 2,
      team: "Thunder FC",
      startDate: "Jan 1, 2023",
      endDate: "Dec 31, 2023",
      status: "expired",
      salary: "4,000 SAR/month",
      signed: true,
      signedDate: "Dec 20, 2022"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <section className="bg-base-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/dashboard" className="btn btn-ghost btn-sm text-primary mb-4 font-body">
            ← Back to Dashboard
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl text-primary uppercase">
            MY CONTRACTS
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-6">
          {contracts.map(contract => (
            <div key={contract.id} className="bg-base-100 border border-base-300 hover:border-primary transition-all p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-heading text-2xl text-secondary uppercase">{contract.team}</h3>
                    <span className={`badge ${contract.status === 'active' ? 'badge-success' : 'badge-neutral'}`}>
                      {contract.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-body">
                    <div>
                      <p className="text-neutral/60 text-sm">Contract Period</p>
                      <p className="text-secondary">{contract.startDate} - {contract.endDate}</p>
                    </div>
                    <div>
                      <p className="text-neutral/60 text-sm">Salary</p>
                      <p className="text-primary font-heading">{contract.salary}</p>
                    </div>
                    <div>
                      <p className="text-neutral/60 text-sm">Signed Date</p>
                      <p className="text-secondary">{contract.signedDate}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {contract.status === 'active' ? (
                    <>
                      <button className="btn btn-sm btn-outline btn-primary font-heading uppercase">
                        View Contract
                      </button>
                      <button className="btn btn-sm btn-outline text-error hover:bg-error hover:text-white font-heading uppercase">
                        Request Transfer
                      </button>
                    </>
                  ) : (
                    <button className="btn btn-sm btn-outline btn-primary font-heading uppercase">
                      View Contract
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {contracts.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-24 h-24 mx-auto text-neutral/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
            </svg>
            <h3 className="font-heading text-2xl text-secondary uppercase mb-2">No Contracts</h3>
            <p className="font-body text-neutral/60">You don't have any contracts yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
