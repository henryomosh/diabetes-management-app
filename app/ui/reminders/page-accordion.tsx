import RemindersAccordion from "@/app/ui/reminders/accordion";
import { FetchGlucose } from "@/app/lib/dashboard-fetch";

export default async function PageAccordion() {
  const data = await FetchGlucose();
  // console.log(data);

  return (
    <>
      <RemindersAccordion data={data} />
    </>
  );
}
