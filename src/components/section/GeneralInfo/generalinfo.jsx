export default function GeneralInfo({ data }) {
  if (!data) return null;
  console.log(data);
  return (
    <div className="w-full pt-8 pb-4 relative">
      <div className="health-info flex flex-col gap-1.5">
        <h2 className="card-heading">{data.app_name}</h2>
        <span className="card-label muted-2">{data.team_name}</span>
      </div>
    </div>
  );
}
