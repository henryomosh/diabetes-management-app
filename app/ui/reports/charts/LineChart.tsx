"use client";

import { Line } from "react-chartjs-2";
import {
  createLineChartOptions,
  createLineChartData,
  ChartComponentProps
} from "@/app/lib/chart-utils";

export default function LineChart({ data, title }: ChartComponentProps) {
  const chartData = createLineChartData(data, title);
  const options = createLineChartOptions(title);

  return (
    <div className="w-full h-[300px] p-4 bg-white rounded-lg shadow">
      <Line data={chartData} options={options} />
    </div>
  );
}
