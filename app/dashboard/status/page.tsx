import PageSta from "@/app/ui/dashboard/status/statistics";
import { Content } from "@/app/ui/dashboard/status/popover";
import { ContentLeft } from "@/app/ui/dashboard/status/content-left";
import StatusAlert from "@/app/ui/dashboard/status/alerts";
import { Suspense } from "react";
import PageStatistics from "@/app/ui/dashboard/status/page-statistics";
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton
} from "@/app/ui/skeletons";

export default function Stats() {
  return (
    <main>
      <div className="mt-0 grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-2 ">
        <div className=" ">
          <div className="">
            <Suspense fallback={<CardsSkeleton />}>
              <ContentLeft />
            </Suspense>
          </div>
          <div className="mb-4">
            <Suspense fallback={<LatestInvoicesSkeleton />}>
              <PageStatistics />
            </Suspense>
          </div>
        </div>
        <div className="  md:pl-4 pl-2 pr-1 ">
          <Suspense fallback={<RevenueChartSkeleton />}>
            <StatusAlert />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
