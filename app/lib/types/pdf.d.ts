import { jsPDF } from "jspdf";

declare module "jspdf-autotable" {
  interface UserOptions {
    head?: any[][];
    body?: any[][];
    startY?: number;
    margin?: { left?: number; right?: number; top?: number; bottom?: number };
    styles?: {
      fontSize?: number;
      cellPadding?: number;
      overflow?: string;
      cellWidth?: string | number;
      font?: string;
      fontStyle?: string;
    };
    headStyles?: {
      fillColor?: number[];
      textColor?: number;
      fontStyle?: string;
    };
    columnStyles?: {
      [key: number]: { cellWidth: string | number };
    };
    didDrawPage?: (data: {
      pageNumber: number;
      pageCount: number;
      settings: any;
    }) => void;
  }

  interface AutoTableOutput {
    previous: any;
    finalY: number;
    pageNumber: number;
    pageCount: number;
  }

  function autoTable(doc: jsPDF, options: UserOptions): AutoTableOutput;
}
