import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"

declare global {
  interface Window {
    AdobeDC: any
  }
}

export default function Resume() {
  const [loading, setLoading] = useState(true)

  // We use the local Agam_Resume.pdf file from the public folder. 
  // Adobe API requires an absolute URL, so we construct it using window.location.origin
  const pdfUrl = new URL("/Agam_Resume.pdf", window.location.origin).href
  const clientId = import.meta.env.VITE_ADOBE_CLIENT_ID || ""

  useEffect(() => {
    // Inject the Adobe SDK script if it's not already present
    if (!document.getElementById("adobe-dc-view-sdk")) {
      const script = document.createElement("script")
      script.id = "adobe-dc-view-sdk"
      script.src = "https://acrobatservices.adobe.com/view-sdk/viewer.js"
      script.async = true
      document.body.appendChild(script)
    }

    const loadPDF = () => {
      if (window.AdobeDC) {
        const adobeDCView = new window.AdobeDC.View({
          clientId: clientId,
          divId: "adobe-dc-view"
        })
        adobeDCView.previewFile({
          content: { location: { url: pdfUrl } },
          metaData: { fileName: "My_Resume.pdf" }
        }, {
          embedMode: "SIZED_CONTAINER"
        })
        setLoading(false)
      }
    }

    if (window.AdobeDC) {
      loadPDF()
    } else {
      document.addEventListener("adobe_dc_view_sdk.ready", loadPDF)
    }

    return () => {
      document.removeEventListener("adobe_dc_view_sdk.ready", loadPDF)
    }
  }, [pdfUrl, clientId])

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

      <div className="w-full bg-card/50 backdrop-blur border rounded-xl overflow-hidden flex flex-col p-2 min-h-[600px] relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10 rounded-xl">
             <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        
        {/* Adobe PDF Viewer Container */}
        <div id="adobe-dc-view" className="w-full h-[800px] rounded-lg" />
      </div>
    </div>
  )
}
