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

import ProgressBar from "./progress-bar";

export default function Statistics({ other }: { other?: any }) {
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
  let others = [
    [other[0][0] ?? { amount: 0, units: "nil", name: "Glucose" }],
    [other[1][0] ?? { amount: 0, units: "nil", name: "Insulin" }],
    [other[2][0] ?? { amount: 0, units: "nil", name: "Hba1c" }],
    [other[3][0] ?? { amount: 0, units: "nil", name: "Blood Pressure" }]
  ];

  return (
    <div className="flex w-full flex-col px-2 bg-slate-300  rounded-md  md:px-2 py-4 shadow-xl mx-2">
      <div className="flex justify-between items-center ">
        <h2 className="text-lg font-bold">Latest Stats</h2>
      </div>
      <div className="grid grid-cols-8 ">
        <div className="flex  grid grid-rows-2 gap-2 col-span-2">
          <div className=" py-2">
            <div className="flex ">
              <span className=" ">
                <DropIcon className="h-6 w-6 fill-yellow-700" />
              </span>{" "}
              <p>
                <strong className="font-1000 text-xl">
                  {others[0][0].amount}
                </strong>{" "}
                <span className="text-xs">{others[0][0].units}</span>
              </p>
            </div>
            <p className="text-xs pl-8 ">{others[0][0].name}</p>
          </div>
          <div className="">
            <div className="flex ">
              <span className="">
                <SyringeIcon className="h-6 w-6 fill-green-700" />
              </span>{" "}
              <p>
                <strong className="font-1000 text-xl">
                  {others[1][0].amount}
                </strong>{" "}
                <span className="text-xs">{others[1][0].units}</span>
              </p>
            </div>
            <p className="text-xs pl-8 ">{others[1][0].name}</p>
          </div>
        </div>
        {/* Next grid*/}
        <div className="col-span-4">
          <ProgressBar other={other} />
        </div>
        <div className="flex justify-end grid grid-rows-2 gap-2 col-span-2 ">
          <div className=" py-2 ">
            <div className="flex ">
              <span className="px-1">
                <MonitorPressureIcon className="h-6 w-6 fill-blue-700" />
              </span>{" "}
              <p>
                <strong className="font-1000 text-xl">
                  {" "}
                  {others[2][0].amount}
                </strong>{" "}
                <span className="text-xs">{others[2][0].units}</span>
              </p>
            </div>
            <p className="text-xs pl-8 ">Hba1c</p>
          </div>
          <div className=" py-2">
            <div className="flex ">
              <span className="px-1 ">
                <BloodPressureIcon className="h-6 w-6 fill-cyan-700" />
              </span>{" "}
              <p>
                <strong className="font-1000 text-xl">
                  {" "}
                  {others[3][0].amount}
                </strong>{" "}
                <span className="text-xs">{others[3][0].units}</span>
              </p>
            </div>
            <p className="text-xs pl-8 ">{others[3][0].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
