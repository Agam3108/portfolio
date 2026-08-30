import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Resume() {
  // Support external PDF URLs via VITE_RESUME_PDF_URL env variable,
  // falling back to local file path if it doesn't start with http.
  const rawPdfUrl = import.meta.env.VITE_RESUME_PDF_URL || "/Agam_Resume.pdf"
  let pdfUrl = rawPdfUrl.startsWith("http")
    ? rawPdfUrl
    : new URL(rawPdfUrl, window.location.origin).href

  // Google Drive links require the /preview endpoint instead of /view in an iframe
  // to avoid third-party cookie blocking and "Access Denied" issues.
  if (pdfUrl.includes("drive.google.com") && pdfUrl.includes("/view")) {
    pdfUrl = pdfUrl.replace(/\/view.*/, "/preview")
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8 animate-in slide-in-from-bottom-8 duration-700 flex flex-col items-center">
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold font-heading">Resume</h1>
          <p className="text-lg text-muted-foreground mt-2">View or download my resume.</p>
        </div>
        
        <Button asChild>
          <a href={pdfUrl} download="My_Resume.pdf" target="_blank" rel="noreferrer">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="w-full bg-card/50 backdrop-blur border rounded-xl overflow-hidden flex flex-col p-2 h-[800px] relative">
        {/* Native PDF Viewer using iframe */}
        <iframe
          src={`${pdfUrl}#view=FitH`}
          className="w-full h-full rounded-lg bg-background border-0"
          title="Resume PDF"
        />
      </div>
    </div>
  )
}
