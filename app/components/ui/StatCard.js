export default function StatCard({ label, value, icon, trend }) {
  return (
    <div className="stat bg-base-200 rounded-lg shadow-lg border-2 border-base-300 hover:border-primary transition-all">
      <div className="stat-figure text-primary">
        {icon && (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        )}
      </div>
      <div className="stat-title font-helvetica text-gray-400">{label}</div>
      <div className="stat-value font-righteous text-primary">{value}</div>
      {trend && (
        <div className="stat-desc font-helvetica text-xs text-gray-500">{trend}</div>
      )}
    </div>
  );
}
