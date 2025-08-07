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
        className={`label py-1 px-4 ${
          alertClasses[name] || ""
        } flex items-center gap-1 flex-1 rounded-sm`}
      >
        <span className={`${iconClasses[name] || ""}`}>{icon}</span>
        <span className="font-bold label">{errCount}</span>
        <span className="capitalize label">{name}</span>
      </div>
    </>
  );
};
