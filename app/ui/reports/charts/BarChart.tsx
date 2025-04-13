"use client";

import { Bar } from "react-chartjs-2";
import {
  createBarChartOptions,
  createBarChartData,
  ChartComponentProps
} from "@/app/lib/chart-utils";

export default function BarChart({ data, title }: ChartComponentProps) {
  const chartData = createBarChartData(data, title);
  const options = createBarChartOptions(title);

  return (
    <div className="w-full h-[300px] p-4 bg-white rounded-lg shadow">
      <Bar data={chartData} options={options} />
    </div>
  );
}
