import { jsPDF } from "jspdf";
import "jspdf-autotable";
import html2canvas from "html2canvas";

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface ReportData {
  title: string;
  date: string;
  charts: HTMLElement[];
  tableData?: TableData;
}

export interface ChartImageOptions {
  quality?: number;
  scale?: number;
}

export class PDFService {
  private static readonly PAGE_WIDTH = 210;
  private static readonly PAGE_MARGIN = 20;
  private static readonly CONTENT_WIDTH =
    PDFService.PAGE_WIDTH - 2 * PDFService.PAGE_MARGIN;
  private static async elementToImage(
    element: HTMLElement,
    options: ChartImageOptions = {}
  ): Promise<string> {
    try {
      const canvas = await html2canvas(element, {
        scale: options.scale || 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff"
      });
      return canvas.toDataURL("image/png", options.quality || 1.0);
    } catch (error) {
      console.error("Error converting element to image:", error);
      throw new Error("Failed to convert chart to image");
    }
  }

  private static addHeader(pdf: jsPDF, title: string, date: string): number {
    pdf.setFontSize(20);
    pdf.setFont("helvetica", "bold");
    pdf.text(title, PDFService.PAGE_MARGIN, 20);

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pdf.text(`Generated on: ${date}`, PDFService.PAGE_MARGIN, 30);

    return 40; // Return next Y position
  }

  public static async generateReport(data: ReportData): Promise<jsPDF> {
    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      let yOffset = this.addHeader(pdf, data.title, data.date);

      // Process charts
      for (const chartElement of data.charts) {
        try {
          const imgData = await this.elementToImage(chartElement, {
            scale: 2,
            quality: 0.95
          });

          // Check if new page is needed
          if (yOffset > 250) {
            pdf.addPage();
            yOffset = PDFService.PAGE_MARGIN;
          }

          // Add chart image
          pdf.addImage(
            imgData,
            "PNG",
            PDFService.PAGE_MARGIN,
            yOffset,
            PDFService.CONTENT_WIDTH,
            100
          );
          yOffset += 110;
        } catch (error) {
          console.error("Error processing chart:", error);
          pdf.setTextColor(255, 0, 0);
          pdf.text(
            "Error: Failed to generate chart",
            PDFService.PAGE_MARGIN,
            yOffset
          );
          pdf.setTextColor(0, 0, 0);
          yOffset += 20;
        }
      }

      // Add table if present
      if (data.tableData) {
        if (yOffset > 200) {
          pdf.addPage();
          yOffset = PDFService.PAGE_MARGIN;
        }

        (pdf as any).autoTable({
          head: [data.tableData.headers],
          body: data.tableData.rows,
          startY: yOffset,
          margin: { left: PDFService.PAGE_MARGIN },
          styles: {
            fontSize: 10,
            cellPadding: 5,
            overflow: "linebreak",
            cellWidth: "auto"
          },
          headStyles: {
            fillColor: [75, 192, 192],
            textColor: 255,
            fontStyle: "bold"
          },
          columnStyles: {
            0: { cellWidth: 30 }, // First column width
            1: { cellWidth: "auto" } // Other columns auto width
          },
          didDrawPage: (data: { pageNumber: number; pageCount: number }) => {
            // Add page number at the bottom
            pdf.setFontSize(10);
            pdf.text(
              `Page ${data.pageNumber} of ${data.pageCount}`,
              pdf.internal.pageSize.width / 2,
              pdf.internal.pageSize.height - 10,
              { align: "center" }
            );
          }
        });
      }

      return pdf;
    } catch (error) {
      console.error("Error generating PDF:", error);
      throw new Error(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred while generating the PDF"
      );
    }
  }

  public static async saveReport(
    data: ReportData,
    filename: string
  ): Promise<void> {
    try {
      const pdf = await this.generateReport(data);
      pdf.save(filename);
    } catch (error) {
      console.error("Error saving PDF:", error);
      throw new Error("Failed to save PDF report");
    }
  }
}
