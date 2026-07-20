import { toPng } from "html-to-image";
import jsPDF from "jspdf";

const exportPDF = async (elementId) => {
  try {
    const element = document.getElementById(elementId);

    if (!element) {
      alert("Review section not found!");
      return;
    }

    const dataUrl = await toPng(element, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(dataUrl);

    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save("AI_Code_Review_Report.pdf");
  } catch (error) {
    console.error(error);
    alert("Failed to generate PDF");
  }
};

export default exportPDF;