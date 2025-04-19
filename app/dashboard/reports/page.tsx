import ReportGenerator from "@/app/ui/reports/ReportGenerator";
import {
  fetchChartGlucose,
  fetchChartInsulin
} from "@/app/lib/dashboard-fetch";
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton
} from "@/app/ui/skeletons";
import {
  OverviewSkeleton,
  PatientSkeleton
} from "@/app/ui/dashboard-skeletons";
import { Suspense } from "react";

export default async function ReportsPage() {
  const Glucosedata = await fetchChartGlucose();
  const insulinData = await fetchChartInsulin();

  return (
    <main className="p-6 overflow-y-auto">
      <Suspense fallback={<OverviewSkeleton />}>
        <ReportGenerator glucoseData={Glucosedata} insulinD={insulinData} />
      </Suspense>
    </main>
  );
}
