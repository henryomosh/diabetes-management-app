import { Card } from "@/app/ui/dashboard/cards";
import { Suspense } from "react";
import Overview from "@/app/ui/dashboard/overview/overview";
import DoughnutChart from "@/app/ui/dashboard/overview/donut-chart";
import PatientCard from "@/app/ui/dashboard/overview/patient/patient-card";
import {
  fetchChartGlucose,
  fetchChartInsulin,
  fetchChartMeal
} from "@/app/lib/dashboard-fetch2";
import {
  OverviewSkeleton,
  PatientSkeleton
} from "@/app/ui/dashboard-skeletons";

export default async function Page() {
  const data = await fetchChartGlucose();
  const data2 = await fetchChartInsulin();
  const data3 = await fetchChartMeal();
  return (
    <main>
      <div className="mt-0 grid grid-cols-1 gap-0 md:grid-cols-4 lg:grid-cols-8 ">
        <Suspense fallback={<PatientSkeleton />}>
          <PatientCard />
        </Suspense>
        <Suspense fallback={<OverviewSkeleton />}>
          <Overview data={data} data2={data2} data3={data3} />
        </Suspense>
      </div>
    </main>
  );
}
