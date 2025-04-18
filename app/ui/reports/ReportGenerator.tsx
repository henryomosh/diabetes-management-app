"use client";

import { useState, useRef } from "react";
import { PDFService } from "@/app/lib/pdf-service";
import LineChart from "./charts/LineChart";
import BarChart from "./charts/BarChart";
import { ChartDataProps } from "@/app/lib/chart-utils";

export default function ReportGenerator({
  glucoseData,
  insulinD
}: {
  glucoseData?: any;
  insulinD?: any;
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const chartsRef = useRef<HTMLDivElement>(null);

  console.log(glucoseData);

  const sampleData: {
    glucose: ChartDataProps;
    insulin: ChartDataProps;
  } = {
    glucose: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [
        glucoseData[1],
        glucoseData[2],
        glucoseData[3],
        glucoseData[4],
        glucoseData[5],
        glucoseData[6],
        glucoseData[0]
      ]
    },
    insulin: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [
        insulinD[1],
        insulinD[2],
        insulinD[3],
        insulinD[4],
        insulinD[5],
        insulinD[6],
        insulinD[0]
      ]
    }
  };

  const handleGenerateReport = async () => {
    try {
      setIsGenerating(true);

      if (!chartsRef.current) {
        throw new Error("Charts container not found");
      }

      const charts = Array.from(chartsRef.current.children) as HTMLElement[];

      const reportData = {
        title: "Weekly Health Report",
        date: new Date().toLocaleDateString(),
        charts,
        tableData: {
          headers: ["Day", "Glucose Level", "Insulin Dosage"],
          rows: sampleData.glucose.labels.map((day, index) => [
            day,
            sampleData.glucose.values[index].toString(),
            sampleData.insulin.values[index].toString()
          ])
        }
      };

      await PDFService.saveReport(reportData, "health-report.pdf");
    } catch (error) {
      console.error("Error generating report:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6 overflow-auto pb-12 " style={{ height: "30rem" }}>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Health Report</h2>
        <button
          onClick={handleGenerateReport}
          disabled={isGenerating}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isGenerating ? "Generating..." : "Generate PDF Report"}
        </button>
      </div>

      <div ref={chartsRef} className="space-y-6 pb-12">
        <LineChart data={sampleData.glucose} title="Weekly Glucose Levels" />
        <BarChart data={sampleData.insulin} title="Weekly Insulin Dosage" />
      </div>
    </div>
  );
}
