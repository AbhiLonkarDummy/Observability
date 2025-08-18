import AnalyticsPieChart from "../../components/Charts/AnalyticsPieChart/AnalyticsPieChart";
import AnomalyAreaChart from "../../components/Charts/AreaChart/AreaChart";
import Guage from "../../components/Charts/Guage/Guage";
export default function AnalyticsView() {
  return (
    <>
      <div className="bg-white mt-6 border border-gray-200 p-8 rounded-md flex flex-col gap-6 w-full">
        <h2 className="text-xl font-semibold">Analytics</h2>

        {/* Fixed Grid Layout */}
        <div className="grid grid-cols-3 gap-4 w-full">
          {/* Row 1: 3 columns */}
          <div className="col-span-1">
            <AnalyticsPieChart low={10} medium={20} high={9} />
          </div>
          <div className="col-span-1">
            <Guage value={80}></Guage>
          </div>
          <div className="col-span-1">
            <div className="bg-gray-50 border rounded-md p-4 h-full flex items-center justify-center">
              Widget 3
            </div>
          </div>

          {/* Row 2: full width */}
          <div className="col-span-3">
            <AnomalyAreaChart />
          </div>

          {/* Row 3: full width */}
          <div className="col-span-3">
            <div className="bg-gray-50 border rounded-md p-6">
              Row 3 Widget (full width)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
