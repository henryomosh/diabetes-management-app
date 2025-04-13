import Statistics from "@/app/ui/dashboard/status/statistics";
import { fechLatestOther } from "@/app/lib/dashboard-fetch";

export default async function PageStatistics() {
  const others = await fechLatestOther();

  return (
    <>
      <Statistics other={others} />
    </>
  );
}
