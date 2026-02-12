export default function StatCard({ label, value, icon, trend }) {
  return (
    <div className="bg-base-100 border border-base-300 p-5 hover:border-primary transition-all">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-body text-sm text-neutral/50">{label}</p>
          <p className="font-heading text-3xl text-secondary mt-1">{value}</p>
          {trend && (
            <p className="font-body text-xs text-neutral/40 mt-2">{trend}</p>
          )}
        </div>
        {icon && (
          <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              {icon}
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
