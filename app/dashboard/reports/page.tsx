import ReportGenerator from "@/app/ui/reports/ReportGenerator";
import {
  fetchChartGlucose,
  fetchChartInsulin
} from "@/app/lib/dashboard-fetch";

export default async function ReportsPage() {
  const Glucosedata = await fetchChartGlucose();
  const insulinData = await fetchChartInsulin();

  return (
    <main className="p-6 overflow-y-auto">
      <ReportGenerator glucoseData={Glucosedata} insulinD={insulinData} />
    </main>
  );
}
