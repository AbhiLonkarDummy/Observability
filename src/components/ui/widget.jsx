export default function Widget({ title, value, percentage, isPositive, icon }) {
  return (
    <div className="widget-card relative p-4 rounded-lg border bg-[#F9FAFB]">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium text-[var(--text-muted-1)]">
              {title}
            </div>
            {/* Need to add an icon here */}
            {/* {icon} */}
          </div>
          <div className="text-3xl font-semibold text-[var(--primary-text-color)]">
            {value}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div
            className="text-xs font-medium inline-block px-2 py-1 rounded-md text-center"
            style={{
              minWidth: "72px", // adjust as needed
              backgroundColor: isPositive
                ? "var(--positive-alert-bg)"
                : "var(--high-alert-bg)",
              color: isPositive
                ? "var(--positive-alert-text)"
                : "var(--high-alert-text)",
            }}
          >
            {isPositive ? "▲" : "▼"} {Math.abs(Number(percentage))}%
          </div>

          <p className="text-sm font-medium text-[var(--text-muted-2)]">
            {isPositive ? "Up" : "Down"} from yesterday
          </p>
        </div>
      </div>
    </div>
  );
}
