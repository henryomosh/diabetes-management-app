"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const chartData = {
  glucose: {
    labels: ["Normal: 2", "Low: 1", "High: 2", "Hyper: 0"],
    datasets: [
      {
        label: "Glucose Overview",
        data: [40, 20, 40, 0],
        backgroundColor: ["#04B71D", "#3e83d9", "#F48A2A", "#E30613"],
        borderColor: ["#04B71D", "#3e83d9", "#F48A2A", "#E30613"],
        borderWidth: 1
      }
    ]
  },
  insulin: {
    labels: ["Bolus: 6.0", "Basal: 0.0", "Correction: 1.3"],
    datasets: [
      {
        label: "Daily insulin average",
        data: [81.8, , 12.2, 0],
        backgroundColor: ["#558ba2", "#ff882e", "#00ffff"],
        borderColor: ["#558ba2", "#ff882e", "#00ffff"],
        borderWidth: 1
      }
    ]
  },
  meal: {
    labels: ["Carbs: 250.6", "Prots: 2.4", "Fats: 25.0"],
    datasets: [
      {
        label: "Daily meal average",
        data: [85, 10, 5],
        backgroundColor: ["#7fb288", "#faa972", "#cf77b2"],
        borderColor: ["#7fb288", "#faa972", "#cf77b2"],
        borderWidth: 1
      }
    ]
  }
};

export default function DoughnutChartWrapper() {
  return (
    <>
      <DoughnutChart
        title="Glucose Overview"
        value={chartData.glucose}
        units="6.7 mmol/L"
      />
      <DoughnutChart
        title="Daily Insulin Average"
        value={chartData.insulin}
        units="6.00 units"
      />
      <DoughnutChart
        title="Daily Meal Average"
        value={chartData.meal}
        units="807 cal"
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
