// @ts-nocheck
import { Alert } from "@heroui/react";
import { fetchNotification } from "@/app/lib/dashboard-fetch";
import {
  PlusIcon,
  SyringeIcon,
  DropIcon,
  ExerciseIcon,
  MonitorPressureIcon,
  BloodPressureIcon,
  CarbsIcon,
  CaloriesIcon,
  CholestrolIcon,
  MedicationIcon
} from "@/app/ui/icons";
import { AlertContainert } from "@/app/ui/reminders/reminder-alert-items/reminder-alert-progress";
import { BellAlertIcon } from "@heroicons/react/20/solid";

export default async function ReminderAlert() {
  const data = await fetchNotification();

  return (
    <div className="flex flex-col gap-4 md:col-span-4 mx-4  ">
      <div className="bg-slate-300 rounded-md  md:px-2 py-2 shadow-xl  mb-4 border-[#292f46]  ">
        <h1 className="text-2xl pb-2">Today</h1>
        {/*Alerts*/}
        <AlertContainert data={data} />
      </div>
    </div>
  );
}
