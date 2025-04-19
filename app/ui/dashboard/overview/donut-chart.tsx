"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChartWrapper({
  data,
  data2,
  data3
}: {
  data?: any;
  data2?: any;
  data3?: any;
}) {
  const chartData = {
    glucose: {
      labels: ["Normal", "Low", "High"],
      datasets: [
        {
          label: "Glucose Overview",
          data: data,
          backgroundColor: ["#04B71D", "#F48A2A", "#e3394d"],
          borderColor: ["#04B71D", "#F48A2A", "#e3394d"],
          borderWidth: 1
        }
      ]
    },
    insulin: {
      labels: [
        `Bolus: ${data2[0] / 10}`,
        `Basal:  ${(60 * 0.55) / 4}`,
        "Correction: 1.3"
      ],
      datasets: [
        {
          label: "Daily insulin average",
          data: [data2[0] / 10, (60 * 0.55) / 4, 0],
          backgroundColor: ["#558ba2", "#ff882e", "#00ffff"],
          borderColor: ["#558ba2", "#ff882e", "#00ffff"],
          borderWidth: 1
        }
      ]
    },
    meal: {
      labels: [
        `Carbs: ${(data3[0] / 7).toFixed(1)} grams`,
        `Prots: ${(data3[1] / 7).toFixed(1)} grams`,
        `Cholestrol: ${(data3[2] / 7).toFixed(1)} grams`
      ],
      datasets: [
        {
          label: "Daily meal average",
          data: [data3[0] / 7, data3[1] / 7, data[2] / 7],
          backgroundColor: ["#7fb288", "#faa972", "#cf77b2"],
          borderColor: ["#7fb288", "#faa972", "#cf77b2"],
          borderWidth: 1
        }
      ]
    }
  };

  return (
    <>
      <DoughnutChart
        title="Glucose Overview"
        value={chartData.glucose}
        units={`${((data[0] + data[1] + data[2]) / 7).toFixed(1)} mmol/L`}
      />
      <DoughnutChart
        title="Daily Insulin Average"
        value={chartData.insulin}
        units={`${data2[1]}: units`}
      />
      <DoughnutChart
        title="Daily Meal Average"
        value={chartData.meal}
        units={`${((data3[0] + data3[1] + data3[2]) / 7).toFixed(1)} cal`}
      />
    </>
  );
}

export function DoughnutChart({
  title,
  value,
  units
}: {
  title: string;
  value: any;
  units: string;
}) {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-center text-justify text-md">{title}</h1>
      </div>
      <Doughnut data={value} />
      <div className="flex justify-center">
        <p className="text-center py-2">{units}</p>
      </div>
    </div>
  );
}
// 010 culture afro beats mix by dj james
