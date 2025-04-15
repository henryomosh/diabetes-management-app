import { Card } from "@/app/ui/dashboard/cards";

import Overview from "@/app/ui/dashboard/overview/overview";
import DoughnutChart from "@/app/ui/dashboard/overview/donut-chart";
import PatientCard from "@/app/ui/dashboard/overview/patient/patient-card";
import PageAccordion from "@/app/ui/reminders/page-accordion";
import ReminderAlert from "@/app/ui/reminders/reminder-alert";
import { ContentLeft } from "@/app/ui/dashboard/status/content-left";
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton
} from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main>
      <div
        className="mt-0 grid grid-cols-1 gap-0 md:grid-cols-4 lg:grid-cols-8  overflow-y-auto"
        style={{ maxHeight: "20%" }}
      >
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <PageAccordion />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <ReminderAlert />
        </Suspense>
      </div>
    </main>
  );
}
