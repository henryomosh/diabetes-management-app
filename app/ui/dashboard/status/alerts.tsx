// @ts-nocheck
import { Alert } from "@heroui/react";
import { fetchAlertToday, fetchOtherdays } from "@/app/lib/dashboard-fetch";
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
} from "../../icons";

export default async function StatusAlert() {
  const today = await fetchAlertToday();
  const others = await fetchOtherdays();
  const labels = {
    hba1c: <MonitorPressureIcon className=" h-8 w-8  fill-blue-700 " />,
    bp: <BloodPressureIcon className="h-8 w-8   fill-cyan-700" />,
    carbs: <CarbsIcon className="h-8 w-8  fill-amber-700" />,
    protein: <CaloriesIcon className=" h-8 w-8 fill-orange-700" />,
    cholestrol: <CholestrolIcon className="h-8 w-8 fill-teal-700" />,
    glucose: <DropIcon className="h-8 w-8 fill-yellow-700" />,
    insulin: <SyringeIcon className="h-8 w-8 fill-green-700" />,
    execise: <ExerciseIcon className="h-8 w-8 fill-pink-700" />
  };

  return (
    <div className="flex flex-col gap-4  pb-12 mb-12">
      <div className="bg-slate-300 rounded-md  px-4 md:px-2 py-2 shadow-xl  mb-4 border-[#292f46]   ">
        <h1 className="text-2xl pb-2">
          <strong>Today</strong>
        </h1>
        {/*Alerts Today*/}
        <div className="h-full md:overflow-y-auto">
          <p className={`px-6 py-6 ${today.length > 0 ? "hidden" : ""}`}>
            {today.length > 0 ? "h" : "No data today"}
          </p>
          {today.map((data, index) => (
            <div
              className="flex justify-between items-center mb-4 "
              key={index}
            >
              <div className="flex row">
                <div className="flex items-center justify-center">
                  {labels[data.label]}
                </div>
                <div className="flex flex-col pl-2">
                  <p className="text-sm  ">{data.name}</p>

                  <p className="text-xs ">
                    {data.time.split(":").slice(0, -1).join(":")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-end">
                <p className="text-xl  ">{data.amount}</p>
                <p className="text-xs pt-2 px-1">{data.units}</p>
              </div>
            </div>
          ))}
          <h1 className="text-2xl pb-2">
            <strong>Others</strong>
          </h1>
          {others.map((other, index) => (
            <div
              className="flex justify-between items-center mb-4 "
              key={index}
            >
              <div className="flex row">
                <div className="flex items-center justify-center">
                  {labels[other.label]}
                </div>
                <div className="flex flex-col pl-2">
                  <p className="text-sm  ">{other.name}</p>
                  <p className="text-xs ">
                    {other.date.toLocaleString().split(",")[0]}
                  </p>
                  <p className="text-xs ">{other.time}</p>
                </div>
              </div>
              <div className="flex flex-row justify-end">
                <p className="text-xl  ">{other.amount}</p>
                <p className="text-xs pt-2 px-1">{other.units}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
