import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export interface ChartDataProps {
  labels: string[];
  values: number[];
}

export interface ChartComponentProps {
  data: ChartDataProps;
  title: string;
}

// Chart colors
export const chartColors = {
  primary: "#4BC0C0",
  secondary: "#36A2EB",
  primaryLight: "rgba(75, 192, 192, 0.2)",
  secondaryLight: "rgba(54, 162, 235, 0.2)"
};

// Line Chart specific functions
export const createLineChartOptions = (
  title: string
): ChartOptions<"line"> => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: title,
      font: {
        size: 16,
        weight: "bold"
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
});

export const createLineChartData = (
  data: ChartDataProps,
  title: string
): ChartData<"line"> => ({
  labels: data.labels,
  datasets: [
    {
      label: title,
      data: data.values,
      borderColor: chartColors.primary,
      backgroundColor: chartColors.primaryLight,
      fill: true,
      tension: 0.4,
      borderWidth: 2
    }
  ]
});

// Bar Chart specific functions
export const createBarChartOptions = (title: string): ChartOptions<"bar"> => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: title,
      font: {
        size: 16,
        weight: "bold"
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
});

export const createBarChartData = (
  data: ChartDataProps,
  title: string
): ChartData<"bar"> => ({
  labels: data.labels,
  datasets: [
    {
      label: title,
      data: data.values,
      backgroundColor: chartColors.secondary,
      borderColor: chartColors.secondary,
      borderWidth: 1
    }
  ]
});
