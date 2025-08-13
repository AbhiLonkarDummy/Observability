export const Label = ({ name, icon, errCount }) => {
  const alertClasses = {
    low: "low-level-alert",
    med: "med-level-alert",
    high: "high-level-alert",
  };

  const iconClasses = {
    low: "low-level-alert-icon",
    med: "med-level-alert-icon",
    high: "high-level-alert-icon",
  };

  return (
    <>
      <div
        className={`label py-0.5 px-2.5 ${
          alertClasses[name] || ""
        } flex items-center justify-center gap-1 flex-1 rounded-[4px]`}
      >
        <span
          className={`${iconClasses[name] || ""}`}
          style={{ fontSize: "12px", lineHeight: "1" }}
        >
          {icon}
        </span>
        <span className="font-bold label">
          {errCount}
        </span>
        <span className="capitalize label">
          {name}
        </span>
      </div>
    </>
  );
};
