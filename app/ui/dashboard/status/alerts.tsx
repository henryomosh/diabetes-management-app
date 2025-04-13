// @ts-nocheck
import { Alert } from "@heroui/react";
import { fetchOtherData } from "@/app/lib/dashboard-fetch";
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
  const others = await fetchOtherData();
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
    <div className="flex flex-col gap-4  ">
      <div className="bg-slate-300 rounded-md  md:px-2 py-2 shadow-xl  mb-4 border-[#292f46]  ">
        <h1 className="text-2xl pb-2">Today</h1>
        {/*Alerts*/}
        {others.map((other, index) => (
          <div className="flex justify-between items-center mb-4" key={index}>
            <div className="flex row">
              <div className="flex items-center justify-center">
                {labels[other.label]}
              </div>
              <div className="flex flex-col pl-2">
                <p className="text-sm  ">{other.name}</p>
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
  );
}
