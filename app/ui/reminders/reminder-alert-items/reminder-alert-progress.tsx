"use client";

import { Progress } from "@heroui/react";
import { BellAlertIcon } from "@heroicons/react/20/solid";

export function AlertContainert({ data }: { data?: any }) {
  const labels = [
    {
      name: "Glucose",
      sum: data[0][0].sum ? (data[0][0].sum / 34) * 100 : 0,
      level:
        data[0][0].sum < 4
          ? "low"
          : data[0][0].sum > 4 && data[0][0].sum < 10
          ? "normal"
          : "high"
    },
    {
      name: "Insulin",
      sum: data[1][0].sum ?? 0,
      level:
        data[0][0].sum < 4
          ? "low"
          : data[0][0].sum > 4 && data[0][0].sum < 10
          ? "normal"
          : "high"
    },
    {
      name: "Blood Pressure",
      sum: data[2][0].sum ? (data[2][0].sum / 200) * 100 : 0
    },
    { name: "Hba1C", sum: data[3][0].sum ?? 0 },
    { name: "Carbs", sum: data[4][0].sum ? (data[4][0].sum / 275) * 100 : 0 },
    { name: "Protein", sum: data[5][0].sum ? (data[5][0].sum / 400) * 100 : 0 },
    {
      name: "Cholestrol",
      sum: data[6][0].sum ? (data[6][0].sum / 200) * 100 : 0
    },
    { name: "Exercise", sum: data[7][0].sum ? (data[7][0].sum / 800) * 100 : 0 }
  ];

  return (
    <>
      {labels.map((label, index) => (
        <div
          className="flex justify-between items-center mb-4 border-b-2  py-2 px-2"
          key={index}
        >
          <div className="flex row">
            <div className="flex items-center justify-center">
              {
                <BellAlertIcon className="h-8 w-8 text-indigo-700 fill-indigo-900" />
              }
            </div>
            <div className=" pl-2">
              <p className="text-md  ">{label.name}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full max-w-md px-4">
            <Progress
              classNames={{
                track: "drop-shadow-md border border-default bg-indigo-700"
              }}
              color="warning"
              aria-label="Loading..."
              size="md"
              value={label.sum}
              className="max-w-md"
              showValueLabel={true}
              label={`${label.name}  last 24hrs`}
            />
          </div>
        </div>
      ))}
    </>
  );
}
