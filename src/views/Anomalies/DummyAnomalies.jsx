import AnomaliesTable from "../../components/Tables/anomaliestable";

export default function AnomaliesView() {
  return (
    <>
      <div className="bg-white mt-6 border border-gray-200 p-8 rounded-md flex flex-col gap-6 w-full">
        <AnomaliesTable />
      </div>
    </>
  );
}
