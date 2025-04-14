import { Card } from "@/app/ui/dashboard/cards";

import Overview from "@/app/ui/dashboard/overview/overview";
import DoughnutChart from "@/app/ui/dashboard/overview/donut-chart";
import PatientCard from "@/app/ui/dashboard/overview/patient/patient-card";

export default async function Page() {
  return (
    <main>
      <div className="mt-0 grid grid-cols-1 gap-0 md:grid-cols-4 lg:grid-cols-8 ">
        <PatientCard />
        <Overview />
      </div>
    </main>
  );
}
// checking
